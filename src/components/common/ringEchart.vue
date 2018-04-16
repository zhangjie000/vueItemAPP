<template>
  <div class="className" id="id" style="" ref="myEchart">
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      this.chart.setOption({
        color:["#19d82b","#23c2fe","#ff8362","#fede34"],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: 'center',
            right:30,
            data:['总资产','可用余额','待收本金','待收收益','冻结资金'],
            textStyle:{
              fontFamily:"Microsoft YaHei",
              color:"#5c5c5c",
              fontSize:14
            },
            formatter:function (res){
                return res+"：225(元)"
            }
        },
        series: [
            {
                name:'资金来源',
                type:'pie',
                radius: ['40%', '60%'],
                center:["25%","50%"],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:225, name:'总资产'},
                    {value:225, name:'可用余额'},
                    {value:225, name:'待收本金'},
                    {value:225, name:'待收收益'},
                    {value:225, name:'冻结资金'},
                ]
            }
        ]

      })
    }
  }
}

</script>
<style scoped lang="scss">
@function p($px){
  @return $px/75px*1rem;
}
  .className{
    width: 100%;
    height:p(430px);
    margin:0 auto;
    background:#fff;
  }
</style>