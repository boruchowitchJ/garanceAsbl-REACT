import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,MDBRow, MDBCol,MDBTextArea
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export const Contact= () =>  {
  return (
    <section className='container_pourvous'>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>


    <MDBRow className='w-100'>
      <MDBCol lg='7' className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.018585641561!2d4.3639529999999995!3d50.8493401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c37e6f3067a1%3A0x655c6fbbdbc22d1f!2sRue%20Royale%2055%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1677590450638!5m2!1sfr!2sbe'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
      <MDBCol lg='5' className='my-4 d-flex align-items-center'>
        <div>
          <h6>This map is embedded in a 6 column layout</h6>
          <p>
            Try to resize your browser window - you will see that it starts to take up 12 columns on screens
            smaller than 992px.
          </p>
          <p>
            This useful feature helps to make your embedded map responsive (<strong>mobile friendly</strong>).
            You can customize responsive behavior with the use of{' '}
            <a href='https://mdbootstrap.com/docs/react/layout/breakpoints/'>breakpoints</a>.
          </p>
          <p>
            This text looks so nice because it's <strong>vertically centered</strong> you can achieve this
            effect using the{' '}
            <a href='https://mdbootstrap.com/docs/react/layout/vertical-alignment/'>vertical alignment</a>{' '}
            layout option.
          </p>
        </div>
      </MDBCol>
    </MDBRow>
    </section>
  );
}
export default Contact;



