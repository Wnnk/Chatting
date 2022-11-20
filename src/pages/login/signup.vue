
<template>
  <view class="contents">
    <view class="top-tar">
      <view class="top-bar-left">
        <img src="../../static/img/common/back.png" class="back-img">
      </view>
      <view class="top-bar-right">
        <view class="text">注册</view>
      </view>
    </view>

    <view class="logo">
      <img src="../../static/img/login/logo.png" >
    </view>

    <view class="main">
      <view class="title">注册</view>
      <view class="inputs">
        <view class="inputs-div">
          <input type="text" placeholder="用户名" class="user" placeholder-style="color:#aaa;font-weight:400"/>
          <view class="employ" v-if="employ">已有用户名</view>
          <img src="../../static/img/login/right1.png" class="ok" v-if="isuser">
        </view>
        <view class="inputs-div">
          <input type="text" placeholder="邮箱" 
          class="email" 
          placeholder-style="color:#aaa;font-weight:400"
          @blur="isEmail"
          />
          <view class="employ" v-if="employ">已占用</view>
          <img src="../../static/img/login/right1.png" class="ok" v-if="isemail">
          <view class="invalid" v-if="invalid">邮箱无效</view>
        </view>

        <view class="inputs-div">
          <input :type="type" placeholder="密码" class="psw" placeholder-style="color:#aaa;font-weight:400"/>
          <view class="employ" v-if="employ">已占用</view>
          <img :src="lookurl" class="look" @click="looks">

        </view>
        
        
      </view>
    </view>
    <view class="submit">登录</view>
  </view>
</template>



<script>
import { tr } from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
  data(){
    return{
      type:"password",
      isuser:false,
      isemail:false,
      look:false,
      invalid:false,
      employ:false,
      lookurl:"../../static/img/login/biyan.png",
      email:"",
    }
  },
  methods:{
    looks(){
      if (this.look) {
        this.type = "password"
        this.look = !this.look
        this.lookurl = "../../static/img/login/biyan.png"
      }else{
        this.type = "text"
        this.look = !this.look
        this.lookurl = "../../static/img/login/look.png"
      }
    },
    isEmail(e){
      let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
      this.email = e.detail.value
      if (this.email.length>0) {
        if (reg.test(this.email)) {
          this.invalid = false
          this.isemail = true
        }else{
          this.invalid = true
        }
      }
    }

  }
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
.top-bar-left{
  float: left;
  padding-left: 32rpx;
  width: 88rpx;
  height: 88rpx;
}
.back-img{
  width: 26rpx;
  height: 46rpx;
  margin-top: 21rpx;
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
.inputs-div{
  position: relative;
}
.employ,.invalid{
  position: absolute;
  right: 0;
  top:40rpx;
  font-size: 28rpx;
  font-weight: 500;
  color: rgba(255, 93, 91, 1);
  line-height: 80rpx;
}
.ok{
  position: absolute;
  right: 0;
  top: 56rpx;
  width: 42rpx;
  height: 32rpx;
}
.look{
  position: absolute;
  right: 0;
  top: 56rpx;
  width: 32rpx;
  height: 18rpx;
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

</style>