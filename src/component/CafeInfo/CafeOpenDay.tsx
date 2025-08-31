import { days } from "@/constants/day";
import { CafeProps } from "@/interface/CafeProps";
import { Box, Typography } from "@mui/material";
import EventBusyIcon from '@mui/icons-material/EventBusy';

const CafeOpenDay: React.FC<CafeProps> = (props) => {
  const openDays: number[] = props.openDay.openDays;
  const memo: string = props.openDay.memo;
  const showDayStr = (): string => {
    if (openDays.length === 0) {
      return 'なし';
    }
    const ds: string[] = [];
    // 最初に月〜土曜日を処理
    for (let i = 1; i < 7; i++) {
      if (openDays.includes(i)) {
        ds.push(days[i]);
      }
    }
    // 日、祝を後ろに追加
    if (openDays.includes(0)) {
      ds.push(days[0]);
    }
    if (openDays.includes(7)) {
      ds.push(days[7]);
    }
    return ds.join(',');
  }
  return (
    <Box>
      <Box sx={{display:'flex', alignItems:'center'}}>
        <EventBusyIcon />
        <Typography variant={'body2'} sx={{
          fontSize: '12px'
        }}>{showDayStr()}</Typography>
      </Box>
      {memo ? (
        <Typography variant={'body2'} sx={{
          fontSize: '12px',
          color: '#a36b1dff',
          paddingLeft: '2em'
        }}>{`※ ${memo}`}</Typography>
      ) : ''}
    </Box>
  )
}

export default CafeOpenDay;