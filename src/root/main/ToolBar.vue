<template>
<el-header class="page-header">
  <div id="logo">SWISS</div>
  <nav class="nav">
    <el-popover ref="book" trigger="hover">
      <div class="popover">
        <div>
          a
        </div>
        <div>
          b
        </div>
        <div>
          c
        </div>
        <div>
          d
        </div>
        <div>
          e
        </div>
      </div>
    </el-popover>

    <el-button v-popover:book>预定</el-button>
    <el-button>准备</el-button>
    <el-button>飞行</el-button>
    <el-button>探索</el-button>
  </nav>
  <div id="login">
    <router-link to="/login">登录</router-link>
  </div>
</el-header>
</template>

<script>
export default {
  data() {
    return {
      age: 20,
    }
  },
}
</script>

<style scoped>
.page-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
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

.popover {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: cyan;
}

.popover>div {
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
</style>
