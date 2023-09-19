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

export default function Modal4() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>View & Book</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Product Engineering Laboratory</MDBModalTitle>
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
                <li>10 Number - Workstation</li>
                <li>1 Number – Desktop Computer</li>
               </ul>
              </p>

              <h6>Licensed Software:  </h6> 
               <p>
               <ul>
                <li>COMSOL Multiphysics 5.4</li>
                <li>Creo 6.0 (Commercial & Academic)</li>
                <li>Forming suite professional</li>
               </ul>
              </p>

              <h6>Works Done:  </h6> 
               <p>
                <ul>
               <li>COMSOL Multiphysics 5.5 – To perform the finite element structural and thermal analysis of Mechanical & Electrical components</li>
               <li>Creo 6.0 (Commercial & Academic) – To perform 3D Modelling for Mechanical & Electrical components</li>
               <li>Team promethean (All-terrain vehicle event) project work has been carried out using COMSOL Multiphysics software.</li>
               <li>Forming suite professional (Commercial) – To perform the optimization of process parameter in sheet metal components.</li>
               </ul>
              </p>

              <h6>Consultancy Projects:  </h6> 
               <p>
               <ul>
                <li>Trail work has been done with M/s. Thiagarajar Telekom Solutions Private limited.</li>
                <li>Sundaram Industries Private Limited, Madurai</li>
               </ul>
              </p>

              <h6>Industries Interfaced:  </h6> 
               <p>
                <ul>
               <li>TVS Sensing Solutions Pvt Ltd, Madurai</li>
               <li>M/s. Venus Home Appliances Pvt Ltd</li>
               <li>M/s. Siemens</li>
               </ul>
              </p>

              <h6>People:  </h6> 
               <p>
                <ol>
                  <li>Mr. C. Vignesh, APME, TCE</li>               
                  <li>Mr. C. Selva Kumar, APME, TCE</li>
              </ol>
              </p>

              <p>Before booking do please check out available slots by clicking 'book' and then view available slots</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBCardLink href='http://localhost:3000/employeee'><MDBBtn >Book</MDBBtn></MDBCardLink>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}