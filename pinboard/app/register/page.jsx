"use client";
import React, { useState } from 'react';


const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,SetPassword] = useState("");
    const[image,setImage]=useState("");
    const[imagePreview,setImagePreview]=useState("");

    return (
        <>
            <div className='min-h-screen flex justify-center items-center bg-gray-100 fix top-0 left-0 w-full'>
                <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
                    <div className='flex justify-center mb-4'>
                        <img
                            src="logoo.jpg" alt="Pinterest Svg" height={150} width={150} className="w-42 h-32 mx-auto"
                        />
                    </div>

                    <h2 className='text-center text-xl font-semibold mb-1'>
                        Wellcome to PinBoard 
                    </h2>
                    <p className='text-center text-grey-500 mb-6'>
                        Find new ideas to try
                    </p>
                    <input type="text" placeholder="Username" className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2
                     focus:ring-blue-500" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    
                    <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2
                     focus:ring-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)} />
                   
                    <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2
                     focus:ring-blue-500" value={password} onChange={(e)=>SetPassword(e.target.value)} />
               <div>
                <img src={imagePreview ? imagePreview :"/avatar.png"} alt='User Avatar' width={100} height={100} className='w-12 h-12 rounded-full' />
                <label   className={`${imagePreview ? "bg-green-600" : "bg-gray-600"} w-full text-white px-4 py-2 rounded cursor-pointer`} >
                    Choose Avatar
                    <input type='text' className='hidden'/>
                </label>
               </div>
               
                </div>
            </div>
        </>

    )

}

export default Register