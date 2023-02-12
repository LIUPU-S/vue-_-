/* eslint-disable prettier/prettier */
import { GetCategory } from "../../views/info/infoCategory.vue";
// eslint-disable-next-line no-unused-vars
const actions = {
  categoryAction() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      GetCategory().then((response) => {
        resolve(response.data);
      });
    });
  },
};

export default {};
