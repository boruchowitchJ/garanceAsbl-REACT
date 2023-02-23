import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/NavBar";
import Accueil from "./components/Accueil";
import EchapeeBelle from "./components/Pourvous/Echapeebelle";
import AudioPlayer from './components/Pourvous/TemoignagesAudio';
import Ecrits from './components/Pourvous/TemoignagesEcrits';
import Garance18 from './components/Pourvous/Garance-18';
import Garance55 from './components/Pourvous/Garance+55';
import GaranceFemme from './components/Pourvous/GaranceFemme';
import GaranceHomme from './components/Pourvous/GaranceHomme';
import GarancePro from './components/Pourvous/GarancePro';
import Contact from "./components/Contact";
import Histoire from './components/Presentation/Histoire';
import Partenariat from './components/Presentation/Partenariat';
import Positionnement from './components/Presentation/Positionnement';
import Reseau from './components/Presentation/Reseau';
import Statut from './components/Presentation/Statut';
import Quisommenous from './components/Presentation/QuisommeNous';
import Filles from './components/Pourvous/Filles';
import Garcons from './components/Pourvous/Garcon';
import Enfantcapable from "./components/Pourvous/Enfantcapable";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="echappesbelles" element={<EchapeeBelle />} />
          <Route path="audio" element={<AudioPlayer />} />
          <Route path="ecrits" element={<Ecrits />} />



          <Route path="Garance18" element={<Garance18 />} />
          <Route path="Filles" element={<Filles />} />
          <Route path="Garcons" element={<Garcons />} />
          <Route path="enfantcapable" element={<Enfantcapable/>} />


          <Route path="Garance55" element={<Garance55 />} />
          <Route path="GaranceFemme" element={<GaranceFemme />} />
          <Route path="GaranceHomme" element={<GaranceHomme />} />
          <Route path="GarancePro" element={<GarancePro />} />

          <Route path="Histoire" element={<Histoire />} />
          <Route path="Partenariat" element={<Partenariat />} />
          <Route path="Positionnement" element={<Positionnement />} />
          <Route path="Reseau" element={<Reseau />} />
          <Route path="Statut" element={<Statut />} />
          <Route path="QuisommeNous" element={<Quisommenous />} />
          

          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

