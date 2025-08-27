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

interface Props{
  _id:string|null
  cafeName:string,
  cafeCity:string,
  travelTimeProps:TravelTimeProps,
  cafeAtom:string,
  isGone:boolean
}
const CafeName:React.FC<Props> = (props) => {
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
    <Box >
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
      <CafeAtmo atmo={props.cafeAtom}/>
      <TravelTime  cafeCity={decode(props.cafeCity)} travelTimeProps={props.travelTimeProps}/>
    </Box>
  )
}

export default CafeName;