const summaryCards = [
  ['本週營收', '$18,750', '較上週 +12%'],
  ['本週利潤', '$8,920', '利潤率 47%'],
  ['出攤場次', '3 場', '較上週持平'],
  ['商品銷售數', '128 件', '較上週 +8%'],
];

const ranking = [
  ['1', '手作耳環', '$4,680', '58 件'],
  ['2', '編織手環', '$3,920', '42 件'],
  ['3', '香氛蠟燭', '$2,860', '28 件'],
];

export default function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      <div className="absolute -right-8 -top-6 hidden h-16 w-16 rotate-12 rounded-full bg-caramel/20 blur-xl md:block" />
      <div className="gradient-border rounded-[2rem] p-2 shadow-soft">
        <div className="rounded-[1.55rem] bg-cream p-5">
          <div className="flex gap-4">
            <aside className="hidden w-36 shrink-0 rounded-2xl bg-[#F3EADF] p-4 text-sm font-bold text-ink/70 md:block">
              <div className="mb-6 flex items-center gap-2 text-ink">
                <span className="rounded-md bg-white px-2 py-1">▧</span>
                BoothBook
              </div>
              {['總覽', '市集管理', '商品管理', '銷售記錄', '成本管理', '數據分析'].map((item, index) => (
                <div key={item} className={`mb-3 rounded-xl px-3 py-2 ${index === 0 ? 'bg-white text-forest' : ''}`}>
                  {item}
                </div>
              ))}
            </aside>

            <section className="min-w-0 flex-1">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">Dashboard</p>
                  <h3 className="mt-1 text-2xl font-black text-ink">總覽</h3>
                </div>
                <div className="rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink/60">本週 5/18 - 5/24</div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {summaryCards.map(([label, value, note]) => (
                  <div key={label} className="rounded-2xl border border-line bg-white p-4 shadow-card">
                    <p className="text-xs font-bold text-ink/55">{label}</p>
                    <p className="mt-2 text-lg font-black text-ink">{value}</p>
                    <p className="mt-2 text-xs font-semibold text-forest">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-black text-ink">營收趨勢</p>
                    <span className="rounded-full bg-sage/15 px-3 py-1 text-xs font-bold text-forest">營收</span>
                  </div>
                  <div className="flex h-40 items-end gap-3 border-b border-l border-line/80 px-2 pb-2">
                    {[34, 45, 58, 50, 70, 62, 92].map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                        <div style={{ height: `${height}%` }} className="w-full rounded-t-xl bg-gradient-to-t from-forest/80 to-sage/60" />
                        <span className="text-[10px] font-bold text-ink/45">5/{12 + index}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <p className="mb-4 font-black text-ink">商品銷售排行</p>
                  <div className="space-y-3">
                    {ranking.map(([rank, name, amount, count]) => (
                      <div key={rank} className="flex items-center gap-3 rounded-xl bg-paper/80 p-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-caramel/20 text-xs font-black text-ink">{rank}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-black text-ink">{name}</p>
                          <p className="text-xs font-semibold text-ink/50">{count}</p>
                        </div>
                        <p className="text-sm font-black text-ink">{amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-4 hidden w-40 rounded-[2rem] border border-line bg-cream p-4 shadow-soft md:block">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-line" />
        <p className="text-xs font-black text-ink/60">本週市集</p>
        <div className="mt-3 rounded-2xl border border-line bg-white p-3">
          <p className="text-xs font-black text-ink">森林市集</p>
          <p className="mt-1 text-[11px] text-ink/50">台中草悟道</p>
        </div>
        <div className="mt-3 rounded-2xl border border-line bg-white p-3">
          <p className="text-xs font-black text-ink">本場表現</p>
          <p className="mt-1 text-lg font-black text-forest">$6,250</p>
        </div>
      </div>
    </div>
  );
}
