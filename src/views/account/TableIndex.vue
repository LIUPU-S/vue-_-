<template>
  <div>
    <el-table
      :data="data.table_data"
      border
      style="width: 100%"
      @selection-change="handlerSelectionChange"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column
        v-for="header in data.render_header"
        :key="header.prop"
        :prop="header.prop"
        :label="header.label"
      />
    </el-table>
    <el-row>
      <el-col :span="6">
        <el-button>批量删除</el-button>
      </el-col>
      <el-col :span="18">
        <el-pagination
          ref="mytable"
          class="pull-right"
          sizs="small"
          background
          @sizeChange="handlerSizeChange"
          @currentChange="handlerCurrentChange"
          :current="data.current_page"
          :page-size="10"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { configHook } from "./configHook";
import { reactive } from "vue";
export default {
  name: "tableComponents",
  props: {
    columns: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  setup(props) {
    const { config } = configHook();
    const data = reactive({
      row_data_id: [],
      currentPage: 0,
      total: 0,
      table_data: [],
      render_header: props.columns,
    });
    function handlerSelectionChange(val) {
      val;
    }
    return {
      data,
      config,
      handlerSelectionChange,
    };
  },
};
</script>

<style>
.margin-top-30 {
  display: f;
}
</style>
