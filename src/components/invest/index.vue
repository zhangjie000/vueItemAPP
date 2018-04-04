<template>
<div>
    <nav4 :navList="navList" @navActive="navActiveClick"></nav4>
    <!-- 普通项目 -->
  <div class="normalItem" v-for="item in normalItemList" @click="normalItemLink">
      <h3 class="normalItemTitle">{{item.normalItemTitle}}</h3>
      <table>

        <tbody>
          <tr>
            <td>预期年化率</td>
            <td>期限(天)</td>
            <td>剩余<span style="color:#333;">{{item.normalItemMonery}}</span>元</td>
          </tr>
           <tr>
            <td><span class="normalItemRate">{{item.normalItemRate}}</span></td>
            <td><span class="normalTitemTime">{{item.normalTitemTime}}</span></td>
            <td>
              <a class="nowBuyBtn">立即购买</a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
    <Footer></Footer>
</div>
</template>

<script >
import Footer from '@/components/common/footer'
import nav4 from '@/components/common/nav4'
export default{
  components:{
    Footer,
    nav4
  },
  data(){
    return {
        navList:['全部','项目1','项目2','项目3'],
        normalItemList:[
        {
          normalItemTitle:"普通项目 0001",
          normalItemMonery:"23万",
          normalItemRate:"9%",
          normalTitemTime:"30"
        },
         {
          normalItemTitle:"普通项目 0002",
          normalItemMonery:"23万",
          normalItemRate:"10%",
          normalTitemTime:"60"
        }
      ]
    }
  },
  methods:{
    navActiveClick(index){
        if(index ==0 ) {
            this.normalItemList=[
                {
                  normalItemTitle:"普通项目 0001",
                  normalItemMonery:"23万",
                  normalItemRate:"9%",
                  normalTitemTime:"30"
                },
                 {
                  normalItemTitle:"普通项目 0002",
                  normalItemMonery:"23万",
                  normalItemRate:"10%",
                  normalTitemTime:"60"
                },
                {
                  normalItemTitle:"普通项目 1111",
                  normalItemMonery:"23万",
                  normalItemRate:"9%",
                  normalTitemTime:"30"
                },
                 {
                  normalItemTitle:"普通项目 2222",
                  normalItemMonery:"23万",
                  normalItemRate:"10%",
                  normalTitemTime:"60"
                },
                {
                  normalItemTitle:"普通项目 1111",
                  normalItemMonery:"23万",
                  normalItemRate:"9%",
                  normalTitemTime:"30"
                },
                 {
                  normalItemTitle:"普通项目 2222",
                  normalItemMonery:"23万",
                  normalItemRate:"10%",
                  normalTitemTime:"60"
                }
            ]
        }else  {
             this.normalItemList=[]
            for(var k=0;k<parseInt(Math.random()*10)+2;k++){
                this.normalItemList.push({
                  normalItemTitle:"普通项目 "+parseInt(Math.random()*10000),
                  normalItemMonery:parseInt(Math.random()*100)+"万",
                  normalItemRate:parseInt(Math.random()*10)+"9%",
                  normalTitemTime:parseInt(Math.random()*300),
                })
            }


        }
    },
    normalItemLink(){
        this.$router.push({path:'/investDetails'})
    }
  }

}
</script>
<style scoped lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.navList{
    li{
        float:left;
        width:25%;
        text-align:center;
        height:p(100px);
        line-height:p(100px);
        font-size:p(30px);
    }
    .active{
        color:#ffbb20;
    }
}
</style>