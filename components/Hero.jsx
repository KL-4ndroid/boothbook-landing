import AppPreview from './AppPreview';

export default function Hero() {
  return (
    <section id="top" className="feria-noise relative py-16 md:py-24">
      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="feria-brand-card mb-8 inline-flex max-w-full items-center gap-4 rounded-[2rem] px-4 py-3 pr-5">
            <img src="/logo.svg" alt="Féria 出攤筆記" className="h-12 w-12 shrink-0" />
            <div className="min-w-0 leading-tight">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="feria-wordmark font-display text-3xl font-semibold md:text-4xl">Féria</p>
                <span className="hidden h-8 w-px bg-feria-line sm:inline-block" />
                <p className="text-base font-semibold tracking-[0.18em] text-feria-olive md:text-lg">出攤筆記</p>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-feria-taupe">獨立品牌的市集經營筆記</p>
            </div>
          </div>

          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-feria-muted">
            <span className="rounded-full bg-feria-paper px-4 py-2 text-feria-olive">FÉRIA NOTEBOOK</span>
            <span className="h-1.5 w-1.5 rounded-full bg-feria-taupe" />
            <span>內測準備中</span>
          </div>

          <h1 className="feria-title max-w-xl font-display text-5xl font-semibold leading-tight text-feria-olive md:text-6xl">
            每一次出攤，
            <span className="mt-2 block text-feria-moss">都值得被溫柔記錄。</span>
          </h1>

          <p className="feria-copy mt-6 max-w-xl text-lg font-medium">
            Féria｜出攤筆記，是為獨立品牌與市集攤主設計的經營筆記工具。記錄市集、商品、成本與成果，讓你不只是努力出攤，也能慢慢看懂自己的品牌。
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-2xl bg-feria-olive px-7 py-4 font-semibold text-feria-cream shadow-card transition hover:-translate-y-0.5 hover:bg-feria-oliveSoft">
              加入內測名單
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-feria-line bg-feria-cream px-7 py-4 font-semibold text-feria-olive shadow-card transition hover:-translate-y-0.5 hover:border-feria-taupe">
              先看功能方向
            </a>
          </div>

          <p className="mt-8 text-sm font-semibold text-feria-muted">記錄市集、商品、成本與成果，讓每一次出攤都成為品牌成長的線索。</p>
        </div>

        <AppPreview />
      </div>
    </section>
  );
}
