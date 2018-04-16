<template>
    <div>
       <Header  :headerTitle="headerTitle" :routerLink="routerLink"></Header>
        <div class="investDetailsBox">
            <h3>
                项目标题  2018234
            </h3>
            <div class="progress">
                40%
            </div>
            <table>
                <tbody>
                    <tr class="tableNumber">
                        <td>10万</td>
                        <td>90天</td>
                        <td>9.19万</td>
                    </tr>
                    <tr class="tableTitle">
                        <td>项目总额</td>
                        <td>期限</td>
                        <td>剩余金额</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="bidDetails">
            <ul>
                <li><span>起投金额：</span><span>100元起</span></li>
                <li><span>还款方式：</span><span>一次性还本付息</span></li>
                <li><span>剩余时间：</span><span>14天23时12分</span></li>
                <li><span>计息时间：</span><span>满标当日计息</span></li>
            </ul>
        </div>

        <router-link to="/buyNow" class="RightBugBtn" >立即购买</router-link>
    </div>
</template>
<script >
import Header from '@/components/common/header'
export default{
    components:{
        Header
    },
    data() {
       return {
          //头部链接
          routerLink:"/investIndex",
          //头部内容
          headerTitle:"购买详情"
       }
    }

}
</script>
<style scoped lang='scss'>
@function p($px){
    @return $px/75px*1rem;
}
.investDetailsBox{
    background:#fff;
    margin-top:p(10px);
    h3{
        padding:p(10px) p(20px);
        font-size:p(34px);
        color:#535353;
    }
    .progress{
        width:p(250px);
        height:p(250px);
        border:p(16px) solid #ffbb20;
        border-radius:50%;
        margin:p(20px) auto;
        text-align:center;
        font-size:p(70px);
        line-height:p(250px);
        color:#535353;
    }
    table{
        width: 100%;
        td{
            width:33.33%;
            text-align:center;
            padding:p(10px) 0px;
        }
        .tableNumber{
            font-size:p(28px);
            color:#535353;
        }
        .tableTitle{
            color: rgba(153, 153, 153, 0.99);
            font-size:p(22px);
        }
    }
}

.bidDetails{
    ul{
        padding-left:p(20px);
        background:#fff;
        padding-top:p(20px);
        padding-bottom:p(20px);
        margin:p(20px) auto;
        li{
            padding:p(16px) 0px;
            font-size:p(28px);
            span:first-child{
                color:#999;
            }
             span:last-child{
                color:#444;
            }
        }
    }
}
.RightBugBtn{
    height:p(100px);
    width:100%;
    display:block;
    position:fixed;
    bottom:0px;
    left:0px;
    background:#ffbb20;
    text-align:center;
    font-size:p(32px);
    color:#fff;
    line-height:p(100px);
}
</style>