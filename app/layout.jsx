import './globals.css';

export default function RootLayout(props) {
  return (
    <html lang="zh-Hant">
      <body>{props.children}</body>
    </html>
  );
}
