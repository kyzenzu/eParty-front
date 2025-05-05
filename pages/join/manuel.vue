<template>
	<!-- 发展党员工作手册界面 -->
	<view class="container">
		<scroll-view class="navbar" scroll-x>
			<view class="nav-item" v-for="(item,index) in navBar" :key="index" @click="clickNav(index, item)">
				<view class="inner-box">
					<view class="text" :class="{active:index==curManuel}">{{item}}</view>
					<view class="line" v-show="index==curManuel"></view>
				</view>
			</view>
		</scroll-view>
		<swiper class="contents" :current="curManuel" @change="changeManuel" :style="{height: swiperHeight}">
			<swiper-item class="swiper-item" v-for="(manuel, manuelIdx) in manuels" :key="manuelIdx">
				<view class="row" v-for="(item, itemIdx) in manuel" :key="itemIdx">
					<manuel-item :item="item"></manuel-item>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	const manueldata = require('@/data/manueldata.json');
	export default {
		data() {
			return {
				curManuel: 0,
				navBar: [
					"申请入党", "入党积极分子的确定和培养教育", "发展对象的确定和考察","预备党员的接收","预备党员的教育考察和转正"
				],
				manuels: {}
			};
		},
		computed: {
			swiperHeight() {
				
				var maxCount = 0;
				for (const key of Object.keys(manueldata)) {
				    maxCount = manueldata[key].length > maxCount ? manueldata[key].length : maxCount;
				  }
				var height = maxCount * 185 + 100;
				// console.log(height);
				return height + "rpx";
			}
		},
		methods: {
			clickNav(index, item) {
				this.curManuel = index;
			},
			changeManuel(e) {
				this.curManuel = e.detail.current;
			},
			clickManuelItem() {
				uni.navigateTo({
					url: '/pages/join/upload'
				});
			}
		},
		onLoad() {
			console.log(manueldata);
			this.manuels = manueldata;
		}
	}
</script>

<style lang="scss">
.container {

	.navbar {
		width: 100%;
		height: 80rpx;
		background-color: #FFF1F0;
		white-space: nowrap; // 实现左右滑动
		.nav-item {
			display: inline-block;
			.inner-box {
				display: flex;
				flex-direction: column;
				padding: 0 45rpx;
				.text {
					line-height: 74rpx;
					font-weight: bold;
					color: #AFAFAF;
					&.active {
						color: #E42417;
					}
				}
				
				.line {
					width: 60rpx;
					height: 6rpx;
					border-radius: 5rpx;
					background-color: #E42417;
				}
			}
			
		}
	}
	
	.contents {
		// height: 800rpx;
		.swiper-item {
			width: 100%;
			box-sizing: border-box;
			padding: 0 62rpx 0 62rpx;
			.row {
				border-bottom: 1rpx solid #EFEFEF;
			}
		}
		
	}
	
}
</style>
