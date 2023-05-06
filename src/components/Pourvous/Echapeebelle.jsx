import { HashLink } from "react-router-hash-link";
import "./Pourvous.css";
import { MDBContainer } from "mdb-react-ui-kit";
import Comment from "./Comments";
import React from "react";
import TemoignagesAListe from "./TemoignagesAListe";

const Echapees = () => {
  return (
    <div>
      <div
        id="echappe"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('../assets/images/femme3.jpg')",
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
          className="container_pourvous col-md-6"
          style={{ marginTop: "-5%" }}
        >
          <h1>Echapees belles</h1>
          <div>
            <p>
              Dans ce forum, vous pouvez échanger vos expériences de réussite
              dans des situations désagréables ou même dangereuses. Vous y
              trouverez des histoires écrites et racontées. Une stratégie de
              défense n’est pas limitée à quelques coups de karaté (ou de Seito
              Boei, tant qu’on y est) bien placés.
            </p>
            <p>
              Les petites astuces pour éviter la violence, les mots bien trouvés
              qui clouent le bec à l’agresseur, la fuite quand elle est
              possible, les façons dont on a pu trouver de l’aide, de la
              solidarité :{" "}
            </p>{" "}
            <p>
              Garance collectionne toutes ces petites richesses pour les
              partager, pour que chacune puisse en inspirer, et pour (re)prendre
              courage : les femmes sont parfois victimes de violence, mais{" "}
              <strong>elles ne sont pas démunies !</strong>
            </p>
            <p>
              <span>
                <HashLink className="link" to="/ecrits#temoignage">
                  ➢ des témoignages écrits
                </HashLink>
              </span>
              <br />
              <span>
                <HashLink className="link" to="/audio">
                  ➢ des témoignages audios{" "}
                </HashLink>
              </span>{" "}
              <br />
              <span>
                ➢ un formulaire Témoignez ! pour vous permettre d’envoyer vos
                témoignages
              </span>
            </p>
          </div>
        </MDBContainer>

        <Comment />
        <TemoignagesAListe />
      </section>
    </div>
  );
};
export default Echapees;
