<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="desc positive" :class="{'active': ratingType === 2}" @click="select(2,$event)">
        {{ desc.all }}
        <span class="count">{{ ratings.length }}</span>
      </span>
      <span class="desc positive" :class="{'active': ratingType === 0}" @click="select(0,$event)">
        {{ desc.positive }}
        <span class="count">{{ positive.length }}</span>
      </span>
      <span class="desc negative" :class="{'active': ratingType === 1}" @click="select(1,$event)">
        {{ desc.negative }}
        <span class="count">{{ negative.length }}</span>
      </span>
    </div>
    <div class="switch" :class="{'on': isContent === true}" @click="toggleContent($event)">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
    <div></div>
  </div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
  props: {
    ratings: {
      type: Array,
      default() {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  },
  data() {
    return {
      ratingType: this.selectType,
      isContent: this.onlyContent
    };
  },
  computed: {
    positive() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE;
      });
    },
    negative() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE;
      });
    }
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
        return false;
      }
      this.ratingType = type;
      this.$emit('changeType', type);
    },
    toggleContent(event) {
      if (!event._constructed) {
        return false;
      }
      this.isContent = !this.isContent;
      this.$emit('changeOnlyContent', this.isContent);
    }
  }
};
</script>
<style lang='scss' scoped>
@import '../../common/css/index';
.ratingselect {
  .rating-type {
    padding: 12px 0 18px;
    margin: 0 18px;
    @include border-1px(rgba(7, 17, 27, 0.1));
    font-size: 0;
    .desc {
      display: inline-block;
      padding: 8px 12px;
      margin-right: 8px;
      border-radius: 1px;
      font-size: 12px;
      line-height: 16px;
      color: rgb(77, 85, 93);
      &.active {
        color: #fff;
      }
      .count {
        margin-left: 2px;
        font-size: 8px;
      }
      &.positive {
        background-color: rgba(0, 160, 220, 0.2);
        &.active {
          background-color: rgb(0, 160, 220);
        }
      }
      &.negative {
        background-color: rgba(77, 83, 93, 0.2);
        &.active {
          background-color: rgb(77, 83, 93);
        }
      }
    }
  }
  .switch {
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    color: rgb(147, 153, 159);
    font-size: 0;
    &.on {
      .icon-check_circle {
        color: #00c850;
      }
    }
    .icon-check_circle {
      display: inline-block;
      vertical-align: top;
      margin-right: 4px;
      font-size: 24px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
    }
  }
}
</style>
