import React from "react"
import "./404.scss"
import Header from "../Composants/header"
import { Link } from "react-router-dom";

function Error404() {
    return (
        <React.StrictMode>
            <Header />
            <section className="error">
                <h1 className="errorBig">404</h1>
                <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="errorLink">retourner sur la page d'accueil</Link>
            </section>
        </React.StrictMode>
    );
}

export default Error404 