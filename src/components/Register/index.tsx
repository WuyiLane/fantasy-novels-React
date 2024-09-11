
import './styles.scss'
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
export  const RegisterPage =() =>{
    const nevigate = useNavigate();
    // 登录
    const handleIconLoginClick = useCallback(()=>{
        nevigate('/login')
    },[nevigate])
    return <div className="page register-page">
        <div className="tab">
            <div className="tab-item tab-item-left" onClick={handleIconLoginClick}>登录</div>
            <div className="tab-item tab-item-right">注册</div>
        </div>
        <div className="form">
            <div className="form-item">
                <div className="form-item-title">用户名</div>
                <input type="text" className="form-item-content" placeholder="请输入用户名"/>
            </div>
            <div className="form-item">
                <div className="form-item-title">手机号</div>
                <input type="text" className="form-item-content" placeholder="请输入手机号"/>
            </div>
            <div className="form-item">
                <div className="form-item-title">密码</div>
                <input type="password" className="form-item-content" placeholder="请输入密码"/>
            </div>
            <div className="form-item">
                <div className="form-item-title">确认密码</div>
                <input type="password" className="form-item-content" placeholder="请输入再次输入密码"/>
            </div>
        </div>
        <div className="submit">
            注册
        </div>
    </div>
}