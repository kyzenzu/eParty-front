<template>
	<view class="container">
		<view class="upload">
			
			<view class="upload-photo">
				<view class="title-box">
					<view class="line"></view>
					<view class="title">上传照片</view>
				</view>
				<view class="main-box" @click="uploadPhoto">
					<view class="info info1">手写文件均扫描为图片上传</view>
					<view class="info info2">确保扫描清晰，请勿直接拍张上传</view>
					<view class="image-box">
						<image src="/static/images/join/upload/upload_photo.png"></image>
					</view>
					
				</view>
				
			</view>
			<view class="upload-pdf">
				<view class="title-box">
					<view class="line"></view>
					<view class="title">上传文档</view>
				</view>
				<view class="main-box" @click="uploadPDF">
					<view class="info info1">请上传PDF文件</view>
					<view class="info info2"></view>
					<view class="image-box">
						<image src="/static/images/join/upload/upload_pdf.png"></image>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="files">
			<view class="selected-file" v-for="(file, index) in selectedFile" :key="index">
				<image :src="file.image" mode="aspectFit"></image>
				<view class="inner-box">
					<view class="file-info">
						<view class="file-name">{{file.name}}</view>
						<view class="file-time-size">{{file.time + " " + file._size}}</view>
					</view>
					<image src="/static/images/join/upload/delete-icon.png" @click="deleteFile(index)"></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			deleteFile(i) {
				var selectedFile = this.selectedFile;
				uni.showModal({
					title: '删除文件',
					content: '删除后请重新选择提交',
					confirmColor: '#E42417',
					cancelColor: '#6F6F6F',
					success: function (res) {
						if (res.confirm) {
							selectedFile.splice(i, 1);
						}
					}
				});
			},
			
			uploadPhoto() {
				console.log("upload photo");
				var selectedFile = this.selectedFile;
				var handleFile = this.handleFile;
				uni.chooseImage({
					mediaType: ["image"],
					sizeType: ["original"],
					success: res => {
						console.log(res.tempFiles);
						var tempFiles = res.tempFiles;
						for (var i = 0; i < tempFiles.length; i++) {
							var file = tempFiles[i];
							handleFile(file)
							file.image = file.path;
							selectedFile.push(file);
						}
					},
					fail: err => {
						console.log("choose image fail");
						console.log(err);
					}
				})
			},

			uploadPDF() {
				var selectedFile = this.selectedFile;
				var handleFile = this.handleFile;
				var pdfPNG = "/static/images/join/upload/pdf.png";
				uni.chooseFile({
  					count: 10, //默认100
  					extension:['.pdf'],
					success: function (res) {
						var tempFiles = res.tempFiles;
						for (var i = 0; i < tempFiles.length; i++) {
							var file = tempFiles[i];
							handleFile(file)
							file.image = pdfPNG;
							selectedFile.push(file);
						}
						console.log(res);
					}
				});
			},
			// 处理文件对象的time和_size
			handleFile(file) {
				console.log("handle file");
				var today = new Date();
				//日期
				var DD = String(today.getDate()).padStart(2, '0'); // 获取日
				var MM = String(today.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
				var yyyy = today.getFullYear(); // 获取年
				today = yyyy + '-' + MM + '-' + DD;
				file.time = today;
				var size = file.size;
				size = file.size / 1024;
				// 比900KB大就切换为MB
				size = size < 900 ? Math.floor(size) + 'KB' : (size/1024).toFixed(2) + 'MB';
				// blob文件对象自带了一个size属性不让改
				file._size = size;
			}
		},
		data() {
			return {
				selectedFile: [
					
				]
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
				.image-box {
					display: flex;
					height: 199rpx;
					width: 100%;
					align-items: center;
					justify-content: center;
					background-color: #EFEFEF;
					image {
						width: 60.36rpx;
						height: 65.64rpx;
					}
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
				
				.image-box {
					display: flex;
					height: 199rpx;
					width: 100%;
					align-items: center;
					justify-content: center;
					background-color: #EFEFEF;
					image {
						width: 56.62rpx;
						height: 64.28rpx;
					}
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
