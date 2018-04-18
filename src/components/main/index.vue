<template>
<div>
    <div class="UserMainBg">
        <!-- 头部 -->
        <div class="userHeader">
           <!--  <router-link to="/"><router-link> -->
           <router-link to="/" class="fl ">
                <span class="userImg">

                </span>
                <span class="userName">
                    150****7467
                </span>
                <span class="arrowRight">
                    >
                </span>
           </router-link>
            <div class="fr">
                <a href="javascript:;" class="helperIcon">
                    <img  src="../../assets/images/helperIcon.png" alt="">
                </a>
                 <a href="javascript:;" class="setUpIcon">
                    <img  src="../../assets/images/setUpIcon.png" alt="">
                </a>
            </div>
        </div>
        <div class="total">
            <p>1000.00</p>
            <p>资产总额(元)</p>
        </div>
        <div class="incomeBox">
            <div class='fl'>
                <p>0.00</p>
                <p>代收本金(元)</p>

            </div>
            <div class="fl">
                <p>0.00</p>
                <p>累计收益(元)</p>
            </div>
        </div>

    </div>
    <div class="availableMoney">
        <div class="availableMoneyLeft">
            <p>可用余额(元)</p>
            <p>1000.00</p>
        </div>
        <div class="availableMoneyRight">
            <a href="javascript:;" class='withdrawal'>提现</a>
            <a href="javascript:;" class='Recharge'>充值</a>
        </div>
    </div>
    <div class="userInfor">
        <ul class="userInforList">
            <li v-for="item in userInforList">
                <router-link :to="item.link">
                    <i></i>
                    {{item.name}}
                    <span class='rightArrow'>></span>
                </router-link>
            </li>

        </ul>
    </div>
     <!-- 底部 -->
    <Footer></Footer>
</div>

</template>
<script >
import Footer from '@/components/common/footer'

export default{
    components: {
        Footer
      },
      data(){
        return {
            /*用户列表数据*/
            userInforList:[
                {
                    name:"账户中心",
                    link:"/userCenter",
                },
                {
                    name:"我的赠券",
                    link:"/voucher",
                },
                {
                    name:"资金明细",
                    link:"/funds",
                },
                {
                    name:"投资记录",
                    link:"/InvestRecord",
                },
                {
                    name:"投资详情",
                    link:"/InvestRecord",
                },
                {
                    name:"推荐管理",
                    link:"/spread",
                },
                {
                    name:"关于我们",
                    link:"/login",
                }

            ]
        }
      }
}
</script>
<style scoped lang="scss">
@function p($px){
    @return $px/75px*1rem;
}
.UserMainBg{
    width: 100%;
    height:p(435px);
    background:url(../../assets/images/userIndex.png) center center no-repeat;
    background-size:cover;
}
.userHeader{
    padding:p(40px) p(20px);
    overflow:hidden;
}
.userImg{
    display:inline-block;
    width:p(50px);
    height:p(50px);
    background:#fff;
    border-radius:50%;
    vertical-align: middle;
    margin-right: p(10px);
}
.userName{
    color:#fff;
    font-size:p(28px);
    margin-right: p(10px);

}
.arrowRight{
    font-family:"楷体";
    font-size:p(28px);
    color:#fff;
}
.helperIcon{
    display:inline-block;
    margin-right:p(10px);
    img{
        width:p(44px);
        height:p(42px);
    }
}
.setUpIcon{
    display:inline-block;
    img{
        width:p(45px);
        height:p(43px);
    }
}
.total{
    padding-top:p(10px);
    p{
        text-align:center;
        color:#fff;
    }
    p:first-child{
        font-size:p(80px);

    }
    p:last-child{
        font-size:p(32px);
    }
}
.incomeBox{
    overflow:hidden;
    padding-top: p(50px);
    div{
        width:50%;
        p{
            text-align:center;
            font-size:p(28px);
            color:#fff;
        }
    }
}
.availableMoney{
    margin-bottom: p(15px);
    padding: 0px p(40px);
    height: p(130px);
    background-color: #fff;
}
.availableMoneyLeft{
    padding-top: p(25px);
    float:left;
}
.availableMoney .availableMoneyLeft p {
    font-size: p(32px);
    color: #333;
}
.availableMoney .availableMoneyLeft p:first-child {
    color: #999;
    font-size:p(24px);
    padding-bottom: p(10px);
}
.availableMoneyRight{
    float:right;
    a{
        display: inline-block;
        width: p(132px);
        height: p(62px);
        line-height: p(60px);
        text-align: center;
        border-radius:p(32px);
        font-size: p(28px);
        margin-top: p(35px);
    }
    .withdrawal{
        border: p(2px) solid #ffbb20;
        color: #ffbb20;
        margin-right: p(25px);
    }
    .Recharge{
        background: #ffbb20;
        color: #fff;
    }
}
.userInfor {
    padding-left: p(40px);
    background-color: #fff;
    .userInforList li {
        height: p(106px);
        border-bottom:p(1px) solid #e5e5e5;
        line-height:  p(106px);
    }
    .userInforList li a {
        font-size: p(28px);
        height: 100%;
        display: block;
        color: #333;
    }
     .userInforList li i {
        display: inline-block;
        vertical-align: middle;
        margin-right:p(10px);
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        width:p(40px);
        height: p(36px);
        background-position: center center;
        margin-top:p(-5px);
    }
 /*    .userInforList li:nth-child(1) */
    .userInforList li i {
        background-image: url(../../assets/images/uesrInforIcon1.png);
        -webkit-background-size: p(37px) p(37px);
        background-size:p(37px) p(37px);
    }
    .rightArrow {
        display: inline-block;
        color:#aaa;
        font-size:p(40px);
        font-family:"楷体";
        float:right;
        margin-right: p(40px);
    }
}

</style>