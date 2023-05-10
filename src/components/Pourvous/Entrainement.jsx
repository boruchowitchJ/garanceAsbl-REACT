import React from "react";

const Entrainement = () => {
  return (
    <div class="container_fluid py-4">
      <div class="row g-0 align-items-center" style={{ marginBottom: 150 }}>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 mb-5 mb-lg-0 cascading-right">
          {" "}
          <img
            src="../assets/images/entrainement.png"
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
                <span style={{ color: "#e02965" }}>
                  Entraînement
                </span> <br /> <span class="text-primary"></span>{" "}
              </h3>
              <p>
                <span>
                  ➢ Après un stage, vous avez besoin de répéter certaines
                  techniques
                </span>{" "}
                <br />
                <span>
                  ➢ Vous avez rencontré une situation que vous voudriez discuter
                  avec nous ?
                </span>
                <br />
                <span>
                  ➢ Vous êtes fan de Garance et ne pouvez pas vous lasser de nos
                  activités ?
                </span>
                <br />
                <span>Rejoignez-nous au groupe mensuel d’entraînement !</span>
                <br />
                <br />
                <h3>
                  Découvrez alors vos possibilités d’action et prenez ces
                  situations en main !
                </h3>
                <br />
                Ce groupe est ouvert à toutes les participantes à une formation
                d’autodéfense et ne demande pas de présence régulière. Vous
                pouvez venir une seule fois ou à tous les coups. Tous les
                deuxièmes mardis du mois, un autre sujet sera traité. Une
                répétition des techniques de base est prévue à chaque fois,
                suivie par le thème du jour. Et pourquoi pas y retrouver les
                participantes que vous avez rencontrées lors de votre formation
                ?<h3>ATTENTION :</h3>
                Il est dorénavant obligatoire de s’inscrire au plus tard une
                semaine avant l’entraînement pour permettre une meilleure
                gestion du groupe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrainement;
