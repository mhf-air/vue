<template>
<!-- 登录页 -->
<div id="app">
  <div id="login-section">
    <div id="login-body">
      <el-button type="text" @click="changeToRegister" id="register">注册</el-button>
      <div id="title">用户登录</div>
      <el-input placeholder="用户名" clearable v-model="username" />
      <el-input placeholder="密码" clearable type="password" v-model="password" />
      <el-checkbox v-model="toRemember" label="记住我" id="remember" />
    </div>
    <el-row type="flex" justify="center">
      <el-button type="primary" round :loading="loading" @click="login" id="login-button">登录</el-button>
    </el-row>
  </div>
</div>
</template>

<script lang="ts">
import api from "app/api"

export default Vue.extend({
  data() {
    return {
      toRemember: false,
      username: "",
      password: "",
      loading: false,
    }
  },
  methods: {
    login() {
      this.loading = true
      api.Login({
          username: this.username,
          password: this.password,
        })
        .then((data) => {
          console.log(data)
          this.$router.push("/")
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
    changeToRegister() {
      this.$router.push("/login/register")
    },
  }
})
</script>

<style scoped>
@media (min-width:600px) {
  #login-section {
    width: 20%;
  }
}

#app {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}

#login-section {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  /* background-color: green; */
}

#login-body {
  display: flex;
  flex-flow: column wrap;
  margin: 0 2rem;
  width: 100%;
  /* background-color: cyan; */
}

#title {
  text-align: center;
  margin-top: 1rem;
}

#register {
  align-self: flex-end;
  margin-top: 1rem;
}

#login-body>.el-input {
  background-color: cyan;
  margin-top: 0.7rem;
}

#remember {
  margin-top: 0.5rem;
}

#login-button {
  margin-top: 1rem;
}
</style>
