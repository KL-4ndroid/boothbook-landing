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
    <div className="relative mx-auto w-full max-w-[700px]">
      <div className="absolute -right-10 -top-8 hidden h-20 w-20 rotate-12 rounded-full bg-feria-taupe/15 blur-2xl md:block" />
      <div className="feria-border rounded-[2.25rem] p-2 shadow-float">
        <div className="rounded-[1.85rem] bg-feria-cream/82 p-5 backdrop-blur-xl">
          <div className="flex gap-4">
            <aside className="hidden w-36 shrink-0 rounded-3xl bg-feria-paper p-4 text-sm font-semibold text-feria-muted md:block">
              <div className="mb-6 flex items-center gap-2 text-feria-olive">
                <span className="rounded-xl border border-feria-line bg-feria-cream px-2 py-1">
                  <span className="feria-canopy scale-75">
                    <span /><span /><span />
                  </span>
                </span>
                Féria
              </div>
              {['總覽', '市集筆記', '商品紀錄', '銷售整理', '成本筆記', '回顧分析'].map((item, index) => (
                <div key={item} className={`mb-3 rounded-2xl px-3 py-2 ${index === 0 ? 'bg-feria-cream text-feria-olive shadow-insetSoft' : ''}`}>
                  {item}
                </div>
              ))}
            </aside>

            <section className="min-w-0 flex-1">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-feria-taupe">FÉRIA OVERVIEW</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-feria-ink">總覽</h3>
                </div>
                <div className="rounded-2xl border border-feria-line bg-feria-cream/90 px-3 py-2 text-xs font-semibold text-feria-muted">本週 5/18 - 5/24</div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {summaryCards.map(([label, value, note]) => (
                  <div key={label} className="rounded-2xl border border-feria-line/80 bg-feria-cream/88 p-4 shadow-card">
                    <p className="text-xs font-semibold text-feria-muted">{label}</p>
                    <p className="mt-2 text-lg font-bold text-feria-ink">{value}</p>
                    <p className="mt-2 text-xs font-semibold text-feria-moss">{note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="rounded-3xl border border-feria-line/80 bg-feria-cream/88 p-5 shadow-card">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-semibold text-feria-ink">營收趨勢</p>
                    <span className="rounded-full bg-feria-moss/12 px-3 py-1 text-xs font-semibold text-feria-olive">營收</span>
                  </div>
                  <div className="flex h-40 items-end gap-3 border-b border-l border-feria-line/80 px-2 pb-2">
                    {[34, 45, 58, 50, 70, 62, 92].map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                        <div style={{ height: `${height}%` }} className="w-full rounded-t-xl bg-gradient-to-t from-feria-olive/90 to-feria-sage/75" />
                        <span className="text-[10px] font-semibold text-feria-muted/60">5/{12 + index}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-feria-line/80 bg-feria-cream/88 p-5 shadow-card">
                  <p className="mb-4 font-semibold text-feria-ink">商品銷售排行</p>
                  <div className="space-y-3">
                    {ranking.map(([rank, name, amount, count]) => (
                      <div key={rank} className="flex items-center gap-3 rounded-2xl bg-feria-paperSoft p-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-feria-taupe/18 text-xs font-bold text-feria-olive">{rank}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-feria-ink">{name}</p>
                          <p className="text-xs font-semibold text-feria-muted/70">{count}</p>
                        </div>
                        <p className="text-sm font-bold text-feria-ink">{amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-4 hidden w-40 rounded-[2rem] border border-feria-line bg-feria-cream/92 p-4 shadow-float backdrop-blur-xl md:block">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-feria-line" />
        <p className="text-xs font-semibold text-feria-muted">本週市集</p>
        <div className="mt-3 rounded-2xl border border-feria-line bg-feria-white p-3">
          <p className="text-xs font-semibold text-feria-ink">森之市</p>
          <p className="mt-1 text-[11px] text-feria-muted">台中草悟道</p>
        </div>
        <div className="mt-3 rounded-2xl border border-feria-line bg-feria-white p-3">
          <p className="text-xs font-semibold text-feria-ink">本場成果</p>
          <p className="mt-1 text-lg font-bold text-feria-moss">$6,250</p>
        </div>
      </div>
    </div>
  );
}
