'use client'

import React from "react";
import TravelTime from "./TravelTime";
import { TravelTimeProps } from "@/interface/TravelTimeProps";
import CafeAtmo from "./CafeAtmo";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decode } from "@/util/DecodeCity";
import axios from "axios";
import { API_URL } from "@/constants/site";
import useDataStore from "@/store/data";
import { Box, Typography } from "@mui/material";
import { CafeProps } from "@/interface/CafeProps";
import CafeOpenDay from "./CafeOpenDay";

interface Props{
  _id:string|null
  cafeName:string,
  cafeCity:string,
  travelTimeProps:TravelTimeProps,
  cafeAtom:string,
  isGone:boolean
}
const CafeName:React.FC<CafeProps> = (props) => {
  const replaceCafes = useDataStore(state => state.replaceCafes);
  const clickToToggle = () => {
    axios.get(API_URL + '/api/toggle/gone', {
      params:{
        cafe_id:props._id,
        isGone:props.isGone
      }
    }).then(res => {
      replaceCafes(res.data);
    })
  }
  return (
    <Box sx={{marginBottom:'5px'}}>
      <Typography variant="h3" 
        sx={{
          textDecoration:'underline',
          fontSize:'20px',
          marginBottom:'5px',
          fontFamily:'Yomogi'
        }}>
        {props.isGone?
          <CheckCircleIcon onClick={clickToToggle}/>:
          <RadioButtonUncheckedIcon onClick={clickToToggle}/>
        }
        {props.cafeName}
      </Typography>
      <CafeAtmo atmo={props.atmo}/>
      <TravelTime  cafeCity={decode(props.cafeCity)} travelTimeProps={props.travelTime}/>
      <CafeOpenDay {...props}/>
    </Box>
  )
}

export default CafeName;