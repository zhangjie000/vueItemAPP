<template>
<div class="Bg" :style="{ width: innertWith+'px', height: innerHeight + 'px' }">
    <div style="height:2rem"></div>
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
        this.$TipPop("用户名错误用户");
        /* 获取屏幕的width和height*/
        this.innertWith= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
        this.innerHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    methods:{
        messageBox() {
            this.$Message.alert("用户名错误",function() {});
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
</style>