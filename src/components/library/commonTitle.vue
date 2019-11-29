<template>
  <div class="common-title" :style="{ textAlign: item.alignment }">
    <p
      class="padding10"
      :style="{ 'font-size': item.font + 'px' }"
      v-show="item.isShow"
    >
      {{ item.title }}
    </p>
  </div>
</template>
<script>
//import from ''

export default {
  name: "commonTitle",
  //实例的数据对象
  data() {
    return {};
  },
  components: {},
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

<style lang="less" scoped>
.common-title {
}
</style>
