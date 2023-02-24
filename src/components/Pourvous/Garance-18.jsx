import { Outlet, Link } from "react-router-dom";
import './Pourvous.css'


const Garance18 = () => {
  return (
    <div className="container_pourvous">
      <h1> Garance -18 </h1>

      <img className="image_18" src='../assets/images/18.jpg' alt="" />
      <div className="containersmall" >

        <p>
          Les jeunes et les enfants peuvent devenir victimes de violence - <strong>Garance contribue à les rendre moins vulnérables !</strong></p>

        <p>Notre programme <Link className="link" to="/enfantcapable">Enfant Capable</Link>  s’adresse aux écoles primaires. Nous travaillons avec les enfants, le personnel scolaire et les parents à la fois pour renforcer les messages de prévention.

          Parce que les filles et les garçons courent des risques différents, Garance propose des activités spécifiques :<br />

          <Link className="link" to="/Filles">Les Filles</Link> apprennent à reconnaître des signaux d’alarme, à chercher de l’aide auprès d’adultes et à poser et protéger leurs limites de manière non équivoque, verbalement et physiquement.<br />

          <Link className="link" to="/Garcons">Chez les garçons</Link>, Garance met plus d’accent sur la gestion et l’expression des émotions et la capacité de refuser la provocation. Mais bien sûr, des techniques de défense verbale et physique sont également au rendez-vous.</p>
      </div>
      <Outlet />
    </div>
  )
};

export default Garance18;
