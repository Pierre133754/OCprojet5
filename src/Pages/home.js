import "./home.scss"
import Rocks from "../Ressources/Rocks.png"
import Banner from "../Composants/banner"
import logements from "../logements.json"
import Card from "../Composants/card";
import Header from "../Composants/header";
import React from "react";

function Home() {
    return (
        <React.StrictMode>
            <Header />
            <section className="home">
                <Banner background={Rocks} text="Chez vous, partout et ailleurs" alt="Rocks" darken={0.6} />
                <div className="homeCards">
                    {logements.map((logement) => (
                        <Card key={logement.id} logement={logement} />
                    ))}
                </div>
            </section>
        </React.StrictMode>
    );
}

export default Home