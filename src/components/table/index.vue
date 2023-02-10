<template id="BasisTable">
  <div>
    <el-table :data="date.table_data" border style="width: 100%">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" lable="姓名"></el-table-column>
      <el-table-column prop="address" lable="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "tableComponents",
  components: [
    "BasisTable",
    {
      tempalte: "#BasisTable",
    },
  ],
  props: {},
  setup(props) {
    const data = reactive({
      table_data: [
        {
          date: "201,6-05-02",
          name: "王小虎",
          addrss: "上海市普陀区金沙江路1518弄",
        },
      ],
    });
    return { data, props };
  },
};
</script>
