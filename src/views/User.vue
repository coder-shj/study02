<template>
    <div>
      <h2>我是User</h2>
      <p>我是User内容，嘿嘿嘿</p>
      <p>{{UserId}}</p>
      <p>{{$route.path}}</p>
      <button @click="but1click">按钮</button>
    </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      UserId() {
        //$route是获取正处于活跃的路由
        return this.$route.params.id
      }
    },
    methods: {
      but1click() {
        //所有组件都继承自Vue类的原型
        console.log(this.$router)
        console.log(this.$route);
      }
    },
    // created() {//创建组件时回调
    //   console.log("created");
    //   document.title = '用户'
    // }
  };
</script>

<style scoped lang="less">

</style>
