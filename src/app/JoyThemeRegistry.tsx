'use client';

import { CssVarsProvider, extendTheme } from "@mui/joy/styles";


const theme = extendTheme({
  // radius や palette などの設定
  // radius: {sm:'4px',md:'8px', lg:'12px'}
})

export default function JoyThemeRegistry({children}:{children:React.ReactNode}){
  return <CssVarsProvider theme={theme} >{children}</CssVarsProvider>
}