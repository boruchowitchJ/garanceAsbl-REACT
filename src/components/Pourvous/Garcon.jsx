import React from "react";

const Garcons = () => {
  return (
    <div class="container_fluid py-4">
      <div class="row g-0 align-items-center" style={{ marginBottom: 150 }}>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 mb-5 mb-lg-0 cascading-right">
          {" "}
          <img
            src="../assets/images/garcon.jpg"
            class="w-100 rounded-4 shadow-4"
            alt=""
            aria-controls="#picker-editor"
          />{" "}
        </div>
        <div class="col-lg-4 mb-5 mb-lg-0">
          <div
            class="card "
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropfilter: "blur(30px); ",
            }}
          >
            <div class="card-body px-4 pb-5 pt-md-0 px-md-5 shadow-5">
              <h3 class="my-5  fw-bold ls-tight">
                {" "}
                <span style={{ color: "#e02965" }}>Garçon</span> <br />{" "}
                <span class="text-primary"></span>{" "}
              </h3>
              <p>
                Les garçons se retrouvent souvent dans des situations
                dangereuses parce que l’on les met au défi de montrer qu’ils
                sont des « vrais hommes ». Dans la période de l’adolescence, il
                est d’autant plus important de les accompagner à la recherche de
                leur identité. Garance a réuni une série d’outils et de
                techniques pour eux qui permettent de se réaliser tout en
                respectant autrui. Par des exercices et jeux physiques, ils
                pourront prendre conscience de leur corps, non seulement de leur
                force physique, mais aussi des réactions physiologiques à des
                situations – les émotions. Il s’agit de rendre conscients les
                messages du corps et de pouvoir y réagir de manière adéquate.
                L’objectif est de trouver le bon milieu entre passivité et
                agressivité. Contrairement à ce que l’on pourrait penser, tous
                les garçons ne savent pas se battre. Et même ceux qui le savent
                confondent souvent se battre avec se défendre. C’est pourquoi un
                stage d’autodéfense pour garçons inclut des techniques de
                défense verbale et physique qui les aident à se faire respecter
                tout en respectant l’autre. Garance a élaboré une méthodologie
                spécifique pour les garçons et cherche actuellement les moyens
                de pouvoir la mettre en pratique. Si ce sujet vous intéresse,
                contactez le secrétariat de Garance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garcons;
