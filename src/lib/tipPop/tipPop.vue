<template>
      <!-- 全局提示框 -->
      <div v-show="visible" class="dialog-tips dialog-center">
          <div>{{message}}</div>
      </div>

</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: ""
    };
  }
};
</script>
<style lang="scss">
.dialog-tips{
    position: fixed;
    z-index: 100;
    min-width: 200px;

    /* width:75%; */
    padding: 20px 5px;
    word-wrap:break-word;
    word-break:break-all;
    background-color: rgba(0,0,0,0.4);
    box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius:5px;
  /*   display:none; */
    .dialog-tips-icon{
        width: 54px;
        height: 54px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        margin-bottom: 13px;
    }
}
.dialog-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    div{
        font-size:16px;
    }
}

</style>