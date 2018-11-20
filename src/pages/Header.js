import '../style/Header.less'
import React from 'react'

export class Header extends React.Component {
    render() {
        return (
            <div className="topmenu">
                <img src={require("../Images/cnodejs_light.svg")}></img>
                <div className="LinkGroup">
                    <a href="#flight">首页</a>
                    <a href="#flight">新手入门</a>
                    <a href="#flight">API</a>
                    <a href="#flight">注册</a>
                    <a href="#flight">登录</a>
                </div>
            </div>
        )
    }
}