import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import timeline from "../../assets/timeline.png"
import { GeralContext } from "../../context/geral/geralContext";
const Timeline = () => {
  const { isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  return (
    <div class=" flex items-start flex-col ">
      <div class="px-4 md:px-0">
        <p
          class="text-center md:text-start text-3xl md:text-5xl font-black"
          style={{ color: theme.text }}
        >
        Linha do tempo 
        </p>
     
      </div>
    
            <img src={timeline} class='mt-8 max-w-3xl' />
            <iframe width="560" height="315" class="mt-8" src="https://www.youtube.com/embed/S19ExvZtzuI?si=iav-8S8FZjCYsZMj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" class="mt-8" src="https://www.youtube.com/embed/TjMJy22N8e0?si=c1jFZn6FflBZhGsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            
  );
};
export default Timeline;
