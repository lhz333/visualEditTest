<template>
  <div class="home">
    <Header />
    <el-container>
      <el-container>
        <el-aside width="25%">
          <!-- 组件列表 -->
          <component-list></component-list>
        </el-aside>
        <el-main>
          <!-- 页面可配置区域 -->
          <page-area></page-area>
        </el-main>
        <el-aside width="25%">
          <!-- 组件属性设置 -->
          <component-settings></component-settings>
        </el-aside>
      </el-container>
      <el-footer class="flex-center">
        <el-button type="primary" icon="el-icon-refresh" @click="handleReset"
          >重置</el-button
        >
        <el-button type="primary" icon="el-icon-document" @click="handleSave"
          >保存</el-button
        >
      </el-footer>
    </el-container>
  </div>
</template>
<script>
//import from ''
import { mapState, mapActions } from "vuex";
import Header from "@/components/Header.vue";
import ComponentList from "@/components/ComponentList.vue";
import PageArea from "@/components/PageArea.vue";
import ComponentSettings from "@/components/componentSettings";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {
      resetPageModules: {
        list: []
      },
      resetSelectedModules: {}
    };
  },
  components: {
    Header,
    ComponentList,
    PageArea,
    ComponentSettings
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapState({
      pageModules: "pageModules",
      selectedModules: "selectedModules"
    })
  },
  //方法
  methods: {
    ...mapActions(["setPageModules", "changeSelectedModules"]),
    //重置
    handleReset() {
      // this.optionsVisiable = true;
      this.setPageModules(this.resetPageModules);
      this.changeSelectedModules(this.resetSelectedModules);
    },
    //保存
    handleSave() {
      this.setPageModules(this.pageModules);
      this.changeSelectedModules(this.selectedModules);
    }
  },
  //生命周期函数
  created() {},
  beforeMount() {},
  mounted() {
    this.$nextTick(function() {
      //防止火狐浏览器拖拽的时候以新标签打开
      document.body.ondrop = function(event) {
        event.preventDefault();
        event.stopPropagation();
      };
    });
  },
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
.el-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 9999;
}
</style>
