<template>
  <div id="detail">
<!--    外部引入-->
    <div>
      <!--    顶栏-->
      <div class="nav-bar">
        <div class="left">
          <!--顶栏左边整个搜索区域-->
          <div class="searchContents">

            <!--          左边宝贝部分-->
            <div class="treasure" @click="treasureClick">
              <span>宝贝</span>
              <span id="tri">▾</span>
            </div>

            <!--          中间搜索框-->
            <input type="text" class="searchType" value="手机">

            <!--          右边放大镜-->
            <div class="magnifier">
              <img src="@/assets/img/searchpage/magnifer.svg">
            </div>
          </div>
        </div>

        <!--      取消部分-->
        <div class="right" @click="backHome">
          <span>主页</span>
        </div>
      </div>
      <!--    宝贝搜索页面-->
      <div v-if="show" class="treasurePage">
        <div class="treasureItem">
          <div class="treasureImg">
            <img src="@/assets/img/searchpage/baobei.svg">
          </div>
          <a href="#" class="treasureText">宝贝</a>
        </div>
        <div class="treasureItem">
          <div class="treasureImg">
            <img src="@/assets/img/searchpage/dianpu.svg">
          </div>
          <a href="#" class="treasureText">店铺</a>
        </div>
        <div class="treasureItem" id="tianmao">
          <div class="treasureImg">
            <img src="@/assets/img/searchpage/tmall.svg">
          </div>
          <a href="#" class="treasureText">天猫</a>
        </div>
      </div>
    </div>

<!--    排序栏-->
    <div class="screenBar">
      <div class="screenBarLeft">
        <div class="screenBarLeftContent">
          <div class="divs">
            <span><a href="#" :class="{'isRed':isClick_1}" @click="clickItem1">综合排序▾</a></span>
            <span class="spans">|</span>
            <span><a href="#"  :class="{'isRed':isClick_2}" @click="clickItem2">销量优先</a></span>
            <span class="spans">|</span>
            <span>
              <img src="@/assets/img/detail/screen.svg">
                <a href="#" :class="{'isRed':isClick_3}" @click="clickItem3">筛选</a>
             </span>
          </div>
        </div>
      </div>
      <div class="screenBarRight">
        <a href="#">
          <img src="@/assets/img/detail/arrange.svg">
        </a>
      </div>
    </div>

<!--    展示界面-->
    <paixu v-if="isShow_1"></paixu>
    <xiaoliang v-if="isShow_2"></xiaoliang>
    <shaixuan v-if="isShow_3"></shaixuan>
  </div>
</template>

<script>
  import Paixu from "./Paixu";
  import Xiaoliang from "./Xiaoliang";
  import Shaixuan from "./Shaixuan";

  export default {
    name: "Detail",
    data(){
      return {
        show:false,
        isClick_1: true,
        isClick_2: false,
        isClick_3: false,
        isShow_1:true,
        isShow_2:false,
        isShow_3:false,
      }
    },
    methods:{
      treasureClick(){
        this.show= !this.show
      },
      backHome(){
        this.$router.push('/homepage')
      },
      clickItem1(){
        this.isClick_1=true
        this.isClick_2=false
        this.isClick_3=false
        this.isShow_1=true
        this.isShow_2=false
        this.isShow_3=false
      },
      clickItem2(){
        this.isClick_1=false
        this.isClick_2=true
        this.isClick_3=false
        this.isShow_1=false
        this.isShow_2=true
        this.isShow_3=false
      },
      clickItem3(){
        this.isClick_1=false
        this.isClick_2=false
        this.isClick_3=true
        this.isShow_1=false
        this.isShow_2=false
        this.isShow_3=true
      }
    },
    components:{
      Paixu,
      Xiaoliang,
      Shaixuan
    }
  }
</script>

<style scoped>
  /*外界引入*/
  #detail{
    z-index: 9;
    position: absolute;
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
  input{
    outline-style: none;
    border: 0;
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  .nav-bar{
    display: flex;
    height: 45px;
    background-color: #F6F6F6;
    border-bottom: 1px rgba(100,100,100,0.3) solid;
  }
  .left{
    height: 45px;
    flex: 4;
    padding-left: 10px;
  }
  .searchContents{
    height: 32px;
    margin-top: 7px;
    background-color: #E3E3E5;
    border-radius: 5px;
    display: flex;
  }
  .treasure{
    width: 70px;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #999999;
    vertical-align: middle;
  }
  .treasure #tri{
    font-size: 8px;
  }
  .searchType{
    background-color: rgba(1,1,1,0);
    flex: 1;
  }
  .magnifier{
    width: 30px;
  }
  .magnifier img{
    height: 30px;
    width: 100%;
  }
  .right{
    width: 60px;
    flex: 1;
    text-align: center;
    line-height: 45px;
    font-size: 12px;
    color: #333;
  }
  /*宝贝搜索界面*/
  .treasurePage{
    height: 105px;
    width: 140px;
    background-color: #484D50;
    border-radius: 8px;
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 9999;
  }
  .treasureItem{
    height: 35px;
    border-bottom: 1px #666666 solid;
  }
  .treasureImg{
    width: 35px;
    display: inline-block;
    vertical-align: middle;
  }
  .treasureImg img{
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-left: 5px;
  }
  .treasureText{
    line-height: 35px;
    color: #cccccc;
    font-size: 14px;
    display: inline-block;
  }
  #tianmao{
    border-bottom: 0;
  }

  /*本界面内容*/
  /*总体内容*/
  .isRed{
    color: #FF5500 !important;
  }
  /*筛选框部分*/
  .screenBar{
    height: 40px;
    background-color: #fff;
    border-bottom: 1px #cccccc solid;
    position: relative;
    display: flex;
  }
  .screenBarLeft{
    height: 40px;
    flex:1;
    padding-top: 10px;
    padding-left: 10px;
    display: inline-block;
  }
  .divs{
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
  }
  .screenBarLeft span{
    flex: 8;
  }
  .screenBarLeft .spans{
    color: #cccccc;
    margin-right: 0;
    margin-left: 0;
    flex: 1;
  }
  .screenBarLeftContent img{
    height: 20px;
    width: 20px;
    vertical-align: middle;
    margin-left: -10px;
  }
  .screenBarLeftContent{
    color: #333333;
    font-size: 15px;
  }
  .screenBarLeftContent a{
    color: #333333;
  }
  .screenBarRight{
    width: 50px;
    height: 40px;
    border-left: 1px #cccccc solid;
    display: inline-block;
    vertical-align: top;
  }
  .screenBarRight img{
    width: 40px;
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;
  }
</style>