// /index 页面
import React from 'react'
import {Link} from 'react-router-dom'
import {Cell} from '../pages/Cell'

const Header = () => (
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

const Category = () => (
  <div className="menu">
    <Link to='/'>全部</Link>
    <Link to='/'>精华</Link>
    <Link to='/'>分享</Link>
    <Link to='/'>问答</Link>
    <Link to='/'>招聘</Link>
    <Link to='/'>客户端测试</Link>
  </div>
)

const Content = () => {
  return (
    <div className="content">

    </div>
  )
}

export default class Index extends React.Component {

  state = {
    topics: []
  }

  componentDidMount() {
    fetch('https://cnodejs.org/api/v1/topics?page=1&tab=all&limit=50&mdrender=false').then(r=>r.json()).then(response =>
        this.setState({
          topics: response.data
        })
      )
  }  

  render() {
    const topics = this.state.topics ? this.state.topics:[]
    const cells = topics.map(topic =>
        <Cell {...topic}/>
      )
    return (
      <div className="__Index">
        <Header />
        <div className="main">
          <div className="content">
            <Category />
            {cells}
          </div>
          <div className="sidebar">
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
          </div>
        </div>
      </div>
    )
  }
}