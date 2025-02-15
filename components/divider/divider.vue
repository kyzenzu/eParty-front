<template>
  <view>
	  <view
	    class="divider"
	    :style="{
	      height: height,
	      backgroundColor: color,
	      margin: margin
	    }"
	  ></view>
	  <view
	    class="divider"
	  	v-if="double"
	    :style="{
	      height: height,
	      backgroundColor: color,
	      margin: doubleLineGap
	    }"
	  ></view>
  </view>
  
</template>

<script>
export default {
  name: "divider",
  props: {
    height: {
      type: [Number, String],
      default: "1rpx", // 默认高度
    },
    width: {
      type: String,
      default: "100%", // 默认宽度
    },
    color: {
      type: String,
      default: "#E0E0E0", // 默认颜色
    },
    margin: {
      type: String,
      default: "0", // 默认上下间距
    },
	double: {
		type: Boolean,
		default: false
	},
  },
  data() {
  	return {
  		doubleLineGap: "6rpx 0"
  	}
  }
};
</script>

<style lang="scss" scoped>
.divider {
  box-sizing: border-box; // 确保内边距和边框不会影响宽度
  max-width: 100%; // 限制宽度不能超过父容器
}
</style>
