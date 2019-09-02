<template>
  <div class="star" :class="starType">
    <span
      v-for="(itemClass,index) in itemClasses"
      :class="itemClass"
      class="star-item"
      :key="index"
    ></span>
  </div>
</template>

<script>
const STAR_NUMBER = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }

  },
  data() {
    return {};
  },

  computed: {
    starType() {
      return 'star-' + this.size;
    },
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !== 0 || NaN;
      if (isNaN(score)) {
        hasDecimal = false;
      }
      let integer = Math.floor(score);
      for (let i = integer; i > 0; i--) {
        result.push(CLS_ON);
      }
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      while (result.length < STAR_NUMBER) {
        result.push(CLS_OFF);
      }
      return result;
    }
  },
  components: {},

  methods: {}
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("star24_on");
      }
      &.off {
        @include bg-image("star24_off");
      }
      &.half {
        @include bg-image("star24_half");
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 16px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("star36_on");
      }
      &.off {
        @include bg-image("star36_off");
      }
      &.half {
        @include bg-image("star36_half");
      }
    }
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("star48_on");
      }
      &.off {
        @include bg-image("star48_off");
      }
      &.half {
        @include bg-image("star48_half");
      }
    }
  }
}
</style>
