<template>
  <el-form-item label="信息类别">
    <el-cascader
      v-model="data.category"
      :options="data.category_options"
    ></el-cascader>
  </el-form-item>
</template>

<script>
export default {};
</script>
