<template>
    <div>
        <h1>这是 登录 组件</h1>
        <mt-button type="danger" plain  icon="back" @click.native="handleClick">点击有提示</mt-button>
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

<style scoped>
    div{
        color:red;
    }
</style>