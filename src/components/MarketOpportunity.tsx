import { AlertTriangle, CheckCircle } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wide uppercase">
            Market Opportunity
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            시장 기회
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg">
            현재 유통 구조의 문제점과 투유코리아의 솔루션
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="p-8 md:p-10 rounded-3xl bg-red-50 border border-red-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle size={24} className="text-red-600" />
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
                        className="flex items-start gap-3 text-gray-700"
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
            <div className="mt-8 p-4 rounded-xl bg-white/60 border border-red-100">
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                <span className="px-3 py-1.5 bg-red-100 rounded-lg text-red-700">
                  경매장
                </span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-red-100 rounded-lg text-red-700">
                  도매상
                </span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-red-100 rounded-lg text-red-700">
                  중간상
                </span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-red-100 rounded-lg text-red-700">
                  소매점
                </span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-red-100 rounded-lg text-red-700">
                  소비자
                </span>
              </div>
              <p className="text-center text-red-500 text-xs mt-2">
                4단계 유통 → 가격 2~4배 상승, 신선도 하락
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="p-8 md:p-10 rounded-3xl bg-primary-50 border border-primary-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-100 rounded-lg">
                <CheckCircle size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                투유코리아의 솔루션
              </h3>
            </div>

            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-primary-100"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <CheckCircle size={18} className="text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Visual: improved flow */}
            <div className="mt-8 p-4 rounded-xl bg-white/60 border border-primary-100">
              <div className="flex items-center justify-center gap-4 text-xs font-medium">
                <span className="px-4 py-2 bg-primary-100 rounded-lg text-primary-700">
                  경매장
                </span>
                <span className="text-primary-400 text-lg">→</span>
                <span className="px-4 py-2 bg-accent-100 rounded-lg text-accent-700 font-bold">
                  투유코리아
                </span>
                <span className="text-primary-400 text-lg">→</span>
                <span className="px-4 py-2 bg-primary-100 rounded-lg text-primary-700">
                  소비자
                </span>
              </div>
              <p className="text-center text-primary-600 text-xs mt-2 font-medium">
                직거래 → 최대 40% 절감, 당일 신선 배송
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
