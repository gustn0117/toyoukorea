import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const problems = [
  {
    group: '소비자 측면',
    items: [
      '중간 유통 마진으로 2~4배 높은 가격',
      '유통 단계 증가로 신선도 하락',
    ],
  },
  {
    group: '경매상 측면',
    items: [
      '중간 도매상에게만 판매 가능',
      '최종 소비자 직접 판매 채널 부재',
      '제한된 판로로 수익 확대 어려움',
    ],
  },
];

const solutions = [
  '경매장 ↔ 소비자 직접 연결',
  '10~40% 가격 절감',
  '당일 배송으로 신선도 유지',
  '경매상 새로운 판로 확보',
  '안정적 매출 창출',
];

export default function MarketOpportunity() {
  return (
    <section id="market" className="relative section-padding bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 text-primary-600 font-semibold text-sm tracking-wide mb-4 border border-gray-100">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            시장 기회
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg">
            현재 유통 구조의 문제점과 투유코리아의 솔루션
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-red-50 to-orange-50/30 border border-red-100/80 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-red-100 rounded-xl shadow-sm">
                <AlertTriangle size={22} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                현재 유통 구조의 문제점
              </h3>
            </div>

            <div className="space-y-8">
              {problems.map((group) => (
                <div key={group.group}>
                  <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">
                    {group.group}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 p-3 rounded-xl bg-white/60 border border-red-50"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Visual: problematic flow */}
            <div className="mt-8 p-4 rounded-xl bg-white/80 border border-red-100 shadow-sm">
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                {['경매장', '도매상', '중간상', '소매점', '소비자'].map(
                  (name, i, arr) => (
                    <span key={name} className="flex items-center gap-1">
                      <span className="px-2.5 py-1.5 bg-red-50 rounded-lg text-red-700 border border-red-100">
                        {name}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight size={12} className="text-red-300 mx-0.5" />
                      )}
                    </span>
                  )
                )}
              </div>
              <p className="text-center text-red-500 text-xs mt-3 font-medium">
                4단계 유통 → 가격 2~4배 상승, 신선도 하락
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-50 to-emerald-50/30 border border-primary-100/80 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-primary-100 rounded-xl shadow-sm">
                <CheckCircle size={22} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                투유코리아의 솔루션
              </h3>
            </div>

            <ul className="space-y-3">
              {solutions.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-primary-100/50 hover:bg-white hover:shadow-sm hover:border-primary-200 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-sm">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Visual: improved flow */}
            <div className="mt-8 p-4 rounded-xl bg-white/80 border border-primary-100 shadow-sm">
              <div className="flex items-center justify-center gap-3 text-xs font-medium">
                <span className="px-4 py-2 bg-primary-50 rounded-lg text-primary-700 border border-primary-100">
                  경매장
                </span>
                <ArrowRight size={14} className="text-primary-400" />
                <span className="px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg text-white font-bold shadow-sm shadow-accent-500/20">
                  투유코리아
                </span>
                <ArrowRight size={14} className="text-primary-400" />
                <span className="px-4 py-2 bg-primary-50 rounded-lg text-primary-700 border border-primary-100">
                  소비자
                </span>
              </div>
              <p className="text-center text-primary-600 text-xs mt-3 font-medium">
                직거래 → 최대 40% 절감, 당일 신선 배송
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
