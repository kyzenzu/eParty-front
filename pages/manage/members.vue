<template>
    <view class="members-page">
        <!-- 头部标题 -->
        <view class="page-header">
            <view class="header-left">
                <img src="static/images/manage/party-yellow.png" alt="" class="party-icon">
                <text class="header-text">树莓22-2入党申请人信息</text>
            </view>
            <text class="page-number">25/31</text>
        </view>

        <!-- 列表区域 -->
        <view class="member-list">
            <view v-for="(item, index) in memberList" :key="index" class="member-item">
                <view class="member-info">
                    <view class="basic-row">
                        <image class="avatar" :src="item.avatar" mode="aspectFill"></image>
                        <view class="info-content">
                            <view class="name-row">
                                <text class="name">{{ item.name }}</text>
                            </view>
                            <view class="basic-info">
                                <text class="age">{{ item.age }}岁</text>
                                <text class="gender">{{ item.gender }}</text>
                                <text class="ethnicity">{{ item.ethnicity }}</text>
                            </view>
                        </view>
                        <text class="edit-btn">查看</text>
                    </view>
                    <view class="status-row">
                        <text class="status-label">当前进度：</text>
                        <text class="status-text">{{ item.status }}</text>
                        <view class="star-rating">
                            <text v-for="n in 5" :key="n" :class="['star', n <= item.rating ? 'filled' : '']">★</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            memberList: [
                {
                    name: '岑家如',
                    age: 21,
                    gender: '女',
                    ethnicity: '族依族',
                    status: '入党申请人',
                    rating: 3,
                    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c&needBackground=1'
                }, {
                    name: '岑家如',
                    age: 21,
                    gender: '女',
                    ethnicity: '族依族',
                    status: '入党申请人',
                    rating: 3,
                    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c&needBackground=1'
                }, {
                    name: '岑家如',
                    age: 21,
                    gender: '女',
                    ethnicity: '族依族',
                    status: '入党申请人',
                    rating: 3,
                    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c&needBackground=1'
                }, {
                    name: '岑家如',
                    age: 21,
                    gender: '女',
                    ethnicity: '族依族',
                    status: '入党申请人',
                    rating: 3,
                    avatar: 'https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xll.jpg?source=32738c0c&needBackground=1'
                },
                // 可以添加更多成员数据
            ]
        };
    }
}
</script>

<style lang="scss">
.members-page {
    background-color: #f5f5f5;
    min-height: 100vh;
    padding-top: 20rpx;

    .page-header {
        background-color: #ffefef;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid #eee;

        .header-left {
            background-color: #e4393c;
            padding: 15rpx 30rpx;
            border-radius: 0 999rpx 999rpx 0;
            display: flex;
            align-items: center;

            .party-icon {
                width: 30rpx;
                height: 30rpx;
                margin-right: 20rpx;
            }

            .header-text {
                color: #fff;
                font-size: 32rpx;
                font-weight: bold;
            }
        }

        .page-number {
            color: #e4393c;
            font-size: 28rpx;
            margin-right: 20rpx;
            font-weight: bold;
        }
    }

    .member-list {
        padding: 20rpx;

        .member-item {
            background-color: #fff;
            border-radius: 12rpx;
            padding: 20rpx;
            margin-bottom: 20rpx;

            .member-info {
                display: flex;
                flex-direction: column;
                font-family: 'Times New Roman', Times, serif;
                font-weight: bold;

                .basic-row {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 16rpx;

                    .avatar {
                        width: 80rpx;
                        height: 80rpx;
                        border-radius: 50%;
                        margin-right: 20rpx;
                    }

                    .info-content {
                        flex: 1;

                        .name-row {
                            margin-bottom: 8rpx;

                            .name {
                                font-size: 32rpx;
                            }
                        }

                        .basic-info {
                            margin-bottom: 8rpx;

                            .age,
                            .gender,
                            .ethnicity {
                                font-size: 26rpx;
                                margin-right: 16rpx;
                            }
                        }
                    }

                    .edit-btn {
                        // 圆角，浅蓝底，蓝色字和边框
                        border-radius: 999rpx;
                        background-color: #cee5fc;
                        color: #007AFF;
                        padding: 10rpx 30rpx;
                        border: 1rpx solid #007AFF;
                        font-weight: normal;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                }

                .status-row {
                    display: flex;
                    align-items: center;
                    padding-top: 12rpx;
                    border-top: 1rpx solid #eee;

                    .status-label {
                        font-size: 26rpx;
                        color: #df3c30;
                    }

                    .status-text {
                        font-size: 26rpx;
                        color: #df3c30;
                        margin-right: 20rpx;
                    }

                    .star-rating {
                        display: flex;

                        .star {
                            font-size: 26rpx;
                            color: #ddd;

                            &.filled {
                                color: #df3c30;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>