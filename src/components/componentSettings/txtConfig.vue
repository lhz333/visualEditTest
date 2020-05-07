<template>
  <el-card class="marginTop10" shadow="hover">
    <p>text的配置属性</p>
  </el-card>
</template>
<script>
//import from ''
import { mapGetters } from "vuex";
export default {
  name: "textConfig",
  //实例的数据对象
  data() {
    return {};
  },
  components: {},
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapGetters(["selectedModules"])
  },
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
