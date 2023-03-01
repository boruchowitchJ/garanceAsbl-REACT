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
                                <div className="text-white text-center">
                                    <h1 className="mb-3"style={{fontsize: "80px"}}>J accepte la grande aventure d'être moi</h1>
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

                                                        <figure className="mb-0 text-center">
                                                            <MDBTypography blockquote>
                                                                <p className="pb-3">
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
                                <div className="text-white text-center">
                                    <h1>Ensemble Prevenons les Violences</h1>

                                    <HashLink className="btn  m-2 link" to="/Comments#temoigner">Témoignez</HashLink>
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


                    <div className='mt-1' id="soutenir">
                    <h1 className=" p-4 mb-3"> Nous soutenir</h1>
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
                                        
                                        <p className="lead">
                                            <span className="me-1">
                                                <del>$200</del>
                                            </span>
                                            <span>$100</span>
                                        </p>

                                        <strong><p style={{fontsize: "20px"}}>Description</p></strong>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

                                        <form className="d-flex justify-content-left">

                                            <div className="form-outline me-1" style={{width: "100px"}}>
                                                <input type="number" value="1" className="form-control" />
                                            </div>
                                            <button className="btn btn-primary ms-1" type="submit">
                                                Add to cart
                                                <i className="fas fa-shopping-cart ms-1"></i>
                                            </button>
                                        </form>
                                    </div>

                                </div>

                            </div>


                            <hr />


                            <div className="row d-flex justify-content-center">

                                <div className="col-md-6 text-center">
                                    <h4 className="my-4 h4">Additional information</h4>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                                </div>

                            </div>


                            <div className="row">

                                <div className="col-lg-4 col-md-12 mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
                                </div>



                                <div className="col-lg-4 col-md-6 mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
                                </div>



                                <div className="col-lg-4 col-md-6 mb-4">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
                                </div>

                            </div>

                        </div> 
                        <hr className="my-5" />
                    </div>
                    {/* <!--Section: Content--> */}
                    <section className="text-center mt-2" id="valeur">
                        <h1 className="mb-5"><strong>VALEURS</strong></h1>

                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4">
                                <div className="card">
                                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img src="./assets/images/imgA6.jpeg" className="img-fluid" />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">NOS VALEURS</h5>
                                        <p className="card-text">
                                            <ul >
                                                <li>Empouvoirment</li>
                                                <li>Inclusivité</li>
                                                <li>Solidarité</li>
                                                <li>Participation</li>
                                            </ul>



                                        </p>
                                        <a href="#!" className="btn btn-primary">En savoir plus</a>
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
                                    <div className="card-body">
                                        <h5 className="card-title">NOS PRINCIPES</h5>
                                        <p className="card-text" >
                                            <ul >
                                                <li>Empouvoirment</li>
                                                <li>Inclusivité</li>
                                                <li>Solidarité</li>
                                                <li>Participation</li>
                                            </ul>
                                        </p>
                                        <a href="#!" className="btn btn-primary">Button</a>
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
                                    <div className="card-body">
                                        <h5 className="card-title">NOS OBJECTIFS </h5>
                                        <p className="">
                                            <ul  >
                                                <li> Renforcer le pouvoir et la sécurité des femmes </li>
                                                <li> Agir politiquement pour la prévention primaire des violences de genre</li>
                                                <li>Développer l’autodéfense féministe</li>

                                            </ul>
                                        </p>
                                        <a href="#!" className="btn btn-primary">Button</a>
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
            </main></>



    )
}

export default Home;



