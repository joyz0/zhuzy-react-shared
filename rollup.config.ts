import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import type { Plugin, RollupOptions } from 'rollup'
import { defineConfig } from 'rollup'
import pkg from './package.json' assert { type: 'json' }

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return (id: string) => pattern.test(id)
}

const sharedNodeOptions = defineConfig({
  treeshake: {
    moduleSideEffects: 'no-external',
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false,
  },
  input: 'src/index.ts',
  onwarn(warning, warn) {
    if (warning.message.includes('Circular dependency')) {
      return
    }
    warn(warning)
  },
})

function createNodePlugins(
  isProduction: boolean,
  runtime: boolean,
): (Plugin | false)[] {
  return [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['rollup.config.ts', 'rollupLicensePlugin.ts'],
    }),
    commonjs({
      extensions: ['.js'],
    }),
    postcss({
      extract: true,
      // https://github.com/csstools/postcss-plugins/tree/main/plugins
      plugins: [autoprefixer, postcssNesting],
    }),
    runtime
      ? babel({
          plugins: [
            ['@babel/plugin-transform-runtime', { useESModules: true }],
          ],
          babelHelpers: 'runtime',
        })
      : babel({
          exclude: 'node_modules/**',
        }),
    isProduction && terser(),
  ]
}

function createNodeConfig(isProduction: boolean) {
  return defineConfig({
    ...sharedNodeOptions,
    output: {
      dir: './dist',
      entryFileNames: '[name].mjs',
      format: 'esm',
      exports: 'named',
    },
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
    plugins: createNodePlugins(isProduction, true),
  })
}

function createCjsConfig(isProduction: boolean) {
  return defineConfig({
    ...sharedNodeOptions,
    output: {
      dir: './dist',
      entryFileNames: '[name].cjs',
      format: 'cjs',
      exports: 'named',
    },
    external: makeExternalPredicate([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
    plugins: [...createNodePlugins(isProduction, true), bundleSizeLimit(120)],
  })
}

function createBrowserConfig(isProduction: boolean) {
  return defineConfig({
    ...sharedNodeOptions,
    output: {
      dir: './dist',
      entryFileNames: '[name].umd.js',
      format: 'umd',
      name: 'ZhuzyUtils',
      exports: 'named',
    },
    plugins: createNodePlugins(isProduction, false),
  })
}

export default (commandLineArgs: any): RollupOptions[] => {
  const isDev = commandLineArgs.watch
  const isProduction = !isDev

  return defineConfig([
    createNodeConfig(isProduction),
    createCjsConfig(isProduction),
    createBrowserConfig(isProduction),
  ])
}

/**
 * Guard the bundle size
 *
 * @param limit size in KB
 */
function bundleSizeLimit(limit: number): Plugin {
  return {
    name: 'bundle-limit',
    generateBundle(_options, bundle) {
      const size = Buffer.byteLength(
        Object.values(bundle)
          .map((i) => ('code' in i ? i.code : ''))
          .join(''),
        'utf-8',
      )
      const kb = size / 1024
      if (kb > limit) {
        throw new Error(
          `Bundle size exceeded ${limit}kb, current size is ${kb.toFixed(
            2,
          )}kb.`,
        )
      }
    },
  }
}
