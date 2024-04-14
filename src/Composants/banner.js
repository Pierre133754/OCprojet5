import "./banner.scss"

function Banner(props) {
    var opacity = {
        backgroundColor: "rgba(0,0,0,"+props.darken+")"
    }
    return(
        <section className="bannerBase banner">
            <img src={props.background} alt={props.alt} className="bannerBase bannerImg" />
            <div className="bannerBase bannerDiv bannerDivDarken" style={opacity}>
                {props.text ? <div className="bannerBase bannerDiv bannerDivShadow"><p className="bannerText">{props.text}</p></div> : null}
            </div>
        </section>
    )
}

export default Banner