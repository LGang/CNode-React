import React from 'react'
import '../style/Footer.less'

export class Footer extends React.Component {
    render() {
        <div className="content">
            <div className="links">
                <a href="https://github.com/LGang/CNode-React">"源码地址"</a>
            </div>
            <div className="advertise">
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于Node.js技术研究。</p>
                <p>服务器赞助商为
                    <a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
                        <img src="../Images/ucloud.png"/>
                    </a>,存储赞助商为<a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
                        <img src="../Images/qiniu.png"/>
                    </a>,由<a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
                        <img src="../Images/alinode.png"/>
                    </a>提供应用性能服务。
                </p>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
        </div>
    }
}