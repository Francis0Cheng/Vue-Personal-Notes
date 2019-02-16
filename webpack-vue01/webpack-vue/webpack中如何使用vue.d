总结梳理： webpack 中如何使用 vue :
1. 安装vue的包：  cnpm i vue -S
2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D
3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'

4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style

5. 使用 import login from './login.vue' 导入这个组件
6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；