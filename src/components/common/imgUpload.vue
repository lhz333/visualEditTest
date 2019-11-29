<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :on-error="uploadError"
  >
    <img v-if="value" :src="value" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
export default {
  name: "ImgUpload",
  props: {
    value: String
  },
  methods: {
    /* eslint-disable */
    handleAvatarSuccess (res, file) {
      this.$emit('update:value', URL.createObjectURL(file.raw))
      this.fullLoading.close()
    },
    uploadError (err) {
      console.log(err);
      this.fullLoading.close();
      this.$alert('网络繁忙，请稍后重试')
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 < 200;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 200 KB!');
      } else {
        this.fullLoading = this.$loading({
          text: '正在上传'
        });
      }
      return isLt2M;
    },
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 40px;
  display: block;
}
</style>

