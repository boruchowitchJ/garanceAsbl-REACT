import React from "react";
const PTSD = () => {
  return (
    <div>
      <section id="Filles">
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
                  <h1 class="my-5 display-4 fw-bold ls-tight">
                    {" "}
                    <span style={{ color: "#e02965" }}>
                      L’état du stress post-traumatique (PTSD) comme conséquence
                      de violences traumatisantes .{" "}
                    </span>{" "}
                    <br />{" "}
                    <span style={{ color: "#F8CD42" }}>
                      {" "}
                      - reconnaître, conseiller, réorienter
                    </span>{" "}
                  </h1>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <p>
                        <span>
                          {" "}
                          ➢ Vous rencontrez des victimes de violence dans votre
                          travail ?
                        </span>{" "}
                        <br />
                        <span>
                          ➢ Vous êtes parfois étonné/e de leurs réactions et ne
                          savez pas comment y réagir ?
                        </span>
                        <br />
                        <span>
                          ➢ Vous avez envie d’améliorer votre intervention
                          auprès d’elles ?{" "}
                        </span>
                        <br />
                        <br />
                        Un vécu de violence est traumatique, et chaque trauma
                        qui reste sans traitement peut mener à des problèmes
                        graves de santé. Parce que les professionnel/le/s
                        reçoivent peu d’informations sur ce sujet, les causes de
                        ces symptômes ne sont souvent pas identifiées ni
                        traitées. Pour nombre de victimes, cela se traduit en
                        une marche d’un service à l’autre, pendant des années.
                        Dans cette formation courte, il s’agit de prendre
                        conscience du fonctionnement et des conséquences d’un
                        trauma psychique pour les personnes victimes de
                        violence. Cela vous permettra de reconnaître des
                        symptômes du PTSD et d’adapter votre intervention ou
                        consultation aux besoins de la victime. Le programme de
                        Garance contient les prochaines formations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0">
              {" "}
              <img
                src="../assets/images/ptsd.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
                aria-controls="#picker-editor"
              />{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTSD;
