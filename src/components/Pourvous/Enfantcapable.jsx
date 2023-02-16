import { Outlet, Link } from "react-router-dom";
import './Pourvous.css'


const Enfantcapable= () => {
  return (
    <div className="container_pourvous">
        <h1> Enfant Capable </h1>
        
        {/* <img className="image_18" src='../assets/images/18.jpg'alt="" /> */}
        <div className="containersmall" >
          
  <h2>Clés pour l’Autonomie et la Prévention</h2> 

<p>Une proportion significative d’enfants vit de la violence, parfois grave, qui peut nuire à leur développement et accroître leur vulnérabilité à l’âge adulte. Nous ne sommes pas à côté de nos enfants 24h sur 24, c’est pourquoi il est primordial de les munir d’outils concrets pour faire face à d’éventuelles agressions, qu’elles soient verbales, physiques ou sexuelles. Les adultes en contact avec des enfants ont également besoin d’outils pour pouvoir les soutenir dans ces situations.

Garance est pionnière en Belgique dans la diffusion du programme CAP (Child Assault Prevention), créé il y a 40 ans et utilisé aujourd’hui dans une vingtaine de pays.

Enfants CAPables se base sur une approche pédagogique triple, incluant des ateliers pour les parents, le personnel scolaire et les enfants. De cette façon, des messages de prévention cohérents sont diffusés à ces trois groupes et peuvent se renforcer mutuellement. Ces ateliers sont dispensés au sein de l’école primaire. Le programme a pour objectif d’informer et de sensibiliser, mais surtout d’accroître la confiance en soi et les ressources personnelles et collectives, chez les enfants comme chez les adultes.

Les adultes reçoivent des informations sur les violences envers les enfants et leur cadre légal. Ils.elles apprennent également à :

   <ul>
    <li>communiquer avec les enfants sur la sécurité</li>
    <li>reconnaître les signes physiques, émotionnels, psychologiques et sociaux chez un enfant potentiellement victime de violences</li>
    <li>accueillir un.e enfant qui veut se confier à un.e adulte</li>
    </ul> 
    
    

L’atelier pour les enfants a pour but de leur permettre :

    d’identifier les situations dangereuses, telles que l’intimidation entre enfants ou les agressions par des adultes inconnu.e.s ou proches, sans augmenter leur peur
    d’apprendre des stratégies pour faire face à ces situations : poser ses limites, se mettre en sécurité, chercher de l’aide, communiquer avec un.e adulte de confiance, ainsi que quelques notions d’autodéfense
    d’être solidaires vis-à-vis des autres enfants potentiellement victimes d’agression

Le message clé est que chaque enfant a le droit de se sentir fort/e, libre et en sécurité. Si quelqu’un.e lui enlève un de ces droits, l’enfant peut dire non, résister ou chercher de l’aide. Nous illustrons par des jeux de rôles, adaptés à leur âge, les situations les plus fréquentes de violences envers les enfants. L’enfant n’est à aucun moment mis.e dans une situation négative ou anxiogène et toutes les situations trouvent un dénouement positif.

Si vous voulez bénéficier de ce programme dans votre école ou dans l’école de votre enfant, n’hésitez pas à contacter le secrétariat de Garance. </p>

<div className="capable"><img className="image_logo_evras" src='../assets/images/label_evras.jpg'alt="" /><p>Enfants CAPables porte le label « EVRAS Jeunesse » et est subventionné par la Fédération Wallonie-Bruxelles et par la COCOF.</p></div></div>
        <Outlet />
    </div>
)
  };
  
  export default Enfantcapable;
  