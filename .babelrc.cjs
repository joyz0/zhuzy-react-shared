module.exports = {
  presets: [
    ['@babel/env', { targets: { browsers: ['ie >= 11'], node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    // don't use `loose` mode here - need to copy symbols when spreading
    '@babel/proposal-object-rest-spread',
  ],
}
