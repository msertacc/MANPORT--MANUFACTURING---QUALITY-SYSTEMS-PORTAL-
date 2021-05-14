import React, { useState, useRef, useEffect } from "react";
import Chevron from "./Chevron";

import '../styles/accordion.css'

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setWidth, setWidthState] = useState('0');

  const content = useRef(null);

  useEffect(() => {
    console.log(content.current.scrollWidth)
    if(content.current.scrollWidth < 155){
      setWidthState(
       "168px" 
      )
    }
    else{
  
        setWidthState(
          `${content.current.scrollWidth}px` 
        )
     
    }
    
  }, [])


  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight+30}px`
      
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    console.log(content.current.scrollHeight)
    console.log(setWidth)
  }

  return (
    <div >
    <div className="accordion__section">
    <button className={`accordion ${setActive}`} onClick={toggleAccordion} style={{width : `${setWidth}`, border: props.border}}>
        <p className="accordion__title" >{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
    </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}`, width :'auto' }}
        className="accordion__content"
      >
        
        {props.content}
      </div>
    </div>
  );
}

export default Accordion;
