import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashLink } from "react-router-hash-link";

export const FooterPage = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>NOS RESEAUX :</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/GaranceAutodefense/"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a
            href="https://twitter.com/AsblGarance"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="mailto:info@garance.be"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://twitter.com/AsblGarance" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/garance-asbl/about/"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                GARANCE ASBL
              </h6>
              <p>
                est une association qui lutte par la prévention contre les
                violences basées sur le genre.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Lien</h6>
              <p>
                <HashLink className="link" to="/#NavBar">
                  Accueil
                </HashLink>
              </p>
              <p>
                <HashLink className="link" to="/QuisommeNous#QuisommesNous">
                  Qui sommes Nous?
                </HashLink>
              </p>
              <p>
                <a href="#Activité" className="link ">
                  Activités
                </a>
              </p>
              <p>
                <HashLink className="link" to="/TrouverAide#touverdelaide">
                  Trouver de l aide
                </HashLink>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>

              <p>
                <a href="#!" className="text-reset">
                  Les sites d’autodéfense pour femmes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Où trouver de l’aide ?
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Les sites partenaires
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rue Royale 55, 1000 Bruxelles
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@garance.be
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +32 2 216 61 16
              </p>
              <p>
                <MDBIcon icon="fa-solid fa-money-check" className="me-3" /> BE44
                5230 8020 6345
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <p>THAIS SABLON | JENNIFER BORUCHOWITCH</p>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
