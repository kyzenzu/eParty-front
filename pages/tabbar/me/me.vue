<template>
	<view class="container">
		<view class="profile-menu-box">
			<view class="profile-menu">
				<!-- 个人信息 -->
				<view class="profile">
					<view class="avatar">
						<image :src="user.avatar" mode="aspectFill" />
					</view>
					<view class="info-arrow" @click="goToNameCard()">
						<view class="info">
							<view class="name">{{user.name}}</view>
							<view class="progress">当前进度: {{user.progress}}</view>
						</view>
						<view class="arrow">></view>
					</view>
				</view>
				<view class="divider-box">
					<divider></divider>
				</view>
				<!-- 菜单栏-->
				<view class="menu">
					<view class="menu-item" v-for="(item, index) in menu" :key="index" @click="clickMenu(index)">
						<image :src="item.icon" mode="aspectFit" />
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
		

		<view class="navigation-box">
			<!-- 底部导航条 -->
			<view class="navigation">
				<view class="navigation-item active" @click="goToAuth">
						<text>认证信息</text>
						<text class="arrow">></text>
				</view>
				<view class="navigation-item active" @click="goToFeedback">
					<text>用户反馈</text>
					<text class="arrow">></text>
				</view>
				<view class="navigation-item" @click="logout">
					<text>退出登录</text>
					<text class="arrow">></text>
				</view>
			</view>
		</view>
	
		
	</view>
</template>

<script>
	import requests from "@/utils/requests";
	import token from "@/utils/token";
	export default {
		data() {
			return {
				user: {
					avatar: "/static/images/me/avatar.png",
					name: "岑家如",
					progress: "入党积极分子",
					idNumber: "2022b29035",
					phoneNumber: "18358797895",
					loginAs: "入党申请人"
				},
				menu: [
					{
						icon: "/static/images/me/organization.png",
						text: "我的组织"
					},
					{
						icon: "/static/images/me/process.png",
						text: "入党进度"
					},
					{
						icon: "/static/images/me/example.png",
						text: "材料范例"
					},
					{
						icon: "/static/images/me/archive.png",
						text: "材料归档"
					}
				]
			};
		},
		methods: {
			clickMenu(index) {
				console.log(index);
				switch (index) {
					case 0:
						this.goToMyOrganization();
						break;
					case 1:
						this.goToProgress();
						break;
					case 2:
						this.goToExample();
						break;
					case 3:
						this.goToArchive();
						break;
				}
			},
			goToArchive() {
				uni.navigateTo({
					url: "/pages/me/archive"
				});
			},
			goToExample() {
				uni.navigateTo({
					url: "/pages/me/example"
				});
			},
			goToMyOrganization() {
				uni.navigateTo({
					url: "/pages/me/organization"
				});
			},
			goToProgress() {
				uni.navigateTo({
					url: `/pages/me/progress`
				});
			},
			goToNameCard() {
				var userData = JSON.stringify(this.user);
				uni.navigateTo({
					url: `/pages/me/namecard?userData=${userData}`
				});
			},
			goToAuth() {
				// 跳转到认证信息页面
				uni.navigateTo({
					url: '/pages/auth/auth'
				});
			},
			goToFeedback() {
				// 跳转到用户反馈页面
				uni.navigateTo({
					url: '/pages/me/feedback'
				});
			},
			logout() {
				// 执行退出登录逻辑
				console.log('退出登录');
				uni.showModal({
					title: "退出登录",
					content: "您确定要退出登陆吗",
					cancelColor: "#6F6F6F",
					confirmColor: "#E42417",
					success: function (res) {
						if (res.confirm) {
							uni.clearStorageSync();
							uni.reLaunch({
								url: '/pages/login/login'
							});
						}
						
					}
				})
				
			},
		},
	}
</script>

<style lang="scss">


.container {
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #EFEFEF;
}
.profile-menu-box {
	width: 100%;
	height: 378rpx; /* 高度可根据需要调整 */
	padding: 37rpx 22.5rpx 0 22.5rpx;
	background: linear-gradient(to bottom, red 0%, red 75%, #EFEFEF 75%, #EFEFEF 100%);
	box-sizing: border-box;
	.profile-menu {
		width: 100%;
		height: 341rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: white;
		border-radius: 10rpx;
		.divider-box {
			padding: 0 20rpx;
		}
		.profile {
			background-color: #ffffff;
			display: flex;
			align-items: center;
			padding: 20rpx;
			.avatar {
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
			}
			.info-arrow {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.info {
					margin-left: 20rpx;
					.name {
						font-size: 32rpx;
						font-weight: bold;
					}
					.progress {
						margin-top: 15rpx;
						font-size: 28rpx;
						color: #E42417;
					}
					.stars {
						font-size: 24rpx;
						color: #ff9900;
					}
				}
				.arrow {
					color: #E42417;
					font-weight: bold;
				}
			}
			
		}
		.menu {
			display: flex;
			flex-wrap: wrap;
			background-color: #ffffff;
			.menu-item {
				width: 25%;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 20rpx 0;
				font-size: 25rpx;
				font-weight: bold;
				image {
					width: 85rpx;
					height: 85rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
}

.navigation-box {
	background-color: #EFEFEF;
	padding: 20rpx;

	.navigation {
		background-color: #fff;
		padding: 0;
		border-radius: 10rpx;
		padding: 18rpx 17rpx 0 31rpx;
			.navigation-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 16rpx 0;
				font-size: 16px;
				color: #333;
				&.active {
					border-bottom: solid 4rpx #EFEFEF;
				}
				.arrow {
					color: black;
					font-size: 18px;
				}
			}
		
		
	}
}


</style>