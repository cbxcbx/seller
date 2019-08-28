<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-list">
        <li
          v-for="(item, index) in goods"
          :key="index"
          class="menu-item"
          :class="{'currentIndex': currentIndex === index}"
          @click="scrollToFoods(index,$event)"
        >
          <span class="name border-1px">
            <sellerIcon v-show="item.type > 0" :size="3" :index="item.type"></sellerIcon>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="food-list foods-scorll">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for="(foods,index) in item.foods" :key="index" class="food-item border-1px" @click="chooseFood(foods, $event)">
              <div class="food-image">
                <img :src="foods.icon" width="57" height="57" />
              </div>
              <div class="food-text">
                <h2 class="name">{{ foods.name }}</h2>
                <p class="desc">{{ foods.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ foods.sellCount }}份</span>
                  <span>好评率{{ foods.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{foods.price}}</span>
                  <span class="old" v-show="foods.oldPrice">￥ {{foods.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <!-- <cartControl v-on:cart-add="cartAdd" :food="foods"></cartControl> -->
                  <cartControl :food="foods"></cartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart ref="shopcart" :deliveryPrice="3" :minPrice="20" :selectFoods="selectFoods"></shop-cart>
    <food ref="foodDetail" :food="selectedFood"></food>
  </div>
</template>

<script type="text/ecmascript-6">
import sellerIcon from '../icon/icon';
import shopCart from '../shopcart/shopcart';
import cartControl from '../cartcontrol/cartcontrol';
import food from '../food/food';
import BScroll from 'better-scroll';
const ERROR_OK = 0;
export default {
  data() {
    return {
      goods: [],
      foodsHeightList: [],
      scrollY: 0,
      seller: {},
      selectedFood: {}
    };
  },
  created() {
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (ERROR_OK === response.errno) {
        this.goods = response.data;
        this.$nextTick(() => {
          this._initBScroll();
          this._calculateHeight();
        });
      };
    }, (response) => {

    });
  },
  components: {
    sellerIcon,
    shopCart,
    cartControl,
    food
  },

  methods: {
    _initBScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    scrollToFoods(index, e) {
      if (!e._constructed) {
        return;
      }
      let scrollList = this.$refs.foodsWrapper.getElementsByClassName('foods-scorll');
      let ele = scrollList[index];
      this.foodScroll.scrollToElement(ele, 300);
    },
    _calculateHeight() {
      let scrollList = this.$refs.foodsWrapper.getElementsByClassName('foods-scorll');
      let height = 0;
      this.foodsHeightList.push(height);
      for (let i = 0; i < scrollList.length; i++) {
        let item = scrollList[i];
        height += item.clientHeight;
        this.foodsHeightList.push(height);
      }
    },
    chooseFood(food, event) {
      if (!event._constructed) {
        return false;
      }
      this.selectedFood = food;
      this.$refs['foodDetail'].show();
    }
    // cartAdd(target) {
    //   this.$nextTick(() => {
    //     this.$refs['shopcart'].drop(target);
    //   });
    // }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.foodsHeightList.length; i++) {
        let Height1 = this.foodsHeightList[i];
        let Height2 = this.foodsHeightList[i + 1];
        if (!Height2 || (this.scrollY >= Height1 && this.scrollY < Height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  }
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
      &.currentIndex {
        position: relative;
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .food-list {
      .title {
        padding-left: 14px;
        font-size: 12px;
        color: rgb(147, 153, 159);
        height: 26px;
        line-height: 26px;
        background: #f3f5f7;
        border-left: 2px solid #d9dde1;
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        @include border-1px(rgba(7, 17, 27, 0.1));
        &:last-child {
          @include border-none;
          margin-bottom: 0;
        }
        .food-image {
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .food-text {
          flex: 1;
          .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .desc,
          .extra {
            font-size: 10px;
            line-height: 10px;
            color: rgb(147, 153, 159);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 12px;
          }
          .extra {
            .count {
              margin-right: 12px;
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
          }
          .cart-control-wrapper {
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        }
      }
    }
  }
}
</style>
