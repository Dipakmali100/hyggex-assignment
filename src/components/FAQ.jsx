import React, { useState } from "react";

function FAQ() {
    const [faqState, setFaqState] = useState({
        bool1: false,
        bool2: false,
        bool3: false,
    });

    const faq=[
        {
            "id":1,
            "que":"Can education flashcards be used for all age groups?",
            "ans":"Yes, education flashcards can be tailored to diffrent age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
            "isOpen":faqState.bool1
        },{
            "id":2,
            "que":"How do education flashcards work?",
            "ans":"Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repreatedly, reinforcing their memory and enhancing learning through repetition.",
            "isOpen":faqState.bool2
        },{
            "id":3,
            "que":"Can education flashcards be used for test preparation?",
            "ans":"Absolutely, Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.",
            "isOpen":faqState.bool3
        }
    ];
    function change(item){
        const num=item.id;
        setFaqState(prevState=>({
            ...prevState,
            [`bool${num}`]: !prevState[`bool${num}`]
        }));
    }
    
  return (
    <div className="ml-[120px] mt-[100px]">
      <div className="topic font-inter text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#001744] to-[#0051ff]">
        <h1>FAQ</h1>
      </div>

      <div className="container w-[848px] mt-[50px]">
        {faq.map(item=>(
            <div key={item.id} className="faq  font-inter text-lg border-solid border-[1px] border-[#1552C5] p-[20px] text-[#28272D] rounded-[15px] mb-9 cursor-pointer" onClick={()=>change(item)}>
            <div className="que flex justify-between   font-bold ">
              <h1>{item.que}</h1>
              <div className="pr-[5px] pt-[9px]">
                  {item.isOpen?<img className="transform rotate-180 transition-transform duration-500 ease-in-out" src="./src/assets/downArrow.png" alt="" />:<img className="" src="./src/assets/downArrow.png" alt="" />}
              </div>
            </div>
            {item.isOpen?<div className="ans w-[750px] pt-3 text-[#46444C] font-medium overflow-hidden transition-height duration-1000 ease-in-out">
              <span>{item.ans}</span>
            </div>:null}
          </div>
        ))}
      </div>
      <div className="openspace h-[300px]">

      </div>
    </div>
  );
}

export default FAQ;

