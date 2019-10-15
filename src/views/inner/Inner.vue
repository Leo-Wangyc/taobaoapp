<template>
  <div class="inner">
<!--    商品图部分-->
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
    <div class="back" @click="backClick">
      <img src="@/assets/img/inner/back.svg">
    </div>
    <div class="cart" @click="cartClick">
      <img src="@/assets/img/inner/cart.svg">
    </div>

<!--    商品信息部分-->
    <div class="info">
      <div class="price">
        <div class="realPrice">
          <span class="isRed">￥</span>
          <span class="priceNum isRed">367-778</span>
          <span class="priceAds isRed">热卖促销</span>
          <span class="priceAds isRed">淘金币抵2%</span>
        </div>
        <div class="originPrice">
          <span>价格：￥</span>
          <span class="line-through">736-1558</span>
        </div>
      </div>
      <div class="name">
        <div class="nameText">vjvj X21S 水滴全面屏全新正品安卓游戏全网通4G超薄智能一体手机</div>
        <a href="#">
          <div class="nameShare">
            <img src="@/assets/img/inner/share.svg">
            <span>分享</span>
          </div>
        </a>
      </div>
      <div class="other">
        <div class="shipping">快递：免运费</div>
        <div class="people">月销1520</div>
        <div class="place">广东深圳</div>
      </div>
    </div>

<!--    相关选项部分-->
    <a href="#" class="Option_serve">
      <span class="Option_name">服务</span>
      <span class="Option_content">48小时内发货 · 7天无理由 · 运费险</span>
      <span class="right_arr">
        <img src="@/assets/img/inner/right_arr.svg">
      </span>
    </a>
    <a href="#" class="Option_standard">
      <span class="Option_name">规格</span>
      <span class="Option_content">请选择 机身颜色 版本类型 套餐类型 存储容量</span>
      <span class="right_arr">
        <img src="@/assets/img/inner/right_arr.svg">
      </span>
    </a>
    <div class="Option_parameter">
      <span class="Option_name">参数</span>
      <span class="Option_content">网络类型 品牌...</span>
      <span class="right_arr">
        <img src="@/assets/img/inner/right_arr.svg">
      </span>
    </div>

<!--    宝贝评价，问大家-->
    <div class="comment_bar">
      <span class="commentText">宝贝评价（140）</span>
      <span class="seeAll">查看全部</span>
      <span class="right_arr">
        <img src="@/assets/img/inner/right_arr_color.svg">
      </span>
    </div>
    <div class="comment_content">
      <div class="comment_content_header">
        <img src="@/assets/img/inner/touxiang.png">
        <span>柏**9</span>
      </div>
      <div class="comment_content_content">
        各个方面，说实话，真的挺不错的，价格实惠，使用起来手感很好，是正品，手机质量...
      </div>
    </div>
    <div class="ask_people">
      <div class="comment_bar">
        <span class="commentText">问大家（58）</span>
        <span class="seeAll">查看全部</span>
        <span class="right_arr">
        <img src="@/assets/img/inner/right_arr_color.svg">
      </span>
      </div>
    </div>

<!--    店铺信息-->
    <div class="shop_info">
    </div>

<!--    详情栏-->
    <div class="details">
      <span class="line"></span>
      <span>详情页</span>
      <span class="line"></span>
    </div>

    <!--  图片区-->
    <div class="images">
      <img src="@/assets/img/inner/img1.png">
      <img src="@/assets/img/inner/img2.png">
      <img src="@/assets/img/inner/img3.png">
      <img src="@/assets/img/inner/img4.png">
      <img src="@/assets/img/inner/img5.png">
      <img src="@/assets/img/inner/img6.png">
      <img src="@/assets/img/inner/img7.png">
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
    },
    methods:{
      cartClick(){
        this.$router.push('/cart')
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style>
  a{
    text-decoration: none;
  }
  .VueCarousel-pagination{
    display: none !important;
  }
  html{
    font-size: 16px;
  }
  .line{
    display: inline-block;
    width: 0.4rem;
    border-top: 0.01rem solid #ff0006;
  }
  .line-through{
    text-decoration: line-through;
  }
  .isRed{
    color: #FF4E22;
  }
  .inner{
    position: absolute;
    height: auto;
    width: 100%;
    background-color: #F8F8F8;
    z-index: 99;
    overflow: hidden;
  }

  .index-carousel{
    height: auto;
    position: relative;
    overflow: hidden;
    background-color: #F4F4F4;
    max-height: 600px;
    display: block;
  }
  .index-carousel .slide{
    height: auto;
  }
  .index-carousel img{
    width: 100%;
    height: auto;
    max-width: 600px;
  }

  /*返回按钮*/
  .back{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgba(99,99,99,0.6);
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .back img{
    height: 25px;
    width: 25px;
    margin-top: 3px;
    margin-left: 2px;
  }

  /*购物车按钮*/
  .cart{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgba(99,99,99,0.6);
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .cart img{
    height: 25px;
    width: 25px;
    margin-top: 3px;
    margin-left: 2px;
  }

  /*商品信息部分*/
  .info{
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 20px 15px 15px 15px;
  }
  .realPrice .priceNum{
    font-size: 24px;
  }
  .realPrice .priceAds{
    font-size: 0.09rem;
    line-height: 1;
    display: inline-block;
    background-color: #FFF1EB;
    border-radius: 10px;
    padding: 0 8px;
    margin: 0px 5px;
  }
  .originPrice{
    font-size: 0.12rem;
    color: #aaaaaa;
  }
  .name{
    margin-top: 10px;
    padding-right: 70px;
    position: relative;
  }
  .nameText{
    color: #333333;
    font-weight: bold;
    font-size: 15px;
  }
  .nameShare{
    position: absolute;
    background-color: #f4f4f4;
    padding: 0 10px;
    border-radius: 10px;
    width: 56px;
    height: 24px;
    color: #999999;
    font-size: 13px;
    text-align: center;
    line-height: 24px;
    vertical-align: top;
    right: -22px;
    top: 5px;
  }
  .nameShare span{
    vertical-align: top;
  }
  .nameShare img{
    height: 16px;
    width: auto;
    margin-top: 5px;
    margin-right: 3px;
    vertical-align: top;
  }

  .other{
    display: flex;
    color: #aaaaaa;
    margin-top: 10px;
    font-size: 0.12rem;
  }
  .other .people{
    display: inline-block;
    vertical-align: top;
    flex: 1;
    text-align: center;
  }

  .Option_serve{
    height: 1.1rem;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    line-height: 1.1rem;
  }
  .Option_name{
    font-size: 0.14rem;
    color: #ccc;
    height: 1.0rem;
    width: 1.5rem;
    text-align: center;
  }
  .Option_content{
    flex: 1;
    color: #333333;
  }
  .right_arr{
    width: 0.8rem;
  }
  .right_arr img{
    height: 0.3rem;
    width: auto;
    margin-top: 0.01rem;
  }

  .Option_standard{
    background-color: #fff;
    margin-top: 10px;
    height: 1.1rem;
    display: flex;
    line-height: 1.1rem;
  }
  .Option_parameter{
    background-color: #fff;
    height: 1.1rem;
    display: flex;
    line-height: 1.1rem;
  }

  /*宝贝评价*/
  .comment_bar{
    margin-top: 0.3rem;
    height: 1.2rem;
    background-color: #ffffff;
    text-align: center;
    line-height: 1.2rem;
    display: flex;
  }
  .comment_bar .commentText{
    height: 0.3rem;
    margin-left: 0.4rem;
    color: #333333;
  }
  .comment_bar .seeAll{
    position: absolute;
    right: 1rem;
    color: #FF5000;
  }
  .comment_bar .right_arr{
    margin-top: 1px;
    margin-left: -0.2rem;
    position: absolute;
    right: 0.3rem;
  }

  .comment_content{
    background-color: #fff;
    height: 2.4rem;
    color: #333333;
    overflow: hidden;
  }
  .comment_content .comment_content_header img{
    height: 0.7rem;
    width: auto;
    vertical-align: middle;
    margin-left: 0.3rem;
  }
  .comment_content .comment_content_header span{
    color: #999999;
    font-size: 0.15rem;
  }
  .comment_content .comment_content_content{
    color: #333333;
    margin-left: 0.3rem;
    line-height: 0.45rem;
  }


  /*问大家*/
  .ask_people{
    height: 110px;
    background-color: #fff;
  }

  /*商家信息*/
  .shop_info{
    height: 110px;
    margin-top: 10px;
    background-color: #fff;
  }

  /*详情栏*/
  .details{
    height: 20px;
    margin:8px 0;
  }
  
  .images img{
    display: block;
    width: 100%;
    margin: 0 auto;
    min-height: 0.5rem;
  }
</style>