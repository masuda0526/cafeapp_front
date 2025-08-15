import CafeFormStore from "@/store/cafeForm"
import FormLabel from "@mui/joy/FormLabel";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import CancelIcon from '@mui/icons-material/Cancel';

interface Points {
  key: string,
  value: string
}

const CafeBadInput: React.FC = () => {
  const badPoints: string[] = CafeFormStore(state => state.currentCafe.badPoints);
  const [tmpPoints, setTmpPoint] = useState<Points[]>(badPoints.map(p => { return { key: uuidv4(), value: p } }));
  const replacePoints = CafeFormStore(state => state.replaceData);
  const reflectStore = (points: Points[]) => {
    let l: string[] = [];
    points.forEach(p => l.push(p.value));
    replacePoints('badPoints',l);
  }
  const changePoint = (key:string, value:string) => {
    setTmpPoint(tmpPoints.map(p => p.key === key?{...p, value:value}:p));
  }
  const addInput = () => {
    setTmpPoint([...tmpPoints, { key: uuidv4(), value: '' }]);
  }

  const deleteInput = (key:string) => {
    setTmpPoint(tmpPoints.filter(p => p.key !== key));
  }

  React.useEffect(() => {
    reflectStore(tmpPoints);
  }, [tmpPoints])
  return (
    <React.Fragment>
        <FormLabel>悪い点</FormLabel>
        {tmpPoints.map(point => {
          return (
            <React.Fragment key={point.key}>
              <Input value={point.value} onChange={e => changePoint(point.key, e.target.value)}
                endDecorator={
                  <CancelIcon onClick={e =>deleteInput(point.key)} sx={{ color: 'tomato', cursor: 'pointer' }} />
                }  
              />
            </React.Fragment>
          )
        })}
      <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <PlaylistAddIcon onClick={addInput}/>
      </Box>
    </React.Fragment>
  )
}
export default CafeBadInput;