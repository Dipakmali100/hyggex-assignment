import React from 'react';

function header() {
  return (
    <div className='flex justify-between m-[40px]'>
      <div className="ml-[80px] w-[191px] h-[39px]">
        <img src="./src/assets/logo.jpg" alt="" />
      </div>
      <div className="flex gap-[50px] text-xl mr-10 font-inter">
        <div className="flex gap-[2.75rem] pt-2  text-gray-700">
            <h1>Home</h1>
            <h1>Flashcard</h1>
            <h1>Contact</h1>
            <h1>FAQ</h1>
        </div>
        <div className="flex justify-center align-middle text-white w-[140px] h-[50px] pt-[10px] rounded-3xl mr-10 bg-gradient-to-b from-blue-950 to-blue-600">
            <h1>Login</h1>
        </div>
      </div>
    </div>
  )
}

export default header
