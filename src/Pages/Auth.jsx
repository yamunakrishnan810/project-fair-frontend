import React from 'react'
import { Link } from 'react-router-dom'

function Auth({resgister}) {
  return (
    <div>

    <div className="row ">
      <div className="col-6 p-5 ">
      <img  style={{width:'600px', height:'500px'}}  src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif" alt="" />
      </div>

      <div className="col-6 p-5 ">

          <form className='shadow bg-black'> 


            <h2 className='text-center m-5'>Project Fair</h2>

              <h4 className='text-center p-2'>
              {

               resgister? 'Register here.......' : 'Login here.....'

              }

              </h4>


              <div className='mx-5 px-5 mt-3'>

                 {
                  resgister &&
                 
                   <input type="text" placeholder='username' className='form-control mb-2 ' />

                 }
                 <input type="email" placeholder='email' className='form-control mb-2 ' />
                 <input type="password" placeholder='Password' className='form-control  mb-2 ' />

              </div>

               <div>
                    {
                      resgister?
                      <div  className='text-center m-4' >
                        <button className='btn btn-dark m-4 text-light'  >REGISTER</button>
                        <p className='p-3'>Already registered ? <Link to={'/login'} >Login here...</Link> </p>
                      </div>
                      :
                      <div className='text-center m-4' >
                        <button className='bt btn-dark p-2 m-3 text-light'>LOGIN</button>
                        <p className='p-3'>New to here ? <Link to={'/register'} >Register here...</Link> </p>
                      </div>
                    }
               </div>

          </form>


      </div>
    </div>


    </div>
  )
}

export default Auth