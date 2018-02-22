<template>
  <header>
    <img src="image/lion.svg" alt="logo"/>
    <ul class="header-item-group">
      <li class="header-item">发现音乐</li>
      <li class="header-item">我的音乐</li>
      <li class="header-item">朋友</li>
      <li class="header-item">商城</li>
      <li class="header-item">音乐人</li>
      <li class="header-item">下载客户端</li>
    </ul>
    <input type="search" placeholder="enter sth"/>
  </header>
</template>

<script>
export default {
  data() {
    return {
      age:20,
    }
  },
}
</script>

<style scoped>
  header {
    display: flex;
    font-size: 1.3rem;
    height: 5.9rem;
    color: white;
    background-color: #292929;
  }

  .header-item-group {
    display: flex;
    list-style-type: none;
  }

  .header-item {
    justify-content: space-around;
  }

  input[type="search"] {
    height: 50%;
    border-radius: 5rem;
    border-color: #0f0;
  }
</style>
