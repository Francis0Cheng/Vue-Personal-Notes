// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

// 导入全局的配置模块，这个模块中的代码，和 main.js 中的 vm 实例，没有关系，只是 全局的 Vue 配置；
// 因此，抽离出去之后，可以让项目解构更加清晰
import './globalConfig.js'

// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入路由对象
import router from './router.js'

// 注册全局的组件
import testcom from '../test/02.test.vue'
// 这些全局注册的组件，在任何组件中，都可以使用 < 的形式引入到页面中
Vue.component('mytest', testcom)

// 导入状态管理对象
import store from './store.js'

// 导入 根组件
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router, // 挂载路由
  store // 挂载 store
})

// import '../test/03.数组的some方法.js'