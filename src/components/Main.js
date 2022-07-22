import React from "react"
import Info1 from "./Info1"
import Info2 from "./Info2"
import About1 from"./About1"
import Interests1 from "./Interests1"
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"

export default function Main(){
    return(
        <ul className="divslist">
            <li>
                <div className="div1">
                    
                    <div className="divtest1">  
                        <Info1/>
                        <About1/>
                        <Interests1/>
                        <Footer1/>
                    </div>
                </div>
            </li>
            <li>
                <div className="div2">
                    <div className="divtest2">
                        <Info2/>
                        <About1/>
                        <Interests1/>
                        <Footer2/>
                    </div>
                </div>
            </li>
        </ul>
    )
}