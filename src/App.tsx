import React, { useEffect, useRef } from 'react';
import './App.css';
import './styles/app.css';

function App() {
    const ref = useRef<HTMLDivElement>(null!);
    // 更新dom的时候执行
    useEffect(() => {
        ref.current.style.opacity = '1';
    }, []); // 确保只执行一次

    return (
        <div className="page guide-page" ref={ref}>
            <div> {/* 将 ref 绑定到 div */}
                <img className="main-pic" src={require('./images/halg_logo_icon_@2x.png')} alt="欢乐购" />
                <p className='title'>
                    欢乐购
                </p>
                <img className="sub-pic" src={require('./images/slogn_word_icon_@2x.png')} alt="欢乐购" />
                <div className="iconfont arrow-icon">&#xe60c;</div>
            </div>
        </div>
    );
}

export default App;
