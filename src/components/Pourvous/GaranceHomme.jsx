import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
const Garancehomme = () => {
  return (
    <div>
      <div
        id="homme"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('../assets/images/homme.jpg')",
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
          <h1>Garance Hommes</h1>
          {/* <img className="image_18" src='../assets/images/homme.jpg'alt="" /> */}
          <div className="containersmall  ">
            <p>
              Depuis plusieurs années, Garance mène une réflexion sur la
              prévention des violences chez les hommes. En effet, les hommes
              peuvent également être confrontés à des agressions, mais ne savent
              souvent pas comment y réagir. Comme les violences qui leur sont
              faites sont différentes de celles à l’égard des femmes, les outils
              utilisés par Garance doivent être évalués et adaptés à leurs
              besoins et capacités. Garance espère trouver le financement
              nécessaire pour développer ce domaine de la prévention des
              violences dans un avenir proche. Si ce sujet vous intéresse,
              contactez le secrétariat de Garance
            </p>
          </div>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Garancehomme;
