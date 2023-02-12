<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <el-table
      ref="aa"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      height="500"
      class="table-fixed"
    >
      <el-table-column
        fixed="left"
        label="规培护士"
        min-width="120"
        align="center"
      >
        <template v-slot="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, i) in obj.header"
        :key="i"
        property="date"
        label="日期"
        min-width="300"
      />
      <el-table-column property="address" label="地址" fixed="right" />
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="handlerAddCol"> 新增一列 </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      obj: {
        header: [
          {
            startAt: "1",
          },
        ],
      },
      submitLoading: false,
    };
  },
  methods: {
    handlerAddCol() {
      this.tableData.push({
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      });
      this.$nextTick(() => {
        this.$refs.aa.doLayout();
      });
    },
  },
};
</script>
