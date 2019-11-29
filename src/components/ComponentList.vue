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
          <!-- <el-image src="" fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>-->
          <p>{{ item.name }}</p>
        </li>
      </draggable>
    </div>
  </div>
</template>
<script>
//import from ''
import draggable from "vuedraggable";
import Attribute from "@/assets/js/attribute.js";
export default {
  name: "component-list",
  //实例的数据对象
  data() {
    return {
      activeName: "basic"
    };
  },
  components: {
    draggable
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    componentsList() {
      return Attribute.componentsList;
    }
  },
  //方法
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    cloneData(obj) {
      // 克隆会改变数组内数据
      let cloneItemData = { ...obj, ...Attribute.baseConfig };
      let cloneType = this.componentsList.find(item => {
        return item.type === obj.type;
      });
      cloneItemData.title = `此处配置${cloneType.name}标题`;
      cloneItemData.images = [];
      cloneItemData.list = [];
      cloneItemData.productIds = [];
      return cloneItemData;
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
.draggable-area {
  ul {
    width: 100%;
    li {
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 29.33%;
      height: 50px;
      border: 1px solid #e3e2e5;
      padding: 5px;
      margin: 10px 2%;
      border-radius: 4px;
      text-align: center;
      background-color: #ffffff;
      cursor: move;
      &:hover {
        border-color: #2589ff;
      }
    }
  }
}
</style>
