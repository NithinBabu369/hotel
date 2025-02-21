'use client'

import React, { useState } from 'react'
import  bg from '../../public/background3.jpg'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function signin() {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [warning,setWarning]= useState(false)
  
  async function handleSubmit(event){
    event.preventDefault()
    try {
      const response= await signIn('credentials',{email: email,password: password})
      if(response.ok){
        console.log(sucess)
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.log("error=",error)
      
    }
  }
  
  // function handleChange(event){
  //   setUsername(event.target.value)

  // }
  return (
    <div>
      
<section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-indigo-600 relative hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <Image src='/background3.jpg' width={3} height={5} alt="" className="w-full h-full object-cover"/>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input value={email} onChange={(event)=>setEmail(event.target.value)}type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input value={password} onChange={(event)=>setPassword(event.target.value)}type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>
        {warning && <p className='text-red-500'>password must have 8 characters</p>}

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button onClick={handleSubmit} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr className="my-6 border-gray-300 w-full"/>

      <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
           
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</a></p>


    </div>
  </div>

</section>
    </div>
  )
}

export default signin
