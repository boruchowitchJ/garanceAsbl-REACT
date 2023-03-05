import EquipeCard from "./EquipeCard"

const EquipeList = () => {
  const equipeliste = [
    { id: 1, nom: "Eann Raymon", description: `est notre office manager,collaboratrice sur le projet « Cyberautodéfense » et anime aussi des formations.`, photo: "../../assets/images/equipe/EannRaymon.png" },
    { id: 2, nom: "Nabila Bouaïssa ", description: "assure le secrétariat, gère nos finances et fait la comptabilité. Elle anime aussi des formations.", photo: "../../assets/images/equipe/NabilaBouaïssa.png" },
    { id: 3, nom: "Irene Zeilinger ", description: " est collaboratrice sur le projet « Garance International », représente Garance dans divers plateformes et anime des formations.", photo: "../../assets/images/equipe/IreneZeilinger.png"},
    { id: 4, nom: "Laura Vauquois  ", description: "est collaboratrice sur le projet « Femmes migrantes, actrices de leur sécurité ».", photo: "../../assets/images/equipe/LauraVauquois.png"},
    { id: 5, nom: "Hind Acil", description: "est collaboratrice sur le projet « Autodéfense pour filles ». Elle est aussi formatrice.", photo: "../../assets/images/equipe/HindAcil.png" },
    { id: 6, nom: "Laura Chaumont", description: "est collaboratrice sur les projets « Espaces Publics » et « Enfants CAPables ». Elle anime des formations pour femmes, filles et enfants.", photo:"../../assets/images/equipe/LauraChaumont.png" },
    { id: 7, nom: "Dorothée Van Avermaet ", description: `est collaboratrice sur le projet « Femmes vivant avec un handicap intellectuel, actrices de leur sécurité, « No means No» et  «Système drapeaux»" Elle anime aussi des formations pour femmes.`, photo: "../../assets/images/equipe/DorothéeVanAvermaet.png" },
    { id: 8, nom: "Sophie Pereira ", description: " est la coordinatrice de Garance.", photo: "../../assets/images/equipe/SophiePereira.png" },

    { id: 9, nom: "Teresa Iglesias Lopez ", description: "est collaboratrice sur les projets « Espaces publics » et accessibilité accessibilité des femmes* en situation de handicap au programme de la prévention primaire. ", photo: "../../assets/images/equipe/TeresaIglesiasLopez.png"},
    { id: 10, nom: "Jennifer Fileccia", description: "est chargée de communication et collaboratrice sur le projet accessibilité des femmes* en situation de handicap au programme de la prévention primaire.", photo: "../../assets/images/equipe/JenniferFileccia.png" },

  ]

  return (
    <>
      <div class="container text-center">
        <h1>L’ÉQUIPE GARANCE</h1>
        <p>
          Si vous cherchez à organiser une formation, contactez le secrétariat de Garance.

          L’équipe de Garance est constituée de travailleuses et de volontaires qui assurent le secrétariat, le conseil d’administration et les animations :</p>
      </div>
    
      <div class="container_fluid text-center" style={{ height: "auto" }}>
        <div class="row">
          {equipeliste.map(e => <EquipeCard key={e.id} nom={e.nom} description={e.description} photo={e.photo} lien={e.lien} />)}
        </div>
      </div>
      


    </>
  )
}

export default EquipeList;

// Le Conseil d’administration de l’association est composé de quatre membres :

// Laura Chaumont, Anne Lemonne, Khadija Kourcha et Patricia Mélotte