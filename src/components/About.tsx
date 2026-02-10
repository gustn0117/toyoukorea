import Image from 'next/image';
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
        {/* Top: Image + Info */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          <div className="lg:col-span-2 relative h-[300px] lg:h-full min-h-[320px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1705928629040-c701a1e70531?w=700&q=80&fit=crop"
              alt="신선한 농산물"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-3">
            <p className="text-primary-600 font-medium text-sm tracking-wide mb-3">
              회사 소개
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              농수산물 유통을 더 단순하게
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              투유코리아는 경매장과 최종 소비자를 직접 연결하는 농수산물 직거래 플랫폼입니다.
              중간 유통 단계를 제거해 가격은 낮추고, 새벽 경매 직후 당일 배송으로
              신선도는 높입니다.
            </p>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <span className="text-gray-400 block mb-1">사업 영역</span>
                  <span className="text-gray-900 font-medium">농수산물 직거래 플랫폼</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">핵심 가치</span>
                  <span className="text-gray-900 font-medium">가격 혁신 · 신선도 극대화</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">대상 고객</span>
                  <span className="text-gray-900 font-medium">일반 소비자 · 소상공인</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">플랫폼 수수료</span>
                  <span className="text-accent-600 font-bold">2% (업계 최저)</span>
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
