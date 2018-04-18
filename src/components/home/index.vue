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
/*import {
  backendOrderOrg,
  baidu,
  urlList,
  prize
} from "./../../api/api.js"*/
import Vue from 'vue'
import axios from 'axios'
import md5 from 'js-md5'
import qs from 'qs'

import Footer from '@/components/common/footer'
import bannerCarcousel from '@/components/common/bannerCarousel'

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

Vue.prototype.GetSign1 = function (obj) {
  if (obj === undefined) { obj = {} }

  //已经排好好顺序的对象
  function sort(obj) {
    if (obj instanceof Array) {
      return obj
    }
    var newObj = {}
    Object.keys(obj).sort().forEach(function (key) {
      var o = obj[key]
      if (o instanceof Object) {
        o = sort(o)
      }
      newObj[key] = o
    })
    return newObj
  }


  //临时签名对象
  const sign_data = {
    Data: obj,
    Global: { IMEI: "", IMSI: "", IP: "", OS: 2, Sign: "", Token: "" }
  }

  const data = {
    Data: obj,
    Global: {
      IMEI: "", IMSI: "", IP: "", OS: 2,
      Sign: md5(JSON.stringify(sort(sign_data)) + ')(4AzEdr5J6a`@#$*%'),
      Token: ""
    }
  }
  return md5
}

 //1.排好序 排序的函数
 /*var = {
    "Mobile": "13036707229",
    "Password": "ai050618"
 }
  function objKeySort(arys) {
      //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
      var newkey = Object.keys(arys).sort();　　
      //console.log('newkey='+newkey);
      var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
      for(var i = 0; i < newkey.length; i++) {
          //遍历newkey数组
          newObj[newkey[i]] = arys[newkey[i]];
          //向新创建的对象中按照排好的顺序依次增加键值对

      }
      return newObj; //返回排好序的新对象
  }*/
//1.


//console.log(Vue.GetSign({"abgg":12,"aa":11}))
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
      //头部链接
      routerLink:"/",
      //头部内容
      headerTitle:"理财产品"
    }
  },
  methods:{
    normalItemPath(){
      this.$router.push({path:'/investDetails'})
    },

  },
  computed: {
    top() {
      return - this.activeIndex *  0.61333+ 'rem';
    }
  },
  created(){

  },
  mounted() {
    setInterval(_ => {
      if(this.activeIndex < this.noticeList.length-1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    },1000)

   /* axios.get('http://check.account.czytest.colourlife.com/backend/order/org', )
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });*/
    axios.post('http://hyft.www.hyft88.com/Home/LoadPrizes').then(json => {　
        console.log(json.data)
        console.log(1111)
      }).catch(err => {
      　　console.log(err)
    })
      $.ajax({
        url:"http://hyft.www.hyft88.com/Home/LoadPrizes",
        type:"post",
        success:function (res) {
            console.log(res)
        }
      })
    axios.post('https://zhihu-web-analytics.zhihu.com/api/v1/logs/batch' ).then(json => {　
        console.log(json.data)
      }).catch(err => {
      　　console.log(err)
      })

    function GetSign(obj) {
      if (obj === undefined) { obj = {} }

      //已经排好好顺序的对象
      function sort(obj) {
        if (obj instanceof Array) {
          return obj
        }
        var newObj = {}
        Object.keys(obj).sort().forEach(function (key) {
          var o = obj[key]
          if (o instanceof Object) {
            o = sort(o)
          }
          newObj[key] = o
        })
        return newObj
      }


      //临时签名对象
      const sign_data = {
        "query": obj,
        "global": { "IMEI": "", "IMSI": "", "IP": "", "OS": 1, "Sign": "", "Token": "" }
        }
        let  str2= str2UTF8(JSON.stringify( sort(sign_data) + ')(4AzEdr5J6a`@#$*%' ) );
        var  bf=md5(   str2    )._digest;
       /* forEach(let val in bf){
          console.log(val);
        }*/
        console.log(md5( str2 ));
        console.log(bf);
      const data = {
        "query": obj,
        "global": {
          "IMEI": "", "IMSI": "", "IP": "", "OS": 1,
          "Sign":  md5(   str2    ),
           "Token": ""
        }
      }
      return data
    }
    console.log(GetSign({"aba": "123","aac": "fez"}))

    function str2UTF8(str){
        var bytes = new Array();
        var len,c;
        len = str.length;
        for(var i = 0; i < len; i++){
            c = str.charCodeAt(i);
            if(c >= 0x010000 && c <= 0x10FFFF){
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }else if(c >= 0x000800 && c <= 0x00FFFF){
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }else if(c >= 0x000080 && c <= 0x0007FF){
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            }else{
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    }
    /*//1.第一步排好序
    function objKeySort(arys) {
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
        var newkey = Object.keys(arys).sort();　　
        //console.log('newkey='+newkey);
        var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
        for(var i = 0; i < newkey.length; i++) {
            //遍历newkey数组
            newObj[newkey[i]] = arys[newkey[i]];
            //向新创建的对象中按照排好的顺序依次增加键值对

        }
        return newObj; //返回排好序的新对象
    }
    let SortData=objKeySort({"aaa": "","ccc": "1","fff": "0","aa": "0","ddd": "0", "bbb": ""})
    //2.字符串+k
    let SortDataStr=JSON.stringify(sort(sign_data)) + 'key'
    //3.转字节 utf-8
    let SortDataStrJie=*/
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
