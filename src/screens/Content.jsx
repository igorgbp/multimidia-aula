import React, { useContext }  from "react";
import WhatIs from "./ContentScreens/whatIs";
import Begin from "./ContentScreens/begin";
import Contact from "./ContentScreens/Contact";
import { GeralContext } from "../context/geral/geralContext";

const Content = () => {
  const {currentOption} = useContext(GeralContext)
  console.log('current e tals',currentOption);

  return (
    <div class="py-10">
     { currentOption == 1 && <WhatIs/>}
     { currentOption == 2 && <Begin/>}
     { currentOption == 3 && <Contact/>}
    </div>
    
  );
};

export default Content;
