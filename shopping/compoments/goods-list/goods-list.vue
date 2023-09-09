<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator">
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
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			navigator(){
				this.$emit('goodsItemClick')
			}
		}
	}
</script>

<style lang="scss">
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