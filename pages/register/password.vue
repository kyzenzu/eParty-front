<template>
  <view class="container">
    <!-- 标题 -->
    <view class="title">请设置密码</view>
    <view class="subtitle">密码用于入党E点通登录</view>

    <!-- 输入框 -->
    <view class="input-container">
      <text class="label">密码</text>
      <view class="password-input">
		<input v-if="showPassword"
		  type="text"
		  class="input-field"
		  v-model="password"
		/>
        <input v-else
          type="password" 
          placeholder="请输入密码" 
          class="input-field"
          v-model="password"
        />
        <view class="eye-icon" @click="togglePassword">
			<image class="eye-open" src="/static/images/register/password/eye-open.png" v-if="showPassword"></image>
			<image class="eye-close" src="/static/images/register/password/eye-close.png" v-else></image>
        </view>
      </view>
      <text class="hint">需6-12位字符</text>
    </view>

    <!-- 提交按钮 -->
    <button class="submit-btn" :class="{active: validPassword}" @click="submit">完成</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      showPassword: false,
    };
  },
  computed: {
	  validPassword() {
		  var length = this.password.length;
		  return length >= 6 && length <= 12;
	  }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
	submit() {
		uni.navigateTo({
			url: "/pages/register/login-as"
		})
	}
  },
};
</script>

<style lang="scss">
.container {
  padding: 75rpx 58rpx;
  background-color: #fff;
}

.title {
  font-size: 40rpx;
  font-weight: bold;
  color: #000;
}

.subtitle {
  font-size: 28rpx;
  color: #666;
  margin-top: 10rpx;
}

.input-container {
  width: 100%;
  margin-top: 50rpx;

  .label {
    font-size: 30rpx;
    color: #333;
  }

  .password-input {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-top: 10rpx;
    padding-bottom: 10rpx;
    position: relative;

    .input-field {
      flex: 1;
      font-size: 30rpx;
      // color: #666;
      padding: 10rpx 0;
    }

    .eye-icon {
      // position: absolute;
      // right: 10rpx;
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

    
  }

  .hint {
    font-size: 24rpx;
    color: #999;
    margin-top: 10rpx;
  }
}

.submit-btn {
  width: 100%;
  height: 90rpx;
  background-color: #f56c6c;
  color: #fff;
  font-size: 32rpx;
  border-radius: 10rpx;
  margin-top: 60rpx;
  &.active {
	  background-color: #E42417;
  }
}
</style>
