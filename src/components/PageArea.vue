<template>
  <div class="page-area">
    <draggable
      v-model="pageModulesList.list"
      class="modules-list"
      :group="{ name: 'module', put: true }"
      tag="div"
      ghostClass="ghostClass"
      :animation="100"
      @add="handleModulesAdd"
    >
      <template v-for="(item, index) in pageModulesList.list">
        <module-library
          :key="index"
          :item="item"
          @click.native.stop="handleSelected(item)"
        ></module-library>
      </template>
    </draggable>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import draggable from "vuedraggable";
import ModuleLibrary from "./library";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    draggable,
    ModuleLibrary
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    pageModulesList: {
      get() {
        return this.$store.state.pageModules;
      },
      set(value) {
        this.$store.commit("setPageModules", value);
      }
    }
  },
  //方法
  methods: {
    ...mapActions(["changeSelectedModules"]),
    // 选中某个组件
    handleSelected(item) {
      this.changeSelectedModules(item);
    },
    // 拖拽添加事件 获取到当前拖拽过来的数据
    handleModulesAdd(event) {
      const newIndex = event.newIndex;
      let id = Date.now() + "_" + Math.ceil(Math.random() * 1000000);
      this.pageModulesList.list[newIndex].id = id;
      this.changeSelectedModules(this.pageModulesList.list[newIndex]);
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
.page-area {
  width: 375px;
  height: 667px;
  margin: 30px auto;
  background: #fff;
  border-radius: 5px;
  overflow-y: auto;
  .modules-list {
    height: 100%;
  }
}
</style>
