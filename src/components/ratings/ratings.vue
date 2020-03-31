<template>
  <div class="rating-wrapper" ref="ratingWrapper">
    <div class="rating-content">
      <div class="overview">
        <div class="overview-left">
          <div class="score">{{ seller.score }}</div>
          <div class="zonghe">综合评分</div>
          <div class="rankRate">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore" class="star"></star>
            <span class="score">{{ seller.serviceScore }}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore" class="star"></star>
            <span class="score">{{ seller.foodScore }}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{ seller.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <div class="rating">
        <ratingselect
          :ratings="ratings"
          :selectType="selectType"
          :onlyContent="onlyContent"
          :desc="desc"
          v-on:changeType="changeType($event)"
          v-on:changeOnlyContent="changeOnlyContent($event)"
        ></ratingselect>
        <div class="rating-list">
          <ul>
            <li
              v-show="need(item.rateType,item.text)"
              v-for="(item, index) in ratings"
              :key="index"
              class="rating border-1px"
            >
              <div class="avatar">
                <img :src="item.avatar" width="28" height="28" />
              </div>
              <div class="content">
                <h1 class="name">{{ item.username }}</h1>
                <div class="star-wrapper">
                  <star :size="24" :score="item.score"></star>
                  <span class="delivery" v-show="item.deliveryTime">{{ item.deliveryTime }}分钟送达</span>
                </div>
                <p class="text">{{ item.text }}</p>
                <div class="recommend-wrapper" v-show="item.recommend">
                  <span
                    :class="{'icon-thumb_up': item.rateType===0,'icon-thumb_down': item.rateType===1}"
                  ></span>
                  <span
                    v-for="(recommend,index) in item.recommend"
                    :key="index"
                    class="recommend"
                  >{{ recommend }}</span>
                </div>
                <div class="time">{{ item.rateTime | formatDate }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star';
import split from '../split/split';
import ratingselect from '../ratingselect/ratingselect';
import { formatDateTime } from '../../common/js/date';
import BScroll from 'better-scroll';
import data from '../../../data.json';
// const ERROR_OK = 0;
const ALL = 2;
export default {
  data() {
    return {
      seller: {},
      ratings: [],
      selectType: ALL,
      onlyContent: false,
      desc: {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      }
    };
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDateTime(date, 'yyyy-MM-dd hh:mm');
    }
  },
  components: {
    star,
    split,
    ratingselect
  },
  created() {
    // this.$http.get('https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller').then((response) => {
    //   response = response.body;
    //   if (ERROR_OK === response.errno) {
        this.seller = Object.assign({}, this.seller, data.seller);
      // };
    // }, (response) => {
    // });
    // this.$http.get('https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/ratings').then((response) => {
      // response = response.body;
      // if (ERROR_OK === response.errno) {
        this.ratings = data.ratings;
        this.$nextTick(() => {
          this._initScroll();
        });
      // };
    // }, (response) => {
    // });
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.ratingWrapper, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
    },
    need(type, text) {
      if (this.onlyContent && !text) {
        return false;
      } else if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
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
    }
  }
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.rating-wrapper {
  position: absolute;
  top: 174px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  .overview {
    display: flex;
    padding: 18px 0;
    .overview-left {
      flex: 0 0 130px;
      width: 130px;
      padding: 6px 0;
      text-align: center;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      @media screen and (max-width: 479px) {
        flex: 0 0 120px;
        width: 120px;
      }
      .score {
        font-size: 24px;
        color: rgb(255, 153, 0);
        line-height: 28px;
        margin-bottom: 6px;
      }
      .zonghe {
        font-size: 12px;
        color: rgb(7, 17, 27);
        line-height: 12px;
        margin-bottom: 8px;
      }
      .rankRate {
        font-size: 10px;
        color: rgb(147, 153, 159);
        line-height: 10px;
      }
    }
    .overview-right {
      flex: 1;
      padding: 6px 0 6px 24px;
      @media screen and (max-width: 479px) {
        padding-left: 12px;
      }
      .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;
        .title {
          display: inline-block;
          vertical-align: top;
          line-height: 18px;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }
        .star {
          display: inline-block;
          vertical-align: top;
          margin: 0 12px;
        }
        .score {
          display: inline-block;
          vertical-align: top;
          line-height: 18px;
          font-size: 12px;
          color: rgb(255, 153, 0);
        }
      }
      .delivery-wrapper {
        font-size: 0;
        .title {
          line-height: 18px;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }
        .delivery {
          margin-left: 12px;
          font-size: 12px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
  .rating-list {
    padding: 0 18px;
    .rating {
      display: flex;
      padding: 18px 0;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .avatar {
        flex: 0 0 28px;
        width: 28px;
        margin-right: 12px;
        img {
          border-radius: 50%;
        }
      }
      .content {
        position: relative;
        flex: 1;
        .name {
          line-height: 12px;
          font-size: 10px;
          color: rgb(7, 17, 27);
          margin-bottom: 4px;
        }
        .star-wrapper {
          font-size: 0;
          margin-bottom: 6px;
          .star {
            display: inline-block;
            vertical-align: top;
            margin-right: 6px;
          }
          .delivery {
            display: inline-block;
            vertical-align: top;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .text {
          line-height: 18px;
          color: rgb(7, 17, 27);
          font-size: 12px;
          margin-bottom: 8px;
        }
        .recommend-wrapper {
          line-height: 16px;
          font-size: 0;
          .icon-thumb_up,
          .icon-thumb_down,
          .recommend {
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 9px;
          }
          .icon-thumb_up {
            color: rgb(0, 160, 220);
          }
          .icon-thumb_down {
            color: rgb(183, 187, 193);
          }
          .recommend {
            padding: 0 6px;
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius: 1px;
            color: rgb(147, 153, 159);
            background: #fff;
          }
        }
        .time {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>
