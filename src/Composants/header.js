import "./header.scss"
import logo from "../Ressources/LOGO.png"
import { Link } from "react-router-dom";

function Header() {
    var path = window.location.pathname
    var underlined = {textDecoration: "underline"}
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="headerLogo"/>
            <nav className="headerNav">
                <Link to="/" style={path==="/" ? underlined : null} >Accueil</Link>
                <Link to="/A_Propos" style={path==="/A_Propos" ? underlined : null} >A Propos</Link>
            </nav>
        </header>
    );
}

export default Header