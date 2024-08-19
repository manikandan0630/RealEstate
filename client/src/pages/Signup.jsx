import React from 'react'
import {Link} from "react-router-dom"
export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='my-7 text-3xl text-center font-semibold'>
      Signup
      </h1>
      <form className='flex flex-col gap-4 '>
        <input type="text"  id="username" placeholder='username' className='border p-3 rounded-lg'/>
        <input type="email"  id="email" placeholder='email' className='border p-3 rounded-lg'/>
        <input type="password"  id="username" placeholder='password' className='border p-3 rounded-lg'/>
        <button className='bg-sky-400 text-white p-3 rounded-lg  hover:opacity-95'>SIGN UP</button>
      </form>
      <div className='flex gap-1 mt-5 '>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
        
        <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
