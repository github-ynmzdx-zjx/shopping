<template>
	<view class="">
		
	
		<view class="item" v-for="item in NewsList " :key="item.id">
			<view class="item-one">
				
			
			<img src="https://img2.baidu.com/it/u=2870498794,1605882166&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300">
			<span class="right-one">{{item.title}} </span>
			<span class="right-two">浏览：{{item.click}}</span><span>发表时间：{{item.add_time}}</span>
			</view>
			<view class="item-two">
				
			
			<!-- <span class="right-two">浏览：{{item.click}}</span><span>发表时间：{{item.add_time}}</span> -->
			
			</view>
		</view>
	<news-item   @itemClic="goDetail" :list="NewsList"></news-item>
		</view>	
		
	
</template>

<script>
	import newsItem from '../../compoments/news-item/news-item.vue'
	export default {
		data() {
			return {
				NewsList:[]
			}
		},
		
		methods: {
			async  getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.NewsList=res.data.message
				// console.log(res)
			
			
		},
		goDetail(){
			uni.navigateTo({
				url:'pages/news-detail/news-detail'
			})}
		},
		components:{"news-item" :newsItem},
		onLoad(){
		this.getNews()	
		}
		
	}
</script>

<style lang="scss">
.item-one{
	width: 100%;
	height: 50%;
	display: flex;
	border: solid 1px blue;
	
	
	image{
	width:160px;
    height: 100px;
	}
	
	
}

.right-one{
	width: 50%;
	height: 50%;
	border: solid 1px blanchedalmond;
	
	
}
.right-two{
	height: 50px;
	width: 50px;
	
}
</style>
