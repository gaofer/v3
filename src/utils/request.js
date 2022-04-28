import axios from "axios";

/**
 * 封装axios异步请求的方法==================
 */
//创建一个axios对象-----------
const request = axios.create({
  //baseURL:'/dev-api',//基础路径
  baseURL: "/aDao",
  //  baseURL: '/',
  timeout: 360000, //请求超时，6min
});
//设置请求拦截器====================================
//对拦截进行请求--------------------
request.interceptors.request.use(
  (config) => {
    if (
      !config.data ||
      !config.data.formData ||
      Object.prototype.toString.call(config.data.formData) !=
        "[object FormData]"
    ) {
      //请求拦截
      config.data = {
        ...config.data,
        // 可以附加参数。
      };
    } else {
      config.data = {
        ...config.data,
      };
    }
    if (config.headers && config.headers["Content-Type"]) {
      config.headers["Content-Type"] += ";charset=utf-8";
    }
    return config;
  },
  (error) => {
    //出现异常
    return Promise.reject(error); //es6写法
  }
);
//设置响应拦截器==================================
//对拦截进行响应--------------------
request.interceptors.response.use(
  (response) => {
    if (!response.data || response.data == "") {
      return '{"flag":"failure","msg":"未连接到服务！"}';
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request; //导出自定义创建的axios对象,供其他组件进行使用
