<template>
    <view class="container">
        <!-- 顶部个人信息卡片 -->
        <view class="info-card">
            <view class="avatar">
                <text>{{ nameFirst }}</text>
            </view>
            <view class="info-content">
                <view class="name">{{ userInfo.name }} {{ userInfo.gender }} {{ userInfo.nation }}</view>
                <view class="student-id">数媒{{ userInfo.studentId }}</view>
                <view class="progress">
                    <text>当前进度：</text>
                    <text class="status">{{ userInfo.status }}</text>
                    <view class="stars">
                        <text class="star filled" v-for="n in filledStars" :key="'filled' + n">★</text>
                        <text class="star" v-for="n in emptyStars" :key="'empty' + n">☆</text>
                    </view>
                </view>
            </view>
        </view>

        <!-- 导航栏 -->
        <scroll-view class="navbar" scroll-x>
            <view class="nav-item" v-for="(item, index) in navBar" :key="index" @click="clickNav(index)">
                <view class="inner-box">
                    <view class="text" :class="{ active: index == currentTab }">{{ item }}</view>
                    <view class="line" v-show="index == currentTab"></view>
                </view>
            </view>
        </scroll-view>

        <!-- 内容区域 -->
        <swiper class="contents" :current="currentTab" @change="changeTab" :style="{ height: swiperHeight }">
            <swiper-item class="swiper-item" v-for="(content, contentIdx) in contents" :key="contentIdx">
                <view class="row" v-for="(item, itemIdx) in content" :key="itemIdx">
                    <view class="file-item">
                        <view class="file-info">
                            <image :src="item.icon" mode="aspectFit" class="file-icon"></image>
                            <view class="file-detail">
                                <view class="file-name">{{ item.name }}</view>
                                <view class="file-meta">{{ item.date }} {{ item.size }}</view>
                            </view>
                        </view>
                        <button class="approve-btn" :class="{ 'approved': item.status === 'approved' }">
                            {{ item.status === 'approved' ? '已审批' : '审批' }}
                        </button>
                    </view>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currentTab: 0,
            navBar: [
                "申请入党", "入党积极分子的确定和培养教育", "发展对象的确定和考察", "预备党员的接收", "预备党员的教育考察和转正"
            ],
            userInfo: {
                name: "岑家如",
                gender: "女",
                nation: "布依族",
                studentId: "22-2 2022b29035",
                status: "入党积极分子",
                stars: 2
            },
            contents: [
                [ // 申请入党
                    {
                        name: '入党申请书.pdf',
                        date: '2024-11-05',
                        size: '194KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'approved'
                    },
                    {
                        name: '入党积极分子推荐表.doc',
                        date: '2024-11-06',
                        size: '156KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'pending'
                    }
                ],
                [ // 入党积极分子的确定和培养教育
                    {
                        name: '培养教育考察表.pdf',
                        date: '2024-11-10',
                        size: '287KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'pending'
                    },
                    {
                        name: '思想汇报2024-01.doc',
                        date: '2024-01-15',
                        size: '165KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'approved'
                    },
                    {
                        name: '思想汇报2024-02.doc',
                        date: '2024-02-15',
                        size: '178KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'pending'
                    }
                ],
                [ // 发展对象的确定和考察
                    {
                        name: '发展对象考察表.pdf',
                        date: '2024-03-01',
                        size: '245KB',
                        icon: '/static/images/manage/pdf-icon.png',
                        status: 'pending'
                    }
                ],
                [], // 预备党员的接收
                []  // 预备党员的教育考察和转正
            ]
        }
    },
    computed: {
        nameFirst() {
            return this.userInfo.name.substring(0, 2)
        },
        filledStars() {
            return this.userInfo.stars
        },
        emptyStars() {
            return 5 - this.userInfo.stars
        },
        swiperHeight() {
            let maxCount = 0;
            for (let i = 0; i < this.contents.length; i++) {
                maxCount = this.contents[i].length > maxCount ? this.contents[i].length : maxCount;
            }
            const height = maxCount * 185 + 100;
            return height + 'rpx';
        }
    },
    methods: {
        clickNav(index) {
            this.currentTab = index
        },
        changeTab(e) {
            this.currentTab = e.detail.current;
        }
    }
}
</script>

<style lang="scss">
.container {
    background-color: #fff1f0;
    min-height: 100vh;
    padding-top: 120rpx;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -650rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 1000rpx;
        height: 1000rpx;
        background-color: #e42417;
        border-radius: 50%;
        z-index: 0;
    }

    .info-card {
        background-color: #fff;
        margin: 0 20rpx 20rpx 20rpx;
        padding: 30rpx;
        padding-top: 90rpx;
        border-radius: 12rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Times New Roman', Times, serif;
        position: relative;
        z-index: 1;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);

        .avatar {
            width: 120rpx;
            height: 120rpx;
            background-color: #1890FF;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -60rpx;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
            box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);

            text {
                color: #fff;
                font-size: 40rpx;
            }
        }

        .info-content {
            width: 100%;
            text-align: center;

            .name {
                font-size: 32rpx;
                font-weight: bolder;
                margin-bottom: 20rpx;
            }

            .student-id {
                font-size: 32rpx;
                margin-bottom: 20rpx;
            }

            .progress {
                font-size: 28rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #E42417;
                font-weight: bold;

                .status {
                    margin-right: 20rpx;
                }

                .stars {
                    .star {
                        color: #E42417;
                        margin-right: 4rpx;

                        &.filled {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

    .navbar {
        width: 100%;
        height: 80rpx;
        background-color: #FFF1F0;
        white-space: nowrap;

        .nav-item {
            display: inline-block;

            .inner-box {
                display: flex;
                flex-direction: column;
                padding: 0 45rpx;

                .text {
                    line-height: 74rpx;
                    font-weight: bold;
                    color: #AFAFAF;

                    &.active {
                        color: #E42417;
                    }
                }

                .line {
                    width: 60rpx;
                    height: 6rpx;
                    border-radius: 5rpx;
                    background-color: #E42417;
                }
            }
        }
    }

    .contents {
        .swiper-item {
            width: 100%;
            box-sizing: border-box;
            padding: 20rpx;

            .row {
                margin-bottom: 20rpx;

                .file-item {
                    background-color: #fff;
                    padding: 20rpx;
                    border-radius: 12rpx;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .file-info {
                        display: flex;
                        align-items: center;

                        .file-icon {
                            width: 80rpx;
                            height: 80rpx;
                            margin-right: 20rpx;
                        }

                        .file-detail {
                            .file-name {
                                font-size: 28rpx;
                                margin-bottom: 6rpx;
                            }

                            .file-meta {
                                font-size: 24rpx;
                                color: #999;
                            }
                        }
                    }

                    .approve-btn {
                        border-radius: 999rpx;
                        background-color: #cee5fc;
                        color: #007AFF;
                        padding: 0 20rpx;
                        border: 1rpx solid #007AFF;
                        margin-right: 10rpx;
                        min-width: 120rpx;
                        text-align: center;
                        height: 50rpx;
                        margin: 0 10rpx;
                        font-size: 24rpx;
                        line-height: 50rpx;

                        &.approved {
                            background-color: #F5F5F5;
                            color: #999999;
                            border: 1rpx solid #DDDDDD;
                        }
                    }
                }
            }
        }
    }
}
</style>
