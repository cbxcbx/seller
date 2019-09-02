<template>
  <div class="seller" ref="sellWrapper">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{ seller.name }}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score" class="star"></star>
          <span class="text">({{ seller.ratingCount }})</span>
          <span class="text">月售{{ seller.sellCount }}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2 class="title">起送价</h2>
            <div class="content">
              <span class="stress">{{ seller.minPrice }}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="title">商家配送</h2>
            <div class="content">
              <span class="stress">{{ seller.deliveryTime }}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="title">平均配送时间</h2>
            <div class="content">
              <span class="stress">{{ seller.minPrice }}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite($event)">
          <span class="icon-favorite" :class="{'active': favorite}"></span>
          <span class="text">{{ favoriteText }}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{ seller.bulletin }}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li
            v-for="(item, index) in seller.supports"
            :key="index"
            class="supports-item border-1px"
          >
            <sellerIcon :size="4" :index="item.type" class="icon"></sellerIcon>
            <span class="text">{{ item.description }}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(pic,index) in seller.pics" :key="index">
              <img :src="pic" width="120" height="90" />
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li
            class="info-item border-1px"
            v-for="(info, index) in seller.infos"
            :key="index"
          >{{ info }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star';
import split from '../split/split';
import sellerIcon from '../icon/icon';
import BScroll from 'better-scroll';
import { saveToLocal, loadFromLocal } from '../../common/js/store';
import { urlParse } from '../../common/js/util';
const ERROR_OK = 0;
export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      },
      favorite: false
    };
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d6c858aff259b2c4210309b/seller/api/seller').then((response) => {
      response = response.body;
      if (ERROR_OK === response.errno) {
        this.seller = Object.assign({}, this.seller, response.data.seller);
        this.favorite = loadFromLocal(this.seller.id, 'favorite', false);
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.sellWrapper, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
          if (this.seller.pics) {
            let picWidth = 120;
            let margin = 6;
            let width = (picWidth + margin) * this.seller.pics.length - margin;
            this.$refs.picList.style.width = width + 'px';
            this.$nextTick(() => {
              if (!this.picScroll) {
                this.picScroll = new BScroll(this.$refs.picWrapper, {
                  scrollX: true,
                  eventPassthrough: 'vertical'
                });
              } else {
                this.picScroll.refresh();
              }
            });
          }
        });
      };
    }, (response) => {
    });
  },
  computed: {
    favoriteText() {
      return this.favorite ? '已收藏' : '收藏';
    }
  },
  components: {
    star,
    split,
    sellerIcon
  },

  methods: {
    toggleFavorite(event) {
      if (!event._constructed) {
        return false;
      }
      this.favorite = !this.favorite;
      saveToLocal(this.seller.id, 'favorite', this.favorite);
    }
  }
};

</script>
<style lang='scss' scoped>
@import "../../common/css/index";
.seller {
  position: absolute;
  top: 174px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .overview {
    position: relative;
    padding: 18px;
    .title {
      margin-bottom: 8px;
      font-size: 14px;
      color: rgb(7, 17, 27);
      line-height: 14px;
      font-weight: 700;
    }
    .desc {
      padding-bottom: 18px;
      font-size: 0;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .star {
        display: inline-block;
        vertical-align: top;
        margin-right: 8px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        line-height: 18px;
        margin-right: 12px;
        font-size: 10px;
        color: rgb(77, 85, 93);
      }
    }
    .remark {
      display: flex;
      padding-top: 18px;
      .block {
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(7, 17, 27, 0.1);
        &:last-child {
          border: none;
        }
        .title {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
          margin-bottom: 4px;
        }
        .content {
          font-size: 10px;
          color: rgb(7, 17, 27);
          line-height: 24px;
          .stress {
            font-size: 24px;
          }
        }
      }
    }
    .favorite {
      position: absolute;
      top: 18px;
      right: 11px;
      text-align: center;
      width: 50px;
      .icon-favorite {
        display: block;
        margin-bottom: 4px;
        color: #d4d6d9;
        line-height: 24px;
        font-size: 24px;
        &.active {
          color: rgb(240, 20, 20);
        }
        .text {
          line-height: 10px;
          font-size: 10px;
          color: rgb(77, 85, 93);
        }
      }
    }
  }
  .bulletin {
    padding: 18px 18px 0 18px;
    .title {
      margin-bottom: 8px;
      font-size: 14px;
      color: rgb(7, 17, 27);
      line-height: 14px;
      font-weight: 700;
    }
    .content-wrapper {
      padding: 0 12px 16px 12px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .content {
        line-height: 24px;
        font-size: 12px;
        color: rgb(240, 20, 20);
      }
    }
    .supports-item {
      padding: 16px 12px;
      font-size: 0;
      @include border-1px(rgba(7, 17, 27, 0.1));
      &:last-child {
        @include border-none;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        color: rgb(7, 17, 27);
        line-height: 16px;
      }
    }
  }
  .pics {
    padding: 18px;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: rgb(7, 17, 27);
      font-size: 14px;
    }
    .pic-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .pic-list {
        font-size: 0;
        .pic-item {
          display: inline-block;
          margin-right: 6px;
          width: 120px;
          height: 90px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  .info {
    padding: 18px 18px 0;
    color: rgb(7, 17, 27);
    .title {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 14px;
      font-weight: 700;
      @include border-1px(rgba(7, 17, 27, 0.1));
    }
    .info-item {
      padding: 16px 12px;
      line-height: 16px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      font-size: 12px;
      &:last-child {
        @include border-none;
      }
    }
  }
}
</style>
