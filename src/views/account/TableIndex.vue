<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable prettier/prettier -->
<template>
    <el-table-column v-for="header in data.render_header" :key="header.prop" :prop="header.prop" :label="header.label"></el-table-column>

</template>

<script>
import { reactive } from "vue";
export default {
  name: "BasisTable",
  components: {},
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const data = reactive({
      table_data: [],
      render_header: props.columns,
    });
    return {
      data,
      props,
    };
  },
};
</script>
