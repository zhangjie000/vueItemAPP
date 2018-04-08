<template>
<div>
    <div class="bidSuccessBg">
        <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
        <div class="bidSuccessContent">
            <div class="bidSuccessText">
                <i class="bidSuccessIcon"></i>
                恭喜您投标成功
            </div>
            <div class="bidMoney">
                <p>本次投标金额 1000.00 元</p>
                <p>本次交易时间 20180408</p>
            </div>
            <div class="bidSuccessTime">
                <i class="BidSuccessTime"></i>
                等待结标，坐享高收益
            </div>
            <p class="bodSuccessLast">结标当日即可享受收益</p>
            <a class="styleBtn lookRecord LiearGradientMain2">查看投标记录</a>
            <router-link to="/" class="styleBtn backIndex">返回首页</router-link>
        </div>
    </div>
</div>
</template>
<script >
import Header from "@/components/common/header"
export default{
    components:{
        Header
    },
    data(){
        return {
            headerTitle:"投标成功",
            routerLink:"/buyNow"
        }
    }
}
</script>
<style scpoed lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.bidSuccessBg .header .left a {
    background:transparent;
    color: #fff;
}
.bidSuccessBg .header{
    background:transparent;
}
.bidSuccessBg .header h2 {
    color: #fff;
}
.bidSuccessBg{
    width:p(750px);
    height:p(371px);
    margin:0 auto;
    background:url(../../assets/images/bidSuccess.png) no-repeat center;
    background-size:cover;

}
.bidSuccessContent{
    height: p(854px);
    width:p(629px);
    background: #fff;
    margin: 0 auto;
    border-radius: p(10px);
    margin-top: p(110px);
    box-shadow: 0px 0 33px rgba(199, 199, 199, 0.5);
    padding-top: p(90px);
    padding-left:p(110px);
}
.bidSuccessText{
    font-size:p(34px);
    color: #f90;
}
.bidSuccessContent .bidSuccessIcon {
    width: p(52px);
    height:p(52px);
    background: url(../../assets/images/tuigou.png) no-repeat;
    background-size: cover;
    display: inline-block;
    vertical-align: middle;
    margin-right: p(30px);
}
.bidSuccessContent .bidMoney {
    height: p(185px);
    position: relative;
    padding-left:p(82px);
}
.bidSuccessContent .bidMoney p {
    font-size:p(24px);
    color: #999;
    padding-top: p(30px);
}
.bidSuccessContent .bidMoney::before {
    content: "";
    position: absolute;
    top: p(7px);
    left: p(22px);
    width: p(6px);
    background: #ffbb20;
    height:p(100px);
    z-index: 7;
    border-radius:p(3px);
}
.bidSuccessContent .bidMoney::after {
    content: "";
    position: absolute;
     top: p(7px);
    left: p(22px);
    width: p(6px);
    background: #ffedc3;
    height: p(174px);
}
.bidSuccessContent .bidSuccessTime {
    font-size:p(34px);
    color: #333;
}
.bidSuccessContent .BidSuccessTime {
    width:p(49px);
    height:p(49px);
    background: url(../../assets/images/timeIcon.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    display: inline-block;
    margin-right:p(33px);
    vertical-align: middle;
}
.bidSuccessContent .bodSuccessLast {
    padding-left:p(82px);
    font-size:p(26px);
    color: #999;
    padding-top:p(25px);
}

.bidSuccessContent .styleBtn {
    width: p(538px);
    height: p(86px);
    display: block;
    margin: 0 auto;
    border-radius: p(43px);
    font-size: p(32px);
    color: #fff;
    text-align: center;
    line-height: p(86px);
    margin-left:p(-60px);
}
.bidSuccessContent .lookRecord{
    margin-top:p(60px)
}
.bidSuccessContent .backIndex {
    background-image: linear-gradient(-90deg, #54dbd4 0%, #52dbbb 80%, #52dbbb 100%);
    margin-top: p(46px);
}
</style>