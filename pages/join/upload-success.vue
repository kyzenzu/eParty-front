<template>
    <view class="container">
        <view class="success-content">
            <image class="success-icon" src="/static/images/join/upload-success.png" mode="aspectFit"></image>
            <text class="success-text">材料提交成功</text>
        </view>
        <button class="check-detail-btn" @click="goToDetail">查看详情</button>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        goToDetail() {
            // 跳转到详情页面
            uni.navigateTo({
                url: '/pages/join/detail'
            });
        }
    }
}
</script>

<style lang="scss">
.container {
    min-height: 100vh;
    background-color: #f6f6f6;
    padding: 20px;
}

.success-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: #fff;
}

.success-icon {
    width: 80px;
    height: 80px;
}

.success-text {
    font-size: 16px;
    color: #333;
    margin-top: 20px;
}

.check-detail-btn {
    margin-top: 40px;
    background-color: #E1251B;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
    height: 44px;
    line-height: 44px;

    &::after {
        border: none;
    }
}
</style>