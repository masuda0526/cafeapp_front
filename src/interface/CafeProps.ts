import { TravelTimeProps } from "./TravelTimeProps"

export interface CafeProps{
  _id:string|null,
  isGone:boolean,
  cafeName:string,
  cafeCity:string,
  foodMenu:string[],
  time:string,
  atmo:string,
  goodPoints:string[],
  badPoints:string[],
  comment:string|null,
  icon:string|null,
  travelTime:TravelTimeProps
}