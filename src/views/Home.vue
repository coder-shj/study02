<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>我是首页，嘿嘿嘿</p>
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
