<template>
<main>
  <g-h justify-content="space-around" align-items="center">
    <div id="logo">SWISS</div>
    <nav class="nav">
      <el-button>预定</el-button>
      <el-button>准备</el-button>
      <el-button>飞行</el-button>
      <el-button>探索</el-button>
    </nav>
    <div id="login">
      <router-link to="/login">登录</router-link>
    </div>
  </g-h>
</main>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello vue!",
    }
  },
}
</script>

<style scoped>
main {
  width: 100%;
}

#logo {
  font-size: 2rem;
  color: red;
}

.nav {
  margin-left: -30rem;
}

.nav>.el-button {
  font-size: 1.3rem;
  border-style: none;
}

.nav>.el-button:hover {
  background-color: transparent;
  color: red;
}

#login {
  font-size: 1.5rem;
}

#login a:hover {
  color: red;
}
</style>
