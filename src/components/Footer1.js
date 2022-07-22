import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer1(){
    return(
        <div className="footer1">
            <ul className="footericons">
                <li><img src={twitter}  className="iconfooter"/></li>
                <li><img src={facebook} className="iconfooter"/></li>
                <li><img src={instagram}  className="iconfooter"/></li>
                <li><img src={github}  className="iconfooter"/></li>
            </ul>
        </div>
    )
}