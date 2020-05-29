import React, { Component } from 'react'

export class bottom3 extends Component {
    render() {
        return (
            <div id="bottom3">
                <div className="wrapper">
                    <div className="btm3_content">
                        <h4>Work <span>Flow</span></h4>
                        <h5>How we work on your projects.</h5>
                        <div className="line_styler"></div>

                        <div className="workflow_content">
                            <div className="wflow_box1">
                                <h3>Plan</h3>
                                <p>We discuss and plan your desired project to meet your expected standards.</p>
                            </div>
                            <div className="wflow_box2">
                                <h3>Gather</h3>
                                <p>We gather a team of experts to assess you with your website needs.</p>
                            </div>
                            <div className="wflow_box3">
                                <h3>Develop</h3>
                                <p>Develop your website based on your requirements and specifications.</p>
                            </div>
                            <div className="wflow_box4">
                                <h3>Deliver</h3>
                                <p>Deliver your websites ahead of time based on the given time frame.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom3
