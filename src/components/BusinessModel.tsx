import { Users, Building2, DollarSign, TrendingUp, Rocket } from 'lucide-react';

const models = [
  {
    icon: Users,
    title: 'P2P 직거래 모델',
    target: '일반 소비자 + 소상공인',
    revenue: '플랫폼 수수료 2% (업계 최저)',
    feature: '재고 없는 중개 모델, 낮은 고정비',
    color: 'from-primary-500 to-primary-600',
    borderColor: 'border-primary-200',
    bgColor: 'bg-primary-50',
    glowColor: 'shadow-primary-500/5',
  },
  {
    icon: Building2,
    title: 'B2B 도매 모델',
    target: '전국 도소매 업체',
    revenue: '중개 수수료 + 정기 배송 계약',
    feature: '독점 도매상 구조 해체, 공정 거래',
    color: 'from-accent-500 to-accent-600',
    borderColor: 'border-accent-200',
    bgColor: 'bg-accent-50',
    glowColor: 'shadow-accent-500/5',
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
    <section id="business" className="relative section-padding bg-gray-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-600 font-semibold text-sm tracking-wide mb-4 shadow-sm border border-gray-100">
            Business Model
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            비즈니스 모델
          </h2>
        </div>

        {/* Two models */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {models.map((model, i) => (
            <div
              key={i}
              className={`group p-8 rounded-3xl bg-white border ${model.borderColor} hover:shadow-xl hover:${model.glowColor} transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${model.color} text-white mb-5 shadow-sm`}
              >
                <model.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {model.title}
              </h3>

              <div className="space-y-3">
                {[
                  { label: '타겟', value: model.target },
                  { label: '수익 모델', value: model.revenue },
                  { label: '특징', value: model.feature },
                ].map((row) => (
                  <div key={row.label} className={`p-4 rounded-xl ${model.bgColor} border border-transparent`}>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                      {row.label}
                    </div>
                    <div className="text-gray-800 font-semibold">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-900 to-primary-800 shadow-xl shadow-primary-900/20">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            경쟁 우위
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-400 mb-4 group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-colors">
                  <item.icon size={24} />
                </div>
                <div className="font-bold text-white text-lg mb-1">
                  {item.title}
                </div>
                <div className="text-primary-300 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
