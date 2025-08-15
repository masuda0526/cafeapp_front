import { TravelTimeProps } from "@/interface/TravelTimeProps";
import CafeFormStore from "@/store/cafeForm"
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { useState } from "react";

const CafeTimeInput: React.FC = () => {
  const time:number = CafeFormStore(state => state.currentCafe.travelTime.minute)
  const travel:TravelTimeProps = CafeFormStore.getState().currentCafe.travelTime;
  const replaceData = CafeFormStore(state => state.replaceData);
  const changeTime = (event:React.ChangeEvent<HTMLInputElement>) => {
    const raw:string = event.target.value
    const val:number = (raw == '')?0:Number.parseInt(event.target.value)
    const data:TravelTimeProps = {...travel, minute:val};
    replaceData('travelTime', data);
  }

  return (
    <FormControl>
      <FormLabel>移動時間</FormLabel>
      <Input 
        value={time}
        inputMode="numeric"
        onChange={changeTime}
      />
    </FormControl>
  )
}
export default CafeTimeInput;