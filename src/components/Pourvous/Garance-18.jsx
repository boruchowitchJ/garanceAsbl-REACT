import { Outlet, Link } from "react-router-dom";
import Filles from "./Filles";
import './Pourvous.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer } from 'mdb-react-ui-kit';


const Garance18 = () => {
  return (<> 
  <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('../assets/images/18.jpg')", height: 600, marginTop:-100, backgroundPositionY:"25%" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          
        </div>
      </div>
  <MDBContainer className="container_pourvous col-md-6 " style={{marginTop: "-80px" }}>
      <h1> Garance -18 </h1>

      <div className="containersmall" >

        <p>
          Les jeunes et les enfants peuvent devenir victimes de violence - <strong>Garance contribue à les rendre moins vulnérables !</strong></p>

        <p>Notre programme <Link className="link" to="/enfantcapable">Enfant Capable</Link>  s’adresse aux écoles primaires. Nous travaillons avec les enfants, le personnel scolaire et les parents à la fois pour renforcer les messages de prévention.

          Parce que les filles et les garçons courent des risques différents, Garance propose des activités spécifiques :<br />

          <Link className="link" to="/Filles">Les Filles</Link> apprennent à reconnaître des signaux d’alarme, à chercher de l’aide auprès d’adultes et à poser et protéger leurs limites de manière non équivoque, verbalement et physiquement.<br />

          <Link className="link" to="/Garcons">Chez les garçons</Link>, Garance met plus d’accent sur la gestion et l’expression des émotions et la capacité de refuser la provocation. Mais bien sûr, des techniques de défense verbale et physique sont également au rendez-vous.</p>
      </div>
      


      <Outlet />
      
    </MDBContainer>
    <Filles/></>
  )
};

export default Garance18;
