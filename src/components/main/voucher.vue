<template>
 <div>
    <Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>
    <div class="navHeight"></div>
    <Nav3 :navList="navList" @navActive="navActive"></Nav3>
    <div class="voucherType">
        <ul class="voucherTypeList">
            <li v-for="(item,index) in voucherType" >
                <div class="VoucherTabContentLeft">
                    <p>{{item.monery}}</p>
                    <p>单笔投资满{{item.minMonery}}可用</p>
                </div>
                <div class='VoucherTabContentRight'>
                    <p>证券类型：{{item.type}}</p>
                    <p>有效期：至{{item.time}}</p>
                    <p><a href="javascript:;" class="LiearGradientMain2">{{item.name}}</a></p>
                </div>
            </li>
        </ul>
    </div>

 </div>
</template>
<script>
import Header from "@/components/common/header"
import Nav3 from "@/components/common/nav3"
export default{
    components:{
        Header,
        Nav3
    },
    data () {
        return {
            /* 头部数据*/
            headerTitle:"我的证券",
            routerLink:"/mainIndex",
            /* 头部数据*/
           /* 导航数据*/
           navList:[
                {
                    name:"红包"
                },
                {
                    name:"体验金"
                },
                {
                    name:"加息劵"
                },
           ],
           voucherType:[
            {
                monery:288,
                minMonery:50000,
                type:"抽奖奖励",
                time:"2018-12-12",
                name:"代金券"
            },
            {
                monery:200,
                minMonery:1000,
                type:"注册红包",
                time:"2018-09-12",
                name:"代金券"
            },
           ]
        }
    },
    methods:{
        navActive(index) {
            if(index == 0) {
                this.voucherType=[
                    {
                        monery:288,
                        minMonery:50000,
                        type:"抽奖奖励",
                        time:"2018-12-12",
                        name:"代金券"
                    },
                    {
                        monery:200,
                        minMonery:1000,
                        type:"注册红包",
                        time:"2018-09-12",
                        name:"代金券"
                    },
                   ]
            }else if(index == 1){
                this.voucherType=[
                    {
                        monery:1288,
                        minMonery:20000,
                        type:"投资奖励",
                        time:"2018-07-24",
                        name:"体验金"
                    },
                    {
                        monery:88,
                        minMonery:1000,
                        type:"抽奖奖励",
                        time:"2018-05-24",
                        name:"体验金"
                    },
                ]
            }else {
                this.voucherType=[
                    {
                        monery:588,
                        minMonery:10000,
                        type:"注册红包",
                        time:"2018-07-24",
                        name:"加息劵"
                    },
                    {
                        monery:8,
                        minMonery:1000,
                        type:"抽奖奖励",
                        time:"2018-10-20",
                        name:"加息劵"
                    }, {
                        monery:8,
                        minMonery:1000,
                        type:"抽奖奖励",
                        time:"2018-10-20",
                        name:"加息劵"
                    }
                ]
            }
        }
    }
}

</script>
<style scpoed lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.navHeight{
    height:p(20px);
}
.voucherType{
    .voucherTypeList{
        li{
            width:p(704px);
            height:p(241px);
            background:url(../../assets/images/yesActive.png) no-repeat center;
            background-size:cover;
            margin:0 auto;
            margin-top:p(20px);
        }
        .VoucherTabContentLeft{
            float:left;
            width:p(280px);
            padding-top:p(35px);
            p{
                text-align:center;
                font-size:p(80px);
                color: #fff;
            }
            p:last-child{
                font-size:p(24px);
            }

        }
        .VoucherTabContentRight{
            float:left;
            width:p(420px);
            padding-top:p(35px);
            p{
                text-align:center;
                font-size:p(28px);
                color:#999;
                a{
                    display: inline-block;
                    width:p(200px);
                    height:p(60px);
                    text-align:center;
                    line-height:p(60px);
                    border-radius:p(60px);
                    color:#fff;
                    margin-top:p(25px)
                }
            }

        }
    }
}
</style>