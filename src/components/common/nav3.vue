<template>
    <div>
        <ul class="navList">
            <li v-for="(item,index) in navList" :class="index == nowIndex ?'active':''" @click="navActive(index)">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:{
        navList:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            nowIndex:0
        }
    },
    methods:{
        navActive(index) {
            this.nowIndex=index;
            this.$emit("navActive",index)
        }
    }
}



</script>
<style scoped lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.navList{
    overflow:hidden;
    li{
        float:left;
        width:33.33%;
        text-align:center;
        height:p(100px);
        line-height:p(100px);
        font-size:p(30px);
        background:#fff;
    }
    .active{
        color:#ffbb20;
    }
}

</style>