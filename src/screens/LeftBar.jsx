import logoCs from "../assets/csgoLogo.png";
import squad from "../assets/squad.webp";
import headshot from "../assets/headshot.png";
import noScope from "../assets/Noscope_kill.webp"
import gifcs from "../assets/EntireGreatGuillemot-max-1mb.gif";
import Smoke from "../assets/Smoke_kill.webp"
import flash from "../assets/Flashbang_assist.webp"

import { useContext, useState } from "react";
import { GeralContext } from "../context/geral/geralContext";

import {TbArrowBarLeft} from 'react-icons/tb';
import { FaUserAlt } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FiPaperclip } from "react-icons/fi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/theme/themeContext";
import { themeData } from "../context/theme/values";

const Leftbar = () => {
  const {
    updateDarkMode,
    isDarkMode,
    setCurrentOption,
    isShowingLeftBar,
    updateIsShowingLeftBar,
  } = useContext(GeralContext);
  const [width, setWidth] = useState(window.innerWidth);
  const currentTheme = useContext(ThemeContext);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  const HideLeftBar = () => {
    if (width < 768) {
      return (
        <button
          class="absolute right-2 top-1/2"
          onClick={() => updateIsShowingLeftBar()}
        >
          <AiFillCaretLeft size={30}  className=" text-gray-500 hover:text-slate-700"/>
          
        </button>
      );
    }else return null
  } 
  const handleShowLeftBarOnOptionClick = () =>{
    if(window.innerWidth<768) updateIsShowingLeftBar()
  }
  const options = [
    {
      id: 1,
      name: "O que é o CS",
      icon: "history",
    },
    {
      id: 2,
      name: "O inicio",
      icon: "headshot",
    },
    {
      id: 3,
      name: "Mais populares",
      icon: "smoke",
    },
    {
      id: 4,
      name: "Linha do tempo",
      icon: "flash",
    },
  
  ];

  const Icon = ({ item }) => {
    console.log("açsdflkj", item);
    switch (item.icon) {
      case "history":
        return <img src={headshot} class={`w-8 h-8 ${isDarkMode?"invert": "invert-0"}`}/>
        // return <AiOutlineBook color={currentTheme.text} />;
      case "headshot":
        // return <FiPaperclip color={currentTheme.text} />;
        return <img src={noScope}  class={`w-8 h-8 ${isDarkMode?"invert": "invert-0"}`}/>;

      case "smoke": 
      return <img src={Smoke} class={`w-8 h-8 ${isDarkMode?"invert": "invert-0"}`} />;
      case "flash": 
      return <img src={flash} class={`w-8 h-8 ${isDarkMode?"invert": "invert-0"}`} />;

       
    
    }
  };

  return (
    <div class=" justify-center px-3 py-6 items-center">
      <HideLeftBar />
      <img
          src={gifcs}
          class={`w-11/12 object-contain h-56 lg:block hidde rounded-md ${!isDarkMode?"invert": "invert-0"}`}
        />
      {/* <img
        src={currentTheme == themeData.dark? logoCsInverted   :logoCs}
        alt="Igor Pereira"
        class="mt-2 mx-auto rounded-xl w-56 h-56 object-cover"
      /> */}
      <p class="mx-2 text-center mt-2" style={{ color: currentTheme.text }}>
       Igor Pereira <br></br>
       Wagner Oliveira
      </p>
    
      <div class="py-3  mt-8">
        {options.map((item) => {
          return (
            <button
          
              className="flex  mx-auto items-center hover:scale-110  mb-2 gap-2 justify-center hover:cursor-pointer w-fit mr-auto transition duration-50"
              onClick={() => {setCurrentOption(item.id);handleShowLeftBarOnOptionClick()}}
            >
              <Icon item={item} />
              <p className="hover:text-xl text-xl font-semibold transition duration-400" style={{ color: currentTheme.text }}>{item.name}</p>
            </button>
            
          );
        })}
      </div>
      <button
        onClick={() => updateDarkMode()}
        class={`flex space-x-1 mx-auto  justify-center w-fit px-2 py-1 items-center rounded-md ${
          isDarkMode
            ? "bg-stone-800 hover:bg-stone-700"
            : "bg-stone-300 hover:bg-stone-400"
        }`}
      >
        {isDarkMode ? (
          <BsSunFill color={'#dacbbd'}  />
        ) : (
          <BsMoonFill color={'#423a3a'} />
        )}
       
        <p  style={{ color: currentTheme.text }} class="font-semibold">
          {isDarkMode ? "Light" : "Dark"} mode
        </p>
      </button>

    </div>
  );
};

export default Leftbar;
