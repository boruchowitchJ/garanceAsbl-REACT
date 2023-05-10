import React from "react";
const Verbale = () => {
  return (
    <section id="verbale">
      <div className="container_fluid py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-2 mb-5 mb-lg-0"></div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropfilter: "blur(30px)",
              }}
            >
              <div className="card-body py-5 px-md-5 shadow-5">
                <h3 class="my-5  fw-bold ls-tight">
                  {" "}
                  <span style={{ color: "#e02965" }}>Défense verbale</span>{" "}
                  <br /> <span class="text-primary"></span>{" "}
                </h3>
                <div className="row">
                  <div className="col-12 mb-5">
                    <p>
                      <span>
                        ➢ Vous restez bouche bée face à une insulte ou une
                        humiliation ?
                      </span>{" "}
                      <br />
                      <span>
                        ➢ Vous avez l’impression que les autres profitent de
                        vous ?
                      </span>
                      <br />
                      <span>
                        ➢ Vous n’arrivez pas à vous faire respecter dans le
                        cadre privé ou professionnel ?
                      </span>
                      <br />
                      <br />
                      <h3>
                        Découvrez alors vos possibilités d’action et prenez ces
                        situations en main !
                      </h3>
                      <br />
                      Une formation de défense verbale vous apprendra à
                      reconnaître même des transgressions de limites subtiles.
                      Ceci est important pour pouvoir réagir tôt dans une
                      situation dérangeante, quand c’est encore facile de la
                      changer. Vous verrez aussi des moyens pour poser vos
                      limites de manière efficace et vous protéger contre un
                      trop plein d’émotions. Dans une atmosphère de respect,
                      confiance et confidentialité, vous pourrez échanger vos
                      expériences et chercher des solutions pour mettre un terme
                      à des comportements qui vous mettent mal à l’aise. Grâce à
                      des exercices, vous pourrez appliquer directement ce que
                      vous avez appris afin de vérifier que ça marche. Car il
                      est possible de se protéger contre les manipulateurs et
                      autres harceleur/se/s. Vous trouverez les prochains stages
                      de défense verbale dans notre agenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5 mb-lg-0">
            {" "}
            <img
              src="../assets/images/verbale.jpg"
              className="w-100 rounded-4 shadow-4"
              alt=""
              aria-controls="#picker-editor"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verbale;
