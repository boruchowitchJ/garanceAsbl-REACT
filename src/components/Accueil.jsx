import './Accueil.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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
            <div id="introCarousel" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
                </ol>

                {/* <!-- Inner --> */}
                <div class="carousel-inner">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active">
                        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div class="text-white text-center">
                                    <h1 class="mb-3">J accepte la grande aventure d'être moi</h1>
                                    <h5 class="mb-4">-Simone de Bauvoir</h5>
                                    <a class="btn  m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                                        role="button" rel="nofollow" target="_blank">Plus jamais seule</a>
                                    <a class="btn  m-2" href="https://mdbootstrap.com/docs/standard/"
                                        target="_blank" role="button">Prenez la parole</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item">
                        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div class="text-white text-center">
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
                    <div class="carousel-item">
                        <div class="mask" >
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div class="text-white text-center">
                                    <h2>Ensemble Prevenons les Violences</h2>
                                    <a class="btn  m-2" href="https://mdbootstrap.com/docs/standard/"
                                        target="_blank" role="button">Prenez la parole</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <main class="mt-5">
                <div class="container">
                    {/* <!--Section: Content--> */}

                    
                    <section className='mt-1'>
                        <div class="row">
                            <div class="col-md-6 gx-5 mb-4">
                                <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                    <img src="./assets/images/imgA5.jpg" class="img-fluid" />
                                    <a href="#!">
                                        <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-6 gx-5 mb-4">
                                <h4><strong>Facilis consequatur eligendi</strong></h4>
                                <p class="text-muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                                    eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                                    sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                                </p>
                                <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
                                <p class="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                                    nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                                    alias, unde optio accusantium soluta, iusto molestiae adipisci et?
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Content--> */}

                    <hr class="my-5" />

                    {/* <!--Section: Content--> */}
                    <section class="text-center">
                        <h1 class="mb-5"><strong>VALEURS</strong></h1>

                        <div class="row">
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="card">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
                                        <a href="#!">
                                            <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">NOS VALEURS</h5>
                                        <p class="card-text">
                                            <ul>
                                                <li>Empouvoirment</li>
                                                <li>Inclusivité</li>
                                                <li>Solidarité</li>
                                                <li>Participation</li>
                                            </ul>     
    
    
    
                                        </p>
                                        <a href="#!" class="btn btn-primary">En savoir plus</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
                                        <a href="#!">
                                            <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">NOS PRINCIPES</h5>
                                        <p >
                                        <ul class="card-text">
                                                <li>Empouvoirment</li>
                                                <li>Inclusivité</li>
                                                <li>Solidarité</li>
                                                <li>Participation</li>
                                            </ul>  
                                        </p>
                                        <a href="#!" class="btn btn-primary">Button</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card">
                                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
                                        <a href="#!">
                                            <div class="mask" style={{ backgroundcolor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">NOS OBJECTIFS </h5>
                                        <p class="card-text">
                                            Some quick example text to build on the card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#!" class="btn btn-primary">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Content--> */}

                    <hr class="my-5" />

                    {/* <!--Section: Content--> */}
                    <section class="mb-5">
                        <h4 class="mb-5 text-center"><strong>Facilis consequatur eligendi</strong></h4>


                    </section>
                    {/* <!--Section: Content--> */}
                </div>
            </main></>



    )
}

export default Home;



