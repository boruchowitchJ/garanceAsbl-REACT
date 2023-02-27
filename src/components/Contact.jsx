import React from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export const Contact= () =>  {
  return (
    <section className='container_pourvous'>
    <form >
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nom' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email ' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={10} label='Message' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Envoyer une copie du message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Envoyer
      </MDBBtn>
    </form></section>
  );
}
export default Contact;

