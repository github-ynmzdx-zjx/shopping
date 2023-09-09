<template>
	<view class="">
		
	
		<view class="item" v-for="item in list " :key="item.id" @click="navigator">
			<view class="item-one">
				
			
			<img src="https://img2.baidu.com/it/u=2870498794,1605882166&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=300">
			<span class="right-one">{{item.title}} </span>
			<span class="right-two">浏览：{{item.click}}</span><span>发表时间：{{item.add_time | FormData}}</span>
			</view>
			<view class="item-two">
				
			
			<!-- <span class="right-two">浏览：{{item.click}}</span><span>发表时间：{{item.add_time}}</span> -->
			
			</view>
		</view>
	
		</view>	
</template>

<script>
	export default{
		props:['list'],
		filters:{
			FormData (date){
				
				const nDate = new Date(date)
				const year =nDate.getFullYear()
				const month =nDate.getMonth().toString().padStart(2,0)
				const day =nDate.getDay().toString().padStart(2,0)
				
				return year+'_'+month+'_'+day
			}
			
		},
		methods:{
			navigator(){
				this.$emit('item')
			}
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