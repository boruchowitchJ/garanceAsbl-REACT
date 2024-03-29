// import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Trouverdelaide.css";
import ScrollAnimation from "react-animate-on-scroll";

const ViolencesConjugales = () => {
  return (
    <div className="container-violences-conjugales">
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
          <div className="violence-conjugales-belgique">
            <h1 className="title-violence-conjugale">
              En cas de violence conjugale
            </h1>

            <h2>Belgique</h2>
            <p>
              Ligne d’écoute gratuite et dans l’anonymat au{" "}
              <strong className="strong-yellow">0800 30 030 </strong>(en
              français)
            </p>
            <p>
              Ligne d’écoute gratuite et dans l’anonymat au{" "}
              <strong className="strong-yellow">0800 55 552</strong> (en
              espagnol)
            </p>

            <h3>Maisons d’accueil avec adresse sécrète :</h3>
            <ul>
              <li>
                <a
                  href="https://www.cpvcf.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centre de Prévention des Violences Conjugales et Familiales
                </a>{" "}
                , Bruxelles.
              </li>
              <li>
                <a href="https://www.cvfe.be/" target="_blank" rel="noreferrer">
                  {" "}
                  Collectif Contre les violences familiales et l’exclusion
                </a>{" "}
                , Liège
              </li>
              <li>
                {" "}
                Pour une liste des maisons d’accueil pour femmes en difficulté :{" "}
                <a href="http://www.ama.be/" target="_blank" rel="noreferrer">
                  {" "}
                  Association des maisons d’accueil
                </a>
              </li>
            </ul>

            <h3>Services de consultation :</h3>
            <ul>
              <li>
                <a
                  href="https://www.prevention1170.be/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CIVIF
                </a>{" "}
                , Bruxelles.
              </li>
              <li>
                <a
                  href="https://www.namur.be/fr/ma-ville/social/cohesion-sociale/prevention-et-securite/violences-intrafamilliales-d-une-rive-a-lautre"
                  target="_blank"
                  rel="noreferrer"
                >
                  D’une Rive à l’autre{" "}
                </a>{" "}
                , Namur.
              </li>
            </ul>
            <p>
              Pour trouver de l’aide dans d’autres pays que ceux mentionnés,
              veuillez consulter la base de données européenne{" "}
              <a
                className="strong-yellow"
                href="https://wave-network.org/"
                target="_blank"
                rel="noreferrer"
              >
                WAVE
              </a>
              .
            </p>
          </div>

          <div className="violence-conjugales-autres">
            <div class="redBox">
              <h3>France</h3>
              <p>
                Ligne d’écoute gratuite et dans l’anonymat :{" "}
                <strong className="strong-yellow">39 19</strong>
              </p>
              <a
                className="strong-yellow-exept"
                href="https://www.solidaritefemmes.org/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération nationale Solidarité Femmes
              </a>
            </div>
            <div className="redBox">
              <div>
                <h3>Luxembourg</h3>
                <a
                  className="strong-yellow-exept"
                  href="https://fed.lu/wp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Femmes en détresee
                </a>
              </div>
              <div>
                <h3>Suisse</h3>
                <a
                  className="strong-yellow-exept"
                  href="https://www.frauenhaeuser.ch/fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fédération Solidarité Femmes de Suisse et de Liechtenstein
                </a>
                <a
                  className="strong-yellow-exept"
                  href="https://www.violencequefaire.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.violencequefaire.ch/
                </a>
                <span class="span-center">(pour adultes).</span>
              </div>
            </div>
            <div class="redBox">
              <h3>Canada</h3>
              <a
                className="strong-yellow-exept"
                href="https://www.aimersansviolence.com/"
                target="_blank"
                rel="noreferrer"
              >
                Aimer sans violence
              </a>
              <span class="span-center">(pour ados).</span>
              <a
                className="strong-yellow-exept"
                href="https://fmhf.ca/"
                target="_blank"
                rel="noreferrer"
              >
                Fédération des ressources hébergement pour femmes violentées et
                en difficulté du Québec
              </a>{" "}
              <span class="span-center">(pour adultes).</span>
              <a
                className="strong-yellow-exept"
                href="https://sosviolenceconjugale.ca/fr"
                target="_blank"
                rel="noreferrer"
              >
                SOS Violence Conjugale
              </a>
              <span class="span-center">Site de la ligne d’écoute.</span>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default ViolencesConjugales;
