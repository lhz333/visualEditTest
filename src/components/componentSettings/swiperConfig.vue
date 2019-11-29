<template>
  <el-card class="marginTop10" shadow="hover">
    <p>轮播图片配置</p>
    <draggable
      tag="ul"
      class="marginTop10 images-config"
      :list="selectedModules.list"
      :group="{ name: 'slideList' }"
      ghostClass="ghostClass"
      handle=".move-icon"
    >
      <li v-for="(item, index) in selectedModules.list" :key="index">
        <div class="relative flex-start">
          <span class="fontSize12 config-label">选择图片</span>
          <ImgUpload :value.sync="item.source" />
          <div class="absolute-top-right">
            <i class="el-icon-menu move-icon" title="拖拽排序"></i>
            <i
              class="el-icon-delete delect-icon"
              title="删除"
              @click="handleSlideRemove(index)"
            ></i>
          </div>
        </div>
        <div class="flex-start marginTop10">
          <span class="fontSize12 config-label">图片地址</span>
          <el-input
            size="mini"
            placeholder="请输入图片地址"
            v-model="item.source"
          ></el-input>
        </div>
        <div class="flex-start marginTop10">
          <span class="fontSize12 config-label">跳转地址</span>
          <el-input
            size="mini"
            placeholder="请输入跳转地址"
            v-model="item.url"
          ></el-input>
        </div>
      </li>
    </draggable>
    <div class="text-center">
      <el-button type="text" @click="handleAddSlide()">添加图片</el-button>
    </div>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
import ImgUpload from "@/components/common/imgUpload.vue";
export default {
  name: "swiperConfig",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    draggable,
    ImgUpload
  },
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapGetters(["selectedModules"])
  },
  //方法
  methods: {
    // 删除图片
    handleSlideRemove(index) {
      this.selectedModules.list.splice(index, 1);
    },
    // 添加图片
    handleAddSlide() {
      this.selectedModules.list.push({
        url: "",
        source: ""
      });
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
.images-config {
  li {
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    .flex-start {
      display: flex;
      align-items: center;
      justify-content: start;
    }
    .config-label {
      display: inline-block;
      width: 88px;
      color: #606266;
    }
  }
}
.absolute-top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}
.move-icon,
.delect-icon {
  font-size: 20px;
  color: #999;
  margin: 0 5px;
  &:hover {
    color: #409eff;
  }
}
.move-icon {
  cursor: move;
}
</style>
