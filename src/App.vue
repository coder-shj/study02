<template>
  <div id="nav">
    <!-- active-class: 能修改被点击后所赋予的class属性值 -->
    <!-- tag、replace属性在cli4中无法进行使用 -->
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/new">new1</router-link>
    <br><br>
    <!-- 通过代码来跳转路由 -->
    <button @click="homeclick">按钮一</button>
    <button @click="aboutclick">按钮二</button>
    <button @click="newclick">按钮三</button>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      homeclick() {
        //通过代码方式修改路由 vue-router
        this.$router.push('/home');

        // console.log('asd')
      },
      aboutclick() {
        // this.$router.push('/about');
        //通过replace进行修改 replace修改后无法进行后退
        this.$router.replace('/about');

        // console.log('22sd')
      },
      newclick() {
        this.$router.push('/new');
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
