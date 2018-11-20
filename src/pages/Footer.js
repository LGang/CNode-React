import React from 'react'
import '../style/Footer.less'

export class Footer extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="center-content">
                    <div className="links">
                        <a href="https://github.com/LGang/CNode-React">源码地址</a>
                    </div>
                    <div className="advertise">
                        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于Node.js技术研究。</p>
                        <p>服务器赞助商为
                            <a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank">
                                <img src={require("../Images/ucloud.png")} title="ucloud" alt="ucloud" width="92px"/>
                            </a>,存储赞助商为<a href="http://www.qiniu.com/?ref=cnode" target="_blank">
                                <img src={require("../Images/qiniu.png")} className="width" title="七牛云存储" alt="七牛云存储" width="115px"/>
                            </a>,由<a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank">
                                <img src={require("../Images/alinode.png")} title="alinode" alt="alinode" height="54px" width="166px"/>
                            </a>提供应用性能服务。
                        </p>
                        <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
                    </div>
                </div>
            </div>
        )
    }
}