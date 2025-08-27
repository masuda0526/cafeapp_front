import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Yomogi } from 'next/font/google'
import ThemeRegistry from "./ThemeRegistry";
import { createTheme } from "@mui/material";
import { extendTheme } from "@mui/joy/styles";
config.autoAddCss = false
const Yomogi400 = Yomogi({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  preload: true,
  display: 'swap'
})

// const muiTheme = createTheme({
//   typography:{
//     fontFamily:Yomogi400.style.fontFamily,
//   }
// })

// const joyTheme = extendTheme({
//   cssVarPrefix:"joy",
//   typography:{
//     body:Yomogi400.style.fontFamily
//   }
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={Yomogi400.className}>
        {/* <ThemeRegistry > */}
          {children}
        {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
