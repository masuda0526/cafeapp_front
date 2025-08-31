import { days } from "@/constants/day";
import { Box, FormControl, FormControlLabel, FormLabel, Switch, Typography } from "@mui/material";
import RadiusCheckBoxVisual from "../AddForm/InputComponent/RadiusCheckBoxVisual";
import SearchParamStore from "@/store/SearchParamStore";

const SearchOpenDayForm:React.FC = () => {
  const tgDays:number[] = SearchParamStore(state => state.currentSearchParam.tgOpenDays);
  const tgIsAnd:boolean = SearchParamStore(state => state.currentSearchParam.tgAndSearch);
  const replaceParam = SearchParamStore(state => state.setParam);
  const handleClickDay = (idx:number) => {
    let ds:number[] = [];
    if(tgDays.includes(idx)){
      tgDays.filter(dn => dn !== idx);
    }else{
      ds.push(...tgDays, idx);
    }
    replaceParam('tgOpenDays', ds);
  }
  const handleClickAnd = () => {
    replaceParam('tgAndSearch', !tgIsAnd);
  }
  return (
    <FormControl>
      <FormLabel sx={{ mb: 1 }}>営業している曜日で検索</FormLabel>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
        {days.map((d, idx)=> (
          <RadiusCheckBoxVisual key={idx} viewVal={d} parentFlg={tgDays.includes(idx)} parentFunc={() => handleClickDay(idx)}/>
        ))}
      </Box>
      <Box sx={{display:'flex',justifyContent:'right'}}>
        <FormControlLabel control={<Switch checked={tgIsAnd} onClick={() =>handleClickAnd()}/>} label="AND検索"/>
      </Box>
    </FormControl>
  )
}

export default SearchOpenDayForm;