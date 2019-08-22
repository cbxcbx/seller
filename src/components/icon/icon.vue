<template>
  <div class="seller-icon-wrapper">
    <span class="icon" :class="avtiveIcon"></span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    index: {
      type: Number
    }
  },

  data() {
    return {
    };
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  computed: {
    avtiveIcon() {
      return 'icon-' + this.size + ' ' + this.classMap[this.index];
    }
  }
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.seller-icon-wrapper {
  display: inline-block;
  vertical-align: top;
  .icon {
    display: inline-block;
    vertical-align: top;
    background-repeat: no-repeat;
  }
  .icon-1 {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    &.decrease {
      @include bg-image("decrease_1");
    }
    &.discount {
      @include bg-image("discount_1");
    }
    &.guarantee {
      @include bg-image("guarantee_1");
    }
    &.invoice {
      @include bg-image("invoice_1");
    }
    &.special {
      @include bg-image("special_1");
    }
  }
  .icon-2 {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-size: 16px 16px;
    &.decrease {
      @include bg-image("decrease_2");
    }
    &.discount {
      @include bg-image("discount_2");
    }
    &.guarantee {
      @include bg-image("guarantee_2");
    }
    &.invoice {
      @include bg-image("invoice_2");
    }
    &.special {
      @include bg-image("special_2");
    }
  }
  .icon-3 {
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    &.decrease {
      @include bg-image("decrease_3");
    }
    &.discount {
      @include bg-image("discount_3");
    }
    &.guarantee {
      @include bg-image("guarantee_3");
    }
    &.invoice {
      @include bg-image("invoice_3");
    }
    &.special {
      @include bg-image("special_3");
    }
  }
  .icon-4 {
  }
}
</style>
