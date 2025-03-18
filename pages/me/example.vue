<template>
    <view class="example-container">
        <!-- 顶部提示框 -->
        <view class="tip-box">
            <text class="tip-text">以下为入党流程中所需材料范例<br />您可按需下载。</text>
        </view>

        <!-- 材料列表外层容器 -->
        <view class="materials-container">
            <view class="materials-list">
                <view class="material-item" v-for="(item, index) in 10" :key="index">
					
					<view class="file-info">
						<image src="/static/images/me/example/pdf-icon.png" mode="aspectFit" class="file-icon"></image>
						<view class="file-detail">
						    <view class="file-name">入党申请书.pdf</view>
							<view class="file-meta">2024-11-05 194KB</view>
						</view>
					</view>
					
					<image class="download" src="/static/images/me/example/download.png"></image>
					
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
    background: linear-gradient(180deg, #0d53d2 0%, #FFFFFF 100%);
    padding: 30rpx 50rpx;
    position: relative;
    z-index: 1;
}

.tip-box {
    background-color: #9cb8ec;
    padding: 40rpx 30rpx;
    border-radius: 30rpx;
    margin-bottom: 100rpx;
    text-align: center;

    .tip-text {
        color: white;
        font-size: 32rpx;
        line-height: 1.5;
    }
}

.materials-container {
    background-color: white;
    border-radius: 16rpx;
    padding: 71rpx 49rpx;
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
    position: relative;
    z-index: 3;

    .material-item {
        width: 100%;
        height: 134rpx;
        padding: 0 32rpx;
        background-color: #FFFFFF;
        // border-radius: 12rpx;
        min-height: 120rpx;
        margin-bottom: 24rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1rpx solid #D9D9D9;
        position: relative;

        box-sizing: border-box;

        .file-info {
			display: flex;
            align-items: center;

            .file-icon {
                width: 56.62rpx;
                height: 64.28rpx;
                margin-right: 32rpx;
            }

            .file-detail {
                .file-name {
                    font-size: 30rpx;
                    margin-bottom: 10rpx;
                }
                .file-meta {
                    font-size: 18rpx;
                    color: #868686;
                }
            }
		}

        .download {
            width: 27.92rpx;
            height: 29.7rpx;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
