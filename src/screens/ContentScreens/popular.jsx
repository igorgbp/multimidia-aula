import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import cs16 from "../../assets/cs16.gif";
import csgo from "../../assets/csgo.gif";
import { GeralContext } from "../../context/geral/geralContext";
const Popular = () => {
  const { isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);

  return (
    <div class=" flex items-start flex-col  w-full pr-40">
      <div class="px-4 md:px-0 w-full">
        <p
          class="text-center md:text-start text-3xl md:text-5xl font-black"
          style={{ color: theme.text }}
        >
        Popularidade
        </p>
      
       
      </div>
      <div class="flex-row ">
        <p class="mt-16 mx-auto md:mx-0 text-2xl font-semibold w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>Counter Strike 1.6</p>
<p class="mt-4 mx-auto md:mx-0 w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>
        O CS 1.6 foi um dos primeiros jogos a popularizar o gênero de jogos de tiro em equipe baseado em rodadas, com um foco significativo em estratégia, trabalho em equipe e habilidade individual. 
            </p>
            <img src={cs16} class="mt-2 h-96"/>
        <p class="mt-16 mx-auto md:mx-0 text-2xl font-semibold w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>Counter Strike Global Offensive</p>

            <p class="mt-1 mx-auto md:mx-0 w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>
            CS:GO é um dos pilares do cenário de eSports. O jogo atraiu uma enorme base de jogadores competitivos e se tornou um dos jogos mais populares para torneios profissionais.
            </p>
            <img src={csgo} class="mt-2 h-96  " />
 
      </div>
      
      
    </div>
  );
};
export default Popular;
