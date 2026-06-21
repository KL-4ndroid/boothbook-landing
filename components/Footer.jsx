export default function Footer() {
  return (
    <footer className="border-t border-feria-line bg-feria-cream py-10">
      <div className="container-page flex flex-col gap-5 text-sm font-medium text-feria-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-feria-olive">Féria｜出攤筆記</p>
          <p className="mt-1">手作品牌的市集經營筆記</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          <a href="#about" className="transition hover:text-feria-olive">關於 Féria</a>
          <a href="#status" className="transition hover:text-feria-olive">開發進度</a>
          <a href="#waitlist" className="transition hover:text-feria-olive">內測資訊</a>
        </nav>
      </div>
    </footer>
  );
}
