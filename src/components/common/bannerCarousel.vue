<template>
    <slider :pages="pages" :sliderinit="sliderinit">
            <!-- slot  -->
    </slider>

</template>
<script>
import slider from 'vue-concise-slider'
export default{
    components:{
        slider
    },
    data () {
        return {
          //轮播图插件数据
          pages:[
                {
                    title:"",
                    style:{
                        background:'url(' + require("../../assets/images/banner1.jpg") + ')',
                    }
                },
                {
                    title:"",
                    style:{
                       background:'url(' + require("../../assets/images/banner2.jpg") + ')',
                  },
                },
                {
                    title:"",
                    style:{
                       background:'url(' + require("../../assets/images/banner1.jpg") + ')',
                    }
                },
                {
                    title:"",
                    style:{
                       background:'url(' + require("../../assets/images/banner2.jpg") + ')',
                    }
                },
          ],
          //滑动配置[obj]
            sliderinit: {
              currentPage: 0,//当前页码
              thresholdDistance: 500,//滑动判定距离
              thresholdTime: 100,//滑动判定时间
              autoplay:2000,//自动滚动[ms]
              loop:true,//循环滚动
              direction:'horizontal',//方向设置，垂直滚动
              infinite:1,//无限滚动前后遍历数
              slidesToScroll:1,//每次滑动项数
            }
        }
    },

    methods:{

    }

}
</script>

<style scoped lang="scss">
@function p($px){
    @return $px/75px*1rem;
}

.slider-container {
    height: p(300px);
}
/* .slider-item {
    div{

        width: 100%;
        height:p(400px);
        background:url(../../assets/images/banner.jpg) no-rapeat;
        background-size:cover;

    }

} */
</style>