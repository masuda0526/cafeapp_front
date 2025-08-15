'use client'

import React from "react";
import { TravelTimeProps } from "@/interface/TravelTimeProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";

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
      <div className="text-xl text-right relative top-1">
        <div className="bg-amber-600/50 w-9/12 h-0.5 absolute"></div>
        <div className="absolute right-0 -top-6.5">
          {icon}{' ' + minutes}分
        </div>　
        <div className="absolute right-0 -top-1">
          {city}
        </div>
      </div>
    </>
  )
}

export default TravelTime;