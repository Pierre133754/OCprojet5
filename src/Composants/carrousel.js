import { useState } from "react"
import "./carrousel.scss"

function Carrousel(props) {
    var [picNumber, setPicNumber] = useState(0)
    var imgsLength = props.imgs.length
    return (
        <div className="spin">
            {(imgsLength === 1 ? null : <div className="spinCase Left" onClick={() => (picNumber === 0 ? setPicNumber(imgsLength - 1) : setPicNumber(picNumber - 1))}><i className="arrow"></i></div>)}
            <img src={props.imgs[picNumber]} alt={"Images numero "+(picNumber+1)}/>
            {(imgsLength === 1 ? null : <div className="spinCase Right" onClick={() => (picNumber === imgsLength - 1 ? setPicNumber(0) : setPicNumber(picNumber + 1))} ><i className="arrow"></i></div>)}
            {(imgsLength === 1 ? null : <p className="spinCaseCounter">{picNumber +1}/{imgsLength}</p>)}
        </div>
    )
}

export default Carrousel