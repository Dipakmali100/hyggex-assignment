import React from 'react'

function Route() {
  return (
    <div className='flex gap-[9px] font-inter ml-[120px] pt-3 text-xl font-medium text-[#696969]'>
      <div className="home text-center">
        <img src="./src/assets/home.png" alt="" />
      </div>
      <div className="arrow pt-2">
        <img src="./src/assets/routeArrow.png" alt="" />
      </div>
      <div className="">
        <h1>Flashcard</h1>
      </div>
      <div className="arrow pt-2">
        <img src="./src/assets/routeArrow.png" alt="" />
      </div>
      <div className="">
        <h1>Mathematics</h1>
      </div>
      <div className="arrow pt-2">
        <img src="./src/assets/routeArrow.png" alt="" />
      </div>
      <div className=" font-bold text-blue-900">
        <h1>Relation and Function</h1>
      </div>
    </div>
  )
}

export default Route
