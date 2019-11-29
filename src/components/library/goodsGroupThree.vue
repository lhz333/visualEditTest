<template>
  <div class>
    <goods-group-six :item="item" :goodsTypeNum="3"></goods-group-six>
  </div>
</template>
<script>
import GoodsGroupSix from "./goodsGroupSix";
export default {
  name: "goodsGroupThree",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    GoodsGroupSix
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
