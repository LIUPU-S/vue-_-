import { reactive } from "vue";
export function configHook() {
  const config = reactive({
    selection: true,
    batch_delete: true,
    pagination: true,
  });
  return {
    config,
  };
}
