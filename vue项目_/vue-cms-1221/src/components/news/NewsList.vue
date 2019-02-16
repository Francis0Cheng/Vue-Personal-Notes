<template>
  <div>
    
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{ item.add_time | dateFormat }}</span>
                <span>点击：{{ item.click }}次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>

  </div>
</template>

<script>
export default {
  data() {
    // MVVM
    return {
      newslist: [] // 默认在页面中挂载一个空数组，表示 新闻列表
    };
  },
  created() {
    // 每当页面加载的时候，就获取数据
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      // 获取新闻列表
      const { data } = await this.$http.get("/api/getnewslist");
      // 如果获取数据成功，则把数据挂载到 data上
      if (data.status === 0) return (this.newslist = data.message);
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
