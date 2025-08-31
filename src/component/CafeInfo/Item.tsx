'use client'

import React from "react";
import { CafeProps } from "@/interface/CafeProps";
import CafeName from "./CafeName";
import FoodMenu from "./FoodMenu";
import Good from "./Good";
import Bad from "./Bad";
import { Box, Grid, IconButton } from "@mui/material";
import IconBox from "./IconBox";
import CommentArea from "./CommentArea";

const Item:React.FC<CafeProps> = (props) => {
  return (
    <Grid size={{xs:12, md:6}}>
      <Box sx={{
        padding:1,
        border:2,
        borderRadius:2,
        borderColor:'#AD6C3D',
        boxShadow:'0px 4px 8px rgba(0, 0, 0, 0.2)',
        color:'#663F24',
        fontSize:'14px'
      }}>
        <CafeName 
          {...props}
        />
        <FoodMenu foodMenu={props.foodMenu}/>
        <Good goodPoints={props.goodPoints} />
        <Bad badPoints={props.badPoints} />
        {props.comment?(
          <CommentArea comment={props.comment} iconVal={props.icon}/>
        ):''}
        <IconBox
          {...props}
        ></IconBox>
      </Box>
    </Grid>
  )
}

export default Item;