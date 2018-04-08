<template>

<div id="app">
    <div class="header">
        <div class="left">
            <router-link to='/'></router-link>
        </div>
        <h2>理财产品</h2>
   </div>
    <bannerCarcousel></bannerCarcousel>
   <!--  导航内容 -->
   <ul class="indexNavLinkList">
       <li>
         <a href="javascript:;">
           <span></span>
           <span>关于我们</span>
         </a>
       </li>
        <li>
         <a href="javascript:;">
           <span></span>
           <span>安全保障</span>
         </a>
       </li>
        <li>
         <a href="javascript:;">
           <span></span>
           <span>平台咨询</span>
         </a>
       </li>
        <li>
         <a href="javascript:;">
           <span></span>
           <span>邀请好友</span>
         </a>
       </li>
   </ul>
  <div class="notice">
      <span class="noticeIcon"></span>
      <ul class="noticeList"  ref="topInfo" :style="{ top }" >
        <li v-for="(item,index) in noticeList"  >
            <span class="ntoceContent">{{item.ntoceContent}} </span>
            <span class="noticeTime">{{item.noticeTime}}</span>
        </li>

      </ul>
   </div>
   <!-- 推荐项目 -->
  <div class="recommondItem">
      <h3 class="recommondItemTitle">
      推荐项目 20180213
      <i class="leftHalfCircle"></i>
       <i class="rightHalfCircle"></i>
      </h3>
      <div class="progressCir">
        60%
      </div>
      <router-link class="rightbtn LiearGradientMain2"  to="/investDetails">立即购买</router-link><!--
      <a href="#"></a> -->
   </div>
 <!-- 普通项目 -->
  <div class="normalItem" @click="normalItemPath" v-for="item in normalItemList" >
      <h3 class="normalItemTitle">{{item.normalItemTitle}}</h3>
      <table>

        <tbody>
          <tr>
            <td>预期年化率</td>
            <td>期限(天)</td>
            <td>剩余<span style="color:#333;">{{item.normalItemMonery}}</span>元</td>
          </tr>
           <tr>
            <td><span class="normalItemRate">{{item.normalItemRate}}</span></td>
            <td><span class="normalTitemTime">{{item.normalTitemTime}}</span></td>
            <td>
              <a class="nowBuyBtn">立即购买</a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>

  <!-- 底部 -->
  <Footer></Footer>

</div>
</template>

<script>
import Footer from '@/components/common/footer'
import bannerCarcousel from '@/components/common/bannerCarousel'
export default {
 components: {
    Footer,
    bannerCarcousel,

  },
  name: 'App',
  data () {
    return {
      activeIndex:0,
      noticeList:[
        {
          ntoceContent:"通知通知1",
          noticeTime:"2018-01-22"
        },
         {
          ntoceContent:"通知通知2",
          noticeTime:"2018-01-22"
        },
         {
          ntoceContent:"通知通知3",
          noticeTime:"2018-01-22"
        }
      ],
      normalItemList:[
        {
          normalItemTitle:"普通项目 0001",
          normalItemMonery:"23万",
          normalItemRate:"9%",
          normalTitemTime:"30"
        },
         {
          normalItemTitle:"普通项目 0002",
          normalItemMonery:"23万",
          normalItemRate:"10%",
          normalTitemTime:"60"
        }
      ],

    }
  },
  methods:{
    normalItemPath(){
      this.$router.push({path:'/investDetails'})
    }
  },
   computed: {
    top() {
      return - this.activeIndex *  0.61333+ 'rem';
    }
  },
  mounted() {
    setInterval(_ => {
      if(this.activeIndex < this.noticeList.length-1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    },1000)


  }
}
</script>

<style scoped lang="scss">
    @function p($px){
        @return $px/75px*1rem;
    }
.header{
    height:p(88px);
    position: relative;
    background:#fff;
    h2{
        text-align:center;
        line-height:p(88px);
        font-size:p(38px);
    }
    .left{
        position:absolute;
        top:0px;
        left:0px;
        width: p(88px);
        height:100%;
        a{
            display:inline-block;
            width: p(88px);
            height:100%;
            background:url(../../assets/images/bellIcon.png) center center no-repeat;
            background-size:p(35px) p(40px);
        }
    }
}
.indexNavLinkList {
  background:#fff;
  overflow:hidden;
  li{
    float:left;
    width:25%;
     text-align:center;
    a{
      display:inline-block;
      padding:p(20px) 0;
      color:#4a4a4a;
      font-size:p(24px);
      text-align:center;
      span:first-child{
          display:block;
          width:p(82px);
          height:p(82px);
          background:url(../../assets/images/indexNavLinkIcon1.png) center center no-repeat;
          background-size:cover;
          margin-bottom:p(10px)
      }
      span:last-child{
        color:#4a4a4a;


      }
    }

  }
}
.notice{
    height:p(46px);
    overflow:hidden;
    position: relative;
  .noticeIcon{
    position: absolute;
    top: -0.18rem;
    left:0px;
    width:10%;
    height:p(46px);
    background:url(../../assets/images/newStateIcon.png) center center no-repeat;
    background-size:p(34px) p(38px);
    vertical-align:middle;
    padding:p(20px) 0px;
  }
  .noticeList{
    display:inline-block;
    width:75%;
    height:p(46px);
    position: relative;
    transition: top 0.5s;
    margin-left:10%;
    li{

       height:p(46px);
       line-height:p(46px);
      color:#7c7c7c;
      .noticeTime{
        float:right;
      }
    }
  }
}
.recommondItem{
  background:#fff;
  padding-bottom:p(50px);
  text-align:center;
  .recommondItemTitle{
    height:p(103px);
    width:p(637px);
    margin:0 auto;
    line-height:p(103px);
    font-size:p(34px);
    color: #424242;
    text-align: center;
    border-bottom: 1px dashed #c9c9c9;
    position:relative;
    overflow:hidden;
    i{
      position:absolute;
      top:p(70px);
      width:p(60px);
      height:p(60px);
      border-radius:50%;
      background-color:#f5f5f5;
    }
    .leftHalfCircle{
      left:p(-75px);
    }
    .rightHalfCircle{
      right:p(-75px);
    }
  }
  .rightbtn{
    display:inline-block;
    width: p(507px);
    height:p(81px);
    line-height:p(81px);

    border-radius:p(40px);
    font-size: p(32px);
    color: #fff;
    margin-top:p(20px);
  }
}
.progressCir{
  text-align:center;
  width:p(350px);
  height:p(350px);
  border-radius:50%;
  border:p(20px) solid #ffbb20;
  margin: 0 auto;
  margin-top:p(30px);
  margin-bottom:p(20px);
  line-height:p(310px);
  font-size:p(120px);
  color:#5c5c5c;

}



</style>
