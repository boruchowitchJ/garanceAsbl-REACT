
import { HashLink } from 'react-router-hash-link';
import Filles from "./Filles";
import './Pourvous.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import Enfantcapable from './Enfantcapable';
import Garcons from './Garcon';


const Garance18 = () => {
  return (<> 
  <div id='18'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('../assets/images/18.jpg')", height: 600, marginTop:-100, backgroundPositionY:"25%" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          
        </div>
      </div>
  <MDBContainer className="container_pourvous col-md-6 " style={{marginTop: "-80px", height:"50vh"}}>
      <h1> Garance -18 </h1>

      <div className="containersmall" >

        <p>
          Les jeunes et les enfants peuvent devenir victimes de violence - <strong>Garance contribue à les rendre moins vulnérables !</strong></p>

        <p>Notre programme <HashLink className="link" to="/enfantcapable">Enfant Capable</HashLink>  s’adresse aux écoles primaires. Nous travaillons avec les enfants, le personnel scolaire et les parents à la fois pour renforcer les messages de prévention.

          Parce que les filles et les garçons courent des risques différents, Garance propose des activités spécifiques :<br />

          <HashLink className="link" to="/Filles#Filles">Les Filles</HashLink> apprennent à reconnaître des signaux d’alarme, à chercher de l’aide auprès d’adultes et à poser et protéger leurs limites de manière non équivoque, verbalement et physiquement.<br />

          <HashLink className="link" to="/Garcon#Garcons">Chez les garçons</HashLink>, Garance met plus d’accent sur la gestion et l’expression des émotions et la capacité de refuser la provocation. Mais bien sûr, des techniques de défense verbale et physique sont également au rendez-vous.</p>
      </div>
    
      
    </MDBContainer>
    <Enfantcapable/>
    <Filles id="Filles"/>
    <Garcons/>
    
    </>
  )
};

export default Garance18;
