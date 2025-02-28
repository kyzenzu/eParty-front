<template>
	<view class="progress-item">
		<view class="title-time">
			<view class="title">{{item.title}}</view>
			<view class="time">{{item.time}}</view>
		</view>
		<view class="line"></view>
		<view class="content">{{item.content}}</view>
		<view class="status" :class="statusClass[item.status]">
			{{statusContent[item.status]}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"progress-item",
		props: {
			item: {
				type: Object,
				default() {
					return {
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 2
					}
				}
			},
			
		},
		data() {
			return {
				statusClass: ["approval", "modify", "success"],
				statusContent: ["审批中", "去修改", "提交成功"]
			};
		}
	}
</script>

<style lang="scss">
.progress-item {
	height: 270rpx;
	background-color: #FFF;
	margin-bottom: 10rpx;
	border-radius: 10rpx;
	
	.title-time {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding: 25rpx 40rpx 25rpx 41rpx;
		justify-content: space-between;
		.title {
			
		}
		.time {
			color: #767676;
		}
	}
	.line {
		margin: 0 10rpx;
		border-radius: 10rpx;
		border-bottom: 4rpx solid #E7E7E7;
	}
	.content {
		padding: 44rpx 0 0 0;
		text-align: center;
	}
	.status {
		&.approval {
			margin-top: 7rpx;
			width: 129rpx;
			height: 59rpx;
			background-color: #0748CD;
			border-top-right-radius: 29.5rpx;
			border-bottom-right-radius: 29.5rpx;
			color: #FFF;
			text-align: center;
			line-height: 58rpx;
			font-size: 28rpx;
		}
		&.modify {
			margin-top: 21rpx;
			margin-left: 61rpx;
			margin-right: 61rpx;
			width: 573rpx;
			height: 56rpx;
			text-align: center;
			line-height: 55rpx;
			border-radius: 50rpx;
			border: solid 2rpx #E42417;
			color: #E42417;
			font-size: 29rpx;
		}
		&.success {
			margin-top: 7rpx;
			width: 137rpx;
			height: 59rpx;
			background-color: #2BBD5F;
			border-top-right-radius: 29.5rpx;
			border-bottom-right-radius: 29.5rpx;
			color: #FFF;
			text-align: center;
			line-height: 58rpx;
			font-size: 28rpx;
		}
	}
}
</style>