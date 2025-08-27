'use client'

import React from "react";
import { TravelTimeProps } from "@/interface/TravelTimeProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

interface Props{
  cafeCity:string,
  travelTimeProps:TravelTimeProps
}

const TravelTime : React.FC<Props> = (props) => {
  const city:string = props.cafeCity;
  const way:string = props.travelTimeProps.way;
  const minutes:number = props.travelTimeProps.minute;

  let icon;
  if(way === 'car'){
    icon = (<FontAwesomeIcon icon={faCar} />)
  }else(
    icon = (<FontAwesomeIcon icon={faPersonWalking} />)
  )

  return (
    <>
      <Box sx={{
        position:'relative',
        top:'-5px',
        fontSize:'20px',
        textAlign:'right'
      }}>
        <Box sx={{
          backgroundColor:"#F0BD88",
          width:'80%',
          height:'2px',
          position:'absolute'
          }}></Box>
        <Box sx={{
          position:'absolute',
          right:0,
          top:'-25px'
        }} >
          {icon}{' ' + minutes}分
        </Box>
        <Box sx={{
          position:'absolute',
          right:0,
          top:'-5px'
        }}>
          {city}
        </Box>
      </Box>
    </>
  )
}

export default TravelTime;