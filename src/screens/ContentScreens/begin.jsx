import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";

import { GeralContext } from "../../context/geral/geralContext";
const Begin = () => {
  const { isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  
  return (
    <div class=" flex items-center flex-col h-screen pr-40">
      <div class="px-4 md:px-0">
        <p
          class="text-center md:text-start text-3xl md:text-5xl font-black"
          style={{ color: theme.text }}
        >
        O início
        </p>
 
        <p class="mt-8 mx-auto md:mx-0 w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>
        O Counter-Strike original teve como sequência o Counter-Strike: Condition Zero, desenvolvido pela Turtle Rock Studios e lançado em março de 2004. Uma versão anterior de Condition Zero que foi desenvolvida pela Ritual Entertainment foi lançada junto com ele como Condition Zero: Deleted Scenes. Oito meses depois, a Valve lançou o Counter-Strike: Source, uma recriação do Counter-Strike original e o primeiro da franquia a usar o novo motor Source criado pela Valve.O quarto título da série principal, Counter-Strike: Global Offensive, foi lançado pela Valve em 2012 para Windows, OS X, Xbox 360, e PlayStation 3. 
            </p>
      </div>
      <div class=" w-full p-0">
      <iframe width="560" height="315" class="mt-8" src="https://www.youtube.com/embed/fm-alaXKXbI?si=RJYNRu2IniltWWY9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      </div>
      
       
    </div>
  );
};
export default Begin;
