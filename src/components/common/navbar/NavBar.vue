<template>
  <div class="nav-bar">

    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="right" @click="searchClick">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      path:String
    },
    methods:{
      searchClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 34px;
    background-color: #FF8529;
    box-shadow: 0 1px 1px rgba(100,100,100,0.3);
  }
  .left{
    width: 40px;
  }
  .right{
    width: 60px;
    flex: 1;
  }
</style>