import { Link } from "react-router-dom"
import "./card.scss"

function Card (props) {
    var logement = props.logement
    return (
        <Link to={"/Logement/"+logement.id}>
            <div className="cardBase card">
                <img className="cardBase cardImg" src={logement.cover} alt={logement.title}/>
                <div className="cardBase cardDiv"><p className="cardText">{logement.title}</p></div>
            </div>
        </Link>
    )
}

export default Card