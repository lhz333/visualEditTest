<template>
  <div class="txt-config marginTop10">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文本内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//import from ''
import { mapGetters } from "vuex";
export default {
  name: "",
  //实例的数据对象
  data() {
    return {
      ruleForm: {
        content: ""
      },
      rules: {
        content: [
          { required: true, message: "请填写文本内容", trigger: "blur" }
        ]
      }
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

<style lang="less" scoped>
.txt-config {
}
</style>
