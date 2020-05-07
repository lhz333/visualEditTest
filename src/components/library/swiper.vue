<template>
  <div class="test-swiper">
    <common-title :item="item"></common-title>
    <el-carousel height="150px">
      <el-carousel-item v-for="(slide, index) in item.list" :key="index">
        <img ref="images" class="images" :src="slide.source" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
//import from ''
import CommonTitle from "./commonTitle";
export default {
  name: "swiper",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    CommonTitle
  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  //计算
  computed: {},
  //方法
  methods: {},
  //生命周期函数
  created() {},
  beforeMount() {},
  mounted() {},
  //监听
  watch: {}
};
</script>

<style lang="less">
.el-carousel__item h3 {
  color: #475669;
  text-align: center;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
