export default function CTASection() {
  return (
    <section id="waitlist" className="bg-paper py-18 md:py-24">
      <div className="container-page">
        <div className="gradient-border overflow-hidden rounded-[2rem] p-8 shadow-soft md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-caramel">EARLY ACCESS</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink md:text-5xl">想成為第一批使用 BoothBook 的品牌嗎？</h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-ink/70">正式版推出前，我們會陸續分享產品設計、開發進度與內測資訊。如果你也是手作品牌、市集攤主，歡迎先追蹤我們，一起把出攤變得更有方向。</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-forest px-7 py-4 font-black text-white shadow-card transition hover:-translate-y-1 hover:bg-forest/90">追蹤 Instagram</a>
                <a href="https://www.threads.net/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-line bg-cream px-7 py-4 font-black text-ink shadow-card transition hover:-translate-y-1 hover:border-caramel">追蹤 Threads</a>
              </div>
            </div>

            <div className="rounded-3xl bg-paper p-6 shadow-card">
              <p className="text-lg font-black text-ink">Coming Soon</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-line bg-white p-4">
                  <p className="text-sm font-black text-forest">內測等待名單</p>
                  <p className="mt-1 text-sm font-medium text-ink/60">正式上線前可改成表單或 LINE 官方帳號連結。</p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <p className="text-sm font-black text-forest">開發進度分享</p>
                  <p className="mt-1 text-sm font-medium text-ink/60">適合搭配 Instagram、Threads 經營產品發布前社群。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
