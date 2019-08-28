<template>
  <div class="shop-cart-wrapper">
    <div class="shop-cart">
      <div class="content" @click="toggltList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount > 0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount > 0}"></i>
            </div>
            <div v-show="totalCount> 0" class="count">{{ totalCount }}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice > 0}">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right" @click.stop.prevent="gotoPay">
          <div class="pay" :class="payClass">{{ payDesc }}</div>
        </div>
      </div>
      <!-- <div class="ball-container">
      <transition
        name="drop"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
      >
        <div class="ball" v-show="balls.show">
          <span class="inner inner-hook"></span>
        </div>
      </transition>
      </div>-->
      <transition name="cartlist">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <div class="text">购物车</div>
            <div class="empty" @click="empty">清空</div>
          </div>
          <div class="list-content" ref="shopcartList">
            <ul>
              <li class="good" v-for="(food,index) in selectFoods" :key="index">
                <span class="foodname">{{ food.name }}</span>
                <span class="price">￥{{ food.count * food.price }}</span>
                <div class="cart-control-wrapper">
                  <cartControl :food="food"></cartControl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="list-bg">
      <div class="shop-list-bg" v-show="listShow" @click="closeMask"></div>
    </transition>
  </div>
</template>

<script>
import cartControl from '../cartcontrol/cartcontrol';
import BScroll from 'better-scroll';
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      balls: {
        show: false
      },
      dropballs: [],
      fold: true,
      listShow: false
    };
  },

  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(foods => {
        total += foods.price * foods.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(foods => {
        count += foods.count;
      });
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return '￥' + this.minPrice + '元起送';
      } else if (this.totalPrice > 0 && this.totalPrice < this.minPrice) {
        return '还差' + (this.minPrice - this.totalPrice) + '元起送';
      } else if (this.totalPrice >= this.minPrice) {
        return '去结算';
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough';
      } else {
        return 'enough';
      }
    }
  },
  watch: {
    totalCount() {
      if (!this.totalCount) {
        this.listShow = false;
        this.fold = true;
        return false;
      }
    },
    fold(newValue) {
      this.listShow = !newValue;
      if (!newValue) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.shopcartList, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
    }
  },
  components: {
    cartControl
  },
  methods: {
    drop(el) {
      let ball = this.balls;
      if (!ball.show) {
        ball.show = true;
        ball.el = el;
        this.dropballs.push(ball);
      }
    },
    beforeEnter: function (el, done) {
      let ball = this.balls;
      if (ball.show) {
        let rect = ball.el.getBoundingClientRect();
        let x = rect.left - 32;
        let y = window.innerHeight - rect.top - 22;
        el.style.display = '';
        el.style.webkitTransform = `translate3d(0, -${y}px, 0)`;
        el.style.transform = `translate3d(0, -${y}px, 0)`;
        el.style.transition = 'all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
        inner.style.transform = `translate3d(${x}px, 0, 0)`;
        inner.style.transition = 'all 0.4s linear';
      }
    },
    enter: function (el, done) {
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight;
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0, 0, 0)';
        el.style.transform = 'translate3d(0, 0, 0)';
        el.style.transition = 'all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0, 0, 0)';
        inner.style.transform = 'translate3d(0, 0, 0)';
        inner.style.transition = 'all 0.4s linear';
      });
      done();
    },
    afterEnter: function (el) {
      let ball = this.dropballs.shift();
      if (ball) {
        ball.show = false;
        el.style.display = 'none';
      }
    },
    toggltList() {
      if (!this.totalCount) {
        return false;
      } else {
        this.fold = !this.fold;
      }
    },
    empty() {
      this.selectFoods.forEach((food) => {
        food.count = 0;
      });
    },
    closeMask() {
      this.fold = true;
    },
    gotoPay() {
      window.alert(`你需要支付￥${this.totalPrice}元`);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.shop-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 48px;
  .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);
    .content-left {
      flex: 1;
      .logo-wrapper {
        position: relative;
        top: -10px;
        display: inline-block;
        width: 56px;
        height: 56px;
        margin: 0 12px;
        padding: 6px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #2b343c;
          text-align: center;
          &.highlight {
            background: rgb(0, 160, 220);
          }
          .icon-shopping_cart {
            font-size: 24px;
            color: rgba(255, 255, 255, 0.4);
            line-height: 48px;
            &.highlight {
              color: rgb(255, 255, 255);
            }
          }
        }
        .count {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          font-size: 9px;
          font-weight: 700;
          color: rgb(255, 255, 255);
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
          border-radius: 16px;
        }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-top: 12px;
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        &.highlight {
          color: rgb(255, 255, 255);
        }
      }
      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
      }
    }
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        &.not-enough {
          background: #2b333b;
        }
        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }
  .ball-container {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 22px;
      z-index: 200;
      .inner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0, 160, 220);
      }
    }
  }
  .shopcart-list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0);
    &.cartlist-enter-to,
    &.cartlist-leave {
      transform: translate3d(0, -100%, 0);
    }
    &.cartlist-enter,
    &.cartlist-leave-to {
      transform: translate3d(0, 0, 0);
    }
    &.cartlist-enter-active,
    &.cartlist-leave-active {
      transition: all 0.4s;
    }
    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .text {
        float: left;
        font-size: 14px;
        line-height: 40px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        line-height: 40px;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .good {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .foodname {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cart-control-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}
.shop-list-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  background: rgba(7, 17, 27, 0.6);
  &.list-bg-enter,
  &.list-bg-leave-to {
    opacity: 0;
  }

  &.list-bg-enter-active,
  &.list-bg-leave-active {
    transition: all 0.5s;
  }
}
</style>
