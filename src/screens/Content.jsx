import React, { useContext }  from "react";
import WhatIs from "./ContentScreens/whatIs";
import Begin from "./ContentScreens/begin";
// import Contact from "./ContentScreens/Contact";
import { GeralContext } from "../context/geral/geralContext";
import Popular from "./ContentScreens/popular";
import Timeline from "./ContentScreens/timeline";

const Content = () => {
  const {currentOption} = useContext(GeralContext)
  console.log('current e tals',currentOption);

  return (
    <div class="py-10">
     { currentOption == 1 && <WhatIs/>}
     { currentOption == 2 && <Begin/>}
     { currentOption == 3 && <Popular/>}
     { currentOption == 4 && <Timeline/>}

    </div>
    
  );
};

export default Content;
