import type { AxiosError, AxiosResponse,AxiosInstance,AxiosRequestConfig } from 'axios'
import axios from 'axios'

const service: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000
})


// Request interceptors
service.interceptors.request.use(
   (config: AxiosRequestConfig) => {
    // do something
    return config;
   },
   (error: any) => {
    Promise.reject(error);
   }
);

/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
    // const { code, message, result } = response.data
    const res = response.data
    console.log('1121',res);
    
    if(res.code == 'null'){
        // 文件流接收时没有返回
      
        return res
    }else{
      if (res.code === 200 ) {
        // 将组件用的数据返回
        console.log('res',res);
        
        return res
        }else if(res instanceof Blob){
          return res
        } 
        else {
        // 处理业务错误。
        return Promise.reject(new Error(res.message))
        }
    }
   }, (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = ''
     // HTTP 状态码
     const status = error.response?.status
     switch (status) {
       case 401:
         message = 'token 失效，请重新登录'
         // 这里可以触发退出的 action
         break;
       case 403:
         message = '拒绝访问'
         break;
       case 404:
         message = '请求地址错误'
         break;
       case 500:
         message = '服务器故障'
         break;
       default:
         message = '网络连接故障'
     }
    
    return Promise.reject(error)
   })
   

export default service;

