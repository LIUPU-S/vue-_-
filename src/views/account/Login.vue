<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { reactive, ref } from "vue";
export default {
  name: "Login",
  props: {},
  setup(props, { root }) {
    const data = reactive({
      tab_menu: [
        { type: "login", label: "登录" },
        { type: "register", label: "注册" },
      ],
    });
    const toggleMenu = (type) => {
      current_menu.value = type;
    };
    const form = reactive({
      item: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
    });
    const add = () => {
      alert("bost");
    };
    let current_menu = ref(data.tab_menu[0].type);
    return {
      data,
      current_menu,
      toggleMenu,
      add,
      props,
      root,
      form,
    };
  },
};
</script>
<template>
  <div id="login">
    <div class="form-wrap">
      <ul class="menu-tab">
        <li
          @click="add"
          :class="{ current: data.current_menu === item.type }"
          v-for="item in data.tab_menu"
          :key="item.type"
        >
          {{ item.label }}
        </li>
      </ul>
      <el-form ref="form" :model="form">
        <el-form-item>
          <label class="form-label">用户名</label>
          <el-input v-model="form.item.username"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">密码</label>
          <el-input type="password" v-model="form.item.password"></el-input>
        </el-form-item>
        <el-form-item v-show="current_menu === 'refgister'">
          <label class="form-label">确认密码</label>
          <el-input type="password" v-model="form.item.passwords"></el-input>
        </el-form-item>
        <el-form-item>
          <label class="form-label">验证码</label>
          <el-row :gutter="10">
            <el-col :span="14">
              <el-input v-model="form.item.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button class="butn" type="primary">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="butn" type="primary" @click="submit"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.form-wrap {
  width: 320px;
  padding-top: 100px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    padding: 10px 24px;
    margin: 0 10px;
    color: #fff;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    &.current {
      background-color: rgba(199, 135, 135, 0.836);
    }
  }
}
.form-label {
  display: block;
  color: #fff;
  font-size: 14px;
}
.butn {
  display: block;
  width: 100%;
}
</style>
