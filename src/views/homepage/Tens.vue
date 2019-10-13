<template>
  <div id="tens">
    <div class="tens_top">
      <div class="singles">
        <img src="@/assets/img/tens/feizhulvxing.png">
        <div>飞猪旅行</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/tianmaoguoji.png">
        <div>天猫国际</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/waimai.png">
        <div>外卖</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/juhuasuan.png">
        <div>聚划算</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/lingjinbi.png">
        <div>领金币</div>
      </div>
    </div>
    <div class="tens_bottom">
      <div class="singles">
        <img src="@/assets/img/tens/feizhulvxing.png">
        <div>飞猪旅行</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/tianmaoguoji.png">
        <div>天猫国际</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/waimai.png">
        <div>外卖</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/juhuasuan.png">
        <div>聚划算</div>
      </div>
      <div class="singles">
        <img src="@/assets/img/tens/lingjinbi.png">
        <div>领金币</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tens"
  }
</script>

<style scoped>
  .tens_top{
    display: flex;
    height: 100px;
    width: auto;
    text-align: center;
    margin:0 auto;
    font-size: 12px;
    color: #666;
    padding-top: 10px;
  }
  .singles{
    flex: 1;
    height: 100px;
  }
  .singles img{
    width:auto;
    height: 50px;
    margin-bottom: 3px;
  }
  .tens_bottom{
    display: flex;
    height: 100px;
    width: auto;
    text-align: center;
    margin:-20px auto;
    font-size: 12px;
    color: #666;
  }
</style>