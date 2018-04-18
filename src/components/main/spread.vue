<template>
    <div>
        <Header :headerTitle="headerTitle"  :routerLink='routerLink'></Header>
        <div class="myCode">
            <h3>我的二维码</h3>
            <img src="http://mob.hyft88.com/passport/GetSpreadQRCode?content=http://mob.hyft88.com/passport/register?code=101420" alt="">
        </div>
        <ul class="setupContentList">
            <li>
                <a href="javascript:;">
                    <span>推荐列表</span>
                    <span>></span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <span>推荐佣金</span>
                    <span>></span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script >
import Header from "@/components/common/header"
export default{
    components:{
        Header
    },
    data() {
        return {
            headerTitle:"推荐管理",
            routerLink:"/mainIndex"
        }
    },
    beforeCreate: function() {
        document.getElementsByTagName("body")[0].style="background-color:#fff;";
    },
}
</script>
<style scoped  lang="scss">
@function p($px){
    @return $px/75px*1rem;
}
.active{
    background-color:#fff;
}
.myCode {
    width: p(555px);
    height: p(683px);
    margin: 0 auto;
    background: url(../../assets/images/myCodeBg.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    margin-top: p(10px);
    text-align:center;
    h3 {
        text-align: center;
        padding-top: p(63px);
        padding-bottom: p(40px);
        font-size: p(32px);
        font-weight: 700;
        color: #333;
        margin-bottom: p(63px);
    }
    img{
        width: 200px;
        height:200px;
    }
}

.setupContentList{
    li:first-child{
        border-top:p(1px) solid #d5d5d5;
    }
    li{
        border-bottom:p(1px) solid #d5d5d5;
        a{
            display: block;
            height: p(100px);
            font-size: p(28px);
            color: #333;
            line-height: p(100px);
            padding: 0px p(30px);

            span:last-child{
                float:right;
                font-size:p(40px);
                font-family:"楷体";
            }
        }
    }
}

</style>