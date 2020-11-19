<template>
  <div id="nav">
    <!-- active-class: 能修改被点击后所赋予的class属性值 -->
    <!-- tag：修改渲染的标签、replace：修改跳转模式  属性在cli4中无法进行使用 -->
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="'/user/' + userId">User</router-link> |
    <router-link :to="{path: '/profile', query:{name: 'why', age: 18, hight: 1.88}}">profile</router-link>
    <br><br>
    <!-- 通过代码来跳转路由 -->
    <button @click="homeclick">Home</button> |
    <button @click="aboutclick">About</button> |
    <button @click="userclick">User</button> |
    <button @click="profileclick">profile</button>
  </div>

  <keep-alive include="Home">
      <router-view></router-view>
  </keep-alive>

</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      homeclick() {
        //通过代码方式修改路由 vue-router
        //$router是拿出根router
        this.$router.push('/home');

        // console.log('asd')
      },
      aboutclick() {
        // this.$router.push('/about');
        //通过replace进行修改 replace修改后无法进行后退
        this.$router.replace('/about');

        // console.log('22sd')
      },
      userclick() {
        // console.log('123')
        this.$router.push('/user/' + this.userId);
      },
      profileclick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'koby',
            age: 20,
            high: 1.90
          }
        });
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
