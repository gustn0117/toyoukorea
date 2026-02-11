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
    <section id="market" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Market Opportunity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            시장 기회
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            현재 유통 구조의 문제점과 투유코리아의 솔루션
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="p-8 rounded-2xl bg-red-50/60 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle size={20} className="text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                현재 유통 구조의 문제점
              </h3>
            </div>

            <div className="space-y-6">
              {problems.map((group) => (
                <div key={group.group}>
                  <h4 className="text-sm font-semibold text-red-700 mb-3">
                    {group.group}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 text-[15px] p-3 rounded-lg bg-white border border-red-100/60"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Visual: problematic flow */}
            <div className="mt-6 p-4 rounded-lg bg-white border border-red-100">
              <div className="flex items-center justify-between text-xs text-gray-600 font-medium flex-wrap gap-y-2">
                {['경매장', '도매상', '중간상', '소매점', '소비자'].map(
                  (name, i, arr) => (
                    <span key={name} className="flex items-center gap-1">
                      <span className="px-2 py-1 bg-red-50 rounded text-red-700 border border-red-100">
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
          <div className="p-8 rounded-2xl bg-primary-50/60 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg">
                <CheckCircle size={20} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                투유코리아의 솔루션
              </h3>
            </div>

            <ul className="space-y-2">
              {solutions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-white border border-primary-100/60"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Visual: improved flow */}
            <div className="mt-6 p-4 rounded-lg bg-white border border-primary-100">
              <div className="flex items-center justify-center gap-3 text-xs font-medium">
                <span className="px-3 py-1.5 bg-primary-50 rounded text-primary-700 border border-primary-100">
                  경매장
                </span>
                <ArrowRight size={14} className="text-primary-400" />
                <span className="px-3 py-1.5 bg-accent-500 rounded text-white font-bold">
                  투유코리아
                </span>
                <ArrowRight size={14} className="text-primary-400" />
                <span className="px-3 py-1.5 bg-primary-50 rounded text-primary-700 border border-primary-100">
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
