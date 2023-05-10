import ScrollAnimation from "react-animate-on-scroll";

import ActivitesCard from "./ActivitesCard";
import React from "react";
import "./Activites.css";

const Activites = () => {
  const ActivitesTab1 = [
    {
      id: 1,
      titre: "Résister à l'antiféminisme",
      description:
        "Pour toutes les femmes (selon autodéfinition) qui ne veulent plus laisser passer les blagues lourdes,les remarques...",
      affiche: "../../assets/images/ateliers/resisterAntiFeminisme.jpg",
      lien: "/echappesbelles#echappe",
    },
    {
      id: 2,
      titre: "Auto-défense féministe",
      description:
        "Pour toutes les femmes (selon autodéfinition) qui veulent agrandir leur sécurité en prévenant les agressions...",
      affiche: "../../assets/images/ateliers/autoDefenseFeministe.jpg",
      lien: "/GaranceFemme#femme",
    },
    {
      id: 3,
      titre: "Défense Verbale",
      description:
        "Pour toutes les femmes (selon autodéfinition) qui ont envie d’apprendre à poser leurs limites verbalement.",
      affiche: "../../assets/images/ateliers/defenseVerbale.jpg",
      lien: "/GaranceHomme#homme",
    },
  ];
  const ActivitesTab2 = [
    {
      id: 1,
      titre: "Auto-défense pour filles",
      description:
        "Les filles ne sont pas épargnées par les violences, mais elles peuvent découvrir par ces formations adaptées....",
      affiche: "../../assets/images/ateliers/autoDefenseFilles.jpg",
      lien: "/echappesbelles#echappe",
    },
    {
      id: 2,
      titre: "Entrainement Mensuel",
      description:
        "Vous avez déjà suivi une formation d’autodéfense précédemment ? Cet entraînement est fait pour vous...",
      affiche: "../../assets/images/ateliers/entrainementMensuel.jpg",
      lien: "/GaranceFemme#femme",
    },
  ];

  return (
    <div className="containerActivites">
      <section class="grainy-gradient-intro">
        <svg height="0" width="0">
          <filter id="f">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
          </filter>
        </svg>
        <div className="cardRow">
          <ScrollAnimation animateIn="zoomIn">
            <div
              class="container"
              style={{ marginTop: "-30%", height: "auto" }}
            >
              <div class="row">
                {ActivitesTab1.map((p) => (
                  <ActivitesCard
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
        <div className="cardRow">
          <ScrollAnimation animateIn="zoomIn">
            <div
              class="container"
              style={{ marginTop: "-30%", height: "auto" }}
            >
              <div class="row">
                {ActivitesTab2.map((p) => (
                  <ActivitesCard
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
      </section>
    </div>
  );
};
export default Activites;
