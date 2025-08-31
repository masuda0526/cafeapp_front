import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Yomogi } from 'next/font/google'
// import localFont from 'next/font/local';
config.autoAddCss = false

const Yomogi400 = Yomogi({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  preload: true,
  display: 'swap'
})

// const Yomogi400 = localFont({
//   src:'../../public/fonts/Yomogi-Regular.ttf',
//   display:'swap',
//   fallback: [
//     "Hachi Maru Pop",   // 手書き風日本語フォント
//     "Kosugi Maru",      // Google Fonts の丸ゴシック手書き系
//     "Comic Sans MS",    // 英数字向け手書きフォント
//     "cursive",          // 一般的な手書き系フォント
//     "sans-serif",       // 最終フォールバック
//   ],
// })
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
console.log(Yomogi400);
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
