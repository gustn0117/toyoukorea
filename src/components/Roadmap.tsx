import { MapPin, Expand, Globe } from 'lucide-react';

const phases = [
  {
    icon: MapPin,
    phase: 'Phase 1',
    timeline: '0~12개월',
    title: '서울 집중 공략',
    region: '강남/송파/강동 중심',
    detail: 'P2P 모델 검증 및 안착',
    color: 'from-primary-500 to-primary-600',
    borderColor: 'border-primary-200',
    bgColor: 'bg-primary-50',
    dotColor: 'bg-primary-500',
  },
  {
    icon: Expand,
    phase: 'Phase 2',
    timeline: '~24개월',
    title: '수도권 확장',
    region: '성남/수원/용인/인천',
    detail: 'B2B 서비스 본격화',
    color: 'from-accent-500 to-accent-600',
    borderColor: 'border-accent-200',
    bgColor: 'bg-accent-50',
    dotColor: 'bg-accent-500',
  },
  {
    icon: Globe,
    phase: 'Phase 3',
    timeline: '24개월~',
    title: '전국 확대',
    region: '주요 광역시 진출',
    detail: '업계 1위 플랫폼 도약',
    color: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50',
    dotColor: 'bg-emerald-500',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wide uppercase">
            Roadmap
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            실행 계획
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-emerald-300" />

          <div className="space-y-8 md:space-y-0">
            {phases.map((phase, i) => (
              <div key={i} className="relative md:py-8">
                {/* Desktop timeline dot */}
                <div
                  className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full ${phase.dotColor} border-4 border-white shadow-md z-10`}
                />

                <div
                  className={`md:w-[45%] ${
                    i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div
                    className={`p-8 rounded-2xl bg-white border ${phase.borderColor} hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${phase.color} text-white`}
                      >
                        <phase.icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-gray-500">
                          {phase.timeline}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${phase.bgColor} mb-3`}
                    >
                      {phase.region}
                    </div>
                    <p className="text-gray-500">{phase.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target metrics */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">73억원</div>
            <div className="text-primary-200">1년차 월 거래액 목표</div>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">2년</div>
            <div className="text-accent-100">손익분기점 달성 목표</div>
          </div>
        </div>
      </div>
    </section>
  );
}
