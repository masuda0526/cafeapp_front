import FormControl from "@mui/joy/FormControl";
import RadiusCheckBox from "./RadiusCheckBox";
import FormLabel from "@mui/joy/FormLabel";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import { days } from "@/constants/day";
import { useState } from "react";
import CafeFormStore from "@/store/cafeForm";


const OpenDayInput: React.FC = () => {
  const openDay = CafeFormStore(state => state.currentCafe.openDay);
  const replaceData = CafeFormStore(state => state.replaceData);
  const [memo, setMemo] = useState<string>(openDay.memo);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const eventVal = event.target.value;
    setMemo(eventVal);
    replaceData('openDay', {...openDay, memo:memo})
  }

  return (
    <FormControl>
      <FormLabel>休業日を選択</FormLabel>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom:'5px'}}>
        {days.map((day, idx)=> (
          <RadiusCheckBox key={idx} day={day} val={idx}/>
        ))}
      </Box>
      <Input placeholder="備考など" onChange={handleChange} value={memo}></Input>
    </FormControl>
  )

}

export default OpenDayInput;