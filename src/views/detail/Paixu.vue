<template>
  <div class="total">
    <div class="itemsList">
      <div class="singleItem" @click="itemClick">
        <div class="left">
          <img src="@/assets/img/detail/yulantu.jpeg">
        </div>
        <div class="right">
          <div class="name">6+128G内存6.3英寸水滴全面屏安卓智能手机</div>
          <div class="price">
            <span class="final">￥368</span>
            <span class="origin">￥736</span>
          </div>
          <div class="others">
            <span class="shipping">免运费</span>
            <span class="people">1290人付款</span>
            <span class="place">深圳</span>
          </div>
        </div>
      </div>
      <div class="singleItem" @click="itemClick">
        <div class="left">
          <img src="@/assets/img/detail/yulantu.jpeg">
        </div>
        <div class="right">
          <div class="name">6+128G内存6.3英寸水滴全面屏安卓智能手机</div>
          <div class="price">
            <span class="final">￥368</span>
            <span class="origin">￥736</span>
          </div>
          <div class="others">
            <span class="shipping">免运费</span>
            <span class="people">1290人付款</span>
            <span class="place">深圳</span>
          </div>
        </div>
      </div>
      <div class="singleItem" @click="itemClick">
        <div class="left">
          <img src="@/assets/img/detail/yulantu.jpeg">
        </div>
        <div class="right">
          <div class="name">6+128G内存6.3英寸水滴全面屏安卓智能手机</div>
          <div class="price">
            <span class="final">￥368</span>
            <span class="origin">￥736</span>
          </div>
          <div class="others">
            <span class="shipping">免运费</span>
            <span class="people">1290人付款</span>
            <span class="place">深圳</span>
          </div>
        </div>
      </div>
      <div class="singleItem" @click="itemClick">
        <div class="left">
          <img src="@/assets/img/detail/yulantu.jpeg">
        </div>
        <div class="right">
          <div class="name">6+128G内存6.3英寸水滴全面屏安卓智能手机</div>
          <div class="price">
            <span class="final">￥368</span>
            <span class="origin">￥736</span>
          </div>
          <div class="others">
            <span class="shipping">免运费</span>
            <span class="people">1290人付款</span>
            <span class="place">深圳</span>
          </div>
        </div>
      </div>
      <div class="singleItem" @click="itemClick">
        <div class="left">
          <img src="@/assets/img/detail/yulantu.jpeg">
        </div>
        <div class="right">
          <div class="name">6+128G内存6.3英寸水滴全面屏安卓智能手机</div>
          <div class="price">
            <span class="final">￥368</span>
            <span class="origin">￥736</span>
          </div>
          <div class="others">
            <span class="shipping">免运费</span>
            <span class="people">1290人付款</span>
            <span class="place">深圳</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Paixu",
    methods:{
      itemClick(){
        this.$router.push('/inner')
      }
    },
  }
</script>

<style scoped>
  .total{
    z-index: 9;
    background-color: #fff;
    height: 100%;
  }
  .itemsList{
    height: auto;
    width: 100%;
  }
  .singleItem{
    height: 106px;
    width: 100%;
    border-bottom: 1px #ccc solid;
    display: flex;
    padding: 12px 6px;
  }
  .singleItem .left{
    height: 115px;
    width: 115px;
    padding-left: 10px;
    padding-top: 5px;
  }
  .singleItem .left img{
    height: 100px;
    width: 100px;
  }
  .singleItem .right{
    flex: 1;
    padding-right: 20px;
  }
  .singleItem .right .name{
    font-size: 15px;
    margin-top: 10px;
    font-weight: bold;
    color: #333333;
  }
  .singleItem .right .price{
    margin-top: 8px;
  }
  .singleItem .right .price .final{
    color: #FF4E22;
    font-size: 18px;
  }
  .singleItem .right .price .origin{
    color: #999999;
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .singleItem .right .others{
    margin-top: 8px;
    font-size: 12px;
    color: #999999;
    display: flex;
  }
  .singleItem .right .others .shipping{
    width: 40px;
  }
  .singleItem .right .others .people{
    flex: 1;
    text-align: center;
  }
  .singleItem .right .others .place{
    width: 40px;
  }
</style>