import React, { Component } from 'react'

export class bottom5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             subject: '',
             message: '',
             buttonMessage: 'Send Message'
        }
    }

    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value });
    };
    
    subjectChangeHandler = (event) => {
        this.setState({ subject: event.target.value });
    };

    messageChangeHandler = (event) => {
        this.setState({ message: event.target.value });
    };
    
    handleSubmit = (event) => {
        alert(`${this.state.email} ${this.state.subject} ${this.state.message}`);
        event.preventDefault();
    }

    render() {
        const {email, subject, message, buttonMessage} = this.state;
        return (
            <div id="bottom5">
                <div className="wrapper">
                    <div className="btm5_content">
                        <h4><span>Contact</span> Us</h4>
                        <h5>Send us a message and discuss your projects.</h5>
                        <div className="line_styler"></div>

                        <form onSubmit={this.handleSubmit}>
                            <input type="email" placeholder="Email" value={email} onChange={this.emailChangeHandler} required/>
                            <input type="text" placeholder="Subject" value={subject} onChange={this.subjectChangeHandler} required/>
                            <div className="clearfix"></div>
                            <textarea placeholder="Message" value={message} onChange={this.messageChangeHandler} required></textarea>
                            <input type="submit" value={buttonMessage} onSubmit={this.handleSubmit}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom5
