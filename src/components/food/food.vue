<template>
  <transition name="foodDetail">
    <div class="food-detail-wrapper" v-show="showDrag" ref="foodDetail">
      <div class="food-content">
        <div class="header-img">
          <img :src="food.image" />
          <div class="back-icon" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <div class="name">{{ food.name }}</div>
          <div class="extra">
            <span class="count">月售{{ food.sellCount }}份</span>
            <span>好评率{{ food.rating }}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥ {{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartControl :food="food"></cartControl>
          </div>
          <div class="buy" v-show="!food.count" @click="addcart(food, $event)">加入购物车</div>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{ food.info }}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect
            :ratings="food.ratings"
            :selectType="selectType"
            :onlyContent="onlyContent"
            :desc="desc"
            v-on:changeType="changeType($event)"
            v-on:changeOnlyContent="changeOnlyContent($event)"
          ></ratingselect>
          <div class="rating-list">
            <ul v-show="food.ratings">
              <li
                v-show="need(rating.rateType,rating.text)"
                v-for="(rating,index) in food.ratings"
                class="rating-item border-1px"
                :key="index"
              >
                <div class="user">
                  <span class="name">{{ rating.username }}</span>
                  <img :src="rating.avatar" class="avatar" width="12" height="12" />
                </div>
                <div class="time">{{ rating.rateTime || formatDate }}</div>
                <p class="text">
                  <span
                    :class="{'icon-thumb_up': rating.rateType===0,'icon-thumb_down': rating.rateType===1}"
                  ></span>
                  {{ rating.text }}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll';
import {formatDate} from '../../common/js/date';
import cartControl from '../cartcontrol/cartcontrol';
import ratingselect from '../ratingselect/ratingselect';
import split from '../split/split';
const ALL = 2;
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showDrag: false,
      selectType: ALL,
      onlyContent: false,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    };
  },

  components: {
    cartControl,
    split,
    ratingselect
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  },
  methods: {
    show() {
      this.showDrag = true;
      this.$nextTick(() => {
        this.selectType = ALL;
        this.onlyContent = false;
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.foodDetail, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.showDrag = false;
    },
    addcart(food, event) {
      if (!event._constructed) {
        return false;
      }
      Vue.set(food, 'count', 1);
    },
    changeType(newValue) {
      this.$nextTick(() => {
        this.selectType = newValue;
      });
    },
    changeOnlyContent(newValue) {
      this.$nextTick(() => {
        this.onlyContent = newValue;
      });
    },
    need(type, text) {
      if (this.onlyContent && !text) {
        return false;
      } else if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import '../../common/css/index';
.food-detail-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  background: #fff;
  &.foodDetail-enter,
  &.foodDetail-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  &.foodDetail-enter-active,
  &.foodDetail-leave-active {
    transition: all 0.4s linear;
  }
  .food-content {
    position: relative;
    .header-img {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .back-icon {
        position: absolute;
        top: 6px;
        left: 0;
        .icon-arrow_lift {
          display: block;
          padding: 10px;
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .content {
      position: relative;
      padding: 18px;
      .name {
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
        line-height: 14px;
      }
      .extra {
        font-size: 10px;
        line-height: 10px;
        color: rgb(147, 153, 159);
        .count {
          margin-right: 12px;
        }
      }
      .price {
        margin: 18px 0 0;
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
      .cartcontrol-wrapper {
        position: absolute;
        bottom: 12px;
        right: 12px;
      }
      .buy {
        position: absolute;
        bottom: 18px;
        right: 18px;
        z-index: 5;
        height: 24px;
        line-height: 24px;
        padding: 0 12px;
        box-sizing: border-box;
        border-radius: 12px;
        font-size: 10px;
        color: #fff;
        background-color: rgb(0, 160, 220);
      }
    }
    .info {
      padding: 18px;
      .title {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 6px;
        line-height: 14px;
        color: rgb(7, 17, 27);
      }
      .text {
        padding-left: 8px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        line-height: 24px;
      }
    }
    .rating {
      padding-top: 18px;
      .title {
        font-size: 14px;
        font-weight: 700;
        margin: 0 0 6px 18px;
        line-height: 14px;
        color: rgb(7, 17, 27);
      }
      .rating-list {
        padding: 18px;
        .rating-item {
          position: relative;
          padding: 16px 0;
          @include border-1px(rgba(7, 17, 27, 0.1));
          .user {
            position: absolute;
            right: 0;
            top: 16px;
            line-height: 12px;
            font-size: 0;
            .name {
              display: inline-block;
              margin-right: 6px;
              vertical-align: top;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .avatar {
              border-radius: 50%;
            }
          }
          .time {
            margin-bottom: 6px;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
          .text {
            line-height: 16px;
            font-size: 12px;
            color: rgb(7, 17, 27);
            .icon-thumb_up,
            .icon-thumb_down {
              margin-right: 4px;
              line-height: 16px;
              font-size: 12px;
            }
            .icon-thumb_up {
              color: rgb(0, 160, 220);
            }
            .icon-thumb_down {
              color: rgb(147, 153, 159);
            }
          }
        }
        .no-rating {
          padding: 16px 0;
          font-size: 12px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>
