<template>
	<view class="container">
		<view class="upload">
			<view class="upload-photo">
				<view class="title-box">
					<view class="line"></view>
					<view class="title">上传照片</view>
				</view>
				<view class="main-box">
					<view class="info info1">手写文件均扫描为图片上传</view>
					<view class="info info2">确保扫描清晰，请勿直接拍张上传</view>
					<image src="/static/images/join/upload/upload_photo.png"></image>
				</view>
				
			</view>
			<view class="upload-pdf">
				<view class="title-box">
					<view class="line"></view>
					<view class="title">上传文档</view>
				</view>
				<view class="main-box">
					<view class="info info1">请上传PDF文件</view>
					<view class="info info2"></view>
					<image src="/static/images/join/upload/upload_pdf.png"></image>
				</view>
				
			</view>
		</view>
		
		<view class="files">
			
			<view class="selected-file" v-for="(i, index) in 10" :key="index">
				<image src="/static/images/join/upload/photo.png"></image>
				<view class="inner-box">
					<view class="file-info">
						<view class="file-name">入党积极分子结业证书.jpg</view>
						<view class="file-time-size">2024-11-05 223KB</view>
					</view>
					<image src="/static/images/join/upload/delete-icon.png"></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.container {
	padding-bottom: 20rpx;
	.upload {
		width: 100%;
		padding-top: 56rpx;
		.upload-photo {
			margin-bottom: 56rpx;
			.title-box {
				display: flex;
				padding: 0 70rpx;
				.line {
					background-color: #E42417;
					width: 6rpx;
					height: 40rpx;
					border-radius: 5rpx;
				}
				.title {
					line-height: 40rpx;
					margin-left: 14rpx;
				}
			}
			.main-box {
				padding: 0 84rpx;
				.info {
					color: #BCBCBC;
					font-size: 22rpx;
				}
				.info1 {
					margin-top: 23rpx;
				}
				.info2 {
					margin-bottom: 30rpx;
				}
				image {
					width: 100%;
					height: 199rpx;
				}
			}
			
		}
		.upload-pdf {
			
			margin-bottom: 56rpx;
			.title-box {
				display: flex;
				padding: 0 70rpx;
				.line {
					background-color: #E42417;
					width: 6rpx;
					height: 40rpx;
					border-radius: 5rpx;
				}
				.title {
					line-height: 40rpx;
					margin-left: 14rpx;
				}
			}
			.main-box {
				padding: 0 84rpx;
				.info {
					color: #BCBCBC;
					font-size: 22rpx;
				}
				.info1 {
					margin-top: 23rpx;
					margin-bottom: 56rpx;
				}
				image {
					width: 100%;
					height: 199rpx;
				}
			}
			
		}
	}
	.files {
		padding: 0 43rpx;
		.selected-file {
			width: 100%;
			display: flex;
			margin-bottom: 20rpx;
			image {
				width: 57*1.5rpx;
				height: 65*1.5rpx;
			}
			.file-info {
				.file-name{
					
				}
				.file-time-size {
					margin-top: 10rpx;
					font-size: 25rpx;
					color: #868686;
				}
			}
			.inner-box {
				width: 100%;
				margin-left: 32rpx;
				display:flex;
				align-items: center;
				justify-content: space-between;
				image {
					width: 35.36*1.5rpx;
					height: 35.36*1.5rpx;
				}
			}
		}
		
	}
}
</style>
