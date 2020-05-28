import React, { Component } from 'react'

export class bottom4 extends Component {
    render() {
        return (
            <div id="bottom4">
                <div className="wrapper">
                    <div className="btm4_content">
                        <div className="btm4_box1">
                            <h4>Want news and updates? <span>Sign up for our newsletter to stay up to date. </span></h4>
                        </div>
                        <div className="btm4_box2">
                            <form action="">
                                <input type="email" placeholder="Email"/>
                                <input type="submit" value="Notify me"/>
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
