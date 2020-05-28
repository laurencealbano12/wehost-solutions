import React, { Component } from 'react'

/* Image Imports */
import facebook from '../images/cfb.png';
import instagram from '../images/cinsta.png';
import linkedin from '../images/clinkedin.png';
import twitter from '../images/ctwitter.png';

import dev1 from '../images/team/dev1.png';
import dev2 from '../images/team/dev2.png';
import dev3 from '../images/team/dev3.png';
import dev4 from '../images/team/dev4.png';
/* End Image Imports */

export class bottom extends Component {
    render() {
        return (
            <div id="bottom1">
                <div className="wrapper">
                    <div className="btm1_content">
                        <h4><span>Meet</span> Our Team</h4>
                        <div className="line_styler"></div>
                        <p>Meet our team and get started on your project.</p>
                        <ul>
                            <li>
                                <div className="dev_content">
                                    <span><small>Erwin Mamolang</small></span><img src={dev1} alt="developer"/>
                                </div>
                                <h5>System Administrator</h5>
                                <ol className="social_medias">
                                    <li><a href="#"><img src={facebook} alt="fb"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                                </ol>
                                <div className="skills">
                                    <span>Domain and Server</span>
                                    <span>Linux</span>
                                    <span>Microsoft</span>
                                    <span>CPanel</span>
                                </div>
                            </li>
                            <li>
                                <div className="dev_content">
                                    <span><small>Rigel Kent Carbonel</small></span><img src={dev2} alt="developer"/>
                                </div>
                                <h5>Web Developer</h5>
                                 <ol className="social_medias">
                                    <li><a href="#"><img src={facebook} alt="fb"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                                </ol>
                                <div className="skills">
                                    <span>Laravel</span>
                                    <span>Vue.js</span>
                                    <span>Chatbot</span>
                                </div>
                            </li>
                            <li>
                                <div className="dev_content">
                                    <span><small>Kenneth Diputado</small></span><img src={dev3} alt="developer"/>
                                </div>
                                <h5>Web Developer</h5>
                                 <ol className="social_medias">
                                    <li><a href="#"><img src={facebook} alt="fb"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                                </ol>
                                <div className="skills">
                                    <span>Laravel</span>
                                    <span>Vue.js</span>
                                    <span>SQL</span>
                                </div>
                            </li>
                            <li>
                                <div className="dev_content">
                                    <span><small>Laurence Keith Albano</small></span><img src={dev4} alt="developer"/>
                                </div>
                                <h5>Web Developer</h5>
                                 <ol className="social_medias">
                                    <li><a href="#"><img src={facebook} alt="fb"/></a></li>
                                    <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                                    <li><a href="#"><img src={linkedin} alt="linkedin"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                                </ol>
                                <div className="skills">
                                    <span>React.js</span>
                                    <span>HTML5/CSS</span>
                                    <span>Wordpress</span>
                                    <span>Adobe Photoshop</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottom
