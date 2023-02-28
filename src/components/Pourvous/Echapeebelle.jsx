import { Outlet, Link } from "react-router-dom";
import './Pourvous.css';
import { MDBContainer } from 'mdb-react-ui-kit';


const Echapees = () => {
    return (
        <MDBContainer>
      <div className='clearfix bg-image hover-zoom' >
        <img
          className='bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 rounded-4 shadow-4'
          width='25%'
          height='25%'
          img src='../assets/images/femme2.png'
          role='img'
        //   preserveAspectRatio='xMidYMid slice'
          focusable={false}
        >
        </img>
        <p>
        Dans ce forum, vous pouvez échanger vos expériences de réussite dans des situations désagréables ou même dangereuses. Vous y trouverez des histoires écrites et racontées.

Une stratégie de défense n’est pas limitée à quelques coups de karaté (ou de Seito Boei, tant qu’on y est) bien placés.

   </p>
        <p>
        Les petites astuces pour éviter la violence, les mots bien trouvés qui clouent le bec à l’agresseur, la fuite quand elle est possible, les façons dont on a pu trouver de l’aide, de la solidarité : </p> <p>Garance collectionne toutes ces petites richesses pour les partager, pour que chacune puisse en inspirer, et pour (re)prendre courage : les femmes sont parfois victimes de violence, mais <strong>elles ne sont pas démunies !</strong>
        </p>
        <p>
        <span><Link className="link" to="/ecrits">➢ des témoignages écrits</Link></span><br />
        <span><Link className="link" to="/audio">➢ des témoignages audios </Link></span> <br />
        <span>➢ un formulaire Témoignez ! pour vous permettre d’envoyer vos témoignages</span>   
        </p>
      </div>
    
        <Outlet />
        </MDBContainer>
    )
}
export default Echapees;



