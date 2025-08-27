'use client'

import { Typography } from "@mui/material";
import React from "react";

const CafeAtmo:React.FC<{atmo:string}> = (
  {atmo}
) => {
  return (
    <>
      <Typography sx={{fontSize:'12px', marginBottom:'5px'}}>{atmo}</Typography>
    </>
  )
}

export default CafeAtmo;