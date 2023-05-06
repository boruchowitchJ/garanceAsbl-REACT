import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React from "react";
const EquipeCard = (props) => {
  const { nom, description, photo } = props;
  return (
    <section class="col-md-3 my-5">
      <main>
        <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
          <div
            class="card testimonial-card mt-2 mb-3"
            style={{
              marginTop: "-80px",
              height: "450px",
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropfilter: "blur(30px)",
            }}
          >
            <div class="card-up "></div>
            <div
              class=" mx-auto white"
              style={{ width: "40%", marginTop: "-50px" }}
            >
              <img src={photo} class="rounded img-fluid" alt="woman avatar" />
            </div>
            <div class="card-body text-center">
              <h4 class="card-title font-weight-bold">{nom}</h4>

              <p>{description}</p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};
export default EquipeCard;
