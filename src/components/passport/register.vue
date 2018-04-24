<template>
<div class="Bg" :style="{ width: innertWith+'px', height: innerHeight + 'px' }">
    <div class="header">
        <router-link class="backIndex" to="/"></router-link>
        <router-link class="goRegister" to="/login"></router-link>
    </div>
    <div style="height:3rem"></div>
    <div class="loginContent loginHeight">
        <ul>
            <li>
                <i class="userIphone"></i>
                <input type="text" name=""  placeholder="请输入手机号" class="userInfor">
            </li>
            <li>
                <i class="codeIcon"></i>
                <input type="text" placeholder="请输入验证码" class="userInfor">
            </li>
            <li>
                <i class="password"></i>
                <input type="password" placeholder="请输入密码" class="userInfor" name="">
            </li>
        </ul>
        <p>
            <button type="button" class="submit LiearGradientMain2" @click="messageBox">立即注册</button>
            <pre class="code"></pre>
        </p>
        <div class="checkBox">
            <label for="checkbox">
                <input type="checkbox" id="checkbox" name="">
                我已阅读同意
            </label>
        </div>
    </div>
</div>
</template>
<script >
export default{
    data() {
        return{
            innertWith:"100px",
            innerHeight:"100px",
            iphone:"请输入手机号"
        }
    },
    beforeCreate: function() {

    },
    mounted(){
       /* this.$TipPop("用户名错误用户");*/
        /* 获取屏幕的width和height*/
        this.innertWith= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
        this.innerHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    methods:{
        messageBox() {
            /*this.$Message.alert("用户名错误",function() {});*/
        },

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

            background:url(http://res.hyft88.com/Content/Resources/Style/Mob/Images/loginbtn.png) center bottom no-repeat;
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
    .checkBox{
        margin-top:p(40px);
        margin-left:p(15px);
    }
}
</style>