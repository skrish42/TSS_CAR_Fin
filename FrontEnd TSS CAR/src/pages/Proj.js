import React from 'react';
import {MDBRow, MDBCol,MDBCardImage, MDBAccordionItem, MDBAccordion,MDBCardLink,MDBBtn,MDBTypography } from 'mdb-react-ui-kit';

export default function Proj() {
  return (
    <>
<h2 className='mt-5'>Welcome to Project Hub...</h2>
<h3 className='mb-5'>"Share Your Ideas, Join Your Projects"</h3>
<MDBRow evenly>
        <MDBCol size='6'>
            <MDBCardImage src='./images/x1.jpeg' 
            position='top' alt='...' height={510}/>
        </MDBCol>
        <MDBCol size='6'>
            <MDBCardImage src='./images/TSS1.jpg' 
            position='top' alt='...' height={510}/>
        </MDBCol>
    </MDBRow><br></br>
    <MDBRow evenly className='mb-5'>

        <MDBCol size='6'>
            <MDBCardImage src='./images/TSS2.jpg' 
            position='top' alt='...' />
        </MDBCol>
        <MDBCol size='6'>
            <MDBCardImage src='./images/TSS3.jpg' 
            position='top' alt='...' />
        </MDBCol>

    </MDBRow>

    <MDBAccordion alwaysOpen initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Why to post project?'>
        <strong>Choose between new and exising project !</strong> The user who wishes to contribute to a project which happens under a fculty or in a particular lab
        , can do it by proposing a new project idea which you want to start and work. Or you can choose an existing project by mentioning project ID
        and proposing your add-on idea. 
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='How to post my idea?'>
        <strong>No worries, when you have TSS CAR Project Hub</strong> you can apply for the project by clicking below <br></br>
        <MDBCardLink href='http://localhost:3000/employa'><MDBBtn >Contribute Project</MDBBtn></MDBCardLink>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='What the benefit of Project Hub?'>
        <strong>yeahh... there is lot more advantages than the OTT platform you subscribe !!!</strong> 
        By sharing your ideas and contributing for the projects, you will stand a chance to work with course faculty and industry people. 
        Making you to improve your skills and more details to add on to your resume. 
        All the best, Join now !!!
      </MDBAccordionItem>
    </MDBAccordion>

    </>
  );
}