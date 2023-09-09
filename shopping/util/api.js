// const BASE_URl = 'http://localhost:8082'
// export const myRequest = (options)=>{  //方法
// 	return new Promise((resolve,reject)=>{     //异部 封装
// 		uni.request({
// 			url:BASE_URl+options.url,
// 			method: options.method  || 'GET',
// 			data:options.data   || {},
// 			success:(res)=>{
// 				if(res.data.status !==0){
// 					return uni.showToast({
// 						title:'获取数据失败'
// 					})
// 				}
// 				resolve(res)
// 				},
// 				fail:(err)=>{
// 					uni.showToast({
// 						title:'请求接口失败'
// 				})
// 				reject(err)
// 				}
// 		})
// 	})
// }
// myRequest({
// 	url:'api/getlunbo',
// 	method:'POST',
// 	data:{



// import { resolve } from "path/posix"

		
// 	}
// })
const BASE_URL ='http://localhost:8082'
export const myRequest =(options)=>{  //方法
return new Promise((resolve,reject)=>{     //异部 封装
uni.request({
	url:BASE_URL+options.url,
	method:options.method || 'GET',
	data:options.data || {},
	success:(res)=> {
		if(res.data.status!==0){
			return uni.showToast({
				title:'获取数据失败'
			})
		}
		resolve(res)
	},
	fail:(err)=>{
		uni.showToast({
			title:'请求接口失败'
		})
		reject(err)
	},
	})
})
	
}
myRequest({
	url:'api/getlunbo',
	method:'POST',
	data:{
		
	}
})

