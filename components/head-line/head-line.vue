<template>
	<view class="head-line">
		<view class="line1"></view>
		<view class="line2"></view>
	</view>
</template>

<script>
	export default {
		name:"head-line",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.head-line {
		// padding: 0 40rpx;
		.line1 {
			border-bottom: 8rpx solid #DFDFDF;
			margin-bottom: 5rpx;
		}
		.line2 {
			border-bottom: 3rpx solid #DFDFDF;
		}
	}
</style>