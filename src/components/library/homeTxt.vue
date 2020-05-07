<template>
  <div class="test-text">
    <common-title :item="item"></common-title>
    <p class="padding20">测试文本</p>
  </div>
</template>

<script>
import CommonTitle from "./commonTitle";
export default {
  name: "homeTxt",
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

<style style="less" scoped>
.test-text {
  text-align: center;
}
</style>
