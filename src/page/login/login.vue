<template>
    <div class="Container">
        <div class="login">
            <div class="sitename">
                <div><img src="../../images/logo1.png"></div>
                <p>建议使用火狐，谷歌，360极速和IE9以上浏览器</p>
            </div>
            <div class="wrap">
                <div class="banner"><img src="../../images/tybanner.jpg"></div>
                <div class="loginForm" >             
                    <div class="item line"><span class="user"></span><input autocomplete="on"  id="UserName" maxlength="20" name="UserName" placeholder="请输入用户名" type="text" v-model="userAccount"></div>
                    <div class="item line">
                        <span class="pwd"></span></span><input class="txtbox" id="Password" maxlength="20" name="Password" placeholder="请输入密码" type="password" v-model="passWord" @keyup.enter="mobileLogin"></div>
                    <button class="login_container" @click="mobileLogin">立即登录</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    import {inputCheck,Cookie,changeText,layer} from '../../components/common/common'
    import {change_text} from "../../service/data"
    import md5 from 'js-md5'
    import {mapState, mapMutations} from 'vuex' 
    import {login,Token} from "../../service/getData"
    export default {
        data(){
            return {
                userAccount: null, //用户名
                passWord: null, //密码
                code:null,
            }
        },
        created(){
            this.init()
        },
        components: {
            
        },
        computed: {
            
        },
        methods: {
            //发送登陆信息
            async init(){
                
            },
            mobileLogin(){
                inputCheck([
                    [!this.userAccount,"请输入用户名"],
                    // [!this.passWord,"密码不能为空"],
                    [true,"",this.loginSuc]           
                ],this)
            },
            async loginSuc(){
                let data = await login(this.userAccount,md5(this.passWord));
                let user = {username:this.userAccount,password:md5(this.passWord),state:true};
                if(data.code == 0){       
                    this.$router.push("/home");
                    sessionStorage.clear();
                    sessionStorage.setItem("login",JSON.stringify(user));
                    sessionStorage.setItem("userInfo",JSON.stringify(data.res));
                }else{
                   layer("error",data.ch,this)
                }
            }
        }
    }

</script>

<style lang="scss" scoped  rel="stylesheet/scss" type="text/css">
    @import '../../style/mixin';
    .Container{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background: #F2F2F2;
        .login{
            width: 66%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            border:none;
            background: #FFFFFF;
            ::after{
                display: block;
                content: "";
                clear: both;
                visibility: hidden;
                overflow: hidden;
            }
            .banner{
                width: 66%;
                float: left;
                border-right:1px solid #CCCCCC;
                img{
                    width: 100%;
                }
            }
            .wrap{
                border:1px solid white;
            }
            .sitename{
                position: relative;
                background: #F2F2F2;
                width: 100%;
                border:1px solid #F2F2F2;
                div img{
                    width: 29%;
                    float: left;
                }
                p{
                    font-size: 13px;
                    position: absolute;
                    right: 0;
                    bottom: .05rem;
                    color: #777;
                }
            }
            .loginForm{
                width: 33%;      
                margin: 0 auto;
                text-align: left;
                float: left;
                padding-top: 1.3rem;
                .item{
                    width: 70%;
                    overflow: hidden;
                    margin-left: 15%;
                    height: .46rem;
                    margin-bottom: .2rem;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    position: relative;
                    background: #EEEEEE; 
                    span{
                        position: absolute;
                        left: 0;
                        border-radius: 4px;
                        bottom: 0rem;
                        width: .4rem;
                        top: 0rem;
                    }
                    input{
                        width: 100%;
                        position: absolute;
                        padding: .1rem 0;
                        padding-left: .14rem;
                        top:0rem;
                        bottom: 0rem;
                        left: .44rem;
                        background: white;
                    }
                    span.user{
                        background: url("../../images/user.png") no-repeat center center #EEEEEE;
                    }
                    span.pwd{
                        background: url("../../images/password.png") no-repeat center center #EEEEEE;
                    }
                    span.code{
                        background: url("../../images/logo_15.png") no-repeat center center #EEEEEE ;
                        background-size: 50% 50%;
                    }
                    input::-webkit-input-placeholder{
                        color: #9999B2;
                    }
                }
                .login_container{
                    width: 60%;
                    display: block;
                    margin: 0 auto;
                    font-size: 14px;
                    background-color: #D9534F;
                    border: solid 1px #D9534F;
                    border-radius: 4px;
                    text-align: center;
                    color: white;
                    padding:6px 0;
                    margin-top: .4rem;
                }              
            }
        }

    }
    
</style>
