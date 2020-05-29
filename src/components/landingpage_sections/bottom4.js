import React, { Component } from 'react'

export class bottom4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             notify: 'Notify me'
        }
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }

    onSubmit = (event) => {
        alert(`${this.state.email}`);
        event.preventDefault();
    }
    
    render() {
        const {email, notify} = this.state;
        return (
            <div id="bottom4">
                <div className="wrapper">
                    <div className="btm4_content">
                        <div className="btm4_box1">
                            <h4>Want news and updates? <span>Sign up for our newsletter to stay up to date. </span></h4>
                        </div>
                        <div className="btm4_box2">
                            <form onSubmit={this.onSubmit}>
                                <input type="email" placeholder="Email" value={email} onChange={this.emailChangeHandler}/>
                                <input type="submit" value={notify} onSubmit={this.onSubmit}/>
                            </form>
                            <p>We care about the protection of your data. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom4
