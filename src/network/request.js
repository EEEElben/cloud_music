import axios from "axios"

export function request(config){
  const instance = axios.create({
    //创建axios实例
    baseURL:'',
    timeout:5000,

  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    //此时将config拦截了 需要return回去
    return config
  },err => {
    // console.log(err)
    return err
  })
  //响应拦截
  instance.interceptors.response.use(result => {
    // console.log(result)
    return result.data
  },err => {
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)
  //这个函数返回promise
}