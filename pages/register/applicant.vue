<template>
	<view class="container">
		<!-- 基本信息 -->
		<view class="section">
			<view class="section-header">
				<image src="/static/images/register/information/basic-info.png"></image>
				<text>基本信息</text>
			</view>

			<view class="form-content">
				<view class="form-item" v-for="(item, index) in basicInfo" :key="index">
					<text class="label" :class="{ required: item.required }">
						{{ item.label }}
					</text>

					<!-- 输入框（无箭头） -->
					<input v-if="!item.isPicker" class="input" v-model="formData[item.key]"
						:placeholder="'请输入' + item.label" placeholder-style="color:#767676"/>

					<!-- Picker 组件（带箭头） -->
					<view class="picker-container" v-else>
						<picker class="picker" :range="item.range" @change="handlePickerChange($event, item.key)">
							<view class="picker-text">
								{{ formData[item.key] || ('请选择' + item.label) }}
							</view>
						</picker>

						<text class="arrow">></text>
					</view>


				</view>
			</view>


		</view>

		<!-- 教育经历 -->
		<view class="section">
			<view class="section-header">
				<image src="/static/images/register/information/work-experience.png"></image>
				<text>教育经历</text>
			</view>

			<view class="form-content">
				<view class="form-item" v-for="(item, index) in educationInfo" :key="index">
					<text class="label">{{ item.label }}</text>
				
					<view class="picker-container">
						<picker class="picker" mode="date" @change="handlePickerChange($event, item.key)">
							<view class="picker-text">
								{{ formData[item.key] || ('请选择' + item.label) }}
							</view>
						</picker>
						<text class="arrow">></text>
					</view>
				
				</view>
			</view>
				
			
		</view>

		<!-- 底部按钮 -->
		<view class="button-group">
			<view class="submit button" @click="submit">提交</view>
			<view class="cancel button">取消</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				formData: {
					name: "",
					gender: "",
					nationality: "",
					studentID: "",
					birthPlace: "",
					idCard: "",
					address: "",
					email: "",
					politicalStatus: "",
					department: "",
					applicationBranch: "",
					entryTime: "",
					enrollmentTime: "",
					graduationTime: "",
					degreeTime: "",
				},
				basicInfo: [{
						key: "name",
						label: "姓名",
						isPicker: false
					},
					{
						key: "gender",
						label: "性别",
						isPicker: true,
						range: ["男", "女"]
					},
					{
						key: "nationality",
						label: "民族",
						isPicker: false
					},
					{
						key: "studentID",
						label: "学号/工号",
						isPicker: false
					},
					{
						key: "birthPlace",
						label: "籍贯",
						placeholder: "请选择籍贯(具体到县(市))",
						isPicker: true,
						range: ["北京", "上海", "广州", "深圳"]
					},
					{
						key: "idCard",
						label: "身份证号",
						isPicker: false
					},
					{
						key: "address",
						label: "家庭住址",
						isPicker: false,
						required: true
					},
					{
						key: "email",
						label: "电子邮箱",
						isPicker: false,
						required: true
					},
					{
						key: "politicalStatus",
						label: "政治身份",
						placeholder: "请选择",
						isPicker: true,
						range: ["党员", "团员", "群众"]
					},
					{
						key: "department",
						label: "所在院系/单位",
						isPicker: false
					},
					{
						key: "applicationBranch",
						label: "提交入党申请书党支部",
						isPicker: false
					},
					{
						key: "entryTime",
						label: "入团时间",
						placeholder: "入团时间(请选择)",
						isPicker: true,
						required: true
					},
				],
				educationInfo: [{
						key: "enrollmentTime",
						label: "入学时间"
					},
					{
						key: "graduationTime",
						label: "毕业时间"
					},
					{
						key: "degreeTime",
						label: "学位授予时间"
					},
				],
			};
		},
		methods: {
			handlePickerChange(event, key) {
				this.formData[key] = event.detail.value;
			},
			submit() {
				uni.switchTab({
					url: "/pages/tabbar/index/index"
				})
			}
		},
	};
</script>


<style lang="scss">
	.container {
		padding: 20rpx 25rpx;
		background-color: #F7EEEF;
		box-sizing: border-box;
	}

	.section {
		background: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		padding: 30rpx 0;

		// 标题部分
		.section-header {
			display: flex;
			align-items: center;
			font-size: 30rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
			border-bottom: 6rpx solid #eee;
			
			padding: 0 36rpx;
			padding-bottom: 30rpx;

			image {
				width: 32.99rpx;
				height: 27.69rpx;
				margin-right: 20rpx;
			}
		}

		.form-content {
			padding: 0 20rpx;
			
			// 表单项
			.form-item {
				display: flex;
				padding: 30rpx 15rpx;
				border-bottom: 1px solid #eee;
				box-sizing: border-box;
			
				.label {
					font-size: 28rpx;
					color: #333;
					font-size: 28rpx;
					width: 194rpx;
					min-width: 194rpx;
					margin-right: 60rpx;
				}
			
				// 让输入框在整行相对居中
				.input {
					width: 100%;
					font-size: 28rpx;
					color: #666;
				}
			
				// picker 选择器样式
				.picker-container {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 28rpx;
					color: #666;
			
					.picker {
						width: 100%;
					}
			
					.picker-text {
						// text-align: center; // 文字也居中
					}
			
					.arrow {
						margin-left: 10rpx;
						color: #E42417;
					}
				}
			}
		}

		
	}

	// 按钮样式
	.button-group {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0 42rpx;
		box-sizing: border-box;

		.button {
			width: 273rpx;
			height: 90rpx;
			border-radius: 45rpx;
			font-size: 30rpx;
			text-align: center;
			color: #FFF;
			line-height: 85rpx;
			
			&.submit {
				background-color: #DD3210;
			}
			&.cancel {
				background-color: #BDBDBD;
			}
		}

	}
</style>