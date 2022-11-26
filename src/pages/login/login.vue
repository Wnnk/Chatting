<template>
  <view class="contents">
    <view class="top-tar">
      <view class="top-bar-right">
        <view class="text" @click="goSignUp">注册</view>
      </view>
    </view>

    <view class="logo">
      <img src="../../static/img/login/logo.png" @click="test">
    </view>

    <view class="main">
      <view class="title">登录</view>
      <view class="slogan">你好，欢迎登录</view>
      <view class="inputs">
        <input type="text" placeholder="用户名/邮箱" class="user" placeholder-style="color:#aaa;font-weight:400" v-model="user.data"/>
        <input type="password" placeholder="密码" class="psw" placeholder-style="color:#aaa;font-weight:400" v-model="user.pwd"/> 
      </view>
      <view class="tips" v-show="isMistake">输入用户名或密码错误</view>
    </view>
    <view class="submit" @click="useLogin">登录</view>
  </view>
</template>



<script>
import store from "../../store/index"
export default {
  data(){
    return{
      token:"",
      user:{
        data:"",
        pwd:"",
      },
      isMistake:false,
    }
  },
  methods: {
    goSignUp(){
      uni.navigateTo({
        url:"./signup"
      })
    },
    useLogin(){
     uni.request({
      url:"http://192.168.1.102:3000/singin/match",
      data:{
        data:this.user.data,
        pwd:this.user.pwd
      },
      method:"POST",
      success:(data)=>{
        const result = data.data
        if (result.status === 400) {
          this.isMistake = true
        }else if (result.status ===200) {
          this.isMistake = false
          store.commit("GET_USER",result.back)
          localStorage.setItem("token",result.back.token)
          uni.redirectTo({
            url:"../index/index"
          })
        }
      }
     })
    }
  },
}
</script>


<style scoped>
.contents{
	
	padding-top: var(--status-bar-height);
}
.top-tar{
	position: fixed;
	z-index: 1001;
	top: 0;
	left: 0;
	width: 100%;
	height: 88rpx;
	padding-top: var(--status-bar-height);
	background: #FFFFFF;
}
.top-bar-right{
  float:right;
  padding-right: 32rpx;
}
.text{
  font-size: 18px;
  color: #333333;
  font-weight: 500;
  line-height: 88rpx;
}
.logo{
  text-align: center;
}
.logo img{
  padding-top: 256rpx;
  width: 194rpx;
  height: 92rpx;
  margin: 0 auto;
}
.main{
  padding: 54rpx 30rpx 120rpx;
}
.title{
  font-size: 56rpx;
  color: #272832;
  font-weight: 500;
  line-height: 80rpx;
}
.slogan{
  font-size: 40rpx;
  color:rgba(39, 40, 50, 0.5);
  line-height:56rpx;
}
.inputs{
  padding-top: 48rpx;
}
.inputs input{
  padding-top: 8rpx;
  height: 88rpx;
  font-size: 32rpx;
  color:rgba(39, 40, 50, 1); 
  line-height:88rpx;
  border-bottom: 1px solid rgba(39,40,50,0.1);
}
.pws{
  padding-top: 8rpx;
}
.submit{
  margin: 0 auto;
  width: 520rpx;
  height: 96rpx;
  background: #FFE431;
  box-shadow: 0rpx 50rpx 32rpx -36rpx;
  border-radius: 48rpx; 

  font-size: 32rpx;
  font-weight: 500;
  color: rgba(39, 40, 50, 1);
  line-height: 96rpx;
  text-align: center;
}
.tips{
  float: left;
  font-size: 32rpx;
  color:rgba(255, 93, 91, 1); 
  line-height:56rpx;
}
</style>