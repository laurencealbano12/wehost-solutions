import React, { Component } from 'react'
import Nav from '../components/nav.js';

export class header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">    
                    <div className="logo">
                        <a href="index.html"><img src="/images/logo.png" alt="logo"/></a>
                    </div>

                    <Nav/>
                    <div className="clearfix"></div>
                </div>      
            </header>     
        )
    }
}

export default header
