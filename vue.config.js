const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      echarts: 'echarts',
    },
  },
  chainWebpack: config => {
    // 开启图片压缩
    // config.module
    //   .rule('images')
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({ bypassOnDebug: true })
    //   .end()

    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }

      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false, //不删除源文件
          }),
        ],
      }
    }
  },
}
