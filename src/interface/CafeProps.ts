import OpenDay from "./OpenDay"
import { TravelTimeProps } from "./TravelTimeProps"

export interface CafeProps{
  _id:string|null,
  isGone:boolean,
  cafeName:string,
  openDay: OpenDay
  cafeCity:string,
  foodMenu:string[],
  atmo:string,
  goodPoints:string[],
  badPoints:string[],
  comment:string|null,
  icon:string|null,
  travelTime:TravelTimeProps
}