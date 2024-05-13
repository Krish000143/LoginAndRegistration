import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

  

export default function Home() {
    const Navigate  = useNavigate();

    const callHomePage= async () => {
        try{
    
            const res = await fetch('http://localhost:3000/api/v1/', {
                 method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"  
                });
                const data = await res.json();
               // console.log(res.status, res.statusText, res.url);
            
           console.log(data);
    
           if(!res.status===200){
                const error = new Error(res.error);
                throw error;
            }
    
        }
        catch(err){
            console.log(err);
            //Navigate('/login');
        }
    
    }
    
     useEffect(() => {
    
        callHomePage();
    
    }, [])
    
    return (
        <div className="mx-auto w-full max-w-7xl">
            <form method='GET'>
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                    <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                            <h2 className="text-4xl font-bold sm:text-5xl">
                                <span className="hidden sm:block text-4xl">Welcome to Home Page</span>
                            </h2>

                            
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                        <img className="w-96" src="https://media.istockphoto.com/id/1413922045/vector/programming-at-home.jpg?s=612x612&w=0&k=20&c=_5UhZu0-etj-lWZorNUAkF_PEqXfHpuf44dCeWeCOvc=" alt="image1" />
                    </div>
                </aside>

                    <div className="grid  place-items-center sm:mt-20">
                        <img className="sm:w-96 w-48" src="src/assets/Team spirit-pana.png" alt="image2" />
                    </div>
            </form>   
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum</h1>
        </div>
        
    );
}