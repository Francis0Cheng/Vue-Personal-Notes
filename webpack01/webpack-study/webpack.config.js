//由于webpack是基于Node进行构建的，所以webpack的配置文件中，任何合法的Node代码都是支持的
const path = require('path')
//启动热更新的第二步
const webpack = require('webpack')

//导入在内存中生成HTML页面的插件
//只要是插件，一定要放到plugins节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')

//这个配置文件，其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        //输出文件的相关配置
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        //配置dev-server命令参数的第二种形式，相对来说这种方式麻烦一些
        open: true, //自动打开浏览器
        port: 3000, //设置启动时候托管的目录
        contentBase: 'src', //指定托管的目录
        hot: true,   //启用热启动的第一步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //配置热启动的第三步

        /*
            1. 自动在内存中根据指定页面生成一个内存的页面
            2. 自动把打包好的bundle.js 追加到页面中去
        */
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html'   //指定生成页面的名称
        })
    ],
    module:{
        //这个节点用于配置所有第三方模块加载器
        rules: [
            //所有第三方模块的匹配规则
            {test: /\.css$/, use:['style-loader', 'css-loader']}, //配置.css文件的第三方loader规则
            {test: /\.less$/, use:['style-loader', 'css-loader' ,'less-loader']}, //配置处理.less文件的第三方loader规则 
            {test: /\.scss/, use:['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|gif|bng)$/, use:'url-loader?limit=50&name=[hash]-[name].[ext]'},   //处理图片路径的loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，
            // 大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
        ]   
    }
}


