import React from "react";

function Controllers() {
  return (
    <div className="flex justify-center gap-[140px] mt-8">
      <div className="reload pt-5">
        <img src="./src/assets/retry.png" alt="" />
      </div>
      <div className="nav flex gap-11">
        <div className="left pt-1">
          <img src="./src/assets/leftArrow.png" alt="" />
        </div>
        <div className="count pt-5 font-inter font-bold text-blue-950 text-2xl">
            <h1>01/10</h1>
        </div>
        <div className="right pt-1">
          <img src="./src/assets/rightArrow.png" alt="" />
        </div>
      </div>
      <div className="square pt-5">
        <img src="./src/assets/square.png" alt="" />
      </div>
    </div>
  );
}

export default Controllers;
