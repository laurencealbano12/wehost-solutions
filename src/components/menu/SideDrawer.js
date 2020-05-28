import React, { Component } from 'react'

export class SideDrawer extends Component {
    render() {
        return (
            <div className="side_drawer">
                <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#bottom2">Services</a></li>
                <li><a href="/">Clients</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Login</a></li>
                </ul>
            </div>
        )
    }
}

export default SideDrawer
