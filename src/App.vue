<template>
  <div id="app">
    <sell-header :seller="seller"></sell-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import sellHeader from "./components/header/header";
import data from "../data.json";
// const ERROR_OK = 0;
export default {
  name: "App",
  data() {
    return {
      seller: {}
    };
  },
  components: {
    sellHeader
  },
  created() {
    // this.$http.get('https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller').then((response) => {
    // response = response.body;
    // if (ERROR_OK === response.errno) {
    this.seller = data.seller;
    // };
    // }, (response) => {

    // });
  }
};
</script>

<style lang="scss" scoped>
@import "./common/css/index";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tab {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(rgba(7, 17, 27, 0.1));
  .tab-item {
    flex: 1;
    text-align: center;
    a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
