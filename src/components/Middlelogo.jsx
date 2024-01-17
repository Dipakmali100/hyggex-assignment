import React from 'react'

function Middlelogo() {
  return (
    <div className='flex justify-between mt-[50px]'>
      <div className="logo2 ml-[100px]">
        <img src="./src/assets/logo2.png" alt="" />
      </div>
      <div className="create flex mr-[120px] mt-9">
        <div className="plus mr-4">
            <img src="./src/assets/plus.png" alt="" />
        </div>
        <div className="font-inter font-bold text-3xl mt-[6px] bg-clip-text text-transparent bg-gradient-to-b from-[#002163] to-[#6c9bff]">
            <h1>Create Flashcard</h1>
        </div>
      </div>
    </div>
  )
}

export default Middlelogo
