import FormControl from "@mui/joy/FormControl"
import FormLabel from "@mui/joy/FormLabel"
import Input from "@mui/joy/Input"
import React from "react"
import CafeFormStore from "@/store/cafeForm"


const CafeNameInput: React.FC = () => {
  const cafeName = CafeFormStore((state)=>state.currentCafe.cafeName);
  const replaceCafeName = CafeFormStore(state => state.replaceData);

  const changeVal = (event:React.ChangeEvent<HTMLInputElement>) => {
    replaceCafeName('cafeName', event.target.value);
  }

  return (
    <FormControl>
      <FormLabel>カフェ名</FormLabel>
      <Input autoFocus required value={cafeName} onChange={changeVal}/>
    </FormControl>
  )
}

export default CafeNameInput;