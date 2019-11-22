<template>
  <div class="home">
    <Header />
    <el-container>
      <el-container>
        <el-aside width="400px">
          <component-list></component-list>
        </el-aside>
        <el-main>
          <page-area></page-area>
        </el-main>
        <el-aside width="400px">属性列表区域</el-aside>
      </el-container>
      <el-footer class="flex-center">
        <el-button type="primary" icon="el-icon-refresh">重置</el-button>
        <el-button type="primary" icon="el-icon-view">预览</el-button>
        <el-button type="primary" icon="el-icon-document">保存</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
//import from ''
import Header from "@/components/Header.vue";
import ComponentList from "@/components/ComponentList.vue";
import PageArea from "@/components/PageArea.vue";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    Header,
    ComponentList,
    PageArea
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
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
.home {
  height: calc(100% - 70px);
  user-select: none;
}
.el-container {
  height: 100% !important;
}

.el-main {
  background-color: #e9eef3;
}
</style>
