/*
 * @Author: Arvin
 * @Date: 2018-11-01 11:21:33
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-08 11:04:13
 * webpack配置
 */
 const path = require('path')
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
 const CompressionWebpackPlugin = require('compression-webpack-plugin')
 // 路径别名
 const resovle = (dir) => {
  return path.join(__dirname, dir)
 }

 module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new CompressionWebpackPlugin({
        // asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  //  链式设置
  chainWebpack: config => {
    config
        .resolve  //  路径别名
          .alias
            .set('@', resovle('src/view'))
            .set('@echarts', resovle('node_modules/echarts/lib'))
  },
  //  本地服务
  devServer: {
    open: true
  }
 }


