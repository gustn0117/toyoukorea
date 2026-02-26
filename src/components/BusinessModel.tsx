import { Users, Building2, DollarSign, TrendingUp, Rocket } from 'lucide-react';

const models = [
  {
    icon: Users,
    title: 'P2P 직거래 모델',
    target: '일반 소비자 + 소상공인',
    revenue: '플랫폼 수수료 2% (업계 최저)',
    feature: '재고 없는 중개 모델, 낮은 고정비',
    accent: 'text-primary-600 bg-primary-50',
    borderColor: 'border-primary-200',
    tagBg: 'bg-primary-50',
  },
  {
    icon: Building2,
    title: 'B2B 도매 모델',
    target: '전국 도소매 업체',
    revenue: '중개 수수료 + 정기 배송 계약',
    feature: '독점 도매상 구조 해체, 공정 거래',
    accent: 'text-accent-600 bg-accent-50',
    borderColor: 'border-accent-200',
    tagBg: 'bg-accent-50',
  },
];

const advantages = [
  {
    icon: DollarSign,
    title: '비용 효율',
    desc: '물류센터/재고 불필요',
  },
  {
    icon: TrendingUp,
    title: '가격 경쟁력',
    desc: '10~40% 원가 절감',
  },
  {
    icon: Rocket,
    title: '빠른 확장',
    desc: '경매상 네트워크 구축',
  },
];

export default function BusinessModel() {
  return (
    <section id="business" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            Business Model
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            비즈니스 모델
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {models.map((model, i) => (
            <div
              key={i}
              className={`p-7 rounded-2xl bg-white border ${model.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl ${model.accent} mb-5`}>
                <model.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                {model.title}
              </h3>

              <div className="space-y-3">
                {[
                  { label: '타겟', value: model.target },
                  { label: '수익 모델', value: model.revenue },
                  { label: '특징', value: model.feature },
                ].map((row) => (
                  <div key={row.label} className={`p-3.5 rounded-lg ${model.tagBg}`}>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">
                      {row.label}
                    </div>
                    <div className="text-gray-800 font-semibold text-[15px]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-primary-900">
          <h3 className="text-lg font-bold text-white text-center mb-8">
            경쟁 우위
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-xl bg-white/[0.06] border border-white/10"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-accent-500/15 text-accent-400 mb-3">
                  <item.icon size={22} />
                </div>
                <div className="font-bold text-white text-lg mb-1">
                  {item.title}
                </div>
                <div className="text-white/60 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
