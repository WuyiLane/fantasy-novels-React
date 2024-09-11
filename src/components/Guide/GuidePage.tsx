import React, {useCallback, useEffect, useRef} from 'react';
import './styles.scss';
import {useNavigate} from "react-router-dom";

// 处理动画相关的逻辑 自定义hooks
// 封装逻辑
const useRefAnimation = () =>{
    const ref = useRef<HTMLDivElement>(null!);

    // 更新dom的时候执行
    useEffect(() => {
        ref.current.style.opacity = '1';
    }, []); // 确保只执行一次
    return ref
}
function GuidePage() {

    const ref = useRefAnimation()
    // usecallback 的用法 不需要多次变化,只是点击的时候执行,保留缓存，减少不必要的渲染
    // 处理页面跳转相关的逻辑
    const nevigate = useNavigate();
    const handleIconClick = useCallback(() =>{
        nevigate('/login')
    },[nevigate])
    return (
        <div className="page guide-page" ref={ref}>
            <div> {/* 将 ref 绑定到 div */}
                <img className="main-pic" src={require('../../images/halg_logo_icon_@2x.png')} alt="欢乐购" />
                <p className='title'>
                    欢乐购
                </p>
                <img className="sub-pic" src={require('../../images/slogn_word_icon_@2x.png')} alt="欢乐购" />
                <div className="iconfont arrow-icon" onClick={handleIconClick}>&#xe60c;</div>
            </div>
        </div>
    );
}

export default GuidePage;
