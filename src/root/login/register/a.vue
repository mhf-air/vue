<template lang="pug">
div hello
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

<style lang="stylus" scoped>
</style>
