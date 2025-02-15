<template>
	<view class="manuel-item">
		<view class="card-left">
			<image src="/static/images/join/edit.png" class="card-icon"></image>
		</view>
		<view class="card-content-right">
			<view class="card-content">
				<text class="card-title">{{ item.title }}</text>
				<text class="card-desc">{{ item.desc }}</text>
			</view>
			<view class="card-right">
				<text>更多</text>
				<text class="arrow">></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"manuel-item",
		props: {
			item: {
				type: Object,
				default() {
					return {
						title: "递交入党申请书",
						desc: "了解入党申请人基本情况"
					}
					
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.manuel-item {
	width: 100%;
	height: 185rpx;
	background-color: #FFF;
	display: flex;
	// justify-content: center;
	padding: 50rpx 0 54rpx 0;
	box-sizing: border-box;
	.card-left {
		margin-top: 20rpx;
		.card-icon {
			width: 34rpx;
			height: 32rpx;
		}
	}
	.card-content-right {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.card-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 36rpx;
		.card-title {
			font-size: 32rpx;
		}
		.card-desc {
			font-size: 25rpx;
			color: #AFAFAF;
		}
	}
	.card-right {
		font-size: 25rpx;
		line-height: 50rpx;
		font-weight: bold;
		color: #E42417;
	}
}
</style>