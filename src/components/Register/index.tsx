
import './styles.css'
export  const RegisterPage =() =>{
    return <div className="page register-page">
        <div className="tab">
            <div className="tab-item tab-item-left">登录</div>
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