<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">登录</router-link>   
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
/* 瀑普通的style标签只支持普通的样式，设置lang可设置样式语言 */
// scoped 表示只在组件中生效
    body{
        div{
            font-style: italic;
        }

    }
</style>
