<template>
  <div>
    
    <!-- 商品列表区域 -->
    <div class="goods-list">

      <router-link tag="div" :to="'/home/goodsinfo/' + item.id" class="goods-item" v-for="item in goodslist" :key="item.id">
        <img :src="item.img_url" alt="">
        <h1 class="title">{{ item.title }}</h1>
        <div class="info">
          <p class="price">
            <span class="new">￥{{ item.sell_price }}</span>
            <span class="old">￥{{ item.market_price }}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{ item.stock_quantity }}件</span>
          </p>
        </div>
      </router-link>


      <mt-button type="danger" size="large" style="margin-top: 10px;" @click="getMore">加载更多</mt-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1, // 默认展示第一页的数据
      goodslist: [], // 商品列表
      isloaded: false // 节流阀，默认为false,表示没有加载完毕
    };
  },
  created() {
    this.getGoodsListByPage();
  },
  methods: {
    async getGoodsListByPage() {
      // 根据页码获取 商品列表
      const { data } = await this.$http.get(
        "/api/getgoods?pageindex=" + this.page
      );
      if (data.status === 0) {
        // 当获取到的 数组长度为0，表示数据已经加载完毕了
        if (data.message.length <= 0) {
          // 设置isloaded true,表示没有新数据了
          this.isloaded = true;
        }
        this.goodslist = this.goodslist.concat(data.message);
      }
    },
    getMore() {
      // 如果为true，表示数据已经加载完毕了，此时直接return
      if (this.isloaded) return;
      // 点击加载更多的商品
      this.page++;
      this.getGoodsListByPage();
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  // 设置父盒子为弹性盒模型
  display: flex;
  // 默认flex 布局的盒子，内部的子元素不会换行，可以使用下面的属性使其换行
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  padding-top: 0;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    margin-top: 7px;
    box-shadow: 0 0 7px #ccc;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      min-height: 170px;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      overflow: hidden;
      p {
        margin: 3px;
      }
      .price {
        .new {
          color: red;
          font-size: 16px;
          font-weight: bold;
          margin-right: 10px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
