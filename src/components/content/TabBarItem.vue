<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isClick"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-click"></slot></div>
        <div :class="{click:isClick}"><slot name="item-text"></slot></div>
    </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
        path:String
    },
    data(){
        return {

        }
    },
    computed:{
        isClick(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .click{
      color: #FF8529;
      transition: 0.2s;
  }
  .tab-bar-item img{
      height: 20px;
      width: auto;
      margin-top: 3px;
      transition: 0.2s;
  }
</style>