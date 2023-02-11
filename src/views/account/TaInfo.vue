<script>
import { reactive } from "vue";
import BasisTable from "./TableIndex.vue";
export default {
  name: "infoIdex",
  components: { BasisTable },
  setup() {
    const table_config = reactive({
      table_header: [
        { label: "标题", prop: "title" },
        { label: "类别", prop: "category" },
        { label: "日期", prop: "create_date" },
        { label: "发布状态", prop: "status" },
      ],
    });
    return {
      table_config,
    };
  },
};
</script>

<template>
  <div>
    <BasisTable :columns="table_config.table_header"></BasisTable>
  </div>
</template>
