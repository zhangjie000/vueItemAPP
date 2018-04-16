<template>
   <div>
        <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
        <div class="HeaderHeight">

        </div>
        <ringEchart></ringEchart>
        <div class="assetCondition">
            <ul>
                <li v-for="item in assetCondition">
                    <div>
                        <span>
                            <i></i>
                            {{item.name}}
                        </span>
                        <span>
                            {{item.monery}}
                            <i>元</i>
                        </span>
                    </div>
                </li>

            </ul>
        </div>
   </div>
</template>
<script >
import ringEchart from "@/components/common/ringEchart"
import Header from "@/components/common/header"
export default{
    components:{
        ringEchart,
        Header
    },
    data () {
        return {
            headerTitle:"用户中心",
            routerLink:"/mainIndex",
            /*资金状态数据*/
            assetCondition:[
                {
                    name:"可用余额",
                    monery:"23"
                },
                {
                    name:"待收本金",
                    monery:"23"
                },
                {
                    name:"待收利息",
                    monery:"23"
                },
                {
                    name:"冻结资金",
                    monery:"23"
                },
                {
                    name:"投资冻结资金",
                    monery:"23"
                },
                {
                    name:"提现冻结资金",
                    monery:"23"
                },
                {
                    name:"已收利息",
                    monery:"23"
                },
                {
                    name:"推荐收益",
                    monery:"23"
                },
                {
                    name:"推荐好友总数",
                    monery:"23"
                }
            ]
        }
    }
}
</script>
<style scpoed lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.HeaderHeight{
    height:p(20px);
}
.assetCondition {
    margin-top:p(25px);
    background:#fff;
    ul{
        overflow: hidden;
        li {
            height: p(177px);
            line-height: p(5px);
            font-size:p(28px);
            padding-left:p(25px);
            padding-right:p(25px);
            background-color: #fff;
            float: left;
            width: 50%;
            overflow: hidden;
            div {
                height: p(125px);
                padding-top: p(15px);
                padding-left:p(40px);
                margin-top: p(25px);
            }
            span{
                color: #999;
                font-size: p(26px);
                display: block;
                line-height:p(44px);
            }

            span:first-child i {
                display: inline-block;
                height: p(12px);
                width:p(12px);
                border-radius: 50%;
                background-color: #f90;
                margin-right:p(25px);
                vertical-align: middle;
            }
            span:last-child {
                color: #666;
                margin-left: p(40px);

            }
            span:last-child i {
                color: #666;
                font-size:p(26px);
                font-style: normal;
                margin-left: p(5px);
            }
        }

        li:nth-child(2n+1) div {
            border-right: 1px dashed #ececec;
        }
    }
}
</style>