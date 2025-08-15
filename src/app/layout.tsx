import "./globals.css";
import "@fontsource/yomogi";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="font-yomogi"
      >
        {children}
      </body>
    </html>
  );
}
