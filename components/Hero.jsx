import AppPreview from './AppPreview';

export default function Hero() {
  return (
    <section id="top" className="noise relative py-16 md:py-24">
      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-bold text-ink/75">
            <span className="rounded-full bg-caramel/20 px-4 py-2 text-ink">Coming Soon</span>
            <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
            <span>即將開放內測</span>
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-tight tracking-[-0.04em] text-ink md:text-6xl">
            每一次出攤，
            <span className="mt-2 block text-forest">都值得被好好記錄。</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-9 text-ink/75">
            給手作品牌、市集攤主的出攤紀錄工具，記錄場次、商品、銷售、成本與表現，讓你不只是努力出攤，也能慢慢看懂自己的品牌。
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-xl bg-forest px-7 py-4 font-black text-white shadow-card transition hover:-translate-y-1 hover:bg-forest/90">
              追蹤 Instagram
            </a>
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-xl border border-line bg-cream px-7 py-4 font-black text-ink shadow-card transition hover:-translate-y-1 hover:border-caramel">
              追蹤 Threads
            </a>
          </div>

          <p className="mt-8 text-sm font-semibold text-ink/65">♡ 一起把出攤日常，變成品牌成長的資料</p>
        </div>

        <AppPreview />
      </div>
    </section>
  );
}
