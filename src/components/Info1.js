import React from "react"
import pic1 from "../images/pic1.jpg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

export default function Info1(){
    return(
        <div className="div1child">
            <img src={pic1} className="pic1"/>
            <h3 className="name">Smriti Pillai</h3>
            <h6 className="role">Frontend Developer</h6>
            <h6 className="website">smritipillai.website</h6>
            <div className="buttons1">
                <button type="button" className="emailbutton">
                    <img src={email} className="icons" />
                    Email
                </button>
                <button type="button" className="linkedinbutton">
                    <img src={linkedin} className="icons" />
                    Linkedin
                </button>

            </div>
        </div>
    )
}