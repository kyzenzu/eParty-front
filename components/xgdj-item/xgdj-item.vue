<template>
	<view class="xgdj-item">
		<view class="title">{{item.title}}</view>
		<view class="info-box">
			<view class="info">{{item.info}}</view>
			<view class="lookup">
				<image src="/static/images/index/lookup.png"></image>
				<view style="color: #E42417;">查看</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"xgdj-item",
		props: {
			item: {
				type: Object,
				default() {
					return {
						title: "计算机学院党委2024/2025学年第一学期发展对象拟推荐名单公示",
						info: "计算机学院党建园地 2024-10-18"
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
.xgdj-item {
	width: 100%;
	height: 185rpx;
	.title {
		font-size: 35rpx;
		letter-spacing: 3rpx;
		line-height: 52rpx;
		margin-bottom: 10rpx;
	}
	.info-box {
		font-size: 25rpx;
		line-height: 26rpx;
		display: flex;
		justify-content: space-between;
		.info {
			color: #AFAFAF;
		}
		.lookup {
			display: flex;
			justify-content: space-between;
			width: 90rpx;
			image {
				width: 36rpx;
				height: 26rpx;
			}
		}
	}
}

</style>