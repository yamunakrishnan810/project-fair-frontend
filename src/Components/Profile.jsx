import React from 'react'
import Swal from 'sweetalert2'

function Profile() {

const updateuser =()=>{

  Swal.fire({
    title: 'success!',
    text: 'User details Updated ',
    icon: 'success',
    confirmButtonText: 'Back'
  })

}

  return (
    <div>
      <div className='text-center m-5'>
        <h3>My Profle</h3>
        <label> 
        <input type="file" style={{display:'none'}} />
          <img  style={{padding:'10px'}} width={'250px'} height={'250px'} src="https://www.flowcode.co.uk/images/fc9-portal-upgr-user.png" alt="" />
        </label>
        
        <div  className='mx-5 px-5'>
        <input type="text" placeholder='Name' className='form-control mb-2' />
        <input type="text" placeholder='Github' className='form-control mb-2' />
        <input type="text" placeholder='Live link' className='form-control mb-2' />
        <button  onClick={updateuser} className='m-4 p-2 btn btn-dark'>Update</button>
        </div>
        
      </div>
    </div>
  )
}

export default Profile