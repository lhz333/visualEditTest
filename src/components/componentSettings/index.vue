<template>
  <div class="padding20">
    <div class="flex-center">
      <h3>组件属性</h3>
      <p class="gray-color marginLeft15">{{ selectedModules.name }}</p>
    </div>

    <swiper-config v-if="selectedModules.configType === 'swiper'"></swiper-config>

    <txt-config v-if="selectedModules.configType === 'txt'"></txt-config>
  </div>
</template>
<script>
//import from ''
import { mapGetters } from "vuex";
import SwiperConfig from "./swiper-config";
import TxtConfig from "./txt-config";
export default {
  name: "",
  //实例的数据对象
  data () {
    return {};
  },
  components: {
    SwiperConfig,
    TxtConfig
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapGetters(["selectedModules"])
  },
  //方法
  methods: {},
  //生命周期函数
  created () { },
  beforeMount () { },
  mounted () { },
  //监听
  watch: {}
};
</script>

<style lang="less" scoped></style>
