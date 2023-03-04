import './Accueil.css'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashLink } from 'react-router-hash-link';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import * as mdb from 'mdb-ui-kit'
import { Input } from 'mdb-ui-kit'; // module
const Home = () => {
    return (
        <>
            {/* <!-- Carousel wrapper --> */}
            <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
                </ol>

                {/* <!-- Inner --> */}
                <div className="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active">
                        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center tittle_hero">
                                    <h1 className="mb-3" style={{ fontSize: "80px",padding: "5px" }}>J accepte la grande aventure d'être moi</h1>
                                    <h5 className="mb-4">-Simone de Bauvoir</h5>
                                    <HashLink className="btn  m-2 link" to="/#soutenir">Soutenir</HashLink>
                                    <HashLink className="btn  m-2 link" to="/#valeur">Valeur</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center">
                                    <section className="h-50">
                                        <MDBContainer className="my-5 h-100">
                                            <MDBRow className="justify-content-center align-items-center h-100">
                                                <MDBCol lg="9" xl="7">

                                                    <MDBCardBody className="p-5">

                                                        <figure className="mb-0 text-center tittle_hero">
                                                            <MDBTypography blockquote>
                                                                <p className="pb-3 ">
                                                                    <MDBIcon fas icon="quote-left text-primary" size="xs" />
                                                                    <span className="lead font-italic" >
                                                                        Un monde où chaque personne peut vivre en sécurité, sans violence ni discrimination, et réaliser tout son potentiel.
                                                                    </span>
                                                                    <MDBIcon fas icon="quote-right text-primary" size="xs" />
                                                                </p>
                                                            </MDBTypography>
                                                            <figcaption className="blockquote-footer mb-0">
                                                                Garance Asbl
                                                            </figcaption>
                                                        </figure>
                                                    </MDBCardBody>

                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item">
                        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} >
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white text-center tittle_hero">
                                    <h1 className="mb-3" style={{ fontSize: "80px",padding: "5px" }}>Ensemble Prevenons les Violences</h1>

                                    <HashLink className="btn  m-2 link" to="/ecrits">Témoignez</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <main className="mt-5">
                <div className="container">
                    {/* <!--Section: Content--> */}


                    <div className='mt-1 ' >
                        <section className='soutenir' id="soutenir">
                            <h1 className=" p-4 mb-3 text-uppercase text-center"> Nous soutenir</h1>
                            <div className="container mt-5">

                                <div className="row">

                                    <div className="col-md-6 mb-4">
                                        <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                            <img src="./assets/images/imgA5.jpg" className="img-fluid" />

                                            <div className="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>

                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <div className="p-4">
                                            <p>Ce que Garance a pu réaliser dans le passé a été possible grâce non seulement à l’engagement personnel de son équipe, mais aussi au soutien de la part de particuliers et d’institutions. Pour continuer, nous avons besoin de votre soutien !</p>
                                            <p>Investir dans Garance, c’est investir dans la sécurité de toutes et tous ! Vos dons à partir de EUR 40 sont déductibles des impôts. <br /> Vous pouvez verser votre don sur notre compte <br /><br />
                                                <ul>
                                                    <li>523-0802063-45, Banque Triodos</li>
                                                    <li>IBAN : BE44 5230 8020 6345</li>
                                                    <li>BIC : TRIOBEBB</li>
                                                    <li>Pour des raisons administratives, nous ne pouvons pas accepter des chèques. Pour plus de détails, le secrétariat de Garance est à votre disposition.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row d-flex justify-content-center">

                                    <div className="col-md-6 text-center">
                                        <h2 className="my-4 h4">Comment soutenir Garance ?</h2>
                                    </div>

                                </div>
                                <div className="row col-md-12">
                                    <section className='col-md-1'></section>
                                    <section className='col-md-5'>
                                        <div class="row  gx-lg-5">
                                       
                                            <div >
                                                <div>
                                                    <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                                                        <img src="./assets/images/imgA9.jpg" class="img-fluid" />
                                                        
                                                            <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                        
                                                    </div>
                                                    <p >
                                                        <h5 className='text-center'>Devenir Membre</h5>

                                                        <p>
                                                        Vous pouvez soutenir l’association en devenant membre. En tant que membre, vous vous engagez à payer une cotisation annuelle (EUR 15) et à assister aux deux assemblées générales par an. Vous serez ainsi au courant des plans pour l’avenir et vous pourrez contribuer à trouver des solutions aux problèmes que Garance rencontre.
                                                        </p>
                                                    </p>
                                                    <div  className='text-center'><HashLink className="btn link" to="/ecrits">Devenir membre</HashLink></div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section className='col-md-5'>
                                        <div class="row  gx-lg-5">
                                            <div >

                                                <div>

                                                    <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                                                        <img src="./assets/images/imgA10.jpg" class="img-fluid" />
                                                       
                                                            <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                                    </div>
                                                    <p >
                                                        <h5 className='text-center'>Etre benevolat</h5>

                                                        <p>
                                                        Vous pouvez soutenir Garance aussi en tant que volontaire. Nous cherchons des personnes qui veulent diffuser nos programmes dans des lieux publics comme des salles d’attente, qui nous donnent un coup de main lors d’événements plus importants ou encore qui souhaitent s’investir dans le domaine de l’animation, par exemple en tant qu’éducatrice paire.
                                                        </p>
                                                    </p><div  className='text-center'><HashLink className="btn link" to="/ecrits">Etre bénévole</HashLink></div>
                                                    
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </section>
                                    <section className='col-md-1'></section>

                                </div>
                                <hr className="my-5" />
                            </div>
                        </section>
                        {/* <!--Section: Content--> */}
                        <section className="text-center valeur" id="valeur">
                            <h1 className=" p-4 mb-3 text-uppercase text-center">VALEURS</h1>

                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                            <img src="./assets/images/imgA6.jpeg" className="img-fluid" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                            </a>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="text-center">NOS VALEURS</h5>
                                            <p className="card-text">
                                                <ul >
                                                    <li>Empouvoirment</li>
                                                    <li>Inclusivité</li>
                                                    <li>Solidarité</li>
                                                    <li>Participation</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                            <img src="./assets/images/imgA7.jpeg" className="img-fluid" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                            </a>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="text-center">NOS PRINCIPES</h5>
                                            <p className="card-text" >
                                                <ul  >
                                                    <li>Fiabilité</li>
                                                    <li>Redevabilité</li>
                                                    <li> Transparence</li>
                                                    <li>Intersectionnalité</li>                                            
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card">
                                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                            <img src="./assets/images/imgA8.jpeg" className="img-fluid" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                            </a>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className=" text-center">NOS OBJECTIFS </h5>
                                            <p >
                                                <ul>
                                                    <li> Renforcer le pouvoir et la sécurité des femmes </li>
                                                    <li> Agir politiquement pour la prévention primaire des violences de genre</li>
                                                    <li>Développer l’autodéfense féministe</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!--Section: Content--> */}

                        <hr className="my-5" />

                        {/* <!--Section: Content--> */}
                        <section className="mb-5">
                            <h4 className="mb-5 text-center"><strong>Merci</strong></h4>


                        </section>
                        {/* <!--Section: Content--> */}
                    </div>
                </div>
            </main></>



    )
}

export default Home;




