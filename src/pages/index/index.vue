<template>
	<view class="content">
		<view class="top-tar">
			<view class="top-bar-left">
				<img src="../../static/img/index/two.png" alt="">
			</view>


			<view class="top-bar-center">
				<img src="../../static/img/index/logo.png" alt="">
			</view>

			<view class="top-bar-right">
				<img src="../../static/img/index/search.png" class="search">
				<img src="../../static/img/index/add.png" class="add">
			</view>

			
		</view>


		<view class="main"> 
			<!-- 好友申请 -->
			<view class="friends">
				<view class="friend-list">
					<view class="friend-list-l">
						<text class="tip">12</text>
						<img src="../../static/img/index/apply.png" alt="">
					</view>

					<view class="friend-list-r">
						<view class="top">
							<view class="name">知道名字</view>
							<view class="time">13:46</view>
						</view>
						<view class="news">
							好友申请
						</view>
					</view>
				</view>
			</view>

			<view class="friends">
				<view class="friend-list" v-for="item in friends" :key="item.id">
					<view class="friend-list-l">
						<text class="tip">{{item.tip}}</text>
						<img :src="item.imgurl" alt="">
					</view>

					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						<view class="news">
							{{item.news}}
						</view>
					</view>
				</view>
			</view>
		</view>
		

		
	</view>
</template>

<script>
import datas from "../../datas/datas"
import myfun from "../../datas/myfun.js"
	export default {
		data() {
			return {
				friends:[]
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			changeTime(date){
				return myfun.dateTime(date)
			},
			getFriends(){
				this.friends = datas.friends()
				this.friends.forEach(item =>{
					item.imgurl = "../../static/img/index/" + item.imgurl
				})

				console.log(this.friends)
			}
		}
	}
</script>

<style scoped>
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: var(--status-bar-height);
	padding-bottom: 32rpx;
}
.top-tar{
	position: fixed;
	z-index: 1001;
	top: 0;
	left: 0;
	width: 100%;
	height: 88rpx;
	/* box-sizing: border-box; */
	padding-top: var(--status-bar-height);
	background: #FFFFFF;
	box-shadow: 0px 0.5px 0px 0px rgba(0,0,0,0.1);
	display: flex;
}
.top-bar-right{
	width: 100%;
}
.top-bar-left img{
	width: 68rpx;
	height: 68rpx;
	margin: 8rpx 0rpx 12rpx 32rpx;
}
.top-bar-center img{
	width: 88rpx;
	height: 42rpx;
	margin: 24rpx 0 22rpx 232rpx;
}
.search{
	width: 53rpx;
	height: 53rpx;
	margin: 16rpx 40rpx 20rpx 158rpx;
}
.add{
	width: 48rpx;
	height: 48rpx;
	margin: 20rpx 32rpx 20rpx 0;
}
/* 朋友列表 */
.main{
	padding: 88rpx 16rpx 0 ;
	width: 100%;
	border: 1px solid red;

}

.friend-list{
	height: 96rpx;
	padding: 16rpx 0 ;
}
.friend-list:active{
	background-color: #F3F3F3;
}
.friend-list-l{
	position: relative;
	float: left;
	margin-left: 32rpx;
}
.friend-list-l img{
	width: 96rpx;
	height: 96rpx;
	border-radius: 24rpx;
	background-color: #FFE431;
	/* margin: 40rpx 32rpx 0 32rpx; */
}
.tip{
	position: absolute;
	top: -6rpx;
	left: 68rpx;
	min-width: 36rpx;
	/* width: 48rpx; */
	height: 36rpx;
	border-radius: 18px;
	background: rgba(255,93,91,1);
	z-index:10;
	font-size: 12px;
	color: #FFFFFF;
	line-height: 36rpx;
	text-align: center;
}

.friend-list-r{
	padding-left: 160rpx;
}
.top{
	height: 50rpx;
	display: flex;
	justify-content: space-between;
}
.name{
	font-size: 36rpx;
	font-weight: 400;
	color:rgba(39,40,50,1);
	line-height: 50rpx;
}
.time{
	float: right;
	font-size: 12px;
	color: rgba(39,40,50,0.40);
	line-height: 50rpx;
	margin-right: 32rpx;
	/* display: none; */
}
.news{
	font-size: 14px;
	color: rgba(39,40,50,0.60);
	line-height: 40rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
}
</style>
