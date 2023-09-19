import React from 'react';
import { MDBContainer, MDBRow, MDBCol,  MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardImage} from 'mdb-react-ui-kit';

import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';
import Modal7 from './Modal7';


export default function About() {
    
  return (
    <MDBContainer className='overflow-hidden'>
        <h1>Booking</h1>
      <MDBRow className='gy-4'>

        <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
                <div className="d-flex align-items-center justify-content-center">
                    <MDBCardHeader>Halls</MDBCardHeader>
                </div>
                <MDBCardImage src='./images/conference.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Halls</MDBCardTitle></div>
                        <MDBCardText>
                            Time to attend your meetings & reviews in a new environment
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal1 />
                    </div>
                </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>

        <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
                <div className="d-flex align-items-center justify-content-center">
                    <MDBCardHeader>Class Rooms</MDBCardHeader>
                </div>
                <MDBCardImage src='./images/class.jpg' position='top' alt='...' />
                <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Class Rooms</MDBCardTitle></div>
                        <MDBCardText>
                            Taking learning beyond the four walls.. Experience lively education
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal7 />
                    </div>
                </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>


    

        <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
            <div className="d-flex align-items-center justify-content-center">
                    <MDBCardHeader>Display Centre</MDBCardHeader>
                </div>
            <MDBCardImage src='https://th-i.thgim.com/public/news/cities/Madurai/2d622h/article30115652.ece/alternates/FREE_1200/29NOVTH--TVS' position='top' alt='...' />
            <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Display Centre</MDBCardTitle></div>
                        <MDBCardText>
                            Get ready to see many perspective and views !
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal2 />
                    </div>
            </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol><br></br>

      </MDBRow>

      <MDBRow className='gy-6'>

      <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
            <div className="d-flex align-items-center justify-content-center">
                <MDBCardHeader>Lab</MDBCardHeader>
            </div>
            <MDBCardImage src='https://pbs.twimg.com/media/EKmcpJXUYAAjZyu?format=jpg&name=large' position='top' alt='...' />
            <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Product Reliability lab</MDBCardTitle></div>
                        <MDBCardText>
                         Centre Incharge: Mr. M. Karthic APME
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal3/>
                    </div>
            </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>

      <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
            <div className="d-flex align-items-center justify-content-center">
                <MDBCardHeader>Lab</MDBCardHeader>
            </div>
            <MDBCardImage src='https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-07/Mech-Product-Engineering-lab.jpg.webp?itok=g5nsAAjj' position='top' alt='...' />
            <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Product Engineering Laboratory</MDBCardTitle></div>
                        <MDBCardText>
                         Centre Incharge: Mr.C.Vignesh APME
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal4/>
                    </div>
            </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>

        <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
            <div className="d-flex align-items-center justify-content-center">
                <MDBCardHeader>Lab</MDBCardHeader>
            </div>
                <MDBCardImage src='https://www.tce.edu/sites/default/files/styles/large/public/2021-12/Explore_TCE-3.jpeg.webp?itok=BGK60wQ5' position='top' alt='...' />
                <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Product Build lab</MDBCardTitle></div>
                        <MDBCardText>
                        Centre Incharge: Dr. M.Balamurali APME
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal5/>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>

        <MDBCol size='6'>
            <div className='p-3'>
            <MDBCard>
            <div className="d-flex align-items-center justify-content-center">
                <MDBCardHeader>Lab</MDBCardHeader>
            </div>
            <MDBCardImage src='https://www.tce.edu/sites/default/files/styles/height_600_700/public/2022-07/Mech-ELECTRIC-VEHICLES-LAB.jpg.webp?itok=J-Ck5fhu' position='top' alt='...' />
            <MDBCardBody>
                    <div className="d-flex align-items-center justify-content-center">

                        <MDBCardTitle>Electric Vehicles Lab</MDBCardTitle></div>
                        <MDBCardText>
                        Centre Incharge : Dr.G.Sivasankar  APEEE
                        </MDBCardText>
                    <div className="d-flex align-items-center justify-content-center">
                        <Modal6/>
                    </div>
            </MDBCardBody>
            </MDBCard>
            </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}