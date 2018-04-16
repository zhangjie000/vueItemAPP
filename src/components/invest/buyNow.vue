<template>
<div>
    <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
    <div class="buyDetailsBox">
        <div class="itemTitle">
           <span></span>{{headerTitle}}
        </div>
        <ul class="buyDetailsList">
            <li>
                <span>年化收益</span>
                <span class="redColor">12.00%</span>
            </li>
            <li>
                <span>项目期限</span>
                <span class="mainColor1">7天</span>
            </li>
            <li>
                <span>剩余额度(元）</span>
                <span class="mainColor1">1500.00</span>
            </li>
        </ul>
        <p class="inverstDdesc" >剩余额度(元)</p>
        <input type="text" class="inverstMoney mainColor1" placeholder="100元的整数倍">
        <ul class="buyDetailsList">
            <li>
                <span>预期收益(元）</span>
                <span >2300</span>
            </li>
            <li>
                <span>投资金额(元）</span>
                <span >1200</span>
            </li>
            <li>
                <span>可用余额(元）</span>
                <span >1500.00</span>
            </li>
        </ul>
        <router-link to="/bidSuccess"  class="sureBuyBtn  LiearGradientMain2">
            确认购买
        </router-link>
        <div class="readProtocol mainColor1">
            <label><input type="checkbox" name="" value="">我已阅读</label>
            <a href="JavaScript:;" class="mainColor1">《投资服务协议》</a>与
            <a href="JavaScript" class="mainColor1">《借款协议》</a>
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
           headerTitle:"项目20180123",
           routerLink:"/investDetails",
        }
    }

}
</script>
<style scoped lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.buyDetailsBox{
    background:#fff;
    margin-top:p(20px);
    .itemTitle{
        height: p(100px);
        font-size: p(36px);
        color: #333;
        font-weight: normal;
        border-bottom: p(2px) dashed #e5e5e5;
        padding-top: p(40px);
        padding-left:p(65px);
    }
    .buyDetailsList{
        padding-left: p(56px);
        padding-right: p(45px);
        font-size:p(28px);
        li{
            padding-top:p(40px);
            overflow:hidden;
            color:#999;
            span:first-child{
                float:left;
            }
            span:last-child{
                float:right;
            }
        }
    }
    .inverstDdesc{
        text-align: center;
        padding-top:p(78px);
        font-size:p(32px);
        color: #6c6c6c;
    }
    .inverstMoney{
        font-size: p(42px);
        color: #999;
        display: block;
        margin: 0 auto;
        border: none;
        border-bottom: p(3px) solid #e5e5e5;
        width: p(326px);
        margin-top:p(45px);
        padding: p(5px) 0;
        color: #ffbb20;
        text-align: center;
    }
    .sureBuyBtn{
        width: p(534px);
        height: p(94px);
        border-radius:p(50px);
        display: block;
        margin: p(40px) auto;
        text-align:center;
        line-height:p(94px);
        font-size:p(30px);
        color:#fff;
    }
    .readProtocol{
        text-align:center;
    }
}


</style>