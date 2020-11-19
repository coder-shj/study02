<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>我是首页，嘿嘿嘿</p>
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      message: '你好啊',
      path: '/home/news'
    }
  },
  created() {//创建组件时回调
    console.log("home created");
    
    // document.title = '首页'
  },
  unmounted() {//创建组件时回调
    console.log("home unmounted");
  },
  activated() {
    console.log(this.path)
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {//在
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
  // mounted() {//template挂载到DOM上时候回调
  //   console.log("mounted");
  // },
  // updated() {//界面发生刷新时回调
  //   console.log("updated")
  // }
}
</script>
