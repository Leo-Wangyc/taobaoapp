<template>
  <div id="homepage">
    <nav-bar path="/searchpage">
      <img id="taobao" src="@/assets/img/navbar/taobao.svg" slot="left">
      <div class="search" slot="right">
        <div class="search_side"></div>
        <div class="search_text">
          <div class="img"><img src="@/assets/img/navbar/search.svg" alt=""></div>
          <div class="span"><span>寻找宝贝店铺</span></div>
        </div>
        <div class="search_side"></div>
      </div>
    </nav-bar>
    <carousel class="index-carousel"
              :autoplay="true" :minSwipeDistance="40"
              :scrollPerPage="true" :speed="500"
              :perPage="1" :paginationPadding="10"
              :paginationSize="10" :loop="true">
      <slide>
        <img src="../../assets/img/carousel/carousel1.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/carousel/carousel2.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/carousel/carousel3.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/carousel/carousel4.jpg">
      </slide>
    </carousel>
    <tens></tens>
    <div class="scrollWrap">
      <img src="@/assets/img/scrollwrap/taobaotoutiao.png">
      <scroll-wrap class="scroll-wrap"></scroll-wrap>
      <scroll-wrap class="scroll-wrap_2"></scroll-wrap>
    </div>
    <img class="buy" src="@/assets/img/buy/buy.png">
    <img class="buy" src="@/assets/img/buy/buy.png">
    <img class="buy" src="@/assets/img/buy/buy.png">
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import { Carousel, Slide } from 'vue-carousel';
  import Tens from "./Tens";
  import ScrollWrap from "./ScrollWrap";

  export default {
    name: "HomePage",
    components:{
      NavBar,
      Carousel,
      Slide,
      Tens,
      ScrollWrap
    }
  }
</script>

<style>
  @import "../../assets/css/homepage.css";
</style>