import React from "react";
import "./logement.scss"
import Header from "../Composants/header";
import logements from "../logements.json"
import Collapse from "../Composants/collapse";
import Carrousel from "../Composants/carrousel";
import Tag from "../Composants/tag";
import Rating from "../Composants/rating";

function Logement() {
    var logement = logements.find((logement) => ("/Logement/"+logement.id === window.location.pathname))
    if (!logement) {
        window.location.pathname = "no,_you_suck";
    }
    var equipements = logement.equipments.toString().replaceAll(",","\n")
    return (
        <React.StrictMode>
            <Header />
            <section className="page">
                <div className="pageImgs">
                    <Carrousel imgs={logement.pictures}/>
                </div>
                <div className="pageNames">
                    <div className="pageNamesTitles">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className="pageNamesHost">
                        <p>{logement.host.name.replace(" ","\n")}</p>
                        <img src={logement.host.picture}/>
                    </div>
                </div>
                <div className="pageCounters">
                    <div className="pageCountersTags">
                        {logement.tags.map((tag) => (
                            <Tag key={logement.id+tag} tag={tag}/>
                        ))}
                    </div>
                    <div>
                        <Rating rating={logement.rating}/>
                    </div>
                </div>
                <div className="pageCollapse">
                    <Collapse title="Description" fontSize={"18px"} text={logement.description} />
                    <Collapse title="Équipements" fontSize={"18px"} text={equipements} />
                </div>
            </section>
        </React.StrictMode>
    );
}

export default Logement