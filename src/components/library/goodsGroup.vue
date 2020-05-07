<template>
  <div class><common-title :item="item"></common-title>商品组</div>
</template>
<script>
//import from ''
import CommonTitle from "./commonTitle";
export default {
  name: "goodsGroup",
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

<style lang="less" scoped></style>
