<template>
  <div class="component-list padding20">
    <div class="flex-center">
      <h3>组件库</h3>
      <p class="gray-color marginLeft15">拖拽使用</p>
    </div>
    <el-tabs class="marginTop10" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="基本组件" name="basic"></el-tab-pane>
      <el-tab-pane label="营销组件" name="market"></el-tab-pane>
    </el-tabs>
    <div class="marginTop10 draggable-area">
      <draggable
        tag="ul"
        :list="componentsList"
        ghostClass="ghostClass"
        :group="{ name: 'module', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneData"
        class="clear"
      >
        <li v-for="(item, index) in componentsList" :key="index">
          <el-image src="" fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <p>{{ item.name }}</p>
        </li>
      </draggable>
    </div>
  </div>
</template>
<script>
//import from ''
import Draggable from "vuedraggable";
import Attribute from "@/assets/js/attribute.js";
export default {
  name: "component-list",
  //实例的数据对象
  data() {
    return {
      activeName: "basic",
      componentsList: Attribute.componentsList
    };
  },
  components: {
    Draggable
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {},
  //方法
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    cloneData(obj) {
      const elKey =
        obj.type + "_" + Date.now() + "_" + Math.ceil(Math.random() * 1000000);
      return { ...obj, key: elKey };
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
.component-list {
  .draggable-area {
    ul {
      width: 100%;
      li {
        float: left;
        width: 29.33%;
        height: 85px;
        border: 1px solid #e3e2e5;
        padding: 5px;
        margin: 10px 2%;
        border-radius: 4px;
        text-align: center;
        background-color: #ffffff;
        cursor: move;
        .el-image {
          width: 80%;
          height: 50px;
        }
        &:hover {
          border-color: #2589ff;
        }
      }
    }
  }
}
</style>
