<template>
  <div class="inner">
    <carousel class="index-carousel" :autoplay="true"
              :minSwipeDistance="40" :scrollPerPage="true"
              :speed="500" :perPage="1" :paginationPadding="10"
              :paginationSize="10" :loop="true" @param="right">
      <slide class="slide">
        <img src="@/assets/img/inner/shouji1.png">
      </slide>
      <slide class="slide">
        <img src="@/assets/img/inner/shouji2.png">
      </slide>
      <slide class="slide">
        <img src="@/assets/img/inner/shouji3.png">
      </slide>
      <slide class="slide">
        <img src="@/assets/img/inner/shouji4.png">
      </slide>
    </carousel>
    <div class="back">
      <img src="@/assets/img/inner/back.svg">
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: "Inner",
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style scoped>
  .inner{
    height: 100%;
    background-color: #fff;
    z-index: 9;
  }

  .index-carousel{
    height: 390px;
    position: relative;
    overflow: hidden;
    background-color: #F4F4F4;
  }
  .index-carousel .slide{
    height: 390px;
  }
  .index-carousel img{
    width: 100%;
    height: auto;
  }

  /*返回按钮*/
  .back{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #999999;
  }
  .back img{
    height: 25px;
    width: 25px;
  }

</style>