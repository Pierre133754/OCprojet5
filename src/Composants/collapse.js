import "./collapse.scss"
import React, { useState } from "react"

/* Asks for text, title and fontSize */

function Collapse(props) {
    var [ouvert, setOuvert] = useState(false)
    /* Cant change textsize seamlessly beacause react responsive not allowed */
    if (props.fontSize) {
        var textSize = {
            fontSize : props.fontSize
        }
    }
    function drop() {
        document.querySelector(".thingDrop").classList.add()
    }
    return (
        <div className="thing">
            <div className="thingCover"></div>
            <div className="thingBar">
                {props.fontSize ? <h2 className="thingTitle" style={window.innerWidth<769 ? null : textSize}>{props.title}</h2> : <h2 className="thingTitle" >{props.title}</h2>}
                <div className={"thingButton "+(ouvert ? "down" : "")} onClick={() => (setOuvert(!ouvert))} ><i className="thingArrow"></i></div>
            </div>
            <div className={"thingDrop "+(ouvert ? "ouvert" : "")}>
                <p className="thingText">{props.text}</p>
            </div>
        </div>
    )
}

export default Collapse