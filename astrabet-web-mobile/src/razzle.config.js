const path = require('path')

const LoadableWebpackPlugin = require('@loadable/webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig

    if (opts.env.target === 'web') {
      const filename = path.resolve(__dirname, 'build')

      config.performance = {
        hints: false
      }
      config.plugins.push(
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename }
        })
      )
      config.plugins.push(new NodePolyfillPlugin())
    }

    return config
  }
}
