<template lang="pug">
g-h(j-c="center" class="login")
  g-v
    g-v(class="login-body")
      router-link(to="/login/register" class="register") 注册
      div(class="title") 用户登录
      el-input(
                placeholder="用户名" clearable v-model="username"
                :class="{required: required.username}"
                @input="passRequiredCheck('username', $event)"
              )
      el-input(
                placeholder="密码" clearable type="password" v-model="password"
                :class="{required: required.password}"
                @input="passRequiredCheck('password', $event)"
              )
      el-checkbox(class="remember" label="记住我" v-model="toRemember")
      g-h(j-c="center")
        el-button(type="primary" round :loading="loading"
                  @click="login" class="login-button") 登录

</template>

<script>
import api from "app/api"

export default {
  data() {
    return {
      required: {
        username: false,
        password: false,
      },
      toRemember: false,
      username: "",
      password: "",
      loading: false,
    }
  },
  methods: {
    passRequiredCheck(key, text) {
      if (this[key] === "") {
        this.required[key] = true
        return false
      } else {
        this.required[key] = false
        return true
      }
    },
    login() {
      // check input
      let checkList = ["username", "password"]
      for (let k of checkList) {
        if (!this.passRequiredCheck(k)) {
          return
        }
      }

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
  }
}
</script>

<style lang="stylus" scoped>
.login-body
  margin: 0 2rem
  width: 100%
  >.el-input
    border-radius: 0 

.title
  text-align: center
  margin-top: 1rem

.required
  border: 2px solid #f00

.register
  align-self: flex-end
  margin-top: 1rem
  color: #ff6700

.login-body>.el-input
  margin-top: 0.7rem
  background: cyan

.remember
  margin-top: 0.5rem

.login-button
  margin-top: 1rem
  width: 7rem
</style>
