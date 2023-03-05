
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";



const EquipeCard = (props)=> {
  const { nom, description, photo}= props;
return(
<>
<section class="col-md-1 my-5"></section>
    <section class="col-md-2 my-5">
    <main >        
         <section class="mx-auto my-5" style={{maxWidth: "23rem;"}}>
      
      <div class="card testimonial-card mt-2 mb-3">
        <div class="card-up aqua-gradient"></div>
        <div class="avatar mx-auto white">
          <img src={photo} class="rounded img-fluid"
            alt="woman avatar" style={{backgroundColor: "white"}}/>
        </div>
        <div class="card-body text-center">
          <h4 class="card-title font-weight-bold">{nom}</h4>
          
          <p >{description}</p>
        </div>
      </div>
      
    </section>          
        
    
  </main>
    
    </section>
    <section class="col-md-1 my-5"></section>
    </>
)

}
 export default EquipeCard