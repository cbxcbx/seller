<template>
  <div class="ratingselect">

  </div>
</template>

<script>
const POSITIVE = 0;
const NATIVE = 1;
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
          native: '不满意'
        };
      }
    }
  },
  data() {
    return {
    };
  },

  components: {},

  methods: {}
};

</script>
<style lang='scss' scoped>
</style>
