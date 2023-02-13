import './App.css';
import  NavBar from './components/NavBar';
import Echapees from './components/Pourvous/Echapeebelle';
import Garance18 from './components/Pourvous/Garance-18';
import Filles from './components/Pourvous/Filles'
import Garcon from './components/Pourvous/Garcon'
import Garance55 from './components/Pourvous/Garance+55';
import GaranceFemme from './components/Pourvous/GaranceFemme';
import GaranceHomme from './components/Pourvous/GaranceHomme';
import GarancePro from './components/Pourvous/GarancePro';
import Histoire from './components/Presentation/Histoire';
import Partenariat from './components/Presentation/Partenariat';
import Positionnement from './components/Presentation/Positionnement';
import Reseau from './components/Presentation/Reseau';
import Statut from './components/Presentation/Statut';
import Quisommenous from './components/Presentation/QuisommeNous';





import  Contact from './components/Contact';
import Accueil from './components/Accueil';


function App() {
  return (
    <div className="App">
      <header className="App-header"><NavBar />     
      </header>
   <Accueil />
      <Echapees />
      <Garance18/>
      <Filles/>
      <Garcon/>
      <Garance55/>
      <GaranceFemme/>
      <GaranceHomme/>
      <GarancePro/>
      <Quisommenous/>
      <Histoire/>
      <Partenariat/>
      <Positionnement/>
      <Statut/>
      <Reseau/>
      <Contact />
      
    </div>
  );
}

export default App;
