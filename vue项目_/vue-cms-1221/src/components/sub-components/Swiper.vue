<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in lunbotu" :key="i">
        <img :src="item[imgname]" alt="" :class="[ isfull ? 'img-full' : 'img-normal' ]">
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["lunbotu", "imgname", "isfull"] // 将来，谁使用这个 轮播图组件，就必须为其传递一个 lunbotu 的数组，同时，只能接收 img 属性的图片作为 轮播图展示出来
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;

  .mint-swipe-item {
    // 在父元素中，直接让子元素居中显示【图片：行内替换元素、span, a 行内元素、div, p 块级元素】
    text-align: center;
    .img-full {
      // 如果给图片应用了这个类，则图片的宽和高都是撑满父元素的
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .img-normal {
      // 如果给图片添加了这个类，则图片的高度 100%， 宽度是 自适应，横向的位置是居中显示
      height: 100%;
    }
  }
}
</style>
