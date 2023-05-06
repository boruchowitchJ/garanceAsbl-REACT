import React from "react";
import "./Trouverdelaide.css";

const ViolencesSexuelles = () => {
  return (
    <div class="container-violences-sexuelles" id="ancreViolencesSexuelles">
      <div className="violences-sexuelles-belgique">
        <h1 className="title-violence-sexuelle">En cas de violence sexuelle</h1>
        <h2>Belgique</h2>
        <p>
          <a
            href="https://www.guidesocial.be/sosviol/page.php?page=1"
            target="_blank"
            rel="noreferrer"
          >
            SOS Viol
          </a>
          , Bruxelles.
        </p>
        <p>
          Pour trouver de l’aide dans d’autres pays que ceux mentionnés,
          veuillez consulter la base de données européenne{" "}
          <a href="https://wave-network.org/" target="_blank" rel="noreferrer">
            WAVE
          </a>
          .
        </p>
      </div>
      <div className="violence-sexuelles-autres">
        <div className="redBox">
          <h3>France</h3>
          <p>
            Ligne d’écoute gratuite et dans l’anonymat :{" "}
            <strong class="strong-yellow">0800 05 95 95</strong>
          </p>
          <a
            className="strong-yellow-exept"
            href="https://www.planning-familial.org/fr"
            target="_blank"
            rel="noreferrer"
          >
            Confédération du Mouvement français pour le planning familial
          </a>
          <a
            className="strong-yellow-exept"
            href="https://cfcv.asso.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Collectif féministe contre le viol.
          </a>
          <a
            className="strong-yellow-exept"
            href="https://www.sosviol.com/"
            target="_blank"
            rel="noreferrer"
          >
            SOS Viol
          </a>
          <span class="span-center">, Marseille.</span>
          <a
            className="strong-yellow-exept"
            href="https://facealinceste.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Association internationale des victimes d’inceste.
          </a>
        </div>
        <div className="redBox">
          <h3>Suisse</h3>
          <a
            className="strong-yellow-exept"
            href="https://viol-secours.ch/"
            target="_blank"
            rel="noreferrer"
          >
            Viol Secours.
          </a>
          <span class="span-center">, Genève.</span>
          <a
            className="strong-yellow-exept"
            href="https://cfcv.asso.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Centre de consultation pour les victimes d’abus sexuel
          </a>
          <span className="span-center">, Genève.</span>
        </div>
        <div className="redBox">
          <h3>Canada</h3>
          <a
            className="strong-yellow-exept"
            href="http://www.rqcalacs.qc.ca/"
            target="_blank"
            rel="noreferrer"
          >
            Centres d’aide et de lutte contre les agressions à caractère sexuel.
          </a>
          <a
            className="strong-yellow-exept"
            href="https://cpivas.com/"
            target="_blank"
            rel="noreferrer"
          >
            CPIVAS
          </a>
        </div>
      </div>
    </div>
  );
};
export default ViolencesSexuelles;
