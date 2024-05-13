import React, { useState } from 'react'
import { MdOutlineEmail, MdPerson  } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import {Link} from 'react-router-dom' 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../auth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


function App() {
  const eye = <FontAwesomeIcon icon={faEye} />;
  
 const navigate = useNavigate();
 const {storeTokenInls} = useAuth(); 
 const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
};
const [passwordShown2, setPasswordShown2] = useState(false);
const togglePasswordVisiblity2 = () => {
  setPasswordShown2(passwordShown2 ? false : true);
};
  const [user, setUser] = useState({
    
    username:"",
    email:"",
    password:"",
    cpassword:""
  });

 
  const handleInput = async (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
    console.log("User Input Data:", user);
  }
  
  


const PostData = async (e) => {
  e.preventDefault();

  const { username, email, password, cpassword } = user; // Destructure user object
  

  if (!user.username || !user.email || !user.password || !user.cpassword) {
    toast.error("Please fill in all required fields!!", {
          position: "top-center",
          theme: "colored"
        });

  
  }else{

    if (password === cpassword) {
      const res = await fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        username, email, password 
      })
    });
    const data = await res.json();

   console.log(data,"data");

   storeTokenInls(data.token);
   
    if(data.status === 200){
      
      toast.success("Registration Successfull!!", {
        position: "top-center",
        theme: "colored"
      });

      // Redirect to login page after a delay to allow the user to see the success message
      setTimeout(() => {
        navigate('/login');
      }, 6000);
      
       
    }
    else{
      toast.error("Registration Failed!!", {
        position: "top-center",
        theme: "colored"
      });

    }
    
    
  } else {
    toast.error("Password and Confirm password do not match", {
      position: "top-center",
      theme: "colored"
    });
  }
 }
}


  return (
    <>
    <form>
     <div className="relative flex items-top justify-center bg-white sm:items-center sm:pt-0">
            <div className=" mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className=' p-5 justify-center items-center '>
            
            <h1 className='text-4xl text-black font-semibold '>Sign In</h1>
           <h3 className='text-lg mt-7  text-black font-semibold'>If you have don't have account</h3>
           <h3 className='text-lg mt-3  text-black font-semibold'> You can &nbsp;
           <Link to="/Login" className='text-indigo-600 font-semibold'>Login Here !</Link>
           </h3>


           <p className='text-base mt-7  text-black font-medium'>Username</p>
             
             <div class="relative flex h-11 w-80 min-w-[200px]  ">
             <MdPerson className='text-3xl mt-3 mr-3' />
               <input 
               type='text' 
               name="username"
               value={user.username}
               onChange={handleInput}
               id="fname"
               placeholder="Enter your name"
               className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
               required
               
               />
             
             </div>

           <p className='text-base mt-7  text-black font-medium'>Email</p>
             
           <div className="relative flex h-11 w-80 min-w-[200px]  ">
           <MdOutlineEmail className='text-3xl mt-3 mr-3' />
            
             <input 
             type='email' 
             name="email"
             value={user.email}
               onChange={handleInput}
             placeholder="Enter your email address"
             id="email"
             className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
             required 
             />
           
           </div>

           <p className='text-base mt-7  text-black font-medium'>Password</p>
             
             <div className="relative flex h-11 w-80 min-w-[200px]  ">
             <SlLock className='text-3xl mt-3 mr-3' />
               
               <input 
               
               name="password"
               value={user.password}
               onChange={handleInput}
               type={passwordShown ? "text" : "password"}
               placeholder="Enter your password"
               className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
               required
               />
              <i onClick={togglePasswordVisiblity} className='mt-3 cursor-pointer'>{eye}</i>{" "}
             </div>

             <p className='text-base mt-7  text-black font-medium'>Confirm Password</p>
             
             <div className="relative flex h-11 w-80 min-w-[200px]  ">
             <SlLock className='text-3xl mt-3 mr-3' />

               <input 
               type={passwordShown2 ? "text" : "password"} 
               name="cpassword"
               value={user.cpassword}
               onChange={handleInput}
               placeholder="Enter your password"
               className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
               required
               />
              <i onClick={togglePasswordVisiblity2} className='mt-3 cursor-pointer'>{eye}</i>{" "}
             </div>
             <br></br>
       
            
             <br></br>
             <button 
             type='submit' 
             className=' shadow-2xl w-96 py-2 bg-indigo-700 rounded-3xl text-white outline-none'
             onClick={PostData} 
             >Register</button> 
           
         </div>

                <div className='flex justify-center items-center'>

                            <img src='src\assets\Computer login-rafiki.png' alt='' className='h-96 w-96' ></img>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer />
    </form>
  </>
  )
}

export default App


