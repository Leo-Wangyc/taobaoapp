<template>
  <carousel>
    <slide>
      轮播的内容。
    </slide>
    <slide>
      Slide 2 Content
    </slide>
  </carousel>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: "Carousel",
    components:{
      Carousel,
      Slide
    }
  }
</script>

<style scoped>

</style>