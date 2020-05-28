import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <div className="logo">
                        <a href="index.html"><img src="/images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2020 WeHost Solutions, Inc. All rights reserved. </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default footer
