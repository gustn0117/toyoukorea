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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wide uppercase">
            Business Model
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            비즈니스 모델
          </h2>
        </div>

        {/* Two models */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {models.map((model, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl bg-white border ${model.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${model.color} text-white mb-5`}
              >
                <model.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {model.title}
              </h3>

              <div className="space-y-4">
                <div className={`p-4 rounded-xl ${model.bgColor}`}>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    타겟
                  </div>
                  <div className="text-gray-800 font-semibold">
                    {model.target}
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${model.bgColor}`}>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    수익 모델
                  </div>
                  <div className="text-gray-800 font-semibold">
                    {model.revenue}
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${model.bgColor}`}>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                    특징
                  </div>
                  <div className="text-gray-800 font-semibold">
                    {model.feature}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="p-8 md:p-10 rounded-3xl bg-primary-900">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            경쟁 우위
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="inline-flex p-3 rounded-xl bg-accent-500/20 text-accent-400 mb-4">
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
