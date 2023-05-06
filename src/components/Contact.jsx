import React from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBIcon,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

export const Contact = () => {
  return (
    <section
      className="container_pourvous"
      style={{
        marginTop: "15%",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "10%",
        flexWrap: "wrap",
      }}
    >
      <MDBRow
        className="w-100"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <MDBCol lg="7" className="my-4">
          <iframe
            title="carte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.018585641561!2d4.3639529999999995!3d50.8493401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c37e6f3067a1%3A0x655c6fbbdbc22d1f!2sRue%20Royale%2055%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1677590450638!5m2!1sfr!2sbe"
            className="w-100"
            height="400"
            loading="lazy"
          ></iframe>
        </MDBCol>
        <form id="form" className="text-center" style={{ maxWidth: "300px" }}>
          <h2>Contact us</h2>

          <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

          <MDBInput
            type="email"
            label="Email address"
            v-model="email"
            wrapperClass="mb-4"
          />

          <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />

          <MDBTextArea wrapperClass="mb-4" label="Message" />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center"
            label="Send me copy"
          />

          <MDBBtn color="primary" block className="my-4">
            Send
          </MDBBtn>
        </form>

        <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
          <p>
            <MDBIcon icon="home" className="me-2" />
            Rue Royale 55, 1000 Bruxelles
          </p>
          <p>
            <MDBIcon icon="envelope" className="me-3" />
            info@garance.be
          </p>
          <p>
            <MDBIcon icon="phone" className="me-3" /> +32 2 216 61 16
          </p>
          <p>
            <MDBIcon icon="fa-solid fa-money-check" className="me-3" /> BE44
            5230 8020 6345
          </p>
        </MDBCol>
      </MDBRow>
    </section>
  );
};
export default Contact;
