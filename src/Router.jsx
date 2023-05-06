import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import Layout from "./components/NavBar";
import Accueil from "./components/Accueil";
import EchapeeBelle from "./components/Pourvous/Echapeebelle";
import TemoignagesAListe from "./components/Pourvous/TemoignagesAListe";

import Garance18 from "./components/Pourvous/Garance-18";
import Filles from "./components/Pourvous/Filles";
import Garcons from "./components/Pourvous/Garcon";
import Enfantcapable from "./components/Pourvous/Enfantcapable";

import Garance55 from "./components/Pourvous/Garance+55";

import GaranceFemme from "./components/Pourvous/GaranceFemme";
import Autodefense from "./components/Pourvous/Autodefence";
import Verbale from "./components/Pourvous/Verbale";
import Entrainement from "./components/Pourvous/Entrainement";

import GaranceHomme from "./components/Pourvous/GaranceHomme";

import GarancePro from "./components/Pourvous/GarancePro";

import Contact from "./components/Contact";

import Quisommenous from "./components/Presentation/QuisommeNous";
import Histoire from "./components/Presentation/Histoire";
import Partenariat from "./components/Presentation/Partenariat";
import Positionnement from "./components/Presentation/Positionnement";
import Reseau from "./components/Presentation/Reseau";
import Statut from "./components/Presentation/Statut";

import Activites from "./components/Activite/Activites";

import TrouverAide from "./components/Trouverdelaide/TrouverAide";
import ViolencesConjugales from "./components/Trouverdelaide/ViolencesConjugales";
import ViolencesSexuelles from "./components/Trouverdelaide/ViolencesSexuelles";
import AutresViolences from "./components/Trouverdelaide/AutresTypesViolences";
import AidePsychoSociale from "./components/Trouverdelaide/AidePsychoSociale";

import Comments from "./components/Pourvous/Comments";
import FooterPage from "./components/Footer";
import PourVousCard from "./components/Pourvous/PourvousColl/PourVousList";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="pourvous" element={<PourVousCard />} />
          <Route path="echappesbelles" element={<EchapeeBelle />} />
          <Route path="audio" element={<TemoignagesAListe />} />
          <Route path="ecrits" element={<Comments />} />

          <Route path="Garance18" element={<Garance18 />} />
          <Route path="Filles" element={<Filles />} />
          <Route path="Garcons" element={<Garcons />} />
          <Route path="enfantcapable" element={<Enfantcapable />} />

          <Route path="Garance55" element={<Garance55 />} />

          <Route path="GaranceFemme" element={<GaranceFemme />} />
          <Route path="auto" element={<Autodefense />} />
          <Route path="Verbale" element={<Verbale />} />
          <Route path="entrainement" element={<Entrainement />} />

          <Route path="GaranceHomme" element={<GaranceHomme />} />
          <Route path="GarancePro" element={<GarancePro />} />

          <Route path="Histoire" element={<Histoire />} />
          <Route path="Partenariat" element={<Partenariat />} />
          <Route path="Positionnement" element={<Positionnement />} />
          <Route path="Reseau" element={<Reseau />} />
          <Route path="Statut" element={<Statut />} />
          <Route path="QuisommeNous" element={<Quisommenous />} />

          <Route path="Activites" element={<Activites />} />

          <Route path="TrouverAide" element={<TrouverAide />} />
          <Route path="ViolencesConjugales" element={<ViolencesConjugales />} />
          <Route path="ViolencesSexuelles" element={<ViolencesSexuelles />} />
          <Route path="AutresTypesViolences" element={<AutresViolences />} />
          <Route path="AidePsychoSociale" element={<AidePsychoSociale />} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
};
export default Router;
