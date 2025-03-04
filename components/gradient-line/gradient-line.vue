<template>
	<view>
		<view class="gradient-line"
			:style="{
				width: width,
				height: height,
				background: linearGradient,
				margin: margin
			}"
		>
		</view>
	</view>
</template>

<script>
	export default {
		name:"gradient-line",
		props: {
			height: {
			  type: [Number, String],
			  default: "7rpx", // 默认高度
			},
			width: {
			  type: String,
			  default: "100%", // 默认宽度
			},
			color1: {
			  type: String,
			  default: "#E0E0E0", // 默认颜色
			},
			color2: {
			  type: String,
			  default: "#FFF", // 默认颜色
			},
			margin: {
			  type: String,
			  default: "0", // 默认上下间距
			},
		},
		methods: {
			
		},
		computed: {
			linearGradient() {
				var color1 = this.color1;
				var color2 = this.color2;
				return `linear-gradient(to right, ${color1}, ${color2})`;
			}
		},
		data() {
			return {
			};
		},

	}
</script>

<style lang="scss">
.gradient-line {
  box-sizing: border-box; // 确保内边距和边框不会影响宽度
  max-width: 100%; // 限制宽度不能超过父容器
  border-radius: 5rpx;
  // background-color: blue;
}
</style>