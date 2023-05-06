/* import ViolencesConjugales from "./ViolencesConjugales";
import ViolencesSexuelles from "./ViolencesSexuelles";
import AutresViolences from "./AutresTypesViolences";
import AidePsychoSociale from "./AidePsychoSociale"; */

import ScrollAnimation from "react-animate-on-scroll";
import TrouverAideCard from "./TrouverAideCard";
import React from "react";
import "./Trouverdelaide.css";

const TrouverAideTab = [
  {
    id: 1,
    titre: "Violences Conjugales",
    description: "Où trouver de l'aide en cas de violences conjugales.",
    affiche: "../../assets/images/TrouverAide/aidePsychoSociale.jpg",
    lien: "/echappesbelles#echappe",
  },
  {
    id: 2,
    titre: "Violences Sexuelles",
    description: "Où trouver de l'aide en cas de violences sexuelles",
    affiche: "../../assets/images/TrouverAide/aidePsychoSociale.jpg",
    lien: "/GaranceFemme#femme",
  },
  {
    id: 3,
    titre: "Tout autre type de violence",
    description: "Où trouver de l'aide en cas de tout autre type de violence.",
    affiche: "../../assets/images/TrouverAide/aidePsychoSociale.jpg",
    lien: "/GaranceHomme#homme",
  },
  {
    id: 4,
    titre: "Sites d'aide psychosociale",
    description: "Répertoire de site d'aide psycho-sociale.",
    affiche: "../../assets/images/TrouverAide/aidePsychoSociale.jpg",
    lien: "/Garance55#55",
  },
];
const TrouverAide = () => {
  return (
    <div
      className="container-trouver-aide"
      id="touverdelaide"
      style={{ paddingTop: "40%" }}
    >
      <div>
        <ScrollAnimation animateIn="fadeInRight">
          <div class="container" style={{ marginTop: "-30%", height: "auto" }}>
            <div class="row">
              {TrouverAideTab.map((p) => (
                <TrouverAideCard
                  key={p.id}
                  titre={p.titre}
                  description={p.description}
                  affiche={p.affiche}
                  lien={p.lien}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* <div>
        <ViolencesConjugales />
      </div>
      <div>
        <ViolencesSexuelles />
      </div>
      <div>
        <AutresViolences />
      </div>
      <div>
        <AidePsychoSociale />
      </div> */}
    </div>
  );
};

export default TrouverAide;
