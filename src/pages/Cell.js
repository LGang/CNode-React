import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Cell.less'
import {timeAgoSinceNow} from "../util/util"

export class Cell extends React.Component {

    render() {
        const tagName = () => {
            var category = {
                "share": "分享",
                "ask": "问答",
                "job": "招聘",
            }
            if (this.props.top) {
                return {"className": "tag-highlight", "content": "置顶"}
            }
            if (this.props.good) {
                return {"className": "tag-highlight", "content": "精华"}
            }
            return {"className": "tag-default", "content": category[this.props.tab]}
        }

        return (
            <div className='cell-group'>
                <div className="left-party">
                    <Link to='/'>
                        <img src={this.props.author.avatar_url}></img>
                    </Link>
                    <div className="text-party">
                        <span className="reply-count">{this.props.reply_count}</span>
                        <span className="count-seprator">/</span>
                        <span className="visit-count">{this.props.visit_count}</span>
                    </div>
                    <span className={tagName().className}>{tagName().content}</span>
                    <Link to="/" className="title">{this.props.title}</Link>
                </div>
                <div className="right-party">
                    <Link to="profile">
                        <img src={this.props.author.avatar_url} />
                        <span className="last-reply-time">{timeAgoSinceNow(this.props.last_reply_at)}</span>
                    </Link>
                </div>
            </div>
        )
    }
}
