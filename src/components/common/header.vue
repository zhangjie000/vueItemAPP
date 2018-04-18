<template>
<div>
   <div class="header">
        <div class="left">
            <router-link :to='routerLink'>></router-link>
        </div>
        <h2>{{headerTitle}}</h2>
   </div>
</div>

</template>
<script>
export default{
    props:{
        routerLink:{
            type:String,
            required:true
        },
        headerTitle:{
            type:String,
            required:true
        }
    }
}
</script>
<style  lang="scss">

@function p($px){
    @return $px/75px*1rem;
}

.header{
    height:p(88px);
    position: relative;
    background:#fff;
    h2{
        text-align:center;
        line-height:p(88px);
        font-size:p(38px);
    }
    .left{
        position:absolute;
        top:0px;
        left:0px;
        width: p(88px);
        height:100%;
        a{
            display:inline-block;
            width: p(88px);
            height:100%;
            background:#fff;
            line-height:p(88px);
            text-align:center;
            font-size:p(60px);
            color:#333;
            font-family:"楷体";
        }
    }
}

</style>