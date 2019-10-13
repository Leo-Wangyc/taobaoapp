<template>
  <div id="search-page">

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
          <input type="text" class="searchType" v-model="thing">

<!--          右边放大镜-->
          <div class="magnifier" @click="searchClick">
            <img src="@/assets/img/searchpage/magnifer.svg">
          </div>
        </div>
      </div>

<!--      取消部分-->
      <div class="right" @click="backClick">
        <span>取消</span>
      </div>
    </div>

<!--    大家都在搜界面-->
    <div class="allSearch">
      <div class="allSearchText">
        大家都在搜
      </div>
      <div class="itemArea">
        <a href="#" class="items">阿迪达斯女鞋</a>
        <a href="#" class="items">印花连衣裙 童</a>
        <a href="#" class="items">背包</a>
        <a href="#" class="items">背心男</a>
        <a href="#" class="items">毛衣男</a>
        <a href="#" class="items">耐克女鞋</a>
        <a href="#" class="items">哈伦裤男</a>
        <a href="#" class="items">板鞋</a>
        <a href="#" class="items">牛仔裤男</a>
        <a href="#" class="items">小米4</a>
      </div>

    </div>

<!--    宝贝点击页面-->
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

<!--    输入联想页面-->
    <div class="inputThink" v-if="isShow">
      <div v-for="item in selectThings" class="inputThinkContent">
        <a href="#">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchPage",
    data(){
      return {
        show:false,
        isShow:true,
        thing:"",
        things:['手机','手机挂','手机套','手机膜','手机壳','手机壳 苹果','手机壳 苹果x','手机壳 苹果xr','手机壳 苹果8plus','手机壳 苹果xmax'],
        selectThings:[]
      }
    },
    methods:{
      searchClick(){
        this.$router.push('/detail')
      },
      backClick(){
        this.$router.push('/homepage')
      },
      treasureClick(){
        this.show= !this.show
      }
    },
    watch:{
      thing:function(val, oldVal){
        if(val.length==0){
          this.isShow = false
        }else{
          this.isShow = true;
          var things = []
          this.things.forEach((item,index) => {
            if(item.indexOf(val)>=0){
              things.unshift(item)
            }
          })
          this.selectThings = things;
        }
      }
    }
  }
</script>

<style scoped>
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
  #search-page{
    position: absolute;
    background-color: #EEEEEE;
    z-index: 99;
    height: 100%;
    width: 100%;
  }
  .nav-bar{
    display: flex;
    height: 45px;
    background-color: #F6F6F6;
    box-shadow: 0 1px 1px rgba(100,100,100,0.3);
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
    flex: 2;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    color: #999999;
    vertical-align: middle;
  }
  #tianmao{
    border-bottom: 0;
  }
  .treasure #tri{
    font-size: 8px;
  }
  .searchType{
    background-color: rgba(1,1,1,0);
    flex: 5;
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

  .allSearch{
    height: auto;
    width: 100%;
    background-color: #EEEEEE;
    padding-top: 5px;
  }
  .allSearchText{
    height: 20px;
    font-size: 13px;
    font-weight: bold;
    color: #999999;
    margin-left: 10px;
  }
  .itemArea{
    height: auto;
    width: 100%;
    background-color: #fff;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .items{
    border-radius: 50px;
    border: 1px #ccc solid;
    display: inline-block;
    padding:5px 15px 5px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #666666;
    font-size: 14px;
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

  /*联想输入部分*/
  .inputThink{
    position: absolute;
    top: 46px;
    width: 100%;
    height: auto;
  }
  .inputThinkContent{
    height: 45px;
    line-height: 45px;
    color: #666666;
    font-size: 14px;
    padding-left: 10px;
    background-color: #F9F9F9;
    border-bottom: 1px #cccccc solid;
  }
  .inputThinkContent a{
    color:#666666;
  }
</style>