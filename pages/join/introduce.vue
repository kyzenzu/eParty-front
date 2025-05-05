<template>
	<view class="container">
		<head-line></head-line>
		
		<view class="tips" v-show="page.tips">{{page.tips}}</view>
		
		<view class="title">{{page.title}}</view>
		
		<view class="contents">
			<view class="content-item" v-for="(item, index) in page.contents" :key="index">
				<view class="subtitle">{{item.subtitle}}</view>
				<gradient-line color1="#59C8F5" width="155rpx"></gradient-line>
				<view class="text">{{item.text}}</view>
			</view>
		</view>
		
		<view class="look-archive" style="text-align:center;" v-show="page.title == '材料归档'" @click="goToArchive">
			查看材料归档<span style="color:red;margin-left:10rpx;">></span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: {}
			};
		},
		methods: {
			goToArchive() {
				uni.navigateTo({
					url: "/pages/me/archive"
				});
			}
		},
		onLoad(opt) {
			if (opt.page)
				this.page = JSON.parse(opt.page);
		}
	}
</script>

<style lang="scss">
.container {
	width: 100%;
	padding: 26rpx 40rpx;
	box-sizing: border-box;
	
	.tips {
		color: #E42417;
		margin-top: 15rpx;
		text-align: center;
		font-size: 34rpx;
	}
	.title {
		margin-top: 25rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}
	.contents {
		padding: 42rpx 4rpx;
		.content-item {
			margin-bottom: 60rpx;
			.text {
				margin-top: 20rpx;
			}
			
		}
	}
}
</style>
