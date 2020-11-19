<template>
    <div>
      <h2>我是profile</h2>
      <p>我是内容，嘿嘿</p>
      <p>{{$route.query}}</p>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.hight}}</p>
      <p v-for="item in $route.query">{{item}}</p>
    </div>
</template>

<script>
  export default {
    name: "new",
    // created() {//创建组件时回调
    //   console.log("created");
    //   document.title = '档案'
    // }
  };
</script>

<style scoped lang="less">

</style>
