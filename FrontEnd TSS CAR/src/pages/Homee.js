import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem, MDBContainer, MDBRow, MDBCol,  MDBIcon,
  MDBBtn,   MDBFooter
} from 'mdb-react-ui-kit';

export default function Homee() {
  return (
    <MDBContainer>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./images/x3.jpeg'
        alt='...'
        height={610}
      >
        <div className='kk'>
          <h5 className='k1'>TSS CAR</h5>
          <p>Welcome to TSS CAR Portal</p>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./images/x1.jpeg'
        alt='...'
        height={610}
      >
                <div className='kk'>
        <h5 className='k1'>Book</h5>
        <p >View lab equipment specification and Book your slot</p></div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./images/x2.jpeg'
        alt='...'
        height={610}
      >
        <div className='kk'>
        <h5  className='k1'>Blogs</h5>
        <p>Check out our blogs</p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>


<MDBRow evenly className='mt-5 p-3 square border border-dark-down'>
  <MDBCol size='5'>
  <img src='./images/TSS-CAR.jpg' className='img-fluid shadow-4' alt='...' width={600}/>
  </MDBCol>
  <MDBCol size='7'>
  <h2 className=' text-center  text-white bg-black'>TSS CAR Objective</h2>
  <div className="fs-5">
      
      <ul>
          <li>Provide infrastructure for hands on experience (academic projects and collegiate events) in automotive product engineering in an interdisciplinary and  collaborative environment
</li>
          <li>Enable implementation of CDIO (Conceive – Design – Implement – Operate) curriculum as a member of the consortium
</li>
          <li>Enable faculty to take up Consulting projects with industry and carry out Academic research
</li>
      </ul>
      </div>
    
  </MDBCol>
</MDBRow>

<MDBRow evenly className='mt-5 text-center text-white bg-black'>
<h1>Our Services</h1>
</MDBRow>


<MDBRow evenly className='mt-5'>

  <MDBCol size='4'>
  <img src='./images/conference.jpg' className='img-fluid shadow-4' alt='...' width={500}/>
  </MDBCol>
  <MDBCol size='8'>
  <h3 className='text-center'>Halls</h3>
  <div className="mt-5 fs-4">Book the conference and have seamless meeting... Conference halls available for teaching lectures</div>
    
  </MDBCol>
</MDBRow>

<MDBRow evenly className='mt-5'>
  <MDBCol size='8'>
  <h3 className=' text-center'>Labs</h3>
  <div className="mt-5 fs-4">Book the lab and make use of equipment in your slot time efficienly... Laboratory available for performing experiments</div> 
  </MDBCol>

  <MDBCol size='4'>
  <img src='./images/lab.jpg' className='img-fluid shadow-4' alt='...' width={500}/>
    <img src="" alt="" />
  </MDBCol>
</MDBRow>

<MDBRow evenly className='mt-5'>

<MDBCol size='4'>
  <img src='./images/class.jpg' className='img-fluid shadow-4' alt='...' width={500}/>
    <img src="" alt="" />
  </MDBCol>
  <MDBCol size='8'>
  <h3 className=' text-center'>Classes</h3>
  <div className="mt-5 fs-4">Time for new age learning with use of smart classes... Fix and conform your class schedule</div> 
  </MDBCol>


</MDBRow>

<hr/>

<h1 className='mt-5 text-center  text-white bg-black'>Equipment Gallery</h1>
 <MDBRow evenly className='m-5'>
        <MDBCol size='4'>
        <img src='./images/equip.jpeg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip2.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip3.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
      </MDBRow>

      <MDBRow evenly className='m-5'>
        <MDBCol size='4'>
        <img src='./images/equip4.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip5.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip6.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
      </MDBRow>

      <MDBRow evenly className='m-5'>
        <MDBCol size='4'>
        <img src='./images/equip7.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip8.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
        <MDBCol size='4'>
        <img src='./images/equip9.jpg' className='img-fluid shadow-4' alt='...' width={400}/>
        </MDBCol>
      </MDBRow>

      <MDBRow evenly className='mt-5 text-center text-white bg-black'>
    <h1>Locate Us Here</h1>
    </MDBRow>
    <iframe className='mt-3' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=T%20S%20Srinivasan%20Centre%20Thiruparankundram+(TSS%20CAR)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/TheOfficialTCEPage' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/tceofficialpage' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://tce.edu' role='button'>
            <MDBIcon fab icon='chrome' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/tce_madurai/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/tcemadurai' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/ThiagarajarCollegeofEngineeringTCE' role='button'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='www.tce.edu'>
          TSS CAR
        </a>
      </div>
    </MDBFooter>

</MDBContainer>
  );
}