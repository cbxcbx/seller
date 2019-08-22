<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li v-for="(item, index) in goods" :key="index" class="menu-item">
          <span class="name border-1px">
            <sellerIcon v-show="item.type > 0" :size="3" :index="item.type"></sellerIcon>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="food-list">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="(foods,index) in item.foods" :key="index">
              <div class="food-image">
                <img :src="foods.image" />
              </div>
              <div class="food-text">
                <h2 class="name">{{ foods.name }}</h2>
                <p class="desc">{{ foods.description }}</p>
                <div class="extra">
                  <span>月售{{ foods.sellCount }}份</span>
                  <span>好评率{{ foods.rating }}%</span>
                </div>
                <div class="price">
                  <span>￥{{foods.price}}</span>
                  <span v-show="foods.oldPrice">￥ {{foods.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sellerIcon from '../icon/icon';
const ERROR_OK = 0;
export default {
  prop: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (ERROR_OK === response.errno) {
        this.goods = response.data;
      };
    }, (response) => {

    });
  },
  components: {
    sellerIcon
  },

  methods: {}
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.goods {
  position: absolute;
  top: 174px;
  bottom: 48px;
  display: flex;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      line-height: 14px;
      .name {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
        color: rgb(240, 20, 20);
        @include border-1px(rgba(7, 17, 27, 0.2));
      }
    }
  }
  .goods-wrapper {
    flex: 1;
  }
}
</style>
