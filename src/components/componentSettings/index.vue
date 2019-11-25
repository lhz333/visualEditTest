<template>
  <div class="padding20">
    <div>
      <p>组件属性</p>
      <p>{{ selectedModules.name }}</p>
    </div>
  </div>
</template>
<script>
//import from ''
import { mapGetters } from "vuex";
export default {
  name: "",
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
