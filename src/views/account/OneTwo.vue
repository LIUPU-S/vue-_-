<template>
  <div>
    <el-button type="danger">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row>
      <el-col :span="10">
        <div class="category-list">
          <el-tree
            @node-click="handlerNodeClick"
            :data="data.tree_data"
            :props="data.defaultProps"
            default-expand-all
            :expand-on-click-node="false"
          >
            <template #default="{ node }">
              <div class="custom-tree-node">
                <apan>{{ node.label }}</apan>
                <span>
                  <el-button type="danger" round>添加子集</el-button>
                  <el-button type="success" round>编辑</el-button>
                  <el-button round>删除</el-button>
                </span>
              </div>
            </template>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="10">
        <h4 class="column">分类名称</h4>
        <el-form label-width="100px">
          <el-form-item label="父级分类">
            <el-input style="width: 20%"></el-input>
          </el-form-item>
          <el-form-item label="子级分类">
            <el-input style="width: 20%"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button type="danger">确定</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "InfoCategory",
  components: {},
  props: {},
  setup(props) {
    const data = reactive({
      tree_data: [
        {
          text: "一级1",
          children: [
            {
              text: "二级1-1",
              children: [
                {
                  text: "三级1-1-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "text",
      },
    });
    const handlerNodeClick = () => {};
    return {
      props,
      data,
      handlerNodeClick,
    };
  },
};
</script>

<style scoped>
.spacing-hr {
  border: none;
  border-top: 1px solid #e9e9e9;
  margin: 30px 0;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}
:deep(.el-tree-node__content) {
  height: auto;
}
button {
  padding: 8px 12px;
  margin: 8px 3px;
  font-size: 12px;
  height: auto;
}
.column {
  height: 44px;
  padding: 0 20px;
  margin-bottom: 30px;
  line-height: 44px;
  border-radius: 6px;
  background-color: #f3f3f3;
}
</style>
