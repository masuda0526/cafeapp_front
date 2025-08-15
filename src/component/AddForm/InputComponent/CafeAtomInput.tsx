import CafeFormStore from "@/store/cafeForm"
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import React, { useState } from "react";

const CafeAtomInput: React.FC = () => {
  const atom = CafeFormStore(state => state.currentCafe.atmo);
  const replaceCafeAtom = CafeFormStore(state => state.replaceData);
  const changeAtom = (event:React.ChangeEvent<HTMLInputElement>) => {
    replaceCafeAtom('atmo', event.target.value);
  }

  return (
    <FormControl>
      <FormLabel>雰囲気</FormLabel>
      <Input autoFocus required value={atom} onChange={changeAtom} />
    </FormControl>
  )
}
export default CafeAtomInput;