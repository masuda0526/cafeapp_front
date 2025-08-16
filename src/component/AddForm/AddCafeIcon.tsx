'use client'

import React from "react";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddCafeIcon:React.FC = () => {

  const [isShow, setIsShow] = useState(false);
  const clickToOpen = () => {
    setIsShow(false);
  }

  return (
    <>
      <AddCircleIcon sx={{
        fontSize: 48,
        position:'fixed',
        bottom:15, right:15,
        color:'#b75000'
      }}
      onClick = {clickToOpen}/>
    </>
  )
}

export default AddCafeIcon;