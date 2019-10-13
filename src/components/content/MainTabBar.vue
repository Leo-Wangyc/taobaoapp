<template>
  <tab-bar>
    <tab-bar-item path="/homepage">
      <img slot="item-icon" src="@/assets/img/tabbar/homepage.svg">
      <img slot="item-icon-click" src="../../assets/img/tabbar/homepage_click.svg">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg">
      <img slot="item-icon-click" src="../../assets/img/tabbar/cart_click.svg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/list">
      <img slot="item-icon" src="@/assets/img/tabbar/list.svg">
      <img slot="item-icon-click" src="../../assets/img/tabbar/list_click.svg">
      <div slot="item-text">订单列表</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="@/assets/img/tabbar/mine.svg">
      <img slot="item-icon-click" src="../../assets/img/tabbar/mine_click.svg">
      <div slot="item-text">我的淘宝</div>
    </tab-bar-item>
    <tab-bar-item path="/more">
      <img slot="item-icon" src="@/assets/img/tabbar/more.svg">
      <img slot="item-icon-click" src="../../assets/img/tabbar/more_click.svg">
      <div slot="item-text">更多</div>
    </tab-bar-item>
  </tab-bar><!-- 此处的tab-bar为TabBar.vue里面的el即id值-->
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "./TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    }
  }
</script>


<style scoped>

</style>