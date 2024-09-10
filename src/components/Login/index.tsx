import './styles.css'
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
const LoginPage = () =>{
    const nevigate = useNavigate()
    const handleIconRegisterClick = useCallback(()=>{
        nevigate('/register')
    },[nevigate])
    return <div className="page login-page">
        <div className="tab">
            <div className="tab-item tab-item-left">登录</div>
            <div className="tab-item tab-item-right" onClick={handleIconRegisterClick}>注册</div>
        </div>
        <div className="form">
            <div className="form-item">
                <div className="form-item-title">手机号</div>
                <input type="text" className="form-item-content" placeholder="请输入手机号码"/>
            </div>
            <div className="form-item">
                <div className="form-item-title">密码</div>
                <input type="password" className="form-item-content" placeholder="请输入密码"/>
            </div>
        </div>
        <div className="submit">
            登录
        </div>
        <p className="notice">
            *登录即表示您赞同使用条款及隐私政策
        </p>
    </div>
}
export default LoginPage