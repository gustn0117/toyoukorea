import { ShieldCheck, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: '중간 유통 제거',
    description:
      '경매장에서 소비자까지 직접 연결하여 시장가 대비 10~40%의 가격 절감을 실현합니다.',
  },
  {
    icon: Zap,
    title: '최상의 신선도',
    description:
      '새벽 4시 경매 직후 당일 배송으로 최고 품질의 농수산물을 신선하게 공급합니다.',
  },
  {
    icon: Target,
    title: '효율적 운영',
    description:
      '재고와 물류센터 없이 운영하여 낮은 고정비로 높은 가격 경쟁력을 확보합니다.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-primary-600 font-medium text-sm tracking-wide mb-3">
              회사 소개
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              농수산물 유통,
              <br />
              더 단순하게
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              투유코리아는 경매장과 최종 소비자를 직접 연결하는 농수산물 직거래 플랫폼입니다.
            </p>
            <p className="text-gray-500 leading-relaxed">
              중간 유통 단계를 제거해 가격은 낮추고, 새벽 경매 직후 당일 배송으로
              신선도는 높입니다. 재고나 물류센터 없이 운영하는 구조라 수수료도
              업계 최저 수준인 2%입니다.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TY</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">투유코리아</div>
                <div className="text-xs text-gray-400">To You Korea</div>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-400">사업 영역</span>
                <span className="text-gray-900 font-medium">농수산물 직거래 플랫폼</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-400">핵심 가치</span>
                <span className="text-gray-900 font-medium">가격 혁신 + 신선도 극대화</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-400">대상 고객</span>
                <span className="text-gray-900 font-medium">일반 소비자 · 소상공인</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">플랫폼 수수료</span>
                <span className="text-accent-600 font-bold">2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <item.icon size={22} className="text-primary-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
