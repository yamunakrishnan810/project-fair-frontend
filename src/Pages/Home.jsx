import React from 'react'
import {Link} from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import Projectcard from '../Components/Projectcard'
 
function Home() {
  return (

    <div>

<div className="row">

    <div className="col-sm-6 ">
        <h1 className='text-center mt-5'>Project Fair</h1>
        <p className='mx-5' style={{textAlign:'justify'}}>Project Management is the application of specific knowledge, skills, methodologies, and techniques aimed at achieving specific and measurable project goals, including, ultimately, successful project completion. It differs from general “management” because project management relates directly to the goals and time-bound objectives achieved within the scope of a project itself, on a limited timeline, rather than an ongoing one.</p>
    
        <div className='text-center'>
           <Link to={'/login'} >
           
           <button  className='btn btn-dark mt-2 mb-5' >Get Started</button>

           </Link>
        </div>
    
    </div>
    <div className="col-sm-6">

         <img width={'100%'} src={programmer} alt="" />

    </div>
</div>

<div className="row">

<div style={{height:'500px'}} className="col-12">

    <h1 className='text-center m-5'>Explore Our Project</h1>
    <marquee width="100%"   direction="left" >
    <div>
        <Projectcard/>
    </div>
</marquee>
</div>

</div>

<div className="row mx-5 mb-5">
    <h1 className='text-center m-5'>Our Services</h1>

    <div  className="col-md-4">

      <div style={{height:'570px'}} className='card shadow p-5'>
    
       <h3  className='text-center m-2'>Web Designing</h3>
       <p style={{textAlign:'justify'}} > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laudantium nesciunt quasi reiciendis fugiat porro et temporibus! Doloribus esse, veritatis iste, voluptates explicabo blanditiis eius consequatur reiciendis laudantium aspernatur eos.
       Nesciunt excepturi modi quisquam nostrum officiis aut sed aperiam. Vitae atque aliquam cupiditate fugiat quae ab impedit ex quod facilis laboriosam esse voluptate, dolorem iusto dolore ea enim provident deleniti! </p>
      </div>

    </div>
    <div  className="col-md-4">
        
    <div style={{height:'570px'}} className='card shadow p-5'>
    
       <h3   className='text-center m-2'>Single page application</h3>
       <p style={{textAlign:'justify'}} > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laudantium nesciunt quasi reiciendis fugiat porro et temporibus! Doloribus esse, veritatis iste, voluptates explicabo blanditiis eius consequatur reiciendis laudantium aspernatur eos.
       Nesciunt excepturi modi quisquam nostrum officiis aut sed aperiam. Vitae atque aliquam cupiditate fugiat quae ab impedit ex quod facilis laboriosam esse voluptate, dolorem iusto dolore ea enim provident deleniti! </p>
      </div>

    </div>
    <div className="col-md-4">
 
    <div style={{height:'570px'}} className='card shadow p-5'>
    
    <h3  className='text-center m-2'>Backend Services</h3>
    <p style={{textAlign:'justify'}} > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laudantium nesciunt quasi reiciendis fugiat porro et temporibus! Doloribus esse, veritatis iste, voluptates explicabo blanditiis eius consequatur reiciendis laudantium aspernatur eos.
    Nesciunt excepturi modi quisquam nostrum officiis aut sed aperiam. Vitae atque aliquam cupiditate fugiat quae ab impedit ex quod facilis laboriosam esse voluptate, dolorem iusto dolore ea enim provident deleniti! </p>
   </div>

    </div>
</div>

</div>
  )
}

export default Home