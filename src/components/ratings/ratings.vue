<template>
  <div class="rating">
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
    <div class="rating-content">
      <ratingselect
        :ratings="ratings"
        :selectType="selectType"
        :onlyContent="onlyContent"
        :desc="desc"
        v-on:changeType="changeType($event)"
        v-on:changeOnlyContent="changeOnlyContent($event)"
      ></ratingselect>
    </div>
  </div>
</template>

<script>
import star from '../star/star';
import split from '../split/split';
import ratingselect from '../ratingselect/ratingselect';
const ERROR_OK = 0;
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

  components: {
    star,
    split,
    ratingselect
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (ERROR_OK === response.errno) {
        this.seller = response.data;
      };
    }, (response) => {
    });
    this.$http.get('/api/ratings').then((response) => {
      response = response.body;
      if (ERROR_OK === response.errno) {
        this.ratings = response.data;
      };
    }, (response) => {
    });
  },
  methods: {}
};

</script>
<style lang='scss' scoped>
.rating {
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
}
</style>
