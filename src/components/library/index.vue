<template>
  <div
    class="library-list"
    @click="handleSelected(item)"
    :class="{ active: selectedModules.key === item.key }"
  >
    <div class="action">
      <p>{{ item.name }}</p>
      <el-button type="text" icon="el-icon-delete" @click="handleDelete(item)"
        >删除</el-button
      >
    </div>
    <test-swiper v-if="item.type === 'swiper'"></test-swiper>

    <test-txt v-if="item.type === 'txt'"></test-txt>
  </div>
</template>
<script>
//import from ''
import { mapState, mapGetters, mapActions } from "vuex";
import TestSwiper from "./test-swiper";
import TestTxt from "./test-txt";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    TestSwiper,
    TestTxt
  },
  //数组或对象，用于接收来自父组件的数据
  props: {
    item: {
      type: Object
    }
  },
  //计算
  computed: {
    ...mapState({
      pageModulesList: "pageModules"
    }),
    ...mapGetters(["selectedModules"])
  },
  //方法
  methods: {
    ...mapActions(["changeSelectedModules"]),
    handleDelete(data) {
      this.pageModulesList.list.splice(
        this.pageModulesList.list.findIndex(item => item.key === data.key),
        1
      );
    },
    handleSelected(item) {
      this.changeSelectedModules(item);
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
.library-list {
  position: relative;
  border: 1px solid transparent;
  cursor: pointer;
  .action {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: none;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    color: #2589ff;
    background: rgba(255, 255, 255, 0.8);
  }
  &:hover {
    border-color: #2589ff;
    .action {
      display: flex;
    }
  }
  &.active{
    border-color: #2589ff;
  }
}
</style>
