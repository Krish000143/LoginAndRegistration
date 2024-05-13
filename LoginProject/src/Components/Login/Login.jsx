import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../auth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const eye = <FontAwesomeIcon icon={faEye} />;

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {storeTokenInls} = useAuth();

  
 const [passwordShown, setPasswordShown] = useState(false);
 const togglePasswordVisiblity = () => {
 setPasswordShown(passwordShown ? false : true);
};

  const loginUser = async (e) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);

    const res = await fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    
    const data = await res.json();
    console.log(data);
    
    if (res.ok) {
      toast.success("Login Successfull!!", {
        position: "top-center",
        theme: "colored"
      });
      storeTokenInls(data.token);

      // setTimeout(() => {
        // }, 6000);
        
          navigate("/");
    } 
    else {    
      toast.error("Login Failed!!", {
        position: "top-center",
        theme: "colored"
      });
    }
 
  }


  return (
    <>
    
    <form>
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className=" overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <form method='POST' className="p-6 flex flex-col justify-center">
                          <div className='ml-16'>
                          
                          <h1 className='text-4xl mt-14  text-black font-semibold '>Login</h1>
                          <h3 className='text-lg mt-7  text-black font-semibold'>If you have don't have account register</h3>
                          <h3 className='text-lg mt-3  text-black font-semibold'> You can &nbsp; 
                          <Link to="/registration" className='text-indigo-600 font-semibold'>Register Here !</Link>
                          </h3>
                          <p className='text-base mt-7  text-black font-medium'>Email</p>
                            
                          </div>
               
                          <div className=" ml-16 relative flex h-11 w-80 min-w-[200px]  ">
                          <MdOutlineEmail className='text-3xl mt-3 mr-3' />
                            <input 
                            type='email' 
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                            required/>
                          
                          </div>
          
                          <p className='text-base mt-7 ml-16 text-black font-medium'>Password</p>
                            
                            <div className="ml-16 relative flex h-11 w-80 min-w-[200px]  ">
                            <SlLock className='text-3xl mt-3 mr-3' />
                              
                              <input 
                              
                              name="password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                              type={passwordShown ? "text" : "password"}
                              placeholder="Enter your password"
                              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                              required/>
                             <i onClick={togglePasswordVisiblity} className='mt-3 cursor-pointer'>{eye}</i>{" "}
                            </div>
                            <br></br>
                      
                            <div className='flex justify-center items-start '>
                            
                            <div className='flex justify-center items-center'>
                             
                                <div className="inline-flex items-center">
                                <label
                                  className="relative flex cursor-pointer items-center rounded-full p-3"
                                  for="login"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    id="login"
                                    type="checkbox"
                                    className=" before:content[''] peer relative h-5 w-5 cursor-pointer appearance-auto rounded-2xl border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-800 checked:bg-indigo-800 checked:before:bg-indigo-800 hover:before:opacity-10"
                                  />
          
                                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-3.5 w-3.5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="1"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </div>
                                </label>
          
                                <label
                                  className="cursor-pointer select-none font-normal text-black"
                                  for="login"
                                >
                                  Remember Me
                                </label>
                           
                                
                                      <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">
                                       <Link
                                       to="#"
                                       className="text-blue-600 dark:text-blue-500 hover:underline"
                                       >
                                       Forgot password ?
                                       </Link> 
                                        
                                        </label>
                                
                                </div>
                               
                              </div>
          
                            </div>
                            
                            <br></br>
                            <br></br>
                            <div className='flex justify-center items-center'>
                              <button 
                              type='submit' 
                              className=' shadow-2xl py-2 w-96 bg-indigo-700 rounded-3xl text-white border-none'
                              onClick={loginUser}>Login</button> 
                            
                            </div>
                            <br></br>
                            <br></br>
                            <p className=' text-base flex justify-center text-black'>or continue with</p>
                            <br></br>
            
                            <div className='flex justify-center items-center gap-5 '>
            
                              <a href='#'><FcGoogle className='text-3xl '/></a>
                              <a href='#'><FaFacebook  className='text-3xl ' /></a>
                            
            
                            </div>
          
                        
                        </form>
                        
                        <div className='flex justify-center items-center'>
                            <img src='src\assets\Computer login-rafiki.png' alt='' className=''></img>

                        </div>
                        <ToastContainer />
                        
                    </div>
                </div>
            </div>
        </div>
     
                
     </form>
    </>
  )
}
