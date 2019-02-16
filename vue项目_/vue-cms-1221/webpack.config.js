const path = require('path')
// 1. 导入 在内存中生成页面的webpack插件
const htmlWebpackPlugin = require('html-webpack-plugin')

// 使用Node语法，向外暴露配置对象，从而，让webpack运行的时候，加载指定的配置
// 为什么可以使用Node语法？因为 webpack 这个工具，就是基于node构建的；
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 项目的入口文件
  output: {
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 输出文件名
  }, // 打包好的文件的数据配置
  plugins: [ // 插件配置节点
    new htmlWebpackPlugin({ // 创建一个 htmlWebpackPlugin 的实例对象
      template: path.join(__dirname, './src/index.html'), // 指定模板页面路径
      filename: 'index.html' // 指定内存中生成的HTMl文件名称
    })
  ],
  module: { // 用来配置 非JS文件对应的loader的
    rules: [ // 就是这些 非 JS 文件 和 loader 之间的对应关系
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 创建处理 css 文件的 loader 匹配规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理less文件的规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置 处理 scss 文件的规则
      { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
      // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
      // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
      // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 添加转换JS文件的loader，其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
      { test: /\.vue$/, use: 'vue-loader' }, // 解析Vue组件的第三方loader
      { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 样式中字体文件路径的问题
    ]
  },
  resolve: {
    /* alias: { // 别名
      'vue$': 'vue/dist/vue.js'
    } */
  }
}