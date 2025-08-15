'use client'

import React from "react";
import TravelTime from "./TravelTime";
import { TravelTimeProps } from "@/interface/TravelTimeProps";
import CafeAtmo from "./CafeAtmo";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props{
  cafeName:string,
  cafeCity:string,
  travelTimeProps:TravelTimeProps,
  cafeAtom:string,
  isGone:boolean
}
const CafeName:React.FC<Props> = (props) => {
  return (
    <div className="">
      <h3 className="underline text-xl font-bold mb-2">
        {props.isGone?
          <CheckCircleIcon/>:
          <RadioButtonUncheckedIcon/>
        }
        {props.cafeName}
      </h3>
      <CafeAtmo atmo={props.cafeAtom}/>
      <TravelTime  cafeCity={props.cafeCity} travelTimeProps={props.travelTimeProps}/>
    </div>
  )
}

export default CafeName;