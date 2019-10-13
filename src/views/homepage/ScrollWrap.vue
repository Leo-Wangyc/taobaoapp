<template>
  <div class="scroll-wrap">
    <ul class="scroll-content" :style="{ top }">
      <li v-for="item in prizeList">{{item.name}}</li >
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        prizeList: [
          { name: '糖酥饼真香警告|食说' },
          { name: '绿萝营养水真的有用吗？仅为传闻?' },
          { name: '都是四驱SUV，为什么你那么秀' },
          { name: '这道减肥菜吃了让你胖五斤，快来吃' },
          { name: '夏日降温偏方，带给你赤道般的温暖' }
  ],
  activeIndex: 0
  }
  },

  computed: {
  top() {
    return - this.activeIndex * 50 + 'px';
  }
  },

  mounted() {
  setInterval(_ => {
  if(this.activeIndex < this.prizeList.length) {
    this.activeIndex += 1;
  } else {
      this.activeIndex = 0;
    }
  }, 1000);
  }
  };
  </script>

    <style scoped>
    .scroll-wrap{
      width: 300px;
      height: 50px;
      overflow: hidden;
  }

  .scroll-content {
    position: relative;
    transition: top 0.5s;
  }

  li{
    line-height: 50px;
    list-style: none;
    font-size: 12px;
  }
</style>