'use client'

import React from "react";
import { CafeProps } from "@/interface/CafeProps";
import CafeName from "./CafeName";
import FoodMenu from "./FoodMenu";
import Good from "./Good";
import Bad from "./Bad";
import { Grid, IconButton } from "@mui/material";
import IconBox from "./IconBox";

const Item:React.FC<CafeProps> = (props) => {
  return (
    <Grid size={{xs:12, md:6}}>
      <div className="p-2 border-2 border-amber-700/50 rounded-md shadow-md mb-3 ax-w-md mx-auto text-sm text-amber-950">
        <CafeName 
          _id={props._id}
          cafeName={props.cafeName} 
          cafeCity={props.cafeCity} 
          travelTimeProps={props.travelTime}
          cafeAtom={props.atmo}
          isGone={props.isGone}
        />
        <FoodMenu foodMenu={props.foodMenu}/>
        <Good goodPoints={props.goodPoints} />
        <Bad badPoints={props.badPoints} />
        <IconBox
          {...props}
        ></IconBox>
      </div>
    </Grid>
  )
}

export default Item;