<template>
<div class="Bg" :style="{ width: innertWith+'px', height: innerHeight + 'px' }">
    <div class="header">
        <router-link class="backIndex" to="/"></router-link>
        <router-link class="goRegister" to="/register"></router-link>
    </div>
    <div style="height:3rem"></div>
    <div class="loginContent loginHeight">
        <ul>
            <li>
                <i class="userIphone"></i>
                <input type="text" name="" v-model="userName" placeholder="请输入手机号" class="userInfor">
            </li>
            <li>
                <i class="codeIcon"></i>
                <input type="text" placeholder="请输入验证码" v-model="codeName" class="userInfor">
                <div class="codeIdentify" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode"></SIdentify>
                </div>
            </li>
            <li>
                <i class="password"></i>
                <input type="password" placeholder="请输入密码" v-model="password" class="userInfor" name="">
            </li>
            <li>
                <label class="check"><input type="checkbox" name="" value="">记住密码</label>
                <a class="fr forgetPassword" href="javascript:;">忘记密码？</a>
            </li>
        </ul>
        <p>
            <button type="button" class="submit LiearGradientMain2" @click="messageBox">立即登录</button>
            <pre class="code"></pre>
        </p>
    </div>
</div>
</template>
<script >
/*验证信息*/
import messVaildator from "@/lib/messVaildator/messVaildator.js"
/*验证插件*/
import Vue from "vue"
import SIdentify from '@/components/common/identify'

export default{
    components:{
        SIdentify
    },
    data() {
        return{

            innertWith:"100px",
            innerHeight:"100px",
            userName:'',
            codeName:'',
            password:'',
            identifyCodes: "1234567890",
            identifyCode: ""
        }
    },
    beforeCreate: function() {

    },
    mounted(){
        /* 获取屏幕的width和height*/
        this.innertWith= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
        this.innerHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        //验证码
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods:{

        messageBox() {
            //判断是否是手机号是否正确
            if(!messVaildator.isMoblie(this.userName)){
                this.$TipPop("请输入正确的手机号")
                return false
                //this.$Message.alert("用户名错误",function() {});
            }
            // 判断验证码是否正确
            if(!(this.identifyCode == this.codeName)){
                this.$TipPop("请输入正确的验证码");
                let that=this
                setTimeout(function() {
                    that.refreshCode()
                },2000)
                return false
            }
            if(this.password == "123456"){
                this.$router.push({path:"/"})

                // 清空数据
                this.userName=""
                this.codeName=""
                this.password=""
            }else {
                this.$TipPop("请输入正确的密码");
            }


        },
        /*验证码*/
        randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
          this.identifyCode = "";
          this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
          for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
            ];
          }

        }

    }
}
</script>
<style  scoped lang="scss">
@function p($px) {
    @return $px/75px*1rem;
}
.Bg{
    background:url(http://res.hyft88.com/Content/Resources/Style/Mob/Images/Login.png) center center no-repeat;
    background-size:100% 100%;
    .header{
        height:p(88px);
        overflow: hidden;
        position: fixed;
        width: 100%;
        z-index: 1000;
        left: 0;
        top: 0;
        .backIndex{
            display: inline-block;
            height:p(88px);
            width:p(60px);
            background:url(http://res.hyft88.com/Content/Resources/Style/Mob/Images/loginArr.png) center bottom no-repeat;
            background-size: p(32px) p(51px);
        }
        .goRegister{

            background:url(http://res.hyft88.com/Content/Resources/Style/Mob/Images/registerBtn.png) center bottom no-repeat;
            background-size: p(32px) p(51px);
            font-size: 0.24rem;
            color: #fff;
            display: inline-block;
            width: p(109px);
            height: p(88px);
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: p(109px) p(58px);
            line-height: p(45px);
            margin-right:p(30px);
            text-align: center;
            text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.3);
            float:right;
        }
    }

}
.loginHeight{
    width: p(694px);
    margin: 0 auto;
    background: #fff;
    border-radius: p(12px);
    box-shadow: 0px 0px 10px rgba(199, 199, 199, 0.4);
    height: p(709px);
    padding: p(75px) p(46px) 0px p(46px);
    ul{
        li{
            position: relative;
            height: p(91px);
            margin-bottom: p(41px);

            input.userInfor{
                width: 100%;
                border: none;
                height: 100%;
                background: #f5f5f5;
                border: p(2px) solid #f3f3f3;
                padding-left: p(96px);
                border-radius: p(45px);
                font-size: p(26px);
                color: #666;
            }
            i{
                width: p(96px);
                height: p(91px);
                position: absolute;
                top: 0px;
                left: 0px;
            }
            .userIphone {
                background: url(../../assets/images/userIphone.png) no-repeat center center;
                background-size: p(30px) p(42px);
            }
            .codeIcon {
                background: url(../../assets/images/codeIcon.png) no-repeat center center;
                background-size: p(38px) p(28px);
            }
            .password {
                background: url(../../assets/images/password.png) no-repeat center center;
                background-size: p(39px)  p(39px);
            }
        }
        li:last-child{
            height: auto;
            width: p(528px);
            margin: 0 auto;
            margin-bottom: p(62px);
        }
        .check{
            font-size: p(26px);
            color: #5c5c5c;
            margin-left: p(5px);
        }
        .forgetPassword{
            font-size:p(26px);
            color: #5c5c5c;
        }
    }
    .submit{
        width: p(518px);
        height: p(80px);
        text-align: center;
        line-height: p(80px);
        color: #fff;
        font-size:p(32px);
        display: block;
        margin: 0 auto;
        border: none;
        outline: none;
        border-radius: p(40px);
    }
}
.codeIdentify{
    position: absolute;
    top:p(10px);
    right:p(40px);
}
</style>