import Multiplayer from "./TemoignagesAudio"

const TemoignagesAListe = () => {
    const TemoignagesAListe = [
        { id: 1, nom: "Vélo volé", description: `Posté le 29 juin 2011`, photo: "../../assets/images/equipe/EannRaymon.png" },
        { id: 2, nom: "10 Ans apres ", description: "Posté le 29 juin 2011", photo: "../../assets/images/equipe/NabilaBouaïssa.png" },
        { id: 3, nom: "Agressée par un commercant ", description: " Posté le 29 juin 2011", photo: "../../assets/images/equipe/IreneZeilinger.png" },
        { id: 4, nom: "Des excuses ou une griffe   ", description: "Posté le 18 septembre 2009", photo: "../../assets/images/equipe/LauraVauquois.png" },
        { id: 5, nom: "Drageurs/Agresseurs", description: "Posté le 18 septembre 2009", photo: "../../assets/images/equipe/HindAcil.png" },
        { id: 6, nom: "Glisser hors du pull", description: "Posté le 18 septembre 2009", photo: "../../assets/images/equipe/LauraChaumont.png" }


    ]

    return (
        <>
            <div class="container_fluid col-md-12  text-center">
                <h1 >Ta voix compte </h1>
                <div className="col-md-8">
                <div className="inner-holder col-md-6">
                    
                    <p>Elles vous racontent, sans mâcher leurs mots, comment elles s’en sont sorties de situations désagréables, voir dangereuses :<br />
                        Si vous voulez partager une expérience positive dont vous êtes fière avec d’autres femmes, contactez notre secrétariat pour prendre rendez-vous pour un enregistrement.</p>

                    <img
                        src="../assets/images/temoignagesaudios.jpg"
                        className="image18 col-md-6"
                        alt="comments" />
                </div>
                </div>

                <div class="container text-center col-md-6" style={{ height: "auto" }}>
                    <div class="row">
                        {TemoignagesAListe.map(e => <Multiplayer key={e.id} nom={e.nom} description={e.description} photo={e.photo} />)}
                    </div>
                </div>
            </div>


        </>
    )
}

export default TemoignagesAListe