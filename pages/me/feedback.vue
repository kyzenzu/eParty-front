<template>
	<view class="container">

		<view class="main-box">
			<view class="tags">
				<view v-for="(tag, index) in tags" :key="index" class="tag" :class="{active: tag.active}" @click="clickTag(index)">{{ tag.name }}</view>
			</view>

			<view class="input-section">
				<text class="label">详细描述<span class="required">*</span></text>
				<textarea class="textarea" placeholder="请详细描述问题或建议" maxlength="500" @input="inputTextArea" v-model="textareaValue"></textarea>
				<text class="char-count">{{ textLength }}/500</text>
			</view>

			<view class="image-upload">
				<view class="image-item" v-for="(item, index) in selectedImages" :key="index">
					<image :src="item.path" mode="aspectFill" @click="openImage(index)"></image>
					<view class="delete-icon" @click.stop="deleteImage(index)">×</view>
				</view>
				<image src="/static/images/me/feedback/add-image.png" class="upload-icon" @click="uploadImage"></image>
			</view>
		</view>

		<view class="button-box">
			<view class="submit-btn" :class="{active: buttonActive}" @click="submit">提交</view>
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
				// console.log(e);
				this.textLength = e.detail.cursor;
			},
			uploadImage() {
				var selectedImages = this.selectedImages;
				uni.chooseImage({
					mediaType: ["image"],
					sizeType: ["original"],
					success: res => {
						var tempFiles = res.tempFiles;
						for (var i = 0; i < tempFiles.length; i++) {
							var file = tempFiles[i];
							selectedImages.push(file);
						}
						console.log(selectedImages);
					},
					fail: err => {
						console.log("choose image fail");
						console.log(err);
					}
				})
			},
			openImage(index) {
				//#ifdef MP-WEIXIN
					var imageUrls = [];
					for (var i = 0; i < this.selectedImages.length; i++) {
						imageUrls.push(this.selectedImages[i].path);
					}
					uni.previewImage({
						current: index,
						indicator: "default",
						urls: imageUrls,
					})
				//#endif
			},
			deleteImage(index) {
				this.selectedImages.splice(index, 1);
			},
			submit() {
				/*
					提交至服务器
				*/
				console.log("提交反馈");
				for (var tag of this.tags)
					tag.active = false;
				this.textareaValue = "";
				uni.showToast({
					title: '感谢您的反馈！平台运营人员将根据反馈内容在1个工作日内回复~',
					icon: 'none',
					duration: 2000
				});
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
				textareaValue: "",
				selectedImages: []
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
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 35rpx 8rpx;
		.image-item {
			position: relative;
			width: 156rpx;
			height: 156rpx;
			image {
				width: 100%;
				height: 100%;
				display: block;
			}
			.delete-icon {
				position: absolute;
				top: 5rpx;
				right: 5rpx;
				width: 30rpx;
				height: 30rpx;
				background-color: rgba(0, 0, 0, 0.5);
				color: white;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20rpx;
				line-height: 30rpx;
				z-index: 10;
			}
		}
		.upload-icon {
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