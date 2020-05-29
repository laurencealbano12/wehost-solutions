import React, { Component } from 'react'

export class bottom5 extends Component {
    render() {
        return (
            <div id="bottom5">
                <div className="wrapper">
                    <div className="btm5_content">
                        <h4><span>Contact</span> Us</h4>
                        <h5>Send us a message and discuss your projects.</h5>
                        <div className="line_styler"></div>

                        <form action="#">
                            <input type="email" placeholder="Email" required/>
                            <input type="text" placeholder="Subject" required/>
                            <div className="clearfix"></div>
                            <textarea placeholder="Message" required></textarea>
                            <input type="submit" value="Send Message"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom5
