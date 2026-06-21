import './globals.css';

export const metadata = {
  title: 'Féria｜出攤筆記｜即將開放內測',
  description: '手作品牌的市集經營筆記。記錄市集、商品、成本與成果，讓每一次出攤都成為品牌成長的線索。',
};

export default function RootLayout(props) {
  return (
    <html lang="zh-Hant">
      <body>{props.children}</body>
    </html>
  );
}
