export default function CTASection() {
  return (
    <section id="waitlist" className="bg-feria-paperSoft py-18 md:py-24">
      <div className="container-page">
        <div className="feria-border overflow-hidden rounded-[2.25rem] p-8 shadow-soft md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="feria-section-label">EARLY ACCESS</p>
              <h2 className="feria-title mt-3 font-display text-3xl font-semibold md:text-5xl">想成為第一批使用 Féria 的品牌嗎？</h2>
              <p className="feria-copy mt-5 max-w-2xl text-base font-medium">正式版推出前，我們會陸續分享產品設計、開發進度與內測資訊。如果你也是獨立品牌、市集攤主，歡迎先加入名單，一起把每一次出攤變得更有方向。</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-feria-olive px-7 py-4 font-semibold text-feria-cream shadow-card transition hover:-translate-y-0.5 hover:bg-feria-oliveSoft">加入內測名單</a>
                <a href="https://www.threads.net/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-feria-line bg-feria-cream px-7 py-4 font-semibold text-feria-olive shadow-card transition hover:-translate-y-0.5 hover:border-feria-taupe">追蹤 Threads</a>
              </div>
            </div>

            <div className="rounded-3xl bg-feria-paperSoft p-6 shadow-card">
              <p className="font-display text-lg font-semibold text-feria-ink">Coming Soon</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-feria-line bg-feria-cream p-4">
                  <p className="text-sm font-semibold text-feria-olive">內測等待名單</p>
                  <p className="feria-copy mt-1 text-sm font-medium">正式上線前，將開放少量獨立品牌與市集攤主優先試用。</p>
                </div>
                <div className="rounded-2xl border border-feria-line bg-feria-cream p-4">
                  <p className="text-sm font-semibold text-feria-olive">開發進度分享</p>
                  <p className="feria-copy mt-1 text-sm font-medium">我們會在 Instagram、Threads 分享 Féria 的設計過程與功能想法。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
