import React from 'react'
import {Link} from 'react-router-dom'

export class Cell extends React.Component {

    render() {
        const tagName = () => {
            var category = {
                "share": "分享",
                "ask": "问答",
                "job": "招聘",
            }
            if (this.props.top) {
                return "置顶"
            }
            if (this.props.good) {
                return "精华"
            }
            return category[this.props.tab]
        }

        return (
            <div className='cell-group'>
                <div className="left-party">
                    <Link to='/'></Link>
                    <div>
                        <span className="reply-count">{this.props.reply_count}</span>
                        <span className="count-seprator">/</span>
                        <span className="visit-count">{this.props.visit_count}</span>
                    </div>
                    <span className={tagName()}></span>
                    <span className="title">{this.props.title}</span>
                </div>
                <div className="right-party">
                    <Link to="profile">
                        <img src={this.props.author.avatar_url} />
                        <span className="last-reply-time">{this.props.last_reply_at}</span>
                    </Link>
                </div>
            </div>
        )
    }
}
