import { reactive } from "vue";
export function configHook() {
  const config = reactive({
    seletion: true,
    batch_delete: true,
    pagination: true,
  });
  return {
    config,
  };
}
