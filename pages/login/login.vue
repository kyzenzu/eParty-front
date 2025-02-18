<template>
  <view class="container">
    <!-- 顶部提示 -->
    <view class="top-tip">
	  <image src="/static/images/login/notice.png"></image>
      <text>本系统提供给特定党组织、党员使用，对外无开放注册流程</text>
    </view>

    <!-- 党徽图片 -->
    <view class="logo">
      <image src="/static/images/login/logo.png" class="logo-img"></image>
    </view>

    <!-- 表单部分 -->
    <view class="form">
      <view class="input-item">
        <text class="label">学号/工号</text>
        <input type="text" placeholder="请输入学/工号" />
      </view>

      <view class="input-item">
        <text class="label">真实姓名</text>
        <input type="text" placeholder="请输入真实姓名" />
      </view>

      <view class="input-item">
        <text class="label">密码</text>
        <input type="password" placeholder="请输入密码" />
      </view>

      <!-- 登录按钮 -->
      <button class="login-btn">登 录</button>

      <!-- 用户协议 -->
      <view class="agreement">
        <checkbox-group>
          <label>
            <checkbox value="agree" />
			<!-- <view class="checkbox"></view> -->
            <text>阅读并同意</text>
            <text class="link">《隐私协议》</text>
            <text>和</text>
            <text class="link">《用户协议》</text>
          </label>
        </checkbox-group>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
}

.top-tip {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E6F0FF;
  padding: 10rpx;
  line-height: 30rpx;
  font-size: 26rpx;
  color: #6D6B6B;
  image {
	  width: 30rpx;
	  height: 30rpx;
	  margin-right: 10rpx;
  }
}

.logo {
  margin: 23rpx 0;
  .logo-img {
    width: 198rpx;
    height: 197rpx;
  }
}

.form {
  width: 90%;
  .input-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 36rpx;
    padding-bottom: 10rpx;

    .label {
      font-size: 30rpx;
      color: #333;
      // margin-bottom: 6rpx;
	  padding: 10rpx 0;
	  min-width: 145rpx;
    }

    input {
      font-size: 28rpx;
      color: #666;
      padding: 10rpx 0;
	  margin-left: 39rpx;
    }
  }

  .login-btn {
    width: 100%;
    height: 80rpx;
    background-color: #f56c6c;
    color: #fff;
    font-size: 32rpx;
    border-radius: 10rpx;
    margin-top: 40rpx;
  }

  .agreement {
    margin-top: 20rpx;
    font-size: 26rpx;
    color: #666;
    display: flex;
    align-items: center;

    .link {
      color: #e6372b;
      margin: 0 4rpx;
    }
  }
}
</style>
