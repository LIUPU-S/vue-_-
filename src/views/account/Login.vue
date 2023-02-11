<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { reactive, ref } from "vue";
export default {
  setup(props, { root }) {
    const data = reactive({
      tab_menu: [
        { type: "lgoin", label: "登陆" },
        { type: "register", label: "注册" },
      ],
    });

    const form = reactive({
      item: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
    });
    let current_menu = ref(data.tab_menu[0].type);
    const toggleMenu = (type) => {
      current_menu.value = type;
    };
    return {
      props,
      root,
      data,
      current_menu,
      toggleMenu,
      form,
    };
  },
};
</script>

<template>
  <div id="login">
    <div class="from-wrap">
      <ul class="menu-tab">
        <li
          @click="toggleMenu(item.type)"
          v-for="item in data.tab_menu"
          :key="item.type"
          :class="{ current: current_menu === item.type }"
        >
          {{ item.label }}
        </li>
      </ul>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <label class="form-label">用户名</label>
          <el-input v-model="form.item.username"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">密码</label>
          <el-input type="password" v-model="form.item.password"></el-input>
        </el-form-item>
        <el-form-item prop="passwords" v-if="current_menu === 'register'">
          <label class="form-label">重输密码</label>
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input v-model="form.item.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button type="success" class="el-button-bolck"
                >获取验证码</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <router-link to="/list" class="el-button-bolck">
            <el-button type="primary" @click="submit" class="el-button-bolck"
              >登陆</el-button
            ></router-link
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.from-wrap {
  width: 320px;
  padding-top: 100px;
  margin: auto;
}
.menu-tab {
  text-align: center;
}
li {
  display: inline-block;
  padding: 10px 24px;
  margin: 0 10px;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}
.current {
  background-color: rgba(0, 0, 0, 0.1);
}
.form-label {
  display: block;
  color: #fff;
  font-size: 14px;
}
.el-button-bolck {
  display: block;
  width: 100%;
}
</style>
