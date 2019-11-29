<template>
  <div class>
    <common-title :item="item"></common-title>
    <div class="swiper-container">
      <swiper class="swiper" :options="swiperOptionSix">
        <swiper-slide v-for="(list, index) in _goods" :key="index">
          <a
            v-for="(slide, index) in list"
            :style="setWidthAndHeight()"
            class="item"
            :key="index"
          >
            <img :src="slide.source" />
          </a>
          <span
            v-if="list.length < goodsTypeNum"
            class="item"
            :style="setWidthAndHeight()"
            >更多</span
          >
        </swiper-slide>
        <swiper-slide
          v-if="
            _goods.length && _goods[_goods.length - 1].length == goodsTypeNum
          "
        >
          <span class="item" :style="setWidthAndHeight()">更多</span>
        </swiper-slide>
        <div
          v-show="
            _goods.length && _goods[_goods.length - 1].length == goodsTypeNum
          "
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import CommonTitle from "./commonTitle";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "goodsGroupSix",
  //实例的数据对象
  data() {
    return {
      swiperOptionSix: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        slidesPerColumnFill: "column",
        spaceBetween: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        },
        observer: true,
        observeParents: true
      }
    };
  },
  components: {
    CommonTitle,
    swiper,
    swiperSlide
  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    item: {
      type: Object,
      required: true
    },
    goodsTypeNum: {
      type: Number,
      default: 6
    }
  },
  //计算
  computed: {
    _goods() {
      return this.chunk(this.item.list, this.goodsTypeNum);
    },
    setWidthAndHeight() {
      return function() {
        let scale = 2 / 3;
        let width = 375 / 3;
        let height = width / scale;
        let styleObject = {
          height: `${height}px`
        };
        return styleObject;
      };
    }
  },
  //方法
  methods: {
    chunk(arr, size) {
      var arr2 = [];
      for (var i = 0; i < arr.length; i = i + size) {
        arr2.push(arr.slice(i, i + size));
      }
      return arr2;
    }
  },
  //生命周期函数
  created() {},
  beforeMount() {},
  mounted() {},
  //监听
  watch: {}
};
</script>

<style lang="less" scoped>
.swiper {
  .item {
    width: 32.333%;
    margin: 0.5%;
    float: left;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
