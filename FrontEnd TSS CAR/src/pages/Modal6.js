import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardLink
} from 'mdb-react-ui-kit';

export default function Modal6() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>View & Book</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>EV Lab</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <p>
                Available Timing: 9.00 am to 5.00 pm
              </p>
              <p>
                Available Days: Monday to Saturday
              </p>
              <h5>Lab Specification</h5>
              <h6>Equipment:  </h6> 
               <p>
               <ul>
                <li>Battery Simulator</li>
                <li>Programmable AC and DC Power supplies</li>
                <li>DC Fast Charger</li>
                <li>Memory HiLogger</li>
                <li>Spectrum Analyser</li>
                <li>Pico Oscilloscopes</li>
                <li>Function Generator</li>
                <li>DC power supply</li>
                <li>LCR meters, Multi Meters, Soldering Station</li>
                <li>Mixed Domain Oscilloscopes</li>
               </ul>
              </p>

              <h6>Works Done:  </h6> 
               <p>
               <ul>
                <li>UG projects</li>
               </ul>
              </p>

              <h6>Industries Interfaced:  </h6> 
               <p>
                <ul>
               <li>TVS Motors, Hosur</li>
               </ul>
              </p>

              <h6>People:  </h6> 
               <p>
                <ol>
                  <li>Dr.R.Medeswaran,Assistant Professor, EEE.</li>               
              </ol>
              </p>

              <p>Before booking do please check out available slots by clicking 'book' and then view available slots</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBCardLink href='http://localhost:3000/employeeeee'><MDBBtn >Book</MDBBtn></MDBCardLink>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}