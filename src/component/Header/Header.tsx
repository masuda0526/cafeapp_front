'use client'

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Title from "./Title";
import Menu from "./Menu";

const Header:React.FC = () =>{

  const [isOpenMenu, changeMenuState] = useState(false);
  const [isVisibleMenu, changeMenuVisible] = useState(false);

  const openMenu = ()=>{
    changeMenuVisible(true);
    setTimeout(()=>changeMenuState(true), 10);
  }
  const closeMenu = ()=>{
    changeMenuState(false);
    setTimeout(()=>changeMenuVisible(false),500);
  }
  

  return (
    <header className="text-white flex justify-between text-3xl bg-yellow-700 px-3 py-4 mb-4">
      <Title/>
      <div>
        {isOpenMenu?
          <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className="relative z-20 text-yellow-700"/>:
          <FontAwesomeIcon icon={faBars} onClick={openMenu} className="relative z-20"/>
        }
      </div>
      {/* {isOpenMenu&&( */}
        <Menu isOpen={isOpenMenu} isVisible={isVisibleMenu}/>
      {/* )} */}
    </header>
  )
}

export default Header;