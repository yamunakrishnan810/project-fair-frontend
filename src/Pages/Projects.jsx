import React from 'react'
import Projectcard from '../Components/Projectcard'

function Projects() {
  return (
    <div>
      <h2  className='text-center m-5'>All projects</h2>
      <input style={{position:'relative', left:'300px'}} type="text" placeholder='Search By Technology' className='form-control w-50  m-5' />
      
     <div className="row">

     <div className="col  m-5 ">

      <Projectcard/>

     </div>

     </div>


    </div>
  )
}

export default Projects