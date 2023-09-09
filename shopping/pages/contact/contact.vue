<template>
	<view class="contact">
		<img src="https://img2.baidu.com/it/u=1617180433,4291540065&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=300" alt="" class="image" >
		<view class="inf">
			<span @click="phone">联系电话：400-655-6888 </span>
			<br>
			<span>公司地址：云南省昆明市呈贡区月华街2929号</span>
			<br>
		</view>
		<map name="" class="map" :longitude="longitude" :circles="circles" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			longitude:102.858319,
			latitude:24.844327,
			circles:8,
			markers:[
				{
					longitude:102.858319,
					latitude:24.844327,
					iconPath:'https://img1.baidu.com/it/u=1061313180,4255574625&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260'
				}
			]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'400-655-6888'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.image{
		width: 750px;
		height: 160px;
	}
}
.inf{
	margin: 12px auto;
}
.map{
	width: 750px;
	height: 280px;
}
</style>
