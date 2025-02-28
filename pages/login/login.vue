<template>
	<view class="container">
		<!-- 标题部分 -->
		<view class="title">用户登录</view>
		<view class="subtitle">登录密码用于入党E点通登录</view>

		<!-- 输入框部分 -->
		<view class="form">
			<!-- 学号/工号 -->
			<view class="input-item">
				<view class="input-field">
					<text class="label">学号/工号</text>
					<input type="text" placeholder="请输入学/工号" v-model="username" />
				</view>
			</view>


			<!-- 密码 -->
			<view class="input-item">
				<view class="input-field">
					<text class="label">密码</text>
					<view class="password-input">
						<input v-if="showPassword" type="text" class="input-field" v-model="password" />
						<input v-else type="password" placeholder="请输入密码" v-model="password" />
					</view>
				</view>
				<view class="eye-forgot">
					<view class="eye-icon" @click="togglePassword">
						<image class="eye-open" src="/static/images/register/password/eye-open.png" v-if="showPassword">
						</image>
						<image class="eye-close" src="/static/images/login/eye-close.png" v-else></image>
					</view>
					<text class="forgot-password">忘记密码?</text>
				</view>
			</view>
		</view>

		<!-- 登录按钮 -->
		<button class="login-btn" :class="{active: activeButton}">登 录</button>

		<!-- 底部提示 -->
		<view class="bottom-tip">
			默认30天免验证，距您上次登录已超过一个月，请重新验证
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				showPassword: false,
			};
		},
		computed: {
			activeButton() {
				return this.username.length>0 && this.password.length>0;
			}
		},
		methods: {
			togglePassword() {
				this.showPassword = !this.showPassword;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		padding: 75rpx 59rpx;
		background-color: #FFF;
	}

	.title {
		font-size: 42rpx;
		font-weight: bold;
		color: #000;
	}

	.subtitle {
		font-size: 28rpx;
		color: #666;
		margin-top: 10rpx;
	}

	.form {
		width: 100%;
		padding-top: 122rpx;

		.input-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #ddd;
			margin-bottom: 35rpx;
			padding-bottom: 23rpx;
			
			.input-field {
				display: flex;
				.label {
					font-size: 30rpx;
					color: #333;
					// margin-bottom: 6rpx;
					min-width: 145rpx;
				}
				input {
					font-size: 28rpx;
					color: #666;
					margin-left: 39rpx;
					box-sizing: border-box;
				}
			}
			.eye-forgot {
				margin-left: 20rpx;
				width: 160rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.eye-icon {
					width: 35.6rpx;
					height: 16.6rpx;
					display: flex;
					
					align-items: center;
					justify-content: center;
				
					image.eye-close {
						width: 35.6rpx;
						height: 16.6rpx;
					}
				
					image.eye-open {
						width: 43.8rpx;
						height: 31.6rpx;
					}
				}
				
				.forgot-password {
					right: 0;
					font-size: 23rpx;
					color: #999;
				}
			}
			
		}

	}

	.login-btn {
		width: 100%;
		height: 90rpx;
		background-color: #f56c6c;
		color: #fff;
		font-size: 32rpx;
		border-radius: 12rpx;
		margin-top: 60rpx;
		&.active {
			background-color: #E42417;
		}
	}

	.bottom-tip {
		font-size: 24rpx;
		color: #999;
		margin-top: 30rpx;
	}
</style>