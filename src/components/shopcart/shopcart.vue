<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">￥0</div>
        <div class="desc">另需配送费￥{{ deliveryPrice }}元</div>
      </div>
      <div class="content-right">
        <div class="pay">￥{{ minPrice }}元起送</div>
      </div>
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
    };
  },

  components: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((foods) => {
        total += foods.price * foods.count;
      });
      return total;
    }
  },

  methods: {}
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
          .icon-shopping_cart {
            font-size: 24px;
            color: rgba(255, 255, 255, 0.4);
            line-height: 48px;
          }
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
        background: #2b333b;
      }
    }
  }
}
</style>
