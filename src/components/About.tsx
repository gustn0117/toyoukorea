import { ShieldCheck, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: '중간 유통 제거',
    description:
      '경매장에서 소비자까지 직접 연결하여 시장가 대비 10~40%의 가격 절감을 실현합니다.',
    color: 'bg-primary-100 text-primary-700',
  },
  {
    icon: Zap,
    title: '최상의 신선도',
    description:
      '새벽 4시 경매 직후 당일 배송으로 최고 품질의 농수산물을 신선하게 공급합니다.',
    color: 'bg-accent-100 text-accent-700',
  },
  {
    icon: Target,
    title: '효율적 운영',
    description:
      '재고와 물류센터 없이 운영하여 낮은 고정비로 높은 가격 경쟁력을 확보합니다.',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wide uppercase">
            About Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            회사 개요
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            경매장과 최종 소비자를 직접 연결하는
            <br className="hidden sm:block" />
            대한민국 No.1 농수산물 직거래 플랫폼
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary-50 to-emerald-50 border border-primary-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                농수산물 직거래
                <br />
                유통 플랫폼
              </h3>
              <p className="text-gray-600 leading-relaxed">
                투유코리아는 중간 유통 단계 제거를 통한 가격 혁신과 신선도
                극대화를 핵심 가치로, 경매장과 최종 소비자를 직접 연결하는 혁신적인
                플랫폼을 운영합니다.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-xl shadow-primary-500/20">
                  <div className="text-center text-white">
                    <div className="text-5xl md:text-6xl font-bold">TY</div>
                    <div className="text-sm font-medium text-primary-200 mt-1">
                      To You Korea
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent-400 flex items-center justify-center text-white font-bold text-xs text-center p-2 shadow-lg">
                  경매장
                  <br />→ 식탁
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-xl ${item.color} mb-5`}
              >
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
