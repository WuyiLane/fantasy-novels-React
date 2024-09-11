import './styles.scss'
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useRequest    from "../../utils/useRequest";
type ResponseType ={
    // 推断类型
    name:string
}
const LoginPage = () =>{
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const nevigate = useNavigate()
    const handleIconRegisterClick = useCallback(()=>{
        nevigate('/register')
    },[nevigate])
    const { data,error,load,request,cancel} = useRequest<ResponseType>('/a.json','GET',{})

    //调用接口请求=> 发送服务端请求node
    function handleSubmitBtnClick(){
        request();
        // cancel();
    }
    // 重新刷新的时候不重新执行，当值改变了再去执行使用UseEffect Dom渲染完成之后再去执行
    useEffect(()=>{
        //data，error 发生变化的时候,才会执行,解决刷新页面后，数据丢失的问题,弹窗多次问题
        if(data) {alert("登录成功")}
        if(error){alert(error)}
    },[data,error])
    return <div className="page login-page">
        <div className="tab">
            <div className="tab-item tab-item-left">登录</div>
            <div className="tab-item tab-item-right" onClick={handleIconRegisterClick}>注册</div>
        </div>
        <div className="form">
            <div className="form-item">
                <div className="form-item-title">手机号</div>
                <input type="text"
                       value={phoneNumber}
                       onChange={(e)=>{setPhoneNumber(e.target.value)}}
                       className="form-item-content"
                       placeholder="请输入手机号码"/>
            </div>
            <div className="form-item">
                <div className="form-item-title">密码</div>
                <input type="password"
                       value={password}
                       onChange={(e) =>{setPassword(e.target.value)}}
                       className="form-item-content"
                       placeholder="请输入密码"/>
            </div>
        </div>
        <div className="submit" onClick={handleSubmitBtnClick}>
            登录
        </div>
        <p className="notice">
            *登录即表示您赞同使用条款及隐私政策
        </p>
    </div>
}
export default LoginPage