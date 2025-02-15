<template>
	<view class="container">
		<swiper class="notice-board" circular autoplay  interval="3000" duration="200">
			<swiper-item class="item" v-for="(src, index) in boardArray" :key="index">
				<image :src="src"></image>
			</swiper-item>
		</swiper>
		<view class="contents">
			<divider double style="margin-bottom: 38rpx;"></divider>
			
			<!-- 学工党建 -->
			<view class="xgdj">
				<view class="xgdj-title">
					<view class="block"></view>
					<text>学工党建</text>
				</view>
				<view class="xgdj-item-box" v-for="(item, index) in xgdj" :key="index">
					<xgdj-item :item="item"></xgdj-item>
					<divider v-if="index != xgdj.length-1" style="margin-bottom: 45rpx;"></divider>
					<divider v-else double style="margin-bottom: 25rpx;"></divider>
				</view>
				<view class="look-before">
					<text>查看往期动态</text>
					<text class="arrow">></text>
				</view>
			</view>
			
			<!-- 专题网站 -->
			<view class="ztwz">
				<view class="ztwz-title">
					<view class="block"></view>
					<text>专题网站</text>
				</view>
				<image :src="ztwzImage"></image>
			</view>
			
			<!-- 相关链接 -->
			<view class="xglj">
				<view class="xglj-title">
					<view class="block"></view>
					<text>相关链接</text>
				</view>
				<view class="xglj-links">
					<image v-for="(link, index) in xgljLinks" :src="link" :key="index"></image>
				</view>
			</view>
			
			<divider double></divider>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boardArray: [
					"/static/images/index/board.png"
				],
				xgdj: [
					{
						title: "计算机学院党委2024/2025学年第一学期发展对象拟推荐名单公示",
						info: "计算机学院党建园地 2024-10-18"
					},
					{
						title: "计算机学院党委2024/2025学年第一学期发展对象拟推荐名单公示",
						info: "计算机学院党建园地 2024-10-18"
					},


	
				],
				ztwzImage: "/static/images/index/ztwz.png",
				xgljLinks: [
					"/static/images/index/link1.png",
					"/static/images/index/link2.png",
				]
			};
		}
	}
</script>

<style lang="scss">
.container {
	width: 100%;
	height: 100%;
	// position: fixed;
	background-color: white;
	// overflow-x: hidden; 
	// overflow-y: scroll; 
	// -webkit-overflow-scrolling: touch;
	// padding-bottom: (--window-bottom);
}
.notice-board {
	width: 100%;
	.item {
		image {
			width: 100%;
			height: 327rpx;
		}
	}
}
.contents {
	width: 100%;
	padding: 17rpx 40rpx;
	box-sizing: border-box;
}

.xgdj {
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 50rpx;
	.xgdj-title {
		display: flex;
		line-height: 28rpx;
		font-size: 38rpx;
		margin-bottom: 42rpx;
		// font-weight: bold;
		.block {
			width: 6rpx;
			height: 32rpx;
			background-color: red;
			margin-right: 20rpx;
		}
	}
	.look-before {
		width: 100%;
		display: flex;
		justify-content: center;
		color: #7D7D7D;
		font-size: 28rpx;
		.arrow {
			padding-left: 10rpx;
			color: #E42417;
		}
	}
}

.ztwz {
	width: 100%;
	box-sizing: border-box;
	padding-top: 10rpx;
	margin-bottom: 50rpx;
	.ztwz-title {
		display: flex;
		line-height: 28rpx;
		font-size: 38rpx;
		margin-bottom: 42rpx;
		// font-weight: bold;
		.block {
			width: 6rpx;
			height: 32rpx;
			background-color: red;
			margin-right: 20rpx;
		}
	}
	image {
		width: 100%;
		height: 180rpx;

	}
}

.xglj {
	margin-bottom: 80rpx;
	.xglj-title {
		display: flex;
		line-height: 28rpx;
		font-size: 38rpx;
		// font-weight: bold;
		margin-bottom: 42rpx;
		.block {
			width: 6rpx;
			height: 32rpx;
			background-color: red;
			margin-right: 20rpx;
		}
	}
	.xglj-links {
		display: flex;
		justify-content: space-between;
		image {
			width: 310rpx;
			height: 140rpx;
		}
	}
}
</style>
