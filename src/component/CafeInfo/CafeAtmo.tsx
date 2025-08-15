'use client'

import React from "react";

const CafeAtmo:React.FC<{atmo:string}> = (
  {atmo}
) => {
  return (
    <>
      <p>{atmo}</p>
    </>
  )
}

export default CafeAtmo;