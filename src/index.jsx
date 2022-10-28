import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div> <h1>MY RESUM</h1>
  <b> Jamal uddin </b>
  <p>
    <b>Father Name: Noor uddin </b>
  </p>
  <p>
    <b>Date of birth: 10 08 2002</b>{" "}
  </p>
  <p>
    <b>Contact No: 03108017462</b>
  </p>
  <p>
    <b>Email: hasinkhan410@.com</b>
  </p>
  <p>
    <b>CNIC NO: 5430379455277</b>
  </p>
  <p>
    <b>Gender: Male</b>
  </p>
  <p>
    <b>Religion: ISLAM</b>
  </p>
  <p>
    <b>Nationality: Pakistan</b>
  </p>
  <p>
    <b>ADDRESS: House No 563 main PIB colony</b>
  </p>
  <h1>
    <hr />
    EDUCATION
  </h1>
  <p>
    <b>SCHOOL:</b>
  </p>
  <li> The world map english grammar high SCHOOL</li>
  <p>
    <b>COLLEGE: </b>
  </p>
  <li>punjab group of colleges </li>
  <p>
    <b> university </b>
  </p>
  <li> Fedral urdu university of arts and science </li>

  <h1>
    <hr />
    OBJECTIVE
  </h1>
  <p>
    <b>
      After completeing my university studies i want to attempt CSS
      examination in future{" "}
    </b>
  </p>
  <h1>
    <hr />
    INTREST
  </h1>
  <p>
    <b>
      <li> TRAVELLING</li>
    </b>
  </p>
  <p>
    <b>
      <li>WRITING</li>
    </b>
  </p>
  <p>
    <b>
      <li>SPORTS</li>
    </b>
  </p>
</div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'))