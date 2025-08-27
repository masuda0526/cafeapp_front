import SearchParamStore from "@/store/SearchParamStore";
import React, { ChangeEvent, useEffect, useState } from "react";
import Input from '@mui/joy/Input';


const SearchTextInput: React.FC = () => {
  const tgText = SearchParamStore((state) => state.currentSearchParam.tgText);
  const changeText = SearchParamStore((state) => state.setParam);
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeText('tgText', event.target.value);
  }
  
  return (
    <Input
      placeholder="search text ..."
      variant="outlined"
      color="warning"
      onChange={(event) => change(event)}
      value={tgText}
    />
  )

}

export default SearchTextInput;