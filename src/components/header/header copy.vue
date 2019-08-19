<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">{{ seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'SellHeader',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {};
  },
  components: {},

  methods: {}
};

</script>
<style lang="scss" scoped>
@import "../../common/css/mixin";
.header {
  color: #fff;
  background-color: #000;
  .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
      vertical-align: top;
      img {
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title {
        margin: 2px 0 8px;
        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          @include bg-image("brand");
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          color: rgb(255, 255, 255);
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description {
        margin-bottom: 10px;
        color: #fff;
        font-size: 12px;
        line-height: 12px;
      }
      .support {
        .icon {
        }
        .text {
        }
      }
    }
  }
}
</style>
