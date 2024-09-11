import axios,{AxiosRequestConfig,Method} from "axios";
import {useRef, useState} from "react";
/*
 * @Descripttion:
 * @LastEditors: wangqi
 * @LastEditTime: 2021-08-02 14:06:09
 * @FilePath: \react-admin\src\hooks\useRequest.tsx
 * @Author: wangqi
 * url: 请求地址
 * config: 所有参数
 * method: 请求方式
 * data: 请求参数
 * payload:载和返回的数据
 */
// 方法接收外部传递的参数 T类型

/**
 * 1.首先定义接口返回内容，通过泛型定义，在useRequest中传入，在useRequest中通过泛型来推断类型
 * 2.把T就变成了传递进来的实参ResponseType
 * 3.把data类型定义为RequestType | null
 * 4.把 data返回，返回data的类型一定为 ResponseType | null
 * @constructor
 */
function useRequest<T>(url:string,method:Method,payload:AxiosRequestConfig){
    const [data,setData] = useState<T | null>(null) // 接收 可以是T外部值 还是null
    const [error,setError] =useState('') // 错误
    const [load,setLoad] = useState(false) // 加载
    // 解除请求实例
    const  controllerRef = useRef( new AbortController()) // 不需要重新渲染页面使用Ref
    const cancel = () =>{
        // 取消请求
        controllerRef.current.abort()
    }
    const request= async () =>{
        //  初始化状态和数据
        setData(null)
        setError('')
        setLoad(false)
        try {
           const res = await axios.request<T>({url,method,signal:controllerRef.current.signal,data:payload})
            setData(res.data)

            // e:any不确定捕获什么错误
        }catch (e:any){
            setError(e.message || 'unknown request Error.')
        }finally {
            setLoad(true) // 请求完成
        }
    }
    return { data,error,load,request,cancel}
}
export  default useRequest