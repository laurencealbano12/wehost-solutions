import React, { Component } from 'react'

export class bottom2 extends Component {
    render() {
        return (
            <div id="bottom2">
                <div className="wrapper">
                    <div className="btm2_content">
                        <h4>Services</h4>
                        <div className="line_styler"></div>
                        <h5>We turn good ideas into great products. <span>Creative, flexible and affordable website design.</span></h5>

                        <div className="services_content">
                            <div className="service_box1">
                                <h3>Web Design &amp; Development <span>We balance creating functional and aesthetic websites.</span></h3>
                            </div>
                            <div className="service_box2">
                                <h3>Domain &amp; Hosting <span>Zero downtime! We maintain and keep your websites up 24/7.</span></h3>
                            </div>
                            <div className="service_box3">
                                <h3>Mobile App Development <span>We develop cross platform mobile applications.</span></h3>
                            </div>
                            <div className="service_box4">
                                <h3>Chatbots <span>We also develop chatbots for Facebook Messenger.</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom2
