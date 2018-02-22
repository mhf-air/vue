<template>
  <header>
    <img src="image/lion.svg" alt="logo" class="web-logo"/>
    <ul class="header-item-group">
      <li class="header-item">发现音乐</li>
      <li class="header-item">我的音乐</li>
      <li class="header-item">朋友</li>
      <li class="header-item">商城</li>
      <li class="header-item">音乐人</li>
    </ul>
    <input type="search" placeholder="搜索" class="web-search"/>
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
    /* background-color: green; */
  }

  .header-item-group {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0 3rem 0 -1rem;
  }

  .header-item {
    margin-right: 1rem;
  }

  .web-search {
    height: 50%;
    border: 1px solid #8F5736;
    border-radius: 0.5rem;
    padding: 0 0.7rem 0 3rem;
    background: no-repeat 0.5rem url(image/search.png);
    color: white;
  }
  .web-search:focus {
    border: none;
    border-radius: 0.5rem;
  }
</style>
