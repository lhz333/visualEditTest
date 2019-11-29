<template>
  <el-card class="marginTop10" shadow="hover">
    <el-form
      ref="ruleForm"
      size="mini"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="是否显示标题">
        <el-radio v-model="selectedModules.isShow" :label="true">显示</el-radio>
        <el-radio v-model="selectedModules.isShow" :label="false"
          >不显示</el-radio
        >
      </el-form-item>
      <template v-if="selectedModules.isShow">
        <el-form-item label="标题">
          <el-input v-model="selectedModules.title"></el-input>
        </el-form-item>
        <el-form-item label="标题字体大小">
          <el-input-number
            v-model="selectedModules.font"
            controls-position="right"
            :min="8"
            :max="20"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="标题显示位置">
          <el-select v-model="selectedModules.alignment">
            <el-option
              v-for="item in alignmentOptions"
              :key="item.type"
              :label="item.name"
              :value="item.type"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
    </el-form>
  </el-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "commonConfig",
  //实例的数据对象
  data() {
    return {
      alignmentOptions: [
        {
          name: "居左",
          type: "left"
        },
        {
          name: "居中",
          type: "center"
        }
      ]
    };
  },
  components: {},
  //数组或对象，用于接收来自父组件的数据
  props: {},
  //计算
  computed: {
    ...mapGetters(["selectedModules"])
  },
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

<style lang="less" scoped></style>
