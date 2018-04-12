<template>
    <div>
    <div class="footerHeight">
    </div>
       <ul class="footerList">
            <li ><router-link to="/" >首页</router-link></li>
            <li><router-link to="/investIndex" >投资</router-link></li>
            <li><router-link to="/mainIndex">我的</router-link></li>
        </ul>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped lang="scss">
    @function p($px){
        @return $px/75px*1rem;
    }
    .footerHeight{
        height:p(100px);
    }
    .footerList{
        width: 100%;
        position:fixed;
        left:0;
        bottom:0px;
        background:#fff;
        border-top:p(1px) solid rgba(0,0,0,0.1);
        height:p(100px);
        line-height:p(100px);
        li{
            width:33.33%;
            float:left;
            text-align:center;
            font-size:p(30px);
            a{
                color:#333;

            }
            .router-link-exact-active{
                color:#ffbb20;
            }
        }
    }
</style>