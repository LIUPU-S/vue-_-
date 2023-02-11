<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div>
    <el-row>
      <el-col :span="18">
        <el-form :inline="true" label-width="80px">
          <el-form-item label="类别">
            <el-select
              placeholder="请选择"
              class="width-160"
              v-model="data.category"
            >
              <el-option
                v-for="item in data.category_options"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关键字">
            <el-select
              placeholder="请选择"
              class="width-100"
              v-model="data.category"
            ></el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select placeholder="请选择" class="width-180"></el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" class="width-160">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-input table="请输入" v-model="data.item.name"></el-input>
        <el-input table="请输入" v-model="data.item.address"></el-input>
        <el-button type="danger" class="pull-right" @click="add()"
          >新增</el-button
        >
      </el-col>
    </el-row>
    <el-table
      lazy
      :load="load"
      border
      :data="mo"
      style="width: 100%"
      @selection-change="handlerSelectionChange"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="name" width="500" label="标题"></el-table-column>
      <el-table-column prop="address" label="类别"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="address" width="200" label="操作">
        <template #default="scope">
          <el-button type="danger" size="mini">编辑</el-button>
          <el-button size="mini" @click="ded()">删除</el-button>
        </template>
      </el-table-column>
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
import { reactive } from "vue";
export default {
  setup(props, { root }) {
    const data = reactive({
      cc: "",
      current_page: 1,
      category: 0,
      category_options: [
        { label: "人工智能", value: 0 },
        { label: "技术", value: 1 },
      ],
      tableData: [
        { name: "XXXX", address: "XXXXXXXXXX", date: "2022-02-02" },
        { name: "XXXX", address: "XXXXXXXXXX", date: "2022-02-02" },
      ],
      item: { name: "", address: "", date: "" },
    });
    var mo = new Array(
      { name: "XXXX", address: "XXXXXXXXXX", date: "2022-02-02" },
      { name: "XasdasdXXX", address: "XXXasdasdasdXXXXXXX", date: "2022-02-02" }
    );
    function add() {
      alert(mo.length + "asdaasas");
      mo.push({
        name: data.item.name,
        address: data.item.name,
        date: "2022-02-02",
      });
      alert(mo.length + "asd");
    }
    function ded(index) {
      mo.splice(index, 1);
    }
    function handlerSelectionChange(val) {
      val;
    }
    function handlerSizeChange(val) {
      val;
    }
    function handlerCurrentChange(val) {
      val;
    }
    return {
      data,
      props,
      root,
      handlerSelectionChange,
      handlerSizeChange,
      handlerCurrentChange,
      add,
      mo,
      ded,
    };
  },
};
</script>

<style scoped>
.ones {
  background-color: aquamarine;
  width: 500px;
}
.pull-right {
  float: right;
}
.width-160 {
  width: 160px;
  display: inline;
}
.width-100 {
  width: 100px;
  display: inline;
}
.width-180 {
  width: 180px;
  display: inline;
}
el-col {
  height: 200px;
}
</style>
