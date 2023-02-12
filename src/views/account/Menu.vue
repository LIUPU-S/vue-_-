<template>
  <el-table ref="table" border :data="data.tableDtata" style="width" : 100%>
    <el-table-header> </el-table-header>
  </el-table>
</template>

<script>
// import { reactive } from "vue";
export default {
  name: "MenuInfo",
  setup() {
    [{ a: "首页", b: "../a", c: "映射组件", d: "XXX" }, {}];
  },
};
</script>
