export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.svg" alt="BoothBook" className="h-10 w-10" />
          <div className="leading-tight">
            <p className="text-lg font-black tracking-wide text-ink">出攤本</p>
            <p className="text-sm font-bold text-ink/85">BoothBook</p>
          </div>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-semibold text-ink/80 md:flex">
          <a href="#about" className="transition hover:text-forest">關於 BoothBook</a>
          <a href="#status" className="transition hover:text-forest">開發進度</a>
          <a href="#waitlist" className="transition hover:text-forest">聯絡我們</a>
        </nav>
        <a href="#waitlist" className="rounded-xl bg-forest px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-forest/90">
          追蹤最新消息
        </a>
      </div>
    </header>
  );
}
