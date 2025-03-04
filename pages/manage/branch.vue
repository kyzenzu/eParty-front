<template>
	<view class="container">
		<head-line></head-line>
		
		<view class="title">{{page.title}}</view>
		
		<view class="content">
				<view class="subtitle">{{page.content.subtitle}}</view>
				<gradient-line color1="#59C8F5" width="155rpx"></gradient-line>
				<view class="members">{{page.content.member}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: {
					title: "教工第一党支部",
					content: {
						subtitle: "人员组成",
						member: "徐欧官 张运涛 马艳娜 韦 伟 邢 晨 张 颖 耿波亭 王 毅 程 辉 王洪翠 汪松松 阎 爽 张双竹 杨 欐 周熙熙 马帅森 王煜烽 张海峰"
					}
				}
			};
		}
	}
</script>

<style lang="scss">
.container {
	width: 100%;
	padding: 26rpx 40rpx;
	box-sizing: border-box;
	.title {
		margin-top: 25rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}
	.content {
		padding: 42rpx 4rpx;
		margin-bottom: 60rpx;
		.members {
			margin-top: 20rpx;
			font-size: 30rpx;
		}
	}
}
</style>
