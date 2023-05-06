import PourVousCard from "./PourVousCard";
import ScrollAnimation from "react-animate-on-scroll";
const PourVousList = () => {
  const pourvousliste = [
    {
      id: 1,
      titre: "Echappée Belle",
      description: "L’autodéfense est tout ce qui rend nos vies plus sûres.",
      affiche: "../../assets/images/femme3.jpg",
      lien: "/echappesbelles#echappe",
    },
    {
      id: 2,
      titre: "Garance Femme ",
      description: "être plus zen dans toutes les circonstances de la vie",
      affiche: "../../assets/images/femme.jpg ",
      lien: "/GaranceFemme#femme",
    },
    {
      id: 3,
      titre: "Garance Homme ",
      description:
        "Garance mène une réflexion sur la prévention des violences chez les hommes",
      affiche: "../../assets/images/homme.jpg ",
      lien: "/GaranceHomme#homme",
    },
    {
      id: 4,
      titre: "Garance +55 ",
      description: "Vous pouvez être actrice de votre sécurité",
      affiche: "../../assets/images/55+.jpg ",
      lien: "/Garance55#55",
    },
    {
      id: 5,
      titre: "Garance -18 ",
      description: "Garance contribue à les rendre moins vulnérables !",
      affiche: "../../assets/images/18.jpg ",
      lien: "/Garance18#18",
    },
    {
      id: 5,
      titre: "Garance Pro ",
      description: "Prevenir des violences est professionnelle incontournable",
      affiche: "../../assets/images/pro.jpg ",
      lien: "/GarancePro#pro",
    },
  ];

  return (
    <>
      {/* <div class="hero-image-pourvous">
        <div
          class="mask"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.0)" }}
        ></div>
      </div> */}

      <section class="grainy-gradient-intro">
        <svg height="0" width="0">
          <filter id="f">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
          </filter>
        </svg>

        <ScrollAnimation animateIn="fadeInLeft">
          <div
            class="container"
            style={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div class="row">
              {pourvousliste.map((p) => (
                <PourVousCard
                  key={p.id}
                  titre={p.titre}
                  description={p.description}
                  affiche={p.affiche}
                  lien={p.lien}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default PourVousList;
