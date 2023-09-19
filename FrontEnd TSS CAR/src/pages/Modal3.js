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

export default function Modal3() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>View & Book</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Product reliability lab</MDBModalTitle>
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
                <li>Electro dynamic shaker</li>
                <li>Transient type Engine Dynamometer</li>
                <li>Universal Testing Machine</li>
                <li>Sound level meter</li>
                <li>AC Generator Test Rig</li>
                <li>Electronic Load with Voltage and Current Probe</li>
               </ul>
              </p>

              <h6>Works Done:  </h6> 
               <p>
                <ul>
               <li>Internship for Under graduate students</li>
               <li>Material Testing of test specimen given by M/s Sundaram Industries Private Limited.</li>
               </ul>
              </p>

              <h6>Industries Interfaced:  </h6> 
               <p>
                <ul>
               <li>TVS Sensing Solutions Pvt Ltd, Madurai</li>
               <li>Sundaram Industries Private Limited, Madurai</li>
               </ul>
              </p>

              <h6>People:  </h6> 
               <p>
                <ol>
                  <li>Dr.B. Karthikeyan/APME</li>               
                  <li>Dr.A. Samuel Raja/APME</li>
                  <li>Mr.M.M.Devarajan/APMCT</li>
                  <li>Mr.M.Karthic/APME</li>
                  <li>Mr.K.Saravanakumar/ Diesel Mechanic</li>
              </ol>
              </p>

              <p>Before booking do please check out available slots by clicking 'book' and then view available slots</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBCardLink href='http://localhost:3000/employee'><MDBBtn >Book</MDBBtn></MDBCardLink>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}