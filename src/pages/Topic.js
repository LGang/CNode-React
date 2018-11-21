import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import '../style/Topic.less'

const Title = (props) => {
    <div className="title">
        <span>置顶</span>
        <span>{this.props.title}</span>
    </div>
}

export default class Topic extends React.Component {
    render () {
        return (
            <div className="topic-content"></div>
        )
    }
}