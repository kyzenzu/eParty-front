<template>
	<view class="container">
		<!-- 注册选择登录身份界面 -->
		<!-- 顶部提示 -->
		<view class="top-tip">
			<view class="image-box">
				<image src="/static/images/register/notice.png"></image>
			</view>
			<text>{{tips}}</text>
		</view>
		
		<view class="contents">
			<view class="login-as" v-for="(item, index) in loginAs" :key="index" @click="complete(index)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips:"请选择相应的身份进入。除“入党申请人”选项，其余均为 可进入管理界面的党员身份，若党员同时兼有多个身份，选 填权限较大一项即可。",
				loginAs: [
					"入党申请人",
					"党委",
					"支部书记",
					"班主任",
					"兼职组织员"
				],
			};
		},
		methods: {
			complete(index) {
				var target = ["applicant", "committee", "secretary", "headTeacher", "organizer"];
				target = target[index];
				uni.navigateTo({
					url: "/pages/register/applicant"
				})
			}
		}
	}
</script>

<style lang="scss">
.container {
	.top-tip {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #E6F0FF;
		padding: 10rpx;
		line-height: 30rpx;
		font-size: 26rpx;
		color: #6D6B6B;
		box-sizing: border-box;
	
		image {
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
	}
	
	.contents {
		padding-top: 92rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.login-as {
			width: 484.62rpx;
			height: 95rpx;
			border: 5rpx solid #E42417;
			border-radius: 15rpx;
			text-align: center;
			line-height: 95rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #333;
			text-align: center;
			display: inline-block;
			letter-spacing: 6rpx; /* 增加字间距 */
			
			margin-bottom: 42rpx;
		}
	}
}
</style>
