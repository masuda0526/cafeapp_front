'use client'

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Title from "./Title";
import Menu from "./Menu";
import { AppBar, Box, Toolbar } from "@mui/material";

const Header: React.FC = () => {

  const [isOpenMenu, changeMenuState] = useState(false);
  const [isVisibleMenu, changeMenuVisible] = useState(false);

  // const openMenu = () => {
  //   changeMenuVisible(true);
  //   setTimeout(() => changeMenuState(true), 10);
  // }
  // const closeMenu = () => {
  //   changeMenuState(false);
  //   setTimeout(() => changeMenuVisible(false), 500);
  // }


  return (
    <Box sx={{ flexGrow: 1 , marginBottom:1, backgroundColor:'#cd853f'}}>
      <AppBar position="static" >
        <Toolbar sx={{backgroundColor:'#b75000'}}>
          <Title />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;