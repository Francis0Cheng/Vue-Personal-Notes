<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="nobox" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// 导入 mui 从而支持 初始化 数字框
import mui from "../../../lib/mui/js/mui.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    // 当组件挂载到页面中之后，去初始化 数字框
    // console.log(this.max);
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      // 获取选择的商品数量
      const val = parseInt(this.$refs.nobox.value);
      // 调用 mutations 方法，更新数量
      this.updateGoodsCount({ id: this.id, count: val });
    },
    ...mapMutations(["updateGoodsCount"])
  },
  props: ["initcount", "id"]
};
</script>

<style lang="scss" scoped>

</style>
