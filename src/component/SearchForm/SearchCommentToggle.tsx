import SearchParamStore from "@/store/SearchParamStore";
import { FormControl, FormLabel, ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react";
import { hasComenntStat } from "./ParamStat";

const SearchCommentToggle: React.FC = () => {
  const tgHasComment = SearchParamStore(state => state.currentSearchParam.tgHasComment);
  const replaceParam = SearchParamStore(state => state.setParam);
  const handleChange = (event: React.MouseEvent<HTMLElement>, newVal: string) => {
    replaceParam('tgHasComment', newVal);
  }

  return (
    <FormControl>
      <FormLabel sx={{ mb: 1 }}>コメントの有無を選択</FormLabel>
      <ToggleButtonGroup
        color="warning"
        exclusive
        value={tgHasComment}
        onChange={handleChange}
      >
        {hasComenntStat.map(status => (
          <ToggleButton value={status.val}>{status.label}</ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormControl>
  )
}

export default SearchCommentToggle;