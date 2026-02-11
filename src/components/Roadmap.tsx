import { MapPin, Expand, Globe } from 'lucide-react';

const phases = [
  {
    icon: MapPin,
    phase: 'Phase 1',
    timeline: '0~12개월',
    title: '서울 집중 공략',
    region: '강남/송파/강동 중심',
    detail: 'P2P 모델 검증 및 안착',
    accent: 'bg-primary-600',
    iconBg: 'bg-primary-50 text-primary-600',
    tagBg: 'bg-primary-50 text-primary-700',
    dotColor: 'bg-primary-600',
  },
  {
    icon: Expand,
    phase: 'Phase 2',
    timeline: '~24개월',
    title: '수도권 확장',
    region: '성남/수원/용인/인천',
    detail: 'B2B 서비스 본격화',
    accent: 'bg-accent-500',
    iconBg: 'bg-accent-50 text-accent-600',
    tagBg: 'bg-accent-50 text-accent-700',
    dotColor: 'bg-accent-500',
  },
  {
    icon: Globe,
    phase: 'Phase 3',
    timeline: '24개월~',
    title: '전국 확대',
    region: '주요 광역시 진출',
    detail: '업계 1위 플랫폼 도약',
    accent: 'bg-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-700',
    dotColor: 'bg-emerald-600',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            실행 계획
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-6 md:space-y-0">
            {phases.map((phase, i) => (
              <div key={i} className="relative md:py-8">
                {/* Desktop timeline dot */}
                <div
                  className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${phase.dotColor} border-[3px] border-white shadow-sm z-10`}
                />

                <div
                  className={`md:w-[46%] ${
                    i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="p-7 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${phase.iconBg}`}>
                        <phase.icon size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-gray-400">
                          {phase.timeline}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${phase.tagBg} mb-3`}>
                      {phase.region}
                    </span>
                    <p className="text-gray-500 text-[15px]">{phase.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
