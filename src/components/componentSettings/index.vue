<template>
  <div class="padding20 configs">
    <div class="flex-center">
      <h3>组件属性</h3>
      <p class="gray-color marginLeft15">{{ selectedModules.name }}</p>
    </div>
    <template v-if="selectedModules.id">
      <!-- 公用配置 标题模块 -->
      <common-config></common-config>

      <!-- 轮播组件配置 -->
      <swiper-config></swiper-config>

      <!-- 文本菜单组件配置 -->
      <txt-config v-if="selectedModules.type === 'txt'"></txt-config>

      <el-button class="submit-btn" type="primary">提交</el-button>
    </template>
    <template v-else>
      <el-card class="marginTop10" shadow="always">
        <p class="noSelected">
          <i class="el-icon-warning-outline"></i>
          <span class="marginLeft15">请先选择组件</span>
        </p>
      </el-card>
    </template>
  </div>
</template>
<script>
//import from ''
import { mapGetters } from "vuex";
import CommonConfig from "./commonConfig";
import SwiperConfig from "./swiperConfig";
import TxtConfig from "./txtConfig";
export default {
  name: "configs",
  //实例的数据对象
  data() {
    return {};
  },
  components: {
    CommonConfig,
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
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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

<style lang="less">
.configs {
  .submit-btn {
    width: 100%;
    margin: 20px auto 50px;
  }
  .noSelected {
    text-align: center;
    line-height: 100px;
  }
}
</style>
