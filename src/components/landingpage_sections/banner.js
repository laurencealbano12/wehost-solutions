import React, { Component } from 'react'

export class banner extends Component {
    render() {
        return (
            <div id="banner">
                <div className="wrapper">
                    <div className="bnr_info">
                        <div className="slogan">
                            <h4>Build Awesome <span>Web Applications</span></h4>
                            <p>We are a startup company that is customer eccentric.</p>
                            <ul>
                                <li><a href="#">Get Started</a></li>
                                <li><a href="#">What do we do?</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default banner
