import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-8'>Sign Up</h1>
      <form  className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='p-3 border rounded-lg' id='username' />
        <input type="email" placeholder='email' className='p-3 border rounded-lg' id='email' />
        <input type="password" placeholder='password' className='p-3 border rounded-lg' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-center'>Already have an account? 
        <Link to={'/sign-up'}>
          <span className='text-blue-700 '>Sign in</span>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
