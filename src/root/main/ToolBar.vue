<template>
  <header>
    <img src="image/lion.svg" alt="logo" class="web-logo"/>
    <ul class="header-item-group">
      <li class="header-item">发现音乐</li>
      <li class="header-item">我的音乐</li>
      <li class="header-item">朋友</li>
      <li class="header-item">商城</li>
      <li class="header-item">音乐人</li>
      <li class="header-item">下载客户端</li>
    </ul>
    <input type="search" placeholder="enter sth" class="web-search"/>
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
    align-items: center;
    justify-content: flex-start;
    font-size: 1.3rem;
    height: 5rem;
    color: white;
    background-color: #292929;
  }

  .web-logo {
    width: 7rem;
    height: 70%;
    background-color: green;
  }

  .header-item-group {
    display: flex;
    list-style-type: none;
  }

  .header-item {
    justify-content: space-evenly;
  }

  .web-search {
    height: 50%;
    border-radius: 5rem;
    border-color: #0f0;
  }
</style>
