<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="removeCount($event)">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click="addCount($event)"></div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
    };
  },

  components: {},

  methods: {
    addCount(event) {
      if (!event._constructed) {
        return false;
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$emit('cart-add', event.target);
    },
    removeCount(event) {
      if (!event._constructed) {
        return false;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.cart-control {
  font-size: 0;
  .cart-decrease {
    display: inline-block;
    padding: 6px;
    .inner {
      display: inline-block;
      font-size: 24px;
      line-height: 24px;
      color: rgb(0, 160, 220);
      transition: all 0.4s;
      transform: rotate(0);
    }
    &.move-enter-active,
    &.move-leave-active {
      transition: all 0.4s;
    }
    &.move-enter,
    &.move-leave-to {
      transform: translate3d(24px, 0, 0);
      opacity: 0;
      .inner {
        transform: rotate(180deg);
      }
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    font-size: 24px;
    line-height: 24px;
    color: rgb(0, 160, 220);
  }
}
</style>
