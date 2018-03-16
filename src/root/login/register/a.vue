<template>
<!-- 注册页 -->
<div>
  <div id="outer">
    <div id="a" class="inner">
      <button>button</button>
    </div>
    <div id="b" class="inner">a</div>
    <div id="c" class="inner">a</div>
    <div id="d" class="inner">a</div>
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
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
  }
})
</script>

<style scoped>
#outer {
  background: silver;
  width: 300px;
  height: 100px;
  display: flex;
}

.inner {
  /* background: green; */
}

#a {
  background: cyan;
}

#a>button {
  height: 100%;
}

#b {
  background: red;
}

#c {
  background: green;
}

#d {
  background: orange;
}
</style>
