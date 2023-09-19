import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardFooter
} from 'mdb-react-ui-kit';

export default function Pricing() {
  return (
    <>
    <h3 className='mt-3 text-center'>Quick Announcements</h3>
    <br></br>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
      <MDBCard shadow='0' border='danger' background='white' className='mb-3'>
        <MDBCardHeader>Expt Report</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Submit your expt report today</MDBCardTitle>
          <MDBCardText>
            batch who did expt in Product build yesterday are required to submit report today
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard shadow='0' border='danger' background='white' className='mb-3'>
        <MDBCardHeader>Attendance</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>EV lab attendance</MDBCardTitle>
          <MDBCardText>
            Certain student who have low attendance in EV lab need to meet faculty today.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard shadow='0' border='danger' background='white' className='mb-3'>
        <MDBCardHeader>Quiz</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Expt 3 in Build Lab</MDBCardTitle>
          <MDBCardText>
            Students need to finish quiz of expt 3 within 6pm today.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>

    <h3 className='mt-5 text-center'>Upcoming Events</h3>
    <br></br>
    <MDBRow>
      <MDBCol>
      <MDBCard background='dark' className='text-white'>
        <MDBCardHeader>Expt</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Regarding the expt completion</MDBCardTitle>
          <MDBCardText>
            Fill your slot and finish your expt 10 in EV lab. Update the same with faculty.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard background='dark' className='text-white'>
        <MDBCardHeader>Change</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Change in required in data</MDBCardTitle>
          <MDBCardText>
             The tabulation value of expt 9 value has been updated and request students to update it.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard background='dark' className='text-white'>
        <MDBCardHeader>Report</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Reporting of students</MDBCardTitle>
          <MDBCardText>
           Students of Mech dept are requested to assemble in Product Reliability lab tomorrow.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>



      </MDBRow>

    <h3 className='mt-5 text-center'>Quick Blogs</h3>
    <br></br>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-5'>

      <MDBCol md='6'>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/arc.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>The process variables involved in electric arc welding processes.</MDBCardTitle>
            <MDBCardText>
            Arc Welding
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'> Posted by Mr. Krishna, 7.00 pm, Nov 11, 2022 </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>

      <MDBCol  md='6'>
        <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/tensile.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Tensile properties of a composite material by conducting tensile test</MDBCardTitle>
            <MDBCardText>
              Tensile Testing
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'> Posted by Mrs. Akshaya, 6.30 pm, Nov 11, 2022 </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>

      <MDBCol  md='6'>
       <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/spring.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Determination of the rigidity modulus of the compression and tension spring by conducting spring test. </MDBCardTitle>
            <MDBCardText>
              Strength of Materials - Spring Testing
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'> Posted by Mr. Pravin, 11.00 am, Nov 11, 2022 </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>
      
      <MDBCol  md='6'>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/utm.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>The Young‟s Modulus of Steel by conducting tension test in UTM.</MDBCardTitle>
            <MDBCardText>
              Tension Testing
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Posted by Mr. Rahul , 11.30 pm, Nov 10, 2022</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>

      <MDBCol  md='6'>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/castiron.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>The microstructure of the given cast iron specimen</MDBCardTitle>
            <MDBCardText>
              Materials Engineering
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Posted by Mr. Naveen, 9.00 pm, Nov 10, 2022</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>

      <MDBCol  md='6'>
      <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='./images/sand.jpeg' style={{height:'200px' , width:"180px"}} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Determination of strength of the moulding sand</MDBCardTitle>
            <MDBCardText>
              Tensile Strength Test
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Posted by Mr. Deepak, 7.00 pm, Nov 10, 2022</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  );
}