<template>
<!-- 注册页 -->
<div>
  <div id="login-section">
    注册
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
