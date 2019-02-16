<template>
    <div>
        <h1>这是 App 组件</h1>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button> 
        <hr>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger" plain  icon="back" @click.native="handleClick">点击有提示</mt-button>
        <hr>
        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import {Toast}  from "mint-ui"
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            handleClick(){
                console.log("调用handleClick方法")
                Toast({
                    message:"这是Toast消息",
                    duration:5000,
                    position:'middle',
                    iconClass:'glyphicon glyphicon-heart',
                    className:'myicon',//自动以Toast样式
                })
            }
        }
    }
</script>

<style>
    .myicon .glyphicon{
        color: red !important;
    }
</style>