<template>
	<view class="container">
		<view class="filter">
			<text>筛选 :</text>
			<view class="filter-box filter-branch">
				<picker mode="selector" :range="branches" @change="changeBranch">
					<view class="picker-inner">
						<text class="filter-text branch">{{filter.branch}}</text>
						<!-- <image src="/static/images/manage/pull-down.png"></image> -->
					</view>
				</picker>
			</view>
			<view class="filter-box filter-grade">
				<picker mode="selector" :range="grades" @change="changeGrade">
					<view class="picker-inner">
						<text class="filter-text grade">{{filter.grade}}</text>
					</view>

				</picker>
			</view>
			<view class="filter-box filter-class">
				<picker mode="selector" :range="classes" @change="changeClass">
					<view class="picker-inner">
						<text class="filter-text class">{{filter.class}}</text>
					</view>

				</picker>
			</view>
		</view>
		<view class="contents">
			<view class="member-account content-card">
				<view class="title">支部党员人数</view>
				<view class="charts-box">
					<!-- 环形图 -->
					<qiun-data-charts type="ring"  :opts="ringCharts.opts" :chartData="ringCharts.data" />
				</view>
			</view>

			<view class="join-condition content-card">
				<view class="title">支部入党情况</view>
				<!-- 金字塔型漏斗图 -->
				<view class="charts-box funnel-charts">
					<!-- <view class="subtitle">人数统计至本学期</view> -->
					<qiun-data-charts type="funnel" :opts="funnelCharts.opts" :chartData="funnelCharts.data"/>
				</view>
			</view>

			<view class="composition-box content-card">
				<view class="title">学院党支部组成情况</view>
				<scroll-view class="compositions" scroll-x>
					<view class="branch" v-for="(branch, index) in compositions" :key="index" @click="goToBranch(index)"
						:style="{marginRight: branchMarginRight(index)}">
						<view class="branch-info">
							<view class="branch-name">{{branch.name}}</view>
							<view class="branch-details">{{branch.details}}</view>
						</view>

					</view>
				</scroll-view>
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
				ringCharts: {
					opts: {
						title: {
							name: "人数统计至本学期",
							fontSize: 12,
							offsetY: -90,
							color: "#000"
						},
						subtitle: {
							name: ""
						},
						legend: {
							position: 'bottom'
						},
						extra: {
							ring: {
								// ringWidth: 75,
								customRadius: 0,
								// linearType: 'custom',
								border: false,
								// borderWidth: 0,
								centerColor: '#FFF',
								labelWidth: 20,
								offsetAngle: -90,
							},
						}
					},
					data: {
						series: [{
							data: [{
								name: "党员",
								value: 20,
								color: "#E42417"
							}, {
								name: "群众",
								value: 40,
								color: "#13C0C0"
							}, {
								name: "正在入党",
								value: 50,
								color: "#1890FF"
							},]
						}]
					}
				},
				funnelCharts: {
					opts: {
						legend: {
							show: false
						},
						extra: {
							funnel:{
								type:'pyramid',
								labelAlign:'left',
							},
						}
					},
					data: {
						series: [{
							data: [{
								name: "入党申请人",
								value: 50,
								color: "#009EF9",
								// labelShow: false,
								labelText: "入党申请人",
							}, {
								name: "入党积极分子",
								value: 40,
								color: "#3078EC",
								// labelShow: false,
								labelText: "入党积极分子",
							}, {
								name: "发展对象",
								value: 30,
								color: "#EFDE1F",
								// labelShow: false,
								labelText: "发展对象",
							}, {
								name: "预备党员",
								value: 20,
								color: "#FF9C00",
								// labelShow: false,
								labelText: "预备党员",
							}, {
								name: "正式党员",
								value: 10,
								color: "#F65364",
								// labelShow: false,
								labelText: "正式党员",
							}]
						}]
					}
				},
				filter: {
					branch: "党支部",
					grade: "年级",
					class: "班级"
				},
				branches: [
					"教工第一党支部",
					"教工第二党支部",
					"教工第三党支部",
					"学生第一党支部",
					"学生第二党支部",
				],
				grades: [
					"大一",
					"大二",
					"大三",
					"大四"
				],
				classes: [
					"一班",
					"二班",
					"三班"
				],
				compositions: [{
						name: "教工第一党支部",
						details: "(软工+人工智能+实验室18人)"
					},
					{
						name: "教工第二党支部",
						details: "(物联网+网安+高数24人)"
					},
					{
						name: "教工第一党支部",
						details: "(软工+人工智能+实验室18人)"
					},
					{
						name: "教工第二党支部",
						details: "(物联网+网安+高数24人)"
					},
				]
			};
		},
		methods: {
			branchMarginRight(index) {
				return index == this.compositions.length - 1 ? 0 : "75rpx";
			},
			goToBranch(index) {
				var branch = this.compositions[index].name;
				console.log("go to branch " + branch);
				uni.navigateTo({
					url: "/pages/manage/branch"
				})
			},
			changeBranch(e) {
				console.log(e);
				var index = e.detail.value;
				this.filter.branch = this.branches[index];
			},
			changeGrade(e) {
				console.log(e);
				var index = e.detail.value;
				this.filter.grade = this.grades[index];
			},
			changeClass(e) {
				console.log(e);
				var index = e.detail.value;
				this.filter.class = this.classes[index];
			}
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
			padding: 20rpx 33rpx;
			box-sizing: border-box;
			display: flex;
			text-align: center;
			justify-content: space-between;

			text {
				font-size: 30rpx;
			}

			.filter-box {
				width: 179rpx;
				height: 49rpx;
				background-color: #FFF;
				border-radius: 24.5rpx;
				border: solid 1rpx #000;

				.picker-inner {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;

					.filter-text {
						font-size: 26rpx;
						line-height: 49rpx;
						letter-spacing: 3rpx;
					}

					image {
						margin-left: 12rpx;
						width: 18.26rpx;
						height: 10.58rpx;
					}
				}
			}
		}

		.contents {
			box-sizing: border-box;
			padding: 0 20rpx;
			padding-bottom: calc(var(--window-bottom) + 28rpx);

			.content-card {
				width: 100%;
				background-color: #FFF;
				padding-bottom: 50rpx;
				border-radius: 20rpx;
				margin-bottom: 20rpx;
				box-sizing: border-box;

				.title {
					padding-top: 25rpx;
					padding-left: 25rpx;
					font-weight: bold;
					letter-spacing: 5rpx;
				}
				
				.subtitle {
					padding-top: 10rpx;
					text-align: center;
					font-size: 20rpx;
				}
				
				.charts-box {
					width: 100%;
					height: 100%;
					// padding: 20rpx 0;
					box-sizing: border-box;
					&.funnel-charts {
						height: 90%;
					}
				}
			}

			.member-account {
				height: 538rpx;
			}

			.join-condition {
				height: 538rpx;
			}

			.composition-box {
				height: 480rpx;

				.compositions {
					padding-top: 75rpx;
					padding-left: 26rpx;
					padding-right: 26rpx;
					white-space: nowrap;
					box-sizing: border-box;

					.branch {
						width: 421rpx;
						height: 248rpx;
						background-color: #67D6D0;
						display: inline-block;
						margin-right: 75rpx;
						border-radius: 20rpx;
						box-sizing: border-box;

						.branch-info {
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;

							.branch-name {
								font-size: 40rpx;
								color: #FFF;
								letter-spacing: 3rpx;
							}

							.branch-details {
								font-size: 20rpx;
								color: #FFF;
							}
						}
					}
				}
			}

			.approval-mterials {
				height: 592rpx;
			}
		}
	}
</style>