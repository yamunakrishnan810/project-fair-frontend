import React from 'react'

import Profile from '../Components/Profile'
import Myproject from '../Components/Myproject'



function Dashboard() {
  return (
    <div>

     <div className="row">

      <h2 className='text-center mt-3'>Welcome <span className='text-light' >User</span> </h2>

      <div className="col">

        <Myproject/>

      </div>
      <div className="col">

      <Profile/>

      </div>
     </div>


    </div>
  )
}

export default Dashboard