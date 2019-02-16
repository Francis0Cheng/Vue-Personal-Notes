// 入口文件

import Vue from "vue/dist/vue.js" 
import App from "./App.vue"

// 导入vue-router模块
import VueRouter from "vue-router"
// 手动安装VueRouter
Vue.use(VueRouter)

// 导入MintUI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// // 安装到项目
// Vue.use(MintUI)

// 按需导入MintUI
import {Button} from 'mint-ui'
Vue.component(Button.name,Button)

//导入 Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 导入MUI
import "./lib/mui/css/mui.css"

import router from "./router.js"

// import account from "./main/Account.vue"
// import goodslist from "./main/Goodslist.vue"
// import login from "./sub/login.vue"
// import register from "./sub/register.vue"
// // 创建一个路由对象
// let router = new VueRouter({
//     routes:[
//         // acount goodlist
//         {path:'/account',component:account,children:[
//             {path:'login',component:login},
//             {path:'register',component:register},
//         ]},
//         {path:'/goodslist',component:goodslist},
//     ]
// })

let vm = new Vue({
    el:'#app',
    render:c => c(App),
    router,//将路由对象挂载在vm上
})
