<template>
	<view class="container">

		<view class="main-box">
			<view class="tags">
				<view v-for="(tag, index) in tags" :key="index" class="tag" :class="{active: tag.active}" @click="clickTag(index)">{{ tag.name }}</view>
			</view>

			<view class="input-section">
				<text class="label">详细描述<span class="required">*</span></text>
				<textarea class="textarea" placeholder="请详细描述问题或建议" maxlength="500" @input="inputTextArea"></textarea>
				<text class="char-count">{{ textLength }}/500</text>
			</view>

			<view class="image-upload">
				<image src="/static/images/me/feedback/add-image.png" class="upload-icon"></image>
			</view>
		</view>

		<view class="button-box">
			<view class="submit-btn" :class="{active: buttonActive}" disabled>提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			clickTag(i) {
				var tag = this.tags[i];
				tag.active = !tag.active;
			},
			inputTextArea(e) {
				console.log(e);
				this.textLength = e.detail.cursor;
			}
		},
		computed: {
			buttonActive() {
				var res = false;
				for (var i = 0; i < this.tags.length; i++) {
					res |= this.tags[i].active;
				}
				res &= this.textLength != 0;
				return res;
			}
		},
		data() {
			return {
				tags: [
					{
						name: "账号登陆",
						active: false
					},
					{
						name: "信息填写",
						active: false
					},
					{
						name: "提点建议",
						active: false
					},
					{
						name: "其他",
						active: false
					},
					{
						name: "操作问题",
						active: false
					},
					{
						name: "吐槽一下",
						active: false
					}
				],
				textLength: 0,
			};
		}
	};
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #F6F6F6;
}
.main-box {
	background-color: #FFF;
	padding-bottom: 68rpx;
	.tags {
		padding-top: 36rpx;
		padding-left: 30rpx;
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
		.tag {
			padding: 12rpx 24rpx;
			background-color: #F7F8FC;
			border-radius: 30rpx;
			font-size: 28rpx;
			font-weight: bold;
			&.active {
				background-color: #E5F8F2;
				color: #2DB990;
			}
		}
	}
	.input-section {
		padding-top: 52rpx;
		padding-left: 40rpx;
		padding-right: 27rpx;
		.label {
			font-size: 30rpx;
			color: #333;
			font-weight: bold;
			.required {
				color: red;
			}
		}
		.textarea {
			width: 100%;
			height: 362rpx;
			border-radius: 20rpx 20rpx 0 0;
			box-sizing: border-box;
			background-color: #F7F8FC;
			border-radius: 10rpx;
			padding: 20rpx;
			font-size: 28rpx;
			margin-top: 10rpx;
		}
		.char-count {
			padding-bottom: 26rpx;
			padding-right: 53rpx;
			border-radius: 0 0 20rpx 20rpx;
			font-size: 26rpx;
			background-color: #F7F8FC;
			color: #CAC9CC;
			text-align: right;
			display: block;
		}
	}
	.image-upload {
		margin-top: 32rpx;
		padding-left: 28rpx;
		image {
			width: 156rpx;
			height: 156rpx;
		}
	}
}
.button-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	.submit-btn {
		width: 541rpx;
		height: 90rpx;
		background-color: #ACABB0;
		color: #F6F6F6;
		font-size: 32rpx;
		border-radius: 50rpx;
		line-height: 85rpx;
		text-align: center;
		margin-top: 51rpx;
		&.active {
			background-color: #E42417;
			color: #FFF
		}
	}
}
</style>