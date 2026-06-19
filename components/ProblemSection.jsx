const problems = [
  {
    icon: '✎',
    title: '賣完才發現沒記錄',
    description: '今天賣得很好，但回家後只剩下模糊印象。',
  },
  {
    icon: '?',
    title: '不知道哪場市集真的有成果',
    description: '人很多不一定代表成果好，人少也不一定沒有價值。',
  },
  {
    icon: '□',
    title: '商品很多，卻不知道哪款最值得補貨',
    description: '熱門款、滯銷款、回購款，都需要被記錄下來。',
  },
  {
    icon: '＋',
    title: '成本與攤費總是分散在各處',
    description: '出攤不是只有營收，真正重要的是最後留下多少。',
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="bg-cream py-18 md:py-24">
      <div className="container-page">
        <div className="mb-10 text-center">
          <p className="text-sm font-black tracking-[0.2em] text-caramel">MARKET NOTEBOOK</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-ink md:text-4xl">你是不是也常常這樣出攤？</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article key={problem.title} className="gradient-border rounded-3xl p-6 shadow-card transition hover:-translate-y-1">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-caramel/15 text-2xl font-black text-ink">
                {problem.icon}
              </div>
              <h3 className="text-lg font-black leading-7 text-ink">{problem.title}</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-ink/65">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
