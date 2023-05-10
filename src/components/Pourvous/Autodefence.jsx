import React from "react";

const Autodenfence = () => {
  return (
    <div class="container_fluid py-4">
      <div class="row g-0 align-items-center" style={{ marginTop: "-8%" }}>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 mb-5 mb-lg-0 cascading-right">
          {" "}
          <img
            src="../assets/images/autodefense.jpg"
            class="w-100 rounded-4 shadow-4"
            alt=""
            aria-controls="#picker-editor"
          />{" "}
        </div>
        <div class="col-lg-5 mb-5 mb-lg-0">
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
                  Autodéfense
                </span> <br /> <span class="text-primary"></span>{" "}
              </h3>
              <p>
                <span>
                  {" "}
                  ➢ Vous vous sentez mal à l’aise quand vous sortez seule ?
                </span>{" "}
                <br />
                <span>
                  ➢ Vous ne savez pas quoi faire si quelqu’un veut vous faire du
                  mal ?
                </span>
                <br />
                <span>
                  ➢ Vous voudriez apprendre à désamorcer des situations
                  dangereuses ?
                </span>
                <br />
                <br />
                <h3>
                  Découvrez alors vos possibilités d’action et prenez votre
                  sécurité en main !
                </h3>
                <br />
                Dans une formation d’autodéfense (Seito Boei), vous apprendrez à
                reconnaître des situations potentiellement dangereuses et à agir
                immédiatement. L’objectif n’est pas de devenir une machine de
                combat, mais d’éviter de devenir victime de violence. Pour cela,
                il est important de savoir :<br />
                <span className="link"> comment se mettre en sécurité,</span>
                <br />
                <span className="link">
                  {" "}
                  comment demander de l’aide à d’autrui,
                </span>
                <br />
                <span className="link">comment se faire respecter,</span>
                <br />
                <span className="link">
                  {" "}
                  ou encore comment déstabiliser un agresseur.
                </span>
                <br />
                Par des jeux, exercices et mises en situation, vous pouvez
                expérimenter des techniques simples et efficaces de défense
                verbale et physique. Des moments de discussion permettent
                d’échanger vos opinions et expériences avec les autres
                participantes et de trouver du soutien. Grâce à une technique de
                visualisation, vous pourrez intégrer ces acquis pour qu’ils
                deviennent des réflexes. Le tout dans une atmosphère de
                confiance, respect et confidentialité. Dans notre agenda, vous
                trouverez les prochains stages de Garance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autodenfence;
