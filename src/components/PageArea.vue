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
      <div v-for="(item, index) in pageModulesList.list" :key="index">
        <module-library :item="item"></module-library>
      </div>
    </draggable>
  </div>
</template>
<script>
//import from ''
import { mapState } from "vuex";
import Draggable from "vuedraggable";
import ModuleLibrary from "./library";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    Draggable,
    ModuleLibrary
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapState({
      pageModulesList: "pageModules"
    })
  },
  //方法
  methods: {
    handleModulesAdd() {}
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

  .ghostClass {
    position: relative;
    line-height: 30px;
    list-style: none;
    font-size: 0;

    &::after {
      content: '放到这里';
      display: block;
      background: #fff;
      position: absolute;
      left: 50%;
      margin-left: -32px;
      top: 0;
      font-size: 16px;
      color: #999;
      z-index: 10;
    }
  }
}
</style>
