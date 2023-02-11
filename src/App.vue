<template>
  <!-- <nav>
    <router-link to="/">登陆页面</router-link> |
    <router-link to="/list">列表页面</router-link> |
    <router-link to="/onetwo">树形列表</router-link> |
    <router-link to="/tainfo">组件封装</router-link> |
  </nav> -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>

  <!-- <el-button type="primary">hahahaha</el-button> -->
</template>
<script>
import { zhTw } from "element-plus/lib/locale/lang/zh-cn";
export default {
  name: "App",
  setup() {
    let locale = zhTw;
    return {
      locale,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
