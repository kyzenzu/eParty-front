<template>
    <view class="example-container">
        <!-- 顶部提示框 -->
        <view class="tip-box">
            <text class="tip-text">您已完成全部入党流程，材料均已归档<br>以下是您的电子版入党材料。</text>
        </view>

        <!-- 材料列表外层容器 -->
        <view class="materials-container">
            <view class="materials-list">
                <view class="material-item" v-for="(item, index) in 10" :key="index">

                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            materials: []  // 预留材料数据数组
        };
    }
}
</script>

<style lang="scss">
.example-container {
    min-height: 100vh;
    background: linear-gradient(180deg, #e42417 0%, #FFFFFF 100%);
    padding: 30rpx 50rpx;
    position: relative;
    z-index: 1;
}

.tip-box {
    background-color: #f29f99;
    padding: 40rpx 30rpx;
    border-radius: 30rpx;
    margin-bottom: 100rpx;
    text-align: center;

    .tip-text {
        color: white;
        font-size: large;
        line-height: 1.5;
    }
}

.materials-container {
    background-color: white;
    border-radius: 16rpx;
    padding: 30rpx;
    position: relative;
    box-shadow: 0 4rpx 20rpx rgba(13, 83, 210, 0.1);

    &::before {
        content: '';
        position: absolute;
        top: -1%;
        left: 2%;
        width: 96%;
        height: 100rpx;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 16rpx;
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: -2%;
        left: 5%;
        width: 90%;
        height: 100rpx;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 16rpx;
        z-index: -1;
    }
}

.materials-list {
    padding: 10rpx 0;
    position: relative;
    z-index: 3;

    .material-item {
        background-color: #FFFFFF;
        border-radius: 12rpx;
        min-height: 120rpx;
        margin-bottom: 24rpx;
        padding: 30rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1rpx solid black;
        position: relative;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
