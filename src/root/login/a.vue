<template>
<!-- 登录页 -->
<div>
  <div id="login-section">
    <div id="login-body">
      <el-row type="flex" justify="end">
        <el-button type="text" @click="changeToRegister" id="register">注册</el-button>
      </el-row>
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

<script>
import api from "app/api"

export default {
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
}
</script>

<style scoped>
#login-body {
  margin: 0 2rem;
}

#title {
  text-align: start;
  margin-top: 1rem;
}

#register {
  text-align: end;
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
  width: 60%;
}
</style>
