<template>
 <div>
    <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
    <div>
        <table >
            <thead>
                <tr>
                    <th>交易类型/时间</th>
                    <th>金额</th>
                    <th>交易状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span>体验金利息回款</span>
                        <br>
                        <span>2018-04-14 06:30:00</span>
                    </td>
                    <td>
                        17.4667元
                    </td>
                    <td>
                        交易状态
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>体验金利息回款</span>
                        <br>
                        <span>2018-04-14 06:30:00</span>
                    </td>
                    <td>
                        17.4667元
                    </td>
                    <td>
                        交易状态
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>体验金利息回款</span>
                        <br>
                        <span>2018-04-14 06:30:00</span>
                    </td>
                    <td>
                        17.4667元
                    </td>
                    <td>
                        交易状态
                    </td>
                </tr>
            </tbody>
        </table>

    </div>

 </div>
</template>

<script >
import Header from "@/components/common/header"
export default{
    components:{
        Header
    },
    data () {
        return {
            headerTitle:"资金明细",
            routerLink:'/mainIndex'
        }
    }
}
</script>
<style scoped lang="scss">
@function p($px){
    @return $px/75px*1rem;
}
table{
    width: 100%;
    background:#fff;
    tr{
        th{
            border-top:p(1px) solid  #e5e5e5;
            padding:p(15px) 0;
            color:#666;
            font-size:p(30px);
            font-weight:100;
        }
        td{
            width: 33.55%;
            text-align:center;
             border-top:p(1px) solid  #e5e5e5;
             color:#333;
             font-size:p(26px);
             padding:p(25px) 0;
             span:last-child{
                font-size:p(22px);
                color:#999;
             }
        }
    }
}
</style>