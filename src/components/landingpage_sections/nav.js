import React, { Component } from 'react'

class nav extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = { show: false }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu = () => {
        const {show} = this.state;
        this.setState({show : !show});
    }
    
    render() {
        console.log(this.toggleMenu);

        return (
            <div id="nav_area">
                <div className="nav_toggle_button">
                <div className={this.state.show ? "hamburger hamburger--emphatic-r is-active" : "hamburger hamburger--emphatic-r"} onClick={this.toggleMenu}>
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </div>                    
                    <nav className="isWeb">
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#bottom2">Services</a></li>
                            <li><a href="/">Clients</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                    </nav>
                {this.state.show && <NavMenu/>}
        </div>
        )
    }
}

class NavMenu extends Component {
    render() {
        return (
            <nav className="isMobile">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#bottom2">Services</a></li>
                    <li><a href="/">Clients</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
             </nav>
        )
    }
}

export default nav
