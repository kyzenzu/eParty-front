<template>
	<view class="container">
		<view class="zsjs">
			<!-- 知识介绍 -->
			<view class="section-title">知识介绍</view>
			<gradient-line color1="#E42417" width="164rpx"></gradient-line>
			<view class="grid-container">
				<view class="grid-item" v-for="(item, index) in gridItems" :key="index" @click="onGridClick(item)">
					<image :src="item.icon" class="grid-icon"></image>
					<text class="grid-text">{{ item.text }}</text>
				</view>
			</view>
		</view>

		<view class="gzsc">
			<!-- 发展党员工作手册 -->
			<view class="title-box">
				<view class="title">发展党员工作手册</view>
				<view class="line"></view>
			</view>
			<view class="card-container">
				<view class="row" v-for="(item, index) in manuels" :key="index">
					<manuel-item :item="item"></manuel-item>
				</view>
			</view>
			<view class="look-more">
				<text>下拉查看更多</text>
			</view>
		</view>

	</view>
</template>

<script>
	const manueldata = require('@/data/manueldata.json');
	const introducedata = require('@/data/introducedata.json');
	export default {
		onReachBottom(){
			uni.navigateTo({
				url: "/pages/join/manuel"
			})
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
			uni.navigateTo({
				url: "/pages/join/manuel"
			})
		},
		data() {
			return {
				gridItems: [{
						text: "入党申请人",
						icon: "/static/images/join/applicant.png"
					},
					{
						text: "入党积极分子",
						icon: "/static/images/join/active.png"
					},
					{
						text: "发展对象",
						icon: "/static/images/join/development.png"
					},
					{
						text: "预备党员",
						icon: "/static/images/join/preparatory.png"
					},
					{
						text: "正式党员",
						icon: "/static/images/join/member.png"
					},
				],
				handbookItems: [{
						title: "递交入党申请书",
						desc: "入党申请书范例 上传入党申请书"
					},
					{
						title: "党组织派人谈话",
						desc: "了解入党申请人基本情况；介绍..."
					},
				],
				manuels: []
			};
		},
		methods: {
			onGridClick(item) {
				var page = introducedata[item.text];
				uni.navigateTo({
					url: '/pages/join/introduce?page=' + JSON.stringify(page)
				});
			},
			onHandbookClick(item) {
				uni.showToast({
					title: `查看 ${item.title}`,
					icon: "none"
				});
			},
			onLoad() {
				this.manuels = manueldata["申请入党"];
			}
			
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		background-color: #F6F6F6;

		.section-title {
			font-size: 32rpx;
			font-weight: bold;

			// padding-left: 10rpx;

		}

		.zsjs {
			width: 100%;
			height: 401rpx;
			background-color: #FFF;
			padding: 26rpx 20rpx;
			box-sizing: border-box;

			/* 网格布局 */
			.grid-container {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 50rpx;
				padding: 44rpx 49rpx;

				.grid-item {
					width: 120rpx;
					height: 110rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					// transition: all 0.3s ease;

					&:active {
						background-color: #eaeaea;
					}

					.grid-icon {
						width: 80rpx;
						height: 80rpx;
					}

					.grid-text {
						font-weight: bold;
						font-size: 20rpx;
						color: #333;
					}
				}
			}
		}


		.gzsc {
			width: 100%;
			height: 684rpx;
			box-sizing: border-box;
			margin-top: 20rpx;
			padding-top: 24rpx;
			background-color: #FFF;
			.title-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				.title {
					font-size: 32rpx;
					font-weight: bold;
					margin-bottom: 11rpx;
				}
				.line {
					width: 61rpx;
					height: 6rpx;
					background-color: #E42417;
				}
			}
			
			/* 卡片列表 */
			.card-container {
				padding: 0 62rpx 0 62rpx;
				.row {
					border-bottom: 1rpx solid #EFEFEF;
				}
				.card {
					display: flex;
					align-items: center;
			
					&:active {
						background-color: #f4f4f4;
					}
			
					.card-left {
						margin-right: 20rpx;
			
						.card-icon {
							width: 40rpx;
							height: 40rpx;
						}
					}
			
					.card-content {
						flex: 1;
			
						.card-title {
							font-size: 28rpx;
							font-weight: bold;
							color: #333;
						}
			
						.card-desc {
							font-size: 24rpx;
							color: gray;
							margin-top: 5rpx;
						}
					}
					.card-right {
						.arrow {
							color: black;
							font-size: 18px;
						}
					}
				}
			}
			.look-more {
				margin-top: 138rpx;
				font-size: 28rpx;
				color: #E9E9F0;
				text-align: center;
			}
		}
	}
</style>