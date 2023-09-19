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

export default function Modal1() {
  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <>
      <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>View & Book</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Halls</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Capacity: 100 Students
              </p>
              <p>
                Available Timing: 10.00 am to 5.00 pm
              </p>
              <p>
                Available Days: Monday to Saturday
              </p>
              <p>Before booking do please check out available slots by clicking 'book' and then view available slots</p>

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
              <MDBCardLink href='http://localhost:3000/employeeeeee'><MDBBtn >Book</MDBBtn></MDBCardLink>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}