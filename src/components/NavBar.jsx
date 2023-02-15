import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
       <> <header>
            <div><img className="logoNav" src='./assets/images/garancelogo.png'></img></div>
            <nav className='NavBar'>
                <ul className='list_nav'>
                    <li><Link to="/">Accueil</Link></li>
                    <li className="deroulant"><a href="#">Pour vous</a>
                        <ul className='sous'>
                            <li><Link to="/echappesbelles">Echapees Belles</Link>
                              {/* <ul className="">
                                <li><a href="#">Echapees belles</a></li>
                                <li> <a href="#">Echapees belles</a></li>
                                <li><a href="#">Echapees belles</a></li>
                              </ul> */}
                            </li>
                            <li><Link to="/GaranceFemme ">GaranceFemme </Link>
                            {/* <ul className="">
                                <li><a href="#">Echapees belles</a></li>
                                <li> <a href="#">Echapees belles</a></li>
                                <li><a href="#">Echapees belles</a></li>
                              </ul> */}
                            </li>
                            <li><Link to="/GaranceHomme  ">GaranceHomme </Link>
                            {/* <ul className="">
                                <li><a href="#">Echapees belles</a></li>
                                <li> <a href="#">Echapees belles</a></li>
                                <li><a href="#">Echapees belles</a></li>
                              </ul> */}
                              </li>
                            <li><Link to="/Garance55  ">Garance +55  </Link></li>
                            <li><Link to="/Garance18 ">Garance -18 </Link></li>
                            <li><Link to="/GarancePro">GarancePro</Link></li>
                        </ul>
                    </li>
                    <li className="deroulant"><Link to="/QuisommeNous">QuisommeNous</Link>
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
                    <li className="deroulant"><a href="#">Trouver de l'aide</a>
                        <ul className='sous'>
                            <li><a href="#">Violence Conjugale</a> </li>
                            <li><a href="#">Violence sexuelle</a> </li>
                            <li><a href="#">Autres type de violence</a> </li>
                            <li><a href="#">Aide psycho-sociale</a> </li>
                        </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
            </nav>
            
        </header>
        <Outlet /></>
    )

}

export default Nav;