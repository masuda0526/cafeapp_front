import React from "react";
import { SITE_TITLE as title } from "@/constants/site";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { Typography } from "@mui/material";
const Title: React.FC = () => {
  return (
    <Typography sx={{fontSize:28, fontFamily:'Yomogi'}}>
      {title}
      <LocalCafeIcon />
    </Typography>
  )
}
export default Title;