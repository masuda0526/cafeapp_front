'use client';

import { createTheme, ThemeProvider } from "@mui/material";
import { Yomogi } from "next/font/google";

const Yomogi400 = Yomogi({
  weight: "400",
  subsets: ["latin"],
  preload: true,
  display: "swap",
})

const theme = createTheme({
  typography:{
    fontFamily:Yomogi400.style.fontFamily,
  },
})

export default function ThemeRegistry({
  children,
}:{
  children:React.ReactNode;
}){
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}