import React, { useState } from "react";

function Box() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="main">
      <div className="maincontainer">
        <div className={`boxcontainer ${isClicked ? 'clicked' : ''} flex justify-center text-center mt-9 `} onClick={handleClick}>
          <div className="div1 w-[712px] h-[393px] bg-blue-900 rounded-[50px] bg-gradient-to-bl from-[#071A92] via-[#124CBF] to-[#2182EE] cursor-pointer">
            <div className="flex justify-between">
              <div className="mt-10 ml-12">
                <img src="./src/assets/light.png" alt="hint logo" />
              </div>
              <div className="mt-10 mr-12">
                <img src="./src/assets/volume.png" alt="" />
              </div>
            </div>
            <div className="mt-[110px] text-[40px] font-bold text-white font-lato tracking-wide">
              <h1>9 + 6 + 7x - 2x - 3</h1>
            </div>
          </div>

          <div className="div2 w-[712px] h-[393px] bg-blue-900 rounded-[50px] bg-gradient-to-bl from-[#0A204D] via-[#20638E] to-[#2F88B6] cursor-pointer">
            <div className="flex justify-between">
              <div className="mt-10 ml-12">
                <img src="./src/assets/light.png" alt="hint logo" />
              </div>
              <div className="mt-10 mr-12">
                <img src="./src/assets/volume.png" alt="" />
              </div>
            </div>
            <div className="mt-[110px] text-[40px] font-bold text-white font-lato tracking-wide">
              <h1>5x + 12</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
