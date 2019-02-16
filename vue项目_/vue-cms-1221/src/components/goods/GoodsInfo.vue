<template>
  <div class="goodsinfo-container">

    <!-- 要实现动画的小球 -->
    <!-- 注意：钩子函数动画，这些钩子函数，都是通过事件绑定机制，绑定到 transition 元素上的 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="flag"></div>
    </transition>
    
    <!-- 轮播图区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotu="lunbotu" :imgname="'src'"></swiper>
					</div>
				</div>
			</div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
				<div class="mui-card-header">{{ goodsinfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：
              <span style="margin-right: 10px;"><del>￥{{ goodsinfo.market_price }}</del></span>
              销售价：
              <span style="font-size: 16px; color: red; font-weight: bold;">￥{{ goodsinfo.sell_price }}</span>
            </p>
            <p>
              购买数量：
              <!-- 注意： 这里 的 max 是库存量 -->
              <!-- 由于 goodsinfo 是通过 Ajax 动态获取回来的，但是，Ajax 是异步请求，需要消耗时间 -->
              <!-- 因此，可能会导致这样的情况： bobox 组件 先于 Ajax 渲染出来，此时， 组件被渲染的时候， goodsinfo 为 空对象，因此，传递到子组件中的 stock_quantity 是 undefined；  -->
              <nobox :max="goodsinfo.stock_quantity" @func="getSelectedCount"></nobox>
              <!-- <nobox :max="60"></nobox> -->
            </p>
            <div>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
            </div>
					</div>
				</div>
			</div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodsinfo.goods_no }}</p>
						<p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
						<p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer btnarea">
          <!-- <router-link :to="'/home/goodsdesc/' + goodsinfo.id">
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          </router-link> -->

          <!-- 使用编程式导航，来实现路由页面的跳转 -->
          <!-- 编程式导航：就是使用JS的代码的方式，来实现路由的跳转 -->
          <!-- 元素导航：使用 router-link 元素实现的导航 -->
          <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
        </div>
			</div>

  </div>
</template>

<script>
// 导入自己封装的轮播图组件
import swiper from "../sub-components/Swiper.vue";
// 导入 数字框组件
import nobox from "../sub-components/goodsinfo_nobox.vue";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      lunbotu: [], //商品的轮播图
      goodsinfo: {}, // 商品的详情
      flag: false, // 小球的显示与隐藏状态
      selectedCount: 1 // 用户选择的商品购买数量， 默认选中了一个商品
    };
  },
  created() {
    this.getlunbotu();
    this.getGoodsInfoById();
  },
  methods: {
    ...mapMutations(["addToCar"]),
    async getlunbotu() {
      // 获取轮播图的方法
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      if (data.status === 0) return (this.lunbotu = data.message);
    },
    async getGoodsInfoById() {
      // 根据ID获取商品的参数
      const { data } = await this.$http.get("/api/goods/getinfo/" + this.id);
      if (data.status === 0) return (this.goodsinfo = data.message[0]);
    },
    goDesc() {
      // 点击按钮，跳转到 商品的描述页面
      // 注意： 在 this 这个组件身上，有 this.$route 和 this.$router
      // this.$route 是专门用来获取路由中参数的；
      // this.$router 是专门来实现编程式导航的；
      this.$router.push("/home/goodsdesc/" + this.goodsinfo.id);
      // console.log(this);
    },
    goComment() {
      // 点击跳转到 评论页面
      // this.$router.push("/home/goodscomment/" + this.goodsinfo.id);
      this.$router.push({
        name: "goodscmt",
        params: { id: this.goodsinfo.id }
      });
    },
    addToCart() {
      // 点击加入购物车
      this.flag = !this.flag;
      // 调用 mutations 中的 addToCar
      /* this.$store.commit("addToCar", {
        id: this.id,
        count: this.selectedCount
      }); */
      // 直接调用 mapMutaions 中映射出来的方法
      this.addToCar({
        id: this.id,
        count: this.selectedCount,
        selected: true,
        price: this.goodsinfo.sell_price
      });
    },
    beforeEnter(el) {
      // 入场动画开始之前，设置小球的起始状态
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      // 入场动画结束之后，小球的终止状态
      //    transform：变换
      //    translate： 位移
      //    transition： 过渡效果
      el.offsetWidth;
      // 设置小球的入场动画终止状态

      // 动态获取小球的横纵坐标
      const ballPos = el.getBoundingClientRect();
      // 动态获取徽标的横纵坐标【注意：这里获取徽标的位置，和双向数据绑定没有任何关系，所以，可以直接使用普通的DOM操作】
      // DOM操作的优势：不论要操作的元素属于哪个组件，只要这个元素属于document，那么就能够直接获取到
      const badgePos = document.getElementById("badge").getBoundingClientRect();
      const left = badgePos.left - ballPos.left;
      const top = badgePos.top - ballPos.top;

      // 动态设置 top 和 left 值
      el.style.transform = "translate(" + left + "px, " + top + "px)";
      // 设置小球的过渡效果
      // 贝塞尔曲线在线生成器： http://cubic-bezier.com/#.46,-0.4,1,.49
      el.style.transition = "all .5s cubic-bezier(.46,-0.4,1,.49)";
      // 当入场动画完成之后，需要手动调用一下 done 回调函数，直接跳过小球的出场动画
      done();
    },
    afterEnter(el) {
      // 入场动画完成之后的回调函数
      this.flag = !this.flag;
    },
    getSelectedCount(c) {
      // 获取选择的商品的数量
      // console.log("父组件中拿到了传递过来的count值为：" + c);
      // 把 用户选择的最新的数量值，保存到 data 中，方便用户点击加入购物车按钮时候，把数量值同步到 徽标中
      this.selectedCount = c;
    }
  },
  props: ["id"],
  components: {
    // 注册子组件
    swiper,
    nobox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .btnarea {
    flex-direction: column;
    button + button {
      margin-top: 15px;
    }
  }
}

.ball {
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  // 让小球脱离标准流
  position: absolute;
  z-index: 99;
  left: 152px;
  top: 370px;
  // 将来小球要通过动画位移到的位置
  // transform: translate(87px, 250px);
}
</style>


// 分析小球动画有Bug的原因：
// 原因：就是因为 小球 入场动画的终点坐标，已经固定写死了！
// 解决问题的突破点：把小球 translate 时候的  横纵坐标，动态写活即可；
// 如何实现： 如何把 横纵坐标 动态获取呢？
//  + 先动态获取小球的横纵坐标
//  + 再动态获取徽标的横纵坐标
//  + 让 徽标的横纵坐标 - 小球的横纵坐标 等到的结果，就是小球要动态位移的距离；