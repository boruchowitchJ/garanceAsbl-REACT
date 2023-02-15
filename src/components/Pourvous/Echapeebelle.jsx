import './Pourvous.css';

const Echapees = () => {
    return (
        <div className="container_pourvous">
            <img className="image_18" src='../assets/images/femme2.png'alt="" />           
            
            <div className="containersmall"> 
            <h1> Echappées Belles</h1>
            <h2>L’autodéfense est tout ce qui rend nos vies plus sûres.</h2>
            </div>
            
            <div className="containersmall">
            <p>
                Dans ce forum, vous pouvez échanger vos expériences de réussite dans des situations désagréables ou même dangereuses. Vous y trouverez des histoires écrites et racontées.

                Une stratégie de défense n’est pas limitée à quelques coups de karaté (ou de Seito Boei, tant qu’on y est) bien placés.

                Les petites astuces pour éviter la violence, les mots bien trouvés qui clouent le bec à l’agresseur, la fuite quand elle est possible, les façons dont on a pu trouver de l’aide, de la solidarité : Garance collectionne toutes ces petites richesses pour les partager, pour que chacune puisse en nspirer, et pour (re)prendre courage : les femmes sont parfois victimes de violence, mais <strong>elles ne sont pas démunies !</strong></p>
            <ul className='list_echapee'>
                <li>➢ des témoignages écrits</li>
                <li>➢ des enregistrements sonores</li>
                <li>➢ un formulaire Témoignez ! pour vous permettre d’envoyer vos témoignages</li>
            </ul>
           </div>
        </div>
        
    )
}
export default Echapees;