import "./Pourvous.css";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Outlet, Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
import Autodenfence from "./Autodefence";
import Verbale from "./Verbale";
import Entrainement from "./Entrainement";

const Garancefemme = () => {
  return (
    <div>
      <div
        id="femme"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('../assets/images/femme.jpg')",
          height: "70vh",
          marginTop: -100,
          backgroundPositionY: "30%",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>
      </div>
      <section class="grainy-gradient-intro">
        <svg height="0" width="0">
          <filter id="f">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
          </filter>
        </svg>

        <MDBContainer
          className="container_pourvous col-md-6 "
          style={{ marginTop: "-5%" }}
        >
          <h1> Garance Femmes </h1>

          <img className="image_18" src="../assets/images/femme1.png" alt="" />
          <div className="containersmall">
            <p>
              Vous pouvez apprendre à poser vos limites, à mieux prendre soin de
              vous, à vous protéger en cas d’agression – bref :{" "}
              <strong>
                être plus zen dans toutes les circonstances de la vie.
              </strong>
            </p>

            <p>
              Il n’est pas facile de se retrouver dans les conseils de sécurité
              que l’on donne aux femmes : « ne sors pas toute seule quand il
              fait nuit ! », « il faut se méfier de tout le monde », « ne
              réponds surtout pas quand quelqu’un t’interpelle dans la rue ! »
              ... C’est pourquoi Garance a choisi les stratégies de prévention
              les plus efficaces pour ses formations, des stratégies qui ne
              limitent pas votre liberté, mais vous donnent la possibilité
              d’agir.
            </p>

            <br />

            <p>
              {" "}
              ➢ Dans une{" "}
              <Link className="link" to="/auto">
                formation d’autodéfense
              </Link>{" "}
              , vous apprendrez à reconnaître vos propres limites, à les poser
              de manière verbale et non verbale et, si besoin, à les défendre de
              manière physique. Les situations les plus courantes d’agression
              verbale, sexuelle et physique trouvent des solutions simples et
              efficaces.
            </p>

            <p>
              ➢Les stages de{" "}
              <Link className="link" to="/Verbale">
                défense verbale
              </Link>{" "}
              se focalisent sur les situations désagréables plus complexes,
              comme par exemple le harcèlement. Ici, il s’agit non seulement de
              se faire respecter, mais aussi de déjouer les stratégies
              manipulatrices de l’autre.
            </p>

            <p>
              {" "}
              ➢ Pour les participantes qui veulent aller plus loin : un groupe
              d’
              <Link className="link" to="/entrainement">
                entraînement mensuel
              </Link>{" "}
              permet de pratiquer, d’échanger des expériences et d’apprendre de
              nouvelles techniques.
            </p>

            <span> Retrouvez les dates des formations de Garance</span>
          </div>
          <Outlet />
        </MDBContainer>
        <ScrollAnimation animateIn="fadeInLeft">
          <Autodenfence />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight">
          <Verbale />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <Entrainement />
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Garancefemme;
