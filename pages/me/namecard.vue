<template>
	<view class="container">
		<view class="info-card active">
			<view class="title">昵称</view>
			<view class="info">
				<image :src="user.avatar" mode="aspectFill"></image>
				<view class="arrow">></view>
			</view>
		</view>
		<view class="info-card active">
			<view class="title">昵称</view>
			<view class="info">{{user.name}}</view>
		</view>
		<view class="info-card active">
			<view class="title">学号/工号</view>
			<view class="info">{{user.idNumber}}</view>
		</view>
		<view class="info-card active">
			<view class="title">手机号</view>
			<view class="info">{{user.phoneNumber}}</view>
		</view>
		<view class="info-card">
			<view class="title">登录身份</view>
			<view class="info">{{user.loginAs}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			};
		},
			
		onLoad(options) {
			this.user = JSON.parse(options.userData);
			console.log(this.user);
		}
	}
</script>

<style lang="scss">
.container {
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #F6F6F6;
	padding-top: 28rpx;
	box-sizing: border-box;
	.info-card {
		width: 100;
		height: 106rpx;
		background-color: white;
		display: flex;
		padding: 0 35rpx;
		align-items: center;
		justify-content: space-between;
		&.active {
			border-bottom: solid 4rpx #F6F6F6;
		}
		.title {}
		.info {
			color: #767676;
			display: flex;
			align-items: center;
			image {
				width: 78rpx;
				height: 78rpx;
				border-radius: 50%;
			}
			.arrow {
				font-size: 35rpx;
				color: #E42417;
				font-weight: bold;
				margin-left: 30rpx;
			}
		}

	}
}
</style>
