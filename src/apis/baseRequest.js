// const axios = require("axios")
import axios from "axios";


/* 第一层：全局拦截器（实例试拦截器） */
/* 针对不同的服务器创建不同的axios实例 */
const apiInstance = axios.create({
    baseURL: "http://localhost:8000",
    // baseURL: "/api",
    timeout: 3000,
    // headers: { "X-Custom-Header": "foobar" },
});

// 添加请求拦截器
apiInstance.interceptors.request.use(
    function (config) {
        config.headers["Authorization"] = "Bearer mytoken1234567890";
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
apiInstance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response.data;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

/* 第二层：通用CRUD */
export async function doGet(url, parmas, config) {
    try {
        let ret = await apiInstance.get(url, parmas, config);
        return ret
    } catch (err) {
        console.log("doGet err", err);
    }
}

export async function doPost(url, data, config) {
    try {
        return await apiInstance.post(url, data, config);
    } catch (err) {
        console.log("doPost err", err);
    }
}

export async function doDelete(url, data, config) {
    try {
        return await apiInstance.delete(url, data, config);
    } catch (err) {
        console.log("doDelete err", err);
    }
}

export async function doPut(url, data, config) {
    try {
        return await apiInstance.put(url, data, config);
    } catch (err) {
        console.log("doPut err", err);
    }
}