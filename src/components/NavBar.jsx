import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
       <> <header>
            <img className="logoNav" id='NavBar' src='./assets/images/garancelogo.png' alt='logo'></img>
            <p className='slogan'>Ensemble prévenons les violences</p>
            <nav className='NavBar'>
                <ul className='list_nav'>
                    <li><Link to="/">Accueil</Link></li>
                    
                    <li className="deroulant"><Link to="/pourvous">Pour vous</Link>
                        <ul className='sous'>
                            <li><Link to="/echappesbelles">Echapees Belles</Link></li>
                            <li><Link to="/GaranceFemme ">Garance Femme </Link></li>
                            <li><Link to="/GaranceHomme  ">Garance Homme </Link> </li>
                            <li><Link to="/Garance55  ">Garance +55  </Link></li>
                            <li><Link to="/Garance18 ">Garance -18 </Link></li>
                            <li><Link to="/GarancePro">Garance Pro</Link></li>
                        </ul>
                    </li>
                    <li className="deroulant"><Link to="/QuisommeNous">Qui sommes Nous?</Link>
                        <ul className='sous'>
                            <li><Link to="/Histoire">Histoire</Link></li>
                            <li><Link to="/Positionnement">Positionnement</Link></li>
                            <li><Link to="/Reseau">Reseau</Link></li>
                            <li><Link to="/Statut">Statut</Link> </li>
                            <li><Link to="/Partenariat">Partenariat</Link></li>
                        </ul>
                    </li>
                    <li  className="deroulant"><a href="#">Activités</a>
                        <ul className='sous'>
                            <li><a href="#">Agenda</a> </li>
                            <li><a href="#">Modalité d inscription</a> </li>
                            <li><a href="#">Plan d'acces</a> </li>
                            <li><a href="#">FAQ</a> </li>
                        </ul>
                    </li>
                    <li className="deroulant"><Link to="/TrouverAide">Trouver de l'aide</Link>
                        <ul className='sous'>
                            <li><Link to="/ViolencesConjugales">Violence Conjugale</Link> </li>
                            <li><Link to="/ViolencesSexuelles#ancreViolencesSexuelles">Violence sexuelle</Link> </li>
                            <li><Link to="/AutresTypesViolences#ancreAutresViolences">Autres type de violence</Link> </li>
                            <li><Link to="/AidePsychoSociale#ancreAidePsychoSociale">Aide psycho-sociale</Link> </li>
                        </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
            </nav>
            
        </header>
        <Outlet />
        </>
    )

}

export default Nav;