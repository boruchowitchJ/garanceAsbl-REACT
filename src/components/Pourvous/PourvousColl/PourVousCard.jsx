
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";



const PourVousCard = (props)=> {
  const { titre, description, affiche, lien}= props;
return(


    <section class="col-md-4 my-5">
    <main >        
          <div >
            <div class="card text-center">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src= {affiche} class="img-fluid" />
                <a href="#!">
                  <div class="mask" style={{backgroundcolor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">{titre}</h5>
                <p class="card-text">
                {description}
                </p>
                <Link to={lien} class="btn link">En savoir plus</Link>
              </div>
            </div>
          </div>
      
    
  </main>
    
    </section>
    
)

}
 export default PourVousCard