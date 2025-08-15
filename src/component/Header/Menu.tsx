'use client'

import React from "react";

interface MenuProps{
  isOpen:boolean,
  isVisible:boolean
}

const Menu:React.FC<MenuProps> = ({isOpen, isVisible})=>{
  
  if(!isVisible)return null;

  return (
    <nav className={`fixed top-0 left-0 w-screen h-screen z-10 bg-white pt-8 transition-all duration-500 ease-in-out
      ${isOpen?"translate-x-0 opacity-80":"translate-x-full opacity-0 pointer-events-none"}
    `}>
      <ul className="text-center text-black">
        <li className="py-5 active:text-yellow-600 active:underline">TOP</li>
        <li className="py-5 active:text-yellow-600 active:underline">追加する</li>
        <li className="py-5 active:text-yellow-600 active:underline">修正する</li>
        <li className="py-5 active:text-yellow-600 active:underline">書き込む</li>
      </ul>
    </nav>
  )
}

export default Menu;