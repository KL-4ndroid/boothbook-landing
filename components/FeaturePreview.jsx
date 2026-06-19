const features = [
  {
    label: '01',
    title: '市集場次紀錄',
    description: '記錄日期、地點、攤費、天氣、人流與心得，讓每一場市集都有完整回顧。',
  },
  {
    label: '02',
    title: '商品銷售表現',
    description: '看出哪些商品熱賣、哪些商品需要調整，補貨與開發新品更有方向。',
  },
  {
    label: '03',
    title: '營收與成本整理',
    description: '不用再靠手寫本、Excel 或手機備忘錄東拼西湊。',
  },
  {
    label: '04',
    title: '出攤後回顧',
    description: '把每一次出攤變成下一次決策的依據，慢慢看懂自己的品牌。',
  },
];

export default function FeaturePreview() {
  return (
    <section className="bg-paper py-18 md:py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-black tracking-[0.2em] text-caramel">COMING FEATURES</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink md:text-4xl">未來，你可以用 BoothBook 記錄這些事</h2>
          <p className="mt-4 text-base font-medium leading-8 text-ink/65">這不是一般記帳工具，而是為出攤日常設計的品牌經營筆記。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.label} className="group rounded-3xl border border-line bg-cream p-7 shadow-card transition hover:-translate-y-1 hover:border-caramel/70">
              <div className="mb-5 inline-flex rounded-full bg-forest/10 px-4 py-2 text-sm font-black text-forest">{feature.label}</div>
              <h3 className="text-2xl font-black text-ink">{feature.title}</h3>
              <p className="mt-4 text-base font-medium leading-8 text-ink/65">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
