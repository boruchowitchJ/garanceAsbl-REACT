import ScrollAnimation from "react-animate-on-scroll";
import "./Trouverdelaide.css";
import React from "react";

const AidePsychoSociale = () => {
  return (
    <div className="container-aide-psycho" id="ancreAidePsychoSociale">
      <section class="grainy-gradient-intro">
        <svg height="0" width="0">
          <filter id="f">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
          </filter>
        </svg>
        <ScrollAnimation
          animateIn="rotateInUpRight"
          className="ScrollAnimationBigCard"
        >
          <div className="aide-psycho-belgique">
            <h1 className="title-aide-psycho">Sites d'Aide Psycho-Sociale</h1>

            <h2>Belgique</h2>

            <p>
              <a
                className="strong-yellow-exept"
                href="https://fcpc.be/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération des Centres de Planning et de consultation
              </a>
            </p>
            <p>
              <a
                className="strong-yellow-exept"
                href="https://www.sofelia.be/qui-sommes-nous/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération des Centres de Planning Familial des Femmes
                Prévoyantes Socialistes
              </a>
            </p>
            <p>
              <a
                className="strong-yellow-exept"
                href="https://www.planningfamilial.net/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération Laïque de Centres de Planning Familial
              </a>
            </p>

            <p>
              <a
                className="strong-yellow-exept"
                href="https://www.maisonmedicale.org/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération des maisons médicales et des Collectifs de santé
                francophones
              </a>
            </p>

            <p>
              <a
                className="strong-yellow-exept"
                href="https://lbsm.be/"
                target="_blank"
                rel="noreferrer"
              >
                Ligue Bruxelloise Francophone pour la Santé Mentale
              </a>
            </p>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};
export default AidePsychoSociale;
