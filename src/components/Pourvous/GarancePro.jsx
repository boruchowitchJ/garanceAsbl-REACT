import { MDBContainer } from 'mdb-react-ui-kit';

const Garancepro = () => {
  return (<>
    <div
    className='p-5 text-center bg-image'
    style={{ backgroundImage: "url('../assets/images/pro.jpg')", height: "70vh", marginTop:-100, backgroundPositionY:"60%" }}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      
    </div>
  </div>
  <section class="grainy-gradient-intro">
  <svg height="0" width="0">
    <filter id='f'>
      <feTurbulence type='fractalNoise' baseFrequency='.5' />
    </filter>
  </svg>

    <MDBContainer className="container_pourvous col-md-6 " style={{marginTop: "-5%" }}>
        <h1>  Garance Pro </h1>
        
        <div className="containersmall" >
          
        <p>
        Les violences marquent aussi le contexte du travail. C’est pourquoi Garance a développé un programme de formations pour les professionnel/le/s, que ce soit dans le monde associatif, l’enseignement, le secteur de santé ou encore la police. Car la prévention des violences est une compétence professionnelle incontournable.
</p>
       <p>Garance se base sur votre expérience pour renforcer votre expertise. Pour le moment, Garance propose : <br /><br />
<span>➢ Prévenir les violences : au travail, on rencontre souvent des situations d’agression, de la part de client/e/s, de collègues ou du grand public. Vous pouvez garder votre calme et agir avant que les choses ne s’enveniment !

</span><br />
<span>➢ L’état du stress post-traumatique (PTSD) : Des victimes de violences souffrent de divers symptômes, parfois des années après les faits. Il s’agit de reconnaître ces symptômes, d’adapter l’intervention aux besoins de la victime et de pouvoir la réorienter vers les services les plus compétents.

</span><br />
<span>➢ Rendre l’autonomie aux victimes d’infraction (RAVI) : C’est une tâche complexe de donner des conseils de sécurité à des victimes d’infraction sans les culpabiliser. Voici des réponses !

</span><br />
<span>➢ Le système des drapeaux : Réagir aux comportements sexuels des enfants et des jeunes n’est pas toujours évident. Cette méthode vous permettra d’évaluer des situations à teneur sexuelle et d’y réagir avec la bonne mesure.

</span><br /><br />
Vous pouvez participer au programme de formations de Garance ou encore mettre en place une formation au sein de votre organisation.

Garance met également à disposition ses formatrices pour intervenir auprès du public de différentes associations et services.

Si vous voulez organiser une activité pour votre public, contactez le secrétariat de Garance.
 </p>
        </div>
        
    </MDBContainer>
    </section></>
)
  };
  
  export default Garancepro ;



  








