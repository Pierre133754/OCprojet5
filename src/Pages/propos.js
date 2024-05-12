import "./propos.scss"
import moutains from "../Ressources/Mountains.png"
import Banner from "../Composants/banner";
import Collapse from "../Composants/collapse";
import React from "react";
import Header from "../Composants/header";

function Propos() {
    return (
        <React.StrictMode>
            <Header />
            <section className="propos">
                <Banner background={moutains} darken={0.3} alt="Mountains"/>
                <div className="proposCollapse">
                    <Collapse fontSize={"24px"} title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                    <Collapse fontSize={"24px"} title="Respect" text="La bienveillance dait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
                    <Collapse fontSize={"24px"} title="Service" text="La bienveillance dait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
                    <Collapse fontSize={"24px"} title="Fiabilité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </section>
        </React.StrictMode>
    );
}

export default Propos