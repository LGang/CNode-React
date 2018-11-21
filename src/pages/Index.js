// /index 页面
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Cell} from '../pages/Cell'
import {getUrlParams} from '../util/util'
import PageControl from './PageControl';

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

// withRouter
// 包一下，props.location 等路由信息就可以拿到，否则 props.location 是 undefined
const Category = withRouter((props) => {
  const tabs = [
    {label: '全部', value: 'all'},
    {label: '精华', value: 'good'},
    {label: '分享', value: 'share'},
    {label: '问答', value: 'job'},
    {label: '客户端测试', value: 'dev'}
  ]

  const currentTab = getUrlParams(props.location.search, 'tab')

  return (
    <div className="menu">
      {
        tabs.map(({label, value}) => (
          // 点击 tab 跳到不同的 url
          <Link 
            to={`/?tab=${value}`} 
            key={value} 
            className={`channel ${currentTab === value && 'selected'}`}
          >
            {label}
          </Link>
        ))
      }
    </div>
  )
})

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
    const c = getUrlParams(this.props.location.search, 'tab') || 'all'
    const page = getUrlParams(this.props.location.search, 'page') || '1'
    this.fetchData(c, page)
  }  

  fetchData = (category, page) => {
    fetch(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${category}&limit=20&mdrender=false`)
      .then(r=>r.json())
      .then(response =>{
        this.setState({
          topics: response.data
        })
      })
  }

  componentWillReceiveProps(nextProp, nextState) {
    // 这个是组件将要更新之前会被调用的
    // 这个生命周期要被废弃了
  }

  componentDidUpdate(preProps, preState) {  // 这个回调参数的命名应该能看懂吧
    // 这是在更新之后才会被调用
    // url 里的信息是 props 里的一个属性，改变的时候即 props 改变的时候会触发更新
    // 触发这个生命周期
    // 判断 url 参数改变重新拉取数据
    const preC = getUrlParams(preProps.location.search, 'tab')
    const currentC = getUrlParams(this.props.location.search, 'tab')

    const prePage = getUrlParams(preProps.location.search, 'page')
    const currentPage = getUrlParams(this.props.location.search, 'page')
    // 确保在合适的改变时再重新拉取数据
    if (preC !== currentC || prePage !== currentPage) {
      // this.setState({ topics: [] })
      this.fetchData(currentC, currentPage)
    }
  }

  render() {
    const topics = this.state.topics ? this.state.topics:[]
    const cells = topics.map((topic, i) =>
        // 数组渲染把 key 加上，建议用 id 类型的
        <Cell {...topic}  key={i}/>
      )
    return (
      <div className="__Index">
        <div className="main">
          <div className="sidebar">
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
            <div className="channel"></div>
          </div>
          <div className="content">
            <Category />
            {cells}
            <PageControl />
          </div>
        </div>
      </div>
    )
  }
}