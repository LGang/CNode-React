import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getUrlParams} from '../util/util'
import '../style/PageControl.less'


// @withRouter
class PageControl extends React.Component {

    componentDidMount() {
        
    }

    componentDidUpdate(preProps, preState) {
        this.currentTab = getUrlParams(this.props.location.search, 'tab') || "all"    
        this.currentPage = parseInt(getUrlParams(this.props.location.search, 'page')) || "1"
    }

    currentTab = getUrlParams(this.props.location.search, 'tab') || "all"    
    currentPage = parseInt(getUrlParams(this.props.location.search, 'page')) || "1"

    render() {
        let links = [
            {title: "«", value: "1"},
            {title: "..."},
            {title: "1", value: "1"},
            {title: "2", value: "2"},
            {title: "3", value: "3"},
            {title: "4", value: "4"},
            {title: "5", value: "5"},
            {title: "..."},
            {title: "»", value: "85"},
        ]
        let pages = [1, 2, 3, 4, 5]
        if (this.currentPage > 3) {
            pages = [this.currentPage-2, this.currentPage-1, this.currentPage, this.currentPage+1, this.currentPage+2]
        }
        for(let i=0; i<pages.length; i++) {
            links[i+2] = {title: pages[i], value: pages[i]}
        }
        const pagesLink = links.map((page, index) => {
            if (index == 1 || index == 7) {
                return <a key={"..."+index}>...</a>
            }
            return <Link 
                to={`/?tab=${this.currentTab}&page=${page.value}`}
                key={page.title+page.value}
                className={parseInt(this.currentPage) == page.value ? 'selected':''}
                >
                    {page.title}
                </Link>
        }
            
        )
        return (
            <div className="page-control">
                {pagesLink}
            </div>
        )
    }
}

export default withRouter(PageControl)

