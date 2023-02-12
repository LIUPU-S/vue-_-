<template>
  <el-form label-width="150px">
    <el-form-item label="信息类别：">
      <el-cascader
        v-model="data.category"
        :options="data.category_options"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="信息标题">
      <el-input v-model="data.title"></el-input>
    </el-form-item>
    <el-form-item label="略所图">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts"
        :show-file-list="false"
        :on-success="handlerAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <span v-else>+</span>
      </el-upload>
    </el-form-item>

    <el-form-item label="发布日期">
      <el-date-picker
        v-model="data.data"
        type="datatime"
        placeholder="请选择日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="内容"></el-form-item>
    <el-form-item>
      <el-button type="danger">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      imageUrl: "",
      category: "",
      title: "",
      date: "",
      category_opacity: [
        { label: "人工智能", value: 0 },
        { label: "技术", value: 1 },
      ],
    });
    return {
      data,
    };
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
</style>
