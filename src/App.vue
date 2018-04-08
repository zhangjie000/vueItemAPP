<template>

<div id="app">
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</div>
</template>
<script>
export default {

}
</script>

<style  lang="scss">

@function p($px) {
    @return $px/75px*1rem;
}
html,body{
    box-sizing:border-box;
    color:#333;
}
html,body,p,h1,h2,h3,h4,h5,h6,ul,li,ol,textarea,input{
    margin:0px;
    padding:0px;


}
*{
   box-sizing:border-box;
}
h1,h2,h3,h4,h5,h6{
    font-weight:normal;
}
.overflowH{
    overflow:hidden;
}
a{
    text-decoration:none;
}

ul ,ol{
    list-style:none;
}
body{
    background-color:#f5f5f5;
}

input{
  outline:none;
}

.redColor{
  color:#ff716B;
}
.mainColor1{
  color:#ffbb20;
}

.LiearGradientMain2{
   background-image: -webkit-linear-gradient(-90deg, #ffbb20, #f90 80%, #f90 100%);
    background-image: linear-gradient(-90deg, #ffbb20 0%, #f90 80%, #f90 100%);
}
/* 普通项目样式 */

.normalItem{
  margin:p(20px);
  background:#fff;
  border-radius:p(10px);
  padding-bottom:p(10px);
  .normalItemTitle{
    padding:p(20px);
  }
  table{
    width: 100%;
    td{
      width: 33.33%;
      text-align:center;
      font-size:p(24px);
      color:#999;
    }
    .normalItemRate{
      font-size:p(64px);
      color:#ff8066
    }
    .normalTitemTime{
      font-size:p(40px);
    }
    .nowBuyBtn{
      padding:p(15px) p(30px);
      display:inline-block;
      background-color:#ffbb20;
      color:#fff;
      font-size:p(24px);
      border-radius:p(30px);
    }
  }
}
</style>
