import "./Navbar.css";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Nav = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <header>
        <MDBNavbar
          style={{ zIndex: "999", fontWeight: 400, boxShadow: "none" }}
          expand="xl"
        >
          <MDBContainer fluid className="fixed-top">
            <MDBNavbarBrand style={{ marginTop: 20 }}>
              <img
                src="./assets/images/garancelogo.png"
                height="100px"
                alt="logo"
                loading="lazy"
                className=".logoNav"
              />
            </MDBNavbarBrand>

            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse style={{ height: 80 }} navbar show={showBasic}>
              <MDBNavbarNav
                className="justify-content-around align-item-center nav-items "
                style={{}}
              >
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="/">
                    Accueil
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      style={{ display: "flex", alignItems: "center" }}
                      tag="a"
                      role="button"
                    >
                      <MDBNavbarLink
                        style={{ display: "flex", alignItems: "center" }}
                        href="/pourvous"
                      >
                        Pour vous
                      </MDBNavbarLink>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      className="sous"
                    >
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/echappesbelles">
                          Echapees Belles
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/GaranceFemme ">
                          Garance Femme{" "}
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/GaranceHomme  ">
                          Garance Homme
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Garance55  ">
                          Garance +55{" "}
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Garance18 ">
                          Garance -18{" "}
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/GarancePro">
                          Garance Pro
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "-37px",
                      }}
                      tag="a"
                      className=""
                      role="button"
                    >
                      <MDBNavbarLink href="/QuisommeNous">
                        Qui sommes Nous?
                      </MDBNavbarLink>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      className="sous"
                      style={{ backgroundColor: "#f000" }}
                    >
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Histoire">Histoire</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Positionnement">
                          Positionnement
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Reseau">Reseau</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Statut">Statut</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/Partenariat">
                          Partenariat{" "}
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem style={{ display: "flex" }}>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      style={{ display: "flex", alignItems: "center" }}
                      tag="a"
                      className=""
                      role="button"
                    >
                      <MDBNavbarLink href="/Activites">Ateliers</MDBNavbarLink>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      className="sous"
                      style={{ backgroundColor: "#f000" }}
                    >
                      <MDBDropdownItem>
                        <MDBNavbarLink href="#">Notre calendrier</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="#">Nos ateliers</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="#">Inscription</MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="#">Plan d'accès</MDBNavbarLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem style={{ display: "flex" }}>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      style={{ display: "flex", alignItems: "center" }}
                      tag="a"
                      className=""
                      role="button"
                    >
                      <MDBNavbarLink href="/TrouverAide">
                        Trouver de l'aide
                      </MDBNavbarLink>
                    </MDBDropdownToggle>

                    <MDBDropdownMenu
                      className="sous"
                      style={{ backgroundColor: "#f000" }}
                    >
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/ViolencesConjugales">
                          Violence Conjugale
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/ViolencesSexuelles">
                          Violence sexuelle
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/AutresTypesViolences">
                          Autres type de violence
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBNavbarLink href="/AidePsychoSociale">
                          Aide psycho-sociale
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
      <Outlet />
    </div>
  );
};

export default Nav;
