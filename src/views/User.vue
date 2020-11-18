<template>
    <div>
      <h2>我是User</h2>
      <p>我是User内容，嘿嘿嘿</p>
      <p>{{UserId}}</p>
      <p>{{$route.params.userid}}</p>
    </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      UserId() {
        //$route是获取正处于活跃的路由
        return this.$route.params.userid
      }
    }
  };
</script>

<style scoped lang="less">

</style>
