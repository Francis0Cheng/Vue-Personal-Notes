//如何在webpack

//在webpack中尝试使用Vue


//注意在webpack中使用import Vue from 'Vue'导入的Vue构造函数，功能并不完整，只提供了runtime-only的方式，并没有提供网页中的使用方式
// import Vue from '../node_modules/vue/dist/vue.js'

import Vue from 'vue'
/*
  回顾包的查找规则
  1. 找项目根目录中有没有node_mudules的文件夹
  2. 在node_modules中根据包名， 找对应的vue文件夹
  3. 在vue文件夹中找一个package.json的包配置文件查找main属性【main属性制定了这个包在被加载的时候的入口文件】
*/
import login from './login.vue'
// 默认 webpack无法打包vue文件， 需要安装相关的loader
// cnpm i vue-loader vue-template-compiler -D



// var login = {
//   template: '<h1>这是login组件，是用网页中的形式创建出来的</h1>'
// }
var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  methods: {

  },
  // components: {
  //   login
  // }
  /*
  render: function(createElements){
    //在webpack中如果想要通过vue把一个组件放到页面中展示， vm实例中render函数可以实现
    return createElements(login)
  }
  */
  render: c => c(login)
  
})

import m222, { title as title123, content } from './test.js'
console.log(m222)
console.log(title123 + ' --- ' + content)
