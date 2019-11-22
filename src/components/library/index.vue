<template>
  <div class="">
    <test-swiper v-if="item.type === 'swiper'"></test-swiper>
  </div>
</template>
<script>
//import from ''
import TestSwiper from "./test-swiper";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    TestSwiper
  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    item: {
      type: Object
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

<style lang="less" scoped></style>
