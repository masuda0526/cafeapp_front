import SearchParamStore from "@/store/SearchParamStore";
import { FormControl, FormLabel, ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react";
import { isGoneStat } from "./ParamStat";

const SearchGoneToggle: React.FC = () => {
  const tgGoneState = SearchParamStore(state => state.currentSearchParam.tgGoneState);
  const replaceParam = SearchParamStore(state => state.setParam);
  const handleChange = (event: React.MouseEvent<HTMLElement>, newVal: string) => {
    replaceParam('tgGoneState', newVal);
  }

  return (
    <FormControl>
      <FormLabel sx={{ mb: 1 }}>カフェに行ったことがあるかどうか選択</FormLabel>
      <ToggleButtonGroup
        color="warning"
        exclusive
        value={tgGoneState}
        onChange={handleChange}
      >
        {isGoneStat.map(status => (
          <ToggleButton value={status.val}>{status.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormControl>
  )
}

export default SearchGoneToggle;