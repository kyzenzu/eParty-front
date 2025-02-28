<template>
	<view class="container">
		<view class="navbar">
			<view class="nav-item" v-for="(item, index) in navbar" :key="index" @click="clickNav(index, item)">
				<view class="text">{{item}}</view>
				<view class="line" v-show="curProgress == index"></view>
			</view>
		</view>
		
		<swiper class="contents" :current="curProgress" @change="changeProgress" :style="{height: swiperHeight}">
			<swiper-item class="swiper-item" v-for="(progress, progressIdx) in progresses" :key = "progressIdx">
				<view class="row" v-for="(item, index) in progress" :key="index">
					<progress-item :item="item"></progress-item>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		methods: {
			clickNav(index, item) {
				this.curProgress = index; 
				// console.log(index);
			},
			changeProgress(e) {
				this.curProgress = e.detail.current;
			}
		},
		computed: {
			swiperHeight() {
				var maxCount = 0;
				for (var i = 0; i < this.progresses.length; i++) {
					maxCount = this.progresses[i].length > maxCount ? this.progresses[i].length : maxCount;
				}
				var height = maxCount * 270 + 100;
				// console.log(height);
				return height + "rpx";
			}
		},
		data() {
			return {
				curProgress: 0,
				navbar: [
					"审批中","退回","审批成功","全部",
				],
				progresses: [
					[{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 0
					}],
					[{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 1
					},{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 1
					}],
					[{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 2
					},{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 2
					},{
						title: "申请入党",
						time: "24/02/10",
						content: "递交《入党申请书》",
						status: 2
					},],
					[{}]
				]
			};
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
	background-color: #E4E4E4;
}

.container {
	.navbar {
		width: 100%;
		height: 81rpx;
		background-color: #FFF1F0;
		display: flex;
		justify-content: space-between;
		padding: 0 70rpx;
		box-sizing: border-box;
		.nav-item {
			height: 100%;
			display: flex;
			flex-direction: column;
			.text {
				line-height: 75rpx;
				color: #E42417;
			}
			.line {
				width: 60rpx;
				height: 6rpx;
				border-radius: 5rpx;
				background-color: #e42417;
			}
		}
	}
	.contents {
		background-color: #E4E4E4;
		.swiper-item {
			width: 100%;
			box-sizing: border-box;
			padding: 20rpx 27rpx;
			.row {
				box-shadow: 5rpx 5rpx 5rpx #888888;
			}
		}
	}
}
</style>
