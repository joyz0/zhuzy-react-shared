import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  // setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  // transform: {
  //   '\\.[jt]sx?$': [
  //     'babel-jest',
  //     {
  //       presets: [
  //         [
  //           '@babel/env',
  //           {
  //             modules: 'auto',
  //             useBuiltIns: 'usage',
  //             corejs: 3,
  //           },
  //         ],
  //       ],
  //     },
  //   ],
  // },
}

export default config
