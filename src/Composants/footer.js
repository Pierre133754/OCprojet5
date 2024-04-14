import "./footer.scss";
import logoBlack from "../Ressources/LOGOBlack.png"

function Footer() {
    return (
        <footer className="footer">
            <img src={logoBlack} alt="Logo Kasa" className="footerLogo"/>
            <p className="footerText">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer