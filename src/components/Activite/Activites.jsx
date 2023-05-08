import ScrollAnimation from "react-animate-on-scroll";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
/* import ActivitesCard from "./ActivitesCard"; */
import React from "react";
import "./Activites.css";

const Activites = () => {
  return (
    <div className="containerActivites">
      <ScrollAnimation /* animateIn="fadeZoomInLeft" */>
        <div>
          <img
            src="../../../public/assets/images/ateliers/resisterAntiFeminisme.jpg"
            alt="Résister à l'anti féminisme"
          />
        </div>
        <div
          className="container"
          style={{ marginTop: "-30%", height: "auto" }}
        >
          <h1>STAGE : RÉSISTER À L’ANTIFÉMINISME</h1>
          <p>Stages organisés uniquement à Bruxelles</p>
          <p>Lieu: Garance asbl, 55 rue Royale, 1000 Bruxelles</p>
          <h3>Contenu : </h3>
          <p>
            Que ce soit le vieil oncle Jacques lors d’un repas familial, un·e
            collègue en pleine réunion de travail ou encore un·e ami·e sur les
            réseaux sociaux, les discours anti- féministes foisonnent dans tous
            les contextes de la société. En tant que féministes - en herbe ou de
            longue date - nous avons besoin de nous renforcer pour déjouer des
            procédés manipulateurs et convaincre par la force de nos arguments.
          </p>
          <h3>Public cible : </h3>
          <p>
            Les femmes (selon auto définition) qui ne veulent plus laisser
            passer les blagues lourdes, les remarques sexistes ou les attaques
            contre le féminisme.
          </p>
          <h3>Horaire : </h3>
          <p>
            🕜 WEEKEND 11-12 février 2023 et WEEKEND du 29-30 juillet 2023 de
            10h à 17h
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation /* animateIn="fadeInRight" */>
        <div></div>
      </ScrollAnimation>
    </div>
  );
};
export default Activites;
