import React, { Component } from 'react'
import Nav from '../components/nav.js';
import Logo from '../images/logo.png';

export class header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper">    
                    <div className="logo">
                        <a href="index.html"><img src={Logo} alt="logo"/></a>
                    </div>

                    <Nav/>
                    <div className="clearfix"></div>
                </div>      
            </header>     
        )
    }
}

export default header
