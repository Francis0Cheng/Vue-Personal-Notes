//main.js是我们项目的JS入口文件

//1.导入Jquery
//由于ES6的代码太高级，浏览器解析不了



import $ from 'jquery'


import './css/index.css'
import './css/index.less'
 
import './css/index.scss'

/*  
    注意：webpack默认只能处理JS类型的文件
    如果要处理非JS类型的文件，我们需要手动安装一些第三方的loader加载器
    1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
    2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；
       在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的匹配和处理规则；
*/

$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})


/*
    webpack .\src\main.js  -o .\dist\bundle.js   -o 非常重要指定了输出文件
    经过刚才的演示，webpack可以做什么
    1. webpack可以处理JS文件的互相依赖关系
    2. webpack可以处理JS兼任的问题，把高级的浏览器不能识别的语法转为低级的，可以识别的语法    
*/



/* 
    使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
    1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
    2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
    3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
    4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
    5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
    6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.js
*/





/*
    1. 使用webpack-dev-server这个工具来实现自动打包编译功能
    2. 安装完毕后，这个工具的用法，和webpack命令的用法完全一样
    3. 由于我们在项目中安装，所以无法把它当作脚本命令在powershell中直接运行
    4. 注意：webpack-dev-server这个工具，如果想要正常运行，要求在本地项目中必须安装webpack
    5. webpack-dev-server 帮我们打包生成的bundle.js文件并没有存放到实际的物理磁盘上，
       而是直接托管到电脑的内存中，所以我们在项目根目录中根本找不到bundle.js；
    6. 我们可以认为，webpack-dev-server把打包好的文件，以一种虚拟的形式，托管到了我们项目的根目录中，
       虽然我们看不到它但是可以认为dist src node_mudules 平级， 有一个看不见的文件叫做bundle.js
*/



/*
     注意： webpack 处理第三方文件类型的过程：
    1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
    2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
    3. 在调用loader 的时候，是从后往前调用的；
    4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行打包合并，最终输出到bundle.js 中去
*/