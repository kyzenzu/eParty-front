<template>
	<view class="container">
		<view class="filter">
			<text>筛选 :</text>
		</view>
		<view class="contents">
			<view class="member-account content-card">
				<view class="title">支部党员人数</view>
			</view>
			
			<view class="join-condition content-card">
				<view class="title">支部入党情况</view>
			</view>
			
			<view class="composition content-card">
				<view class="title">学院党支部组成情况</view>
			</view>
			
			<view class="approval-mterials content-card">
				<view class="title">审批材料</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
	background-color: #F6F6F6;
}
.container {
	box-sizing: border-box;
	.filter {
		width: 100%;
		height: 89rpx;
		padding: 10rpx 33rpx;
		box-sizing: border-box;
		display: flex;
		text-align: center;
	}
	.contents {
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-bottom: calc(var(--window-bottom) + 28rpx);
		.content-card {
			width: 100%;
			background-color: #FFF;
			border-radius: 10rpx;
			margin-bottom: 20rpx;
			.title {
				padding-top: 25rpx;
				padding-left: 25rpx;
				font-weight: bold;
				letter-spacing: 5rpx;
			}
		}
		.member-account {
			height: 538rpx;
		}
		
		.join-condition {
			height: 538rpx;
		}
		
		.composition {
			height: 480rpx;
		}
		
		.approval-mterials {
			height: 592rpx;
		}
	}
}
</style>
