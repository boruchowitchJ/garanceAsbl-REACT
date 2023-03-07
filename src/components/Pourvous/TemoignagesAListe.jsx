import Multiplayer from "./TemoignagesAudio"

const TemoignagesAListe = () => {
    const TemoignagesAListe = [
        { id: 1, nom: "Vélo volé", description: `Posté le 29 juin 2011`, photo: "../assets/audios/velo_vole.mp3" },
        { id: 2, nom: "10 Ans apres ", description: "Posté le 29 juin 2011", photo: "../assets/audios/10_ans_apres_la_violence_conjugale.mp3" },
        { id: 3, nom: "Agressée par un commercant ", description: " Posté le 29 juin 2011", photo: "../assets/audios/Agressee_par_un_commercant.mp3" },
        { id: 4, nom: "Des excuses ou une griffe   ", description: "Posté le 18 septembre 2009", photo: "../assets/audios/des_excuses_ou_une_griffe.mp3" },
        { id: 5, nom: "Drageurs/Agresseurs", description: "Posté le 18 septembre 2009", photo: "../assets/audios/Dragueur_agresseur.mp3" },
        { id: 6, nom: "Glisser hors du pull", description: "Posté le 18 septembre 2009", photo: "../assets/audios/glissee_hors_du_pull.mp3" }


    ]

    return (
        <>
           <div class="container_fluid py-4">
      <div class="row g-0 align-items-center" style={{ marginTop:"-8%"}}>
       <div class="col-lg-3 "></div>
        <div class="col-lg-4 mb-5 mb-lg-0 cascading-right"> <img
          src="../assets/images/temoignagesaudios.jpg" class="w-100 rounded-4 shadow-4"
          alt="" aria-controls="#picker-editor" /> </div>
        <div class="col-lg-3 mb-5 mb-lg-0">
          <div class="card "
            style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropfilter: "blur(30px); " }}>
            <div class="card-body px-4 pb-5 pt-md-0 px-md-5 shadow-5">
              <h1 class="my-5 display-4 fw-bold ls-tight"> <span style={{color:"#e02965"}}>Ta voix compte</span> <br /> <span
                 style={{color:"#F8CD42"}}></span> </h1>
                <p>Elles vous racontent, sans mâcher leurs mots, comment elles s’en sont sorties de situations désagréables, voir dangereuses :<br />
                        Si vous voulez partager une expérience positive dont vous êtes fière avec d’autres femmes, contactez notre secrétariat pour prendre rendez-vous pour un enregistrement.</p>
              </div>
          </div>
        </div>
      </div>

    </div>

    <div class="container">
                    <div class="row">
                        {TemoignagesAListe.map(e => <Multiplayer key={e.id} nom={e.nom} description={e.description} photo={e.photo} />)}
                    </div>
                </div>
           


        </>
    )
}

export default TemoignagesAListe


