import React from "react"
import TokushimaCitys from "@/testdata/TokushimaCity"
import { City } from "@/interface/City"
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select"
import Option from "@mui/joy/Option"
import CafeFormStore from "@/store/cafeForm";

const CafeCityInput:React.FC = () => {
  const citys:City[] = TokushimaCitys;
  const cafeCity:string = CafeFormStore(state => state.currentCafe.cafeCity);
  const replaceCafeCity = CafeFormStore(state => state.replaceData);
  const changeVal = (event:React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null,
    newValue: string | null) => {
      if(newValue){
        replaceCafeCity('cafeCity', newValue);
      }else{
        replaceCafeCity('cafeCity', '');
      }
  }

  return (
    <FormControl>
      <FormLabel>市町村</FormLabel>
      <Select value={cafeCity} onChange={changeVal}>
        {citys.map(city => {
          return <Option key={city.cityId} value={city.cityId}>{city.cityName}</Option>
        })}
      </Select>
    </FormControl>
  )
}

export default CafeCityInput;