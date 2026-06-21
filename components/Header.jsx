export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-feria-line/70 bg-feria-cream/82 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Féria 出攤筆記" className="h-10 w-10" />
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold tracking-[-0.03em] text-feria-olive">Féria</p>
            <p className="text-xs font-semibold tracking-[0.18em] text-feria-taupe">出攤筆記</p>
          </div>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-semibold text-feria-muted md:flex">
          <a href="#about" className="transition hover:text-feria-olive">關於 Féria</a>
          <a href="#features" className="transition hover:text-feria-olive">功能預告</a>
          <a href="#status" className="transition hover:text-feria-olive">內測資訊</a>
        </nav>
        <a href="#waitlist" className="rounded-2xl bg-feria-olive px-5 py-3 text-sm font-semibold text-feria-cream shadow-card transition hover:-translate-y-0.5 hover:bg-feria-oliveSoft">
          加入內測名單
        </a>
      </div>
    </header>
  );
}
