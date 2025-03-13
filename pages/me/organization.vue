<template>
	<view class="container">
		<head-line></head-line>
		<view class="content">
			<view class="subtitle">{{content.subtitle}}</view>
			<gradient-line color1="#59C8F5" width="155rpx"></gradient-line>
			<view class="text">{{content.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: {
					subtitle: "组织",
					text: "XXX,您已被编入XXX党支部，XXX党总支。"
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.container {
	width: 100%;
	padding: 26rpx 40rpx;
	box-sizing: border-box;
}

.content {
	padding: 25rpx 4rpx;
}

.subtitle {
	font-size: 34rpx;
}

.text {
	margin-top: 20rpx;
	font-size: 30rpx;
}
</style>
