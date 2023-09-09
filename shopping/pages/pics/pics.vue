<template>
	<view class="pics">
		
	
		<scroll-view scroll-y="true" class="pics-left"  >
			<view 
			@click="leftClickHandle(index,item.id)"
			:class="active===index?' active':''" v-for="(item,index) in cates  " :key="item.id" >
			<span class="text" >{{item.title}}</span>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right" v-for="item in secondData " :key="item.id">
			<img src="https://img1.baidu.com/it/u=1733891385,2688022003&fm=253&fmt=auto&app=138&f=JPEG?w=552&h=458">
			<span>{{item.title}}</span>
		</scroll-view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		
		methods: {
			async  getpicsCate(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				})
				this.cates=res.data.message
				// console.log(res)
				},
				leftClickHandle(index){
				this.active =index
				},
				
			//获取左侧数据
			
		async leftClickHandle (index,id){
			this.active=index
			const res = await this.$myRequest({
				url:'/api/getimages/'+id
			})
			this.secondData=res.data.message
			// console.log(res)
		}
		},
		onLoad(){
			this.getpicsCate()
			this.getpics()
			}
	}
</script>

<style lang="scss">
	

.pics-left{
 height: 100%;
 width: 30%;
 
 
  
  
 
 .active{
	 
	  
	  width: 70px;
	  height: 20px;
	  color: blue;
	  border: 1px solid blue;
	 
	  
	
	 
	  
	 
	 
	 
 }
 

}
.text{
	  	 margin-top: 80px;
	  }
	  .right{
		  display: flex;
		  width: 60%;
		  height: 100%;
		  margin-top: -242px;
		  margin-left: 122px;
		  image{
			  width: 300px;
		  }
		  
	  }
</style>
