import "./rating.scss"

function Rating(props) {
    return (
        <div className="rating">
            <i className={"fa-solid fa-star fa-lg "+(parseInt(props.rating) >= 1 ? "checked" : "")}></i>
            <i className={"fa-solid fa-star fa-lg "+(parseInt(props.rating) >= 2 ? "checked" : "")}></i>
            <i className={"fa-solid fa-star fa-lg "+(parseInt(props.rating) >= 3 ? "checked" : "")}></i>
            <i className={"fa-solid fa-star fa-lg "+(parseInt(props.rating) >= 4 ? "checked" : "")}></i>
            <i className={"fa-solid fa-star fa-lg "+(parseInt(props.rating) >= 5 ? "checked" : "")}></i>
        </div>
    )
}

export default Rating