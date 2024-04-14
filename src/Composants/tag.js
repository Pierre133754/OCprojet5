import "./tag.scss"

function Tag(props) {
    return (
        <div className="tag">
            <p>{props.tag}</p>
        </div>
    )
}

export default Tag