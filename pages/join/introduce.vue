<template>
	<view class="container">
		<head-line></head-line>
		
		<view class="tips" v-show="page.tips">{{page.tips}}</view>
		
		<view class="title">{{page.title}}</view>
		
		<view class="contents">
			<view class="content-item" v-for="(item, index) in page.contents" :key="index">
				<view class="subtitle">{{item.subtitle}}</view>
				<gradient-line color1="#59C8F5" width="155rpx"></gradient-line>
				<view class="text">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page: {
					tips: "该流程由党支部报学院党委备案，您无需操作。",
					title: "如何成为入党申请人",
					contents: [
						{
							subtitle: "条件",
							text: "年满18周岁的中国公民；承认党的纲领和章程；愿意参加党的一个组织并在其中积极工作；愿意执行党的决议；按期缴纳党费。"
						},
						{
							subtitle: "要求",
							text: "向工作、学习所在单位党组织提出入党申请；没有工作、学习单位或工作、学习单位尚未建立党组织的，向居住地党组织提出入党申请；流动人员还可以向单位所在地党组织或单位主管部门党组织、流动党员党组织提出入党申请。"
						},
						{
							subtitle: "注意",
							text: "本人提出；书面申请"
						}
					]
				}
			};
		}
	}
</script>

<style lang="scss">
.container {
	width: 100%;
	padding: 26rpx 40rpx;
	box-sizing: border-box;
	
	.tips {
		color: #E42417;
		margin-top: 15rpx;
		text-align: center;
		font-size: 34rpx;
	}
	.title {
		margin-top: 25rpx;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
	}
	.contents {
		padding: 42rpx 4rpx;
		.content-item {
			margin-bottom: 60rpx;
			.text {
				margin-top: 20rpx;
			}
			
		}
	}
}
</style>
