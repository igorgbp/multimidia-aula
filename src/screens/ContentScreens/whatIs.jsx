import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/themeContext";
import tenentePic from "../../assets/primeiro-tenente-csgo.png";
import gifcs from "../../assets/EntireGreatGuillemot-max-1mb.gif";
import gif from '../../assets/gifs-de-csgo-1.gif'
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { GeralContext } from "../../context/geral/geralContext";
import Icon from "../../components/Icon";
import flutuante from "../../assets/segunda.png";

const whatIs = () => {
  const { setCurrentOption, skills, isDarkMode } = useContext(GeralContext);
  const theme = useContext(ThemeContext);
  console.log(theme);

  const Item = ({ item }) => {
    return (
      <div class=" w-full md:w-72  rounded-md   flex flex-col p-4  md:mt-4 items-center md:items-start">
        <div class=" w-fit"><Icon item={item} /></div>
        <p class="mt-2 text-lg font-bold text-center md:text-start" style={{ color: theme.text }}>
          {item.name}
        </p>
        <p class="text-center md:text-start" style={{ color: theme.textSecondary }}>{item.description}</p>
      </div>
    );
  };
  return (
    <div class=" flex flex-col  lg:pr-24 h-screen">
      <div class="flex space-x-6 ">
        <div class="h-auto  flex flex-col">
          <div class=" mb-4">
            <p class=" text-3xl md:text-5xl font-black mx-auto md:mx-0 w-fit" style={{ color: theme.text }}>
              O que é o CS?
            </p>
            {/* <p
              class=" text-xl md:text-2xl font-bold mt-1 mx-auto md:mx-0 w-fit"
              style={{ color: theme.textSecondary }}
            >
              Desenvolvedor Front-end
            </p> */}
            <p class="mt-8 mx-auto md:mx-0 w-fit text-center md:text-start" style={{ color: theme.textSecondary }}>
            Counter-Strike é uma série de jogos eletrônicos multijogador de tiro em primeira pessoa, no qual times de terroristas e contra-terroristas batalham entre si, respectivamente, realizando um ato de terror e prevenindo-os. A série iniciou-se no Windows em 1999 com o lançamento do primeiro jogo, Counter-Strike. 
            </p>
          </div>
          
          <img
          src={gif}
          class="w-full object-contain h-96 lg:block hidden rounded-lg"
        />
          {/* <div class="flex gap-2 flex-wrap justify-center md:justify-start ">
            <button
              class="p-2  rounded-lg w-44   hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(2)}
              style={{backgroundColor: theme.secondary}}
            >
              <FiPaperclip color={theme.text} />
              <p class="ml-2" style={{color:theme.text}}>
                Ver meu potfolio
              </p>
            </button>
            <button
              class="p-2  rounded-lg w-44   hover:font-bold flex items-center justify-center"
              onClick={() => setCurrentOption(3)}
              style={{backgroundColor: theme.secondary}}

            >
              <MdContacts color={theme.text} />
              <p class="ml-2" style={{ color: theme.text }}>
                {" "}
                Entrar em contato
              </p>
            </button>
          </div> */}
          {/* <div class="mt-8 md:mt-20">
            <p class="text-xl md:text-3xl font-bold mx-auto md:mx-0 w-fit" style={{ color: theme.text }}>
              O que eu faço?
            </p>
            <p class="mt-2 text-center md:text-start" style={{ color: theme.textSecondary }}>
              Desenvolvo em javascript há quase dois anos, atualmente atuo na
              "Preço do Gás LTDA" como desenvolvedor front end mobile, usando
              React Native. Abaixo tem um pequeno resumo das tecnologias em que
              tenho experiência.
            </p>
          </div> */}
        </div>
        <img
          src={tenentePic}
          class="w-11/12 object-contain h-96 lg:block hidde rounded-md"
        />
        <img
          src={gifcs}
          class={`w-11/12 object-contain h-96 lg:block hidde rounded-md ${isDarkMode?"invert": "invert-0"}`}
        />
      </div>

      {/* <div class=" mt-5">
        <ul class=" flex flex-wrap  h-full justify-center md:justify-start gap-2">
          {skills.map((item) => {
            return (
              <li >
                <Item item={item} />
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
export default whatIs;
