<!-- eslint-disable vue/no-unused-vars -->
<template>
  <el-button type="danger">添加一级分类</el-button>
  <hr class="spacing-hr" />
  <el-row>
    <el-col :span="17">
      <div>
        <el-tree
          :data="data.tree_data"
          :props="data.defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
        >
          <template #default="{ node, data }">
            <div class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <el-button type="danger">添加子集</el-button>
                <el-button type="success">编辑</el-button>
                <el-button round>删除</el-button>
              </span>
            </div>
          </template>
        </el-tree>
      </div>
    </el-col>

    <el-col :span="18">输入框</el-col>
  </el-row>
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
          text: "一级1aaaa",
          childen: [
            {
              text: "二级1-1",
            },
          ],
        },
      ],
      defaultProps: {
        childen: "childen",
        label: "text",
      },
    });
    const handleNodeClick = () => {};
    return {
      data,
      handleNodeClick,
      props,
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
  button {
    padding: 8px 12px;
    margin: 8px 3px;
    font-size: 12px;
    height: auto;
  }
}
</style>
