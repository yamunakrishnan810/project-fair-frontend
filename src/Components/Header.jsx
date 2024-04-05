import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { GiLaptop } from "react-icons/gi";
  



function Header() {
  return (
    <div>
<MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='text-light fs-3' href='/'>
          <GiLaptop className='text-light fs-1 m-2' />
            Project fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header