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

export default function Modal5() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>View & Book</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Product build lab</MDBModalTitle>
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
              <h6>Hardware:  </h6> 
               <p>
               <ul>
                <li>Rapid Prototyping Machines</li>
                <li>ACE - CNC Turning Centre</li>
                <li>AMS - CNC Machining Centre</li>
                <li>Fronius - Intelligent MIG and TIG Welding Machine</li>
                <li>Hydraulic Press</li>
                <li>CNC Tube Bending Machine</li>
               </ul>
              </p>

              <h6>Capabilities:  </h6> 
               <p>
               <ul>
                <li>Creating 3D prototype using Rapid prototyping</li>
                <li>Performing 2 axis tube bending</li>
                <li>Fabricating products using intelligent MIG & TIG Welding</li>
                <li>Machining of parts using CNC milling & turning center</li>
                <li>Forming sheet Metal parts</li>
                <li>Simulating Arc Welding</li>
               </ul>
              </p>

              <h6>Works done:  </h6> 
               <p>
               <ul>
                <li>Prototype for Thiagarajar Telekom Solutions Limited</li>
                <li>Prototype of traverse guide bend rod for MRS Engineering</li>
                <li>Prediction weld quality using machine learning algorithm for TIG/MIG</li>
                <li>Control of weld penetration for TIG /MIG</li>
                <li>Prototype of swing arm bend rod for MRS Engineering.</li>
                <li>Prototype of Jupiter Handle bar for students</li>
               </ul>
               </p>

              <h6>Industries Interfaced:  </h6> 
               <p>
                <ul>
               <li>TVS Motor Company</li>
               <li>TAFE</li>
               <li>TTSL</li>
               </ul>
              </p>

              <h6>People:  </h6> 
               <p>
                <ol>
                  <li>Dr.M.Balamurali - Centre Head TSS CAR</li>               
                  <li>Dr.C.Paramasivam - PME</li>
                  <li>Mr.M.Karthic - APME</li>
                  <li>Mr.S.Rajkumar - APME</li>
                  <li>Mr.K Saravanakumar - Lab Supervisor</li>
                  <li>Mr.G.Rajapandyan - CNC operator</li>
              </ol>
              </p>

              <p>Before booking do please check out available slots by clicking 'book' and then view available slots</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBCardLink href='http://localhost:3000/employeeee'><MDBBtn >Book</MDBBtn></MDBCardLink>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}