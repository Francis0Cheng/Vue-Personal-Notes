// 路由文件

import VueRouter from "vue-router"
// Main
import account from "./main/Account.vue"
import goodslist from "./main/Goodslist.vue"
// sub
import login from "./sub/login.vue"
import register from "./sub/register.vue"

// 创建一个路由对象
let router = new VueRouter({
    routes:[
        // acount goodlist
        {path:'/account',component:account,children:[
            {path:'login',component:login},
            {path:'register',component:register},
        ]},
        {path:'/goodslist',component:goodslist},
    ]
})

export default router