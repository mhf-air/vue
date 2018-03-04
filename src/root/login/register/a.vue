<template>
<!-- 注册页 -->
<div>
  <div id="outer">
    <div id="inner">
      注册ABC
    </div>
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
#outer {
  background: silver;
  width: 500px;
  height: 100px;
}

#inner {
  background: cyan;
}
</style>
