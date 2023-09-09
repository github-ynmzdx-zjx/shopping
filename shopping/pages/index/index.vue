<template>
	<view class="home">
		<swiper  :autoplay="true" :interval="3000" :duration="1000" indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<img :src="item.img" alt="">
			</swiper-item>	
			</swiper>
			
			<view class="nav">
				<view class="nav-img">
					
				
				<img src="/static/fant/shop1.png" alt="" height=200 width=200 class="content1" >
				<img src="/static/fant/line.png" alt="" class="content2">
				<img src="/static/fant/peple home.png" alt="" class="content3" >
				<img src="/static/fant/video.png" alt="" class="content4" >	 
				</view>
			
			<view class="vav-img-item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
			<!-- <span :class="item.Image"></span> -->
			<view>
				<span class="font" style="color: blue;">{{item.title}}</span>
				
			
			</view>
			
			
			</view>	
		
			</view>	
			
			<view class="hot—goods">
			
			
			<view class="title"> 推荐商品 </view>
				
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<img src="https://www.yunqishi.net/uploads/allimg/200825/25-200R5163623.jpg" alt="">
					<view class="price">
						<text>￥{{item.market_price}}</text>
						<text class="text-chid">￥{{item.sell_price}}</text>
					</view>
					<view class="name">
					{{item.title}}
					</view>
				</view>
				
				
			</view>	
				
				
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>	
	</view>
	
		
	</view>
</template>

<script>
	import goodsList from "../../compoments/goods-list/goods-list.vue"

	export default {
		data() {
			return {
			swipers:[],
			goods:[],
			navs:[
			{
			
				title:'购物超市',
				path:'/pages/goods/goods'
			},
			{
			
				title:'联系我们',
				path:'/pages/contact/contact'
			},
			{
				
				title:'社区图片',
				path:'/pages/pics/pics'
			},
			{
				
				title:'购物视频',
				path:'/pages/videos/videos'
			}
			]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
			

		},
		components:{"goods-list":goodsList},
			
		
		methods: {
			async  getSwipers(){
				
			// 	console.log('获取轮播图的数据')
			// 	uni.request({
			// 		url:'http://localhost:8082/api/getlunbo',
			// 		success:res=>{
			
			// 			console.log(res)
			// 			if(res.data.status !==0){
			// 				return uni.showToast({
			// 					title:'获取数据失败'
			// 				})
			// 			}
			// 			this.swipers =res.data.message
			// 		}
			// 	})
			
			const res = await this.$myRequest({
				url:'/api/getlunbo'
			})
			this.swipers=res.data.message
			},
			async  getHotGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				this.goods=res.data.message
			
			
			},
			
			//导航点击处理函数
			navItemClick(url){
				
				uni.navigateTo({
					url
					
				})
			},
			goGoodsDetail(){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail'
				})
			}
			

		}
	}
</script>

<style lang="scss"  scoped>
	.home{
		swiper{
			width:750rpx;
			height:380rpx;
			image{
				height:100%;
				width:100%;
				
					
				
			}
		}
	}
	
.nav{
	
	
	
	
	
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	
	
	
	
	
	
.nav-img{
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
	image{
		width: 60px;
		height: 60px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		
		
		
		
		
		
		
	}}	}
	.font{
		width: 100%;
		height: 20px;
		display: flex;
		margin: 6px auto;
		flex-direction: row;
		
		
		
	}
	.hot—goods{
		
		// .title{
		// 	height: 50px;
		// 	line-height: 50px;
		// 	color: $shop-color;
		// }
	}
	.title{
		height: 50px;
		line-height: 50px;
		color: $shop-color;
		letter-spacing: 30px;
		text-align: center;
		border: 1px solid #FAEBD7;
	}
	.goods_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
	.goods_item{
		border: 0.5px  solid	#BC8F8F;
		flex-wrap: wrap;
		margin-top: 15px;
		box-sizing: border-box;
		width: 40%;
		margin: 2px auto;
		image{
			height: 50px;
			width: 50px;
			display: block;
			margin: auto;
		}}}
		.price{
			color: red;
		}
		.text-chid{
			color:#ccc;
			font-size: 20rpx;
			margin-left: 18px;
			text-decoration: line-through;
		}
		
	
</style>
