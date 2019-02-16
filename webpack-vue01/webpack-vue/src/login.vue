
<template>
    <div>
        <h1>
            这是登陆组件 使用.vue创建出来的 {{msg}}
        </h1>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: '拉拉啊了'
            };
        },
        methods: {
            show(){
                console.log('调用了login.vue中的show方法')
            }
        },
        created(){
            this.show()
        }
    }
</script>

<style>
    
</style>