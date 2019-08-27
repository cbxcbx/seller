<template>
  <div class="shop-cart">
    <div class="content">
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
      <div class="content-right">
        <div class="pay" :class="payClass">{{ payDesc }}</div>
      </div>
    </div>
    <div class="ball-container">
      <transition-group name="drop" tag="div">
        <div class="ball" v-for="ball in balls" v-show="ball.show" :key="ball.index">
          <div class="inner inner-hook"></div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
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
      balls: [
        {
          show: false,
          index: 0
        },
        {
          show: false,
          index: 1
        },
        {
          show: false,
          index: 2
        },
        {
          show: false,
          index: 3
        },
        {
          show: false,
          index: 4
        }
      ],
      dropballs: []
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
  methods: {
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropballs.push(ball);
          return;
        }
      }
    }
  },
  transitions: {
    drop: {
      beforeEnter(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = (window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translated3d(0, ${y}px, 0)`;
            el.style.transform = `translated3d(0, ${y}px, 0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translated3d(0, ${x}px, 0)`;
            inner.style.transform = `translated3d(0, ${x}px, 0)`;
          }
        }
      },
      enter(el) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translated3d(0, 0, 0)';
          el.style.transform = 'translated3d(0, 0, 0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translated3d(0, 0, 0)';
          inner.style.transform = 'translated3d(0, 0, 0)';
        });
      },
      afterEnter(el) {
        let ball = this.dropballs.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      }
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
  z-index: 10;
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
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0, 160, 220);
      }
      &.drop-enter-active,
      &.drop-leave-active {
        transition: all 0.4s;
      }
      &.drop-enter,
      &.drop-leave-to {
        transition: all 0.4s;
      }
    }
  }
}
</style>
