import { ElButton, ElSwitch, ElForm, ElFormItem, ElInput } from "element-plus";
// 导出
export default (app) => {
  app.use(ElButton);
  app.use(ElSwitch);
  app.use(ElForm);
  app.use(ElFormItem);
  app.use(ElInput);
};
