<template>
<div>
    <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
    <Nav3 :navList="navList" @navActive="navActive"></Nav3>
    <ul class="InvestRecordContentList">
        <li>
            <a href="javascript:;">
                <div>
                    <h3>
                    投资项目
                    <span>一次性还本付息</span>
                    </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>100</td>
                                <td>8%</td>
                                <td>2018-04-14</td>
                                <td>0.67</td>
                                <td>还款完成</td>
                            </tr>
                            <tr>
                                <td>本金</td>
                                <td>收益率</td>
                                <td>还款日期</td>
                                <td>预期利息</td>
                                <td>状态</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </a>
        </li>
        <li>
            <a href="javascript:;">
                <div>
                    <h3>
                    投资项目
                    <span>一次性还本付息</span>
                    </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>100</td>
                                <td>8%</td>
                                <td>2018-04-14</td>
                                <td>0.67</td>
                                <td>还款完成</td>
                            </tr>
                            <tr>
                                <td>本金</td>
                                <td>收益率</td>
                                <td>还款日期</td>
                                <td>预期利息</td>
                                <td>状态</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </a>
        </li>
    </ul>
</div>

</template>
<script >
import Header  from  "@/components/common/header"
import Nav3 from "@/components/common/nav3"
export default {
     components:{
        Header,
        Nav3
    },
    data () {
        return {
            headerTitle:"投资记录",
            routerLink:'/mainIndex',
            //导航
            navList:[
                {name:"有效投资"},
                {name:"已投项目"},
                {name:"汇款项目"}
            ]
        }
    },
    methods:{
        navActive(index){

        }
    }
}

</script>
<style scoped lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.navList{
    border-top:1px solid #ececec;
}
.InvestRecordContentList{
    background:#fff;
    li{
        border-top:1px solid #ececec;
        h3{
            font-size: p(28px);
            color: #333;
            padding-left: p(30px);
            padding-top: p(20px);
            padding-bottom: p(30px);
            font-weight: normal;
            span{
                display: inline-block;
                font-size: p(16px);
                color: #ffbb20;
                padding: p(3px) p(6px);
                border-radius: p(60px);
                border: p(1px) solid #ffbb20;
                margin-left: p(5px);
            }
        }
    }
    table{
        width: 100%;
        td{
            width:15%;
            text-align:center;
        }
        tr:first-child{
            td{
                font-size: p(28px);
                color: #333;
            }

            td:nth-child(3){
                width:25%;
            }
            td:last-child{
                width:20%;
            }
        }
        tr:last-child{
            td{
                font-size: p(22px);
                color: #999;
                padding: p(10px) 0px
            }
        }
    }
}
</style>