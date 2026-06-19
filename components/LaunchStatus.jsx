const steps = [
  {
    title: '產品設計中',
    description: '整理市集攤主真正需要的紀錄流程，讓介面簡單、清楚、不增加負擔。',
  },
  {
    title: '內測版本準備中',
    description: '先開放給少量品牌試用，確認記錄場次、商品與回顧流程是否順手。',
  },
  {
    title: '即將開放試用',
    description: '正式版推出前，會陸續分享開發進度與內測資訊。',
  },
];

export default function LaunchStatus() {
  return (
    <section id="status" className="bg-cream py-18 md:py-24">
      <div className="container-page">
        <div className="mb-12 text-center">
          <p className="text-sm font-black tracking-[0.2em] text-caramel">BUILDING IN PUBLIC</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink md:text-4xl">目前正在準備正式版發布中</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-ink/65">我們正在打造一個真正貼近市集攤主日常的工具。不只是記帳，而是幫你把每一次出攤變成可以回顧、比較、成長的資料。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-3xl border border-line bg-paper p-7 shadow-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-caramel text-lg font-black text-white">{index + 1}</div>
              <h3 className="text-xl font-black text-ink">{step.title}</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-ink/65">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
