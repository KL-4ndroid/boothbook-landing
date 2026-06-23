const problems = [
  {
    icon: '記',
    title: '出攤後資料散落各處',
    description: '今天賣得很好，但收入、商品、成本和心得都分散在不同地方。',
  },
  {
    icon: '市',
    title: '不知道哪場市集真的有成果',
    description: '人很多不一定代表成果好，人少也不一定沒有價值。',
  },
  {
    icon: '品',
    title: '商品很多，卻不知道哪款最值得補貨',
    description: '熱門款、滯銷款、回購款，都需要被記錄下來。',
  },
  {
    icon: '利',
    title: '營收漂亮，不代表真的有賺',
    description: '出攤不是只有營收，真正重要的是扣除成本後留下多少。',
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="bg-feria-cream py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="feria-section-label">CREATOR PAIN POINTS</p>
          <h2 className="feria-title mt-3 font-display text-3xl font-semibold md:text-4xl">獨立品牌出攤時，最容易被忽略的事</h2>
          <p className="feria-copy mt-4 text-base font-medium">Féria 想陪你把每一次市集留下來，不只是記帳，而是慢慢看懂品牌的方向。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article key={problem.title} className="feria-card rounded-3xl p-6 transition hover:-translate-y-0.5">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-feria-paper text-2xl font-semibold text-feria-olive">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-feria-ink">{problem.title}</h3>
              <p className="feria-copy mt-3 text-sm font-medium">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
