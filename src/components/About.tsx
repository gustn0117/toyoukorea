import Image from 'next/image';
import { ShieldCheck, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: '중간 유통 제거',
    description:
      '경매장에서 소비자까지 직접 연결하여 시장가 대비 10~40%의 가격 절감을 실현합니다.',
    accent: 'text-primary-600 bg-primary-50',
  },
  {
    icon: Zap,
    title: '최상의 신선도',
    description:
      '새벽 4시 경매 직후 당일 배송으로 최고 품질의 농수산물을 신선하게 공급합니다.',
    accent: 'text-accent-600 bg-accent-50',
  },
  {
    icon: Target,
    title: '효율적 운영',
    description:
      '재고와 물류센터 없이 운영하여 낮은 고정비로 높은 가격 경쟁력을 확보합니다.',
    accent: 'text-emerald-600 bg-emerald-50',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            회사 개요
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            경매장과 최종 소비자를 직접 연결하는
            <br className="hidden sm:block" />
            대한민국 No.1 농수산물 직거래 플랫폼
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-20 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                농수산물 직거래
                <br />
                <span className="text-primary-600">유통 플랫폼</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                투유코리아는 중간 유통 단계 제거를 통한 가격 혁신과 신선도
                극대화를 핵심 가치로, 경매장과 최종 소비자를 직접 연결하는 혁신적인
                플랫폼을 운영합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {['가격 혁신', '신선도 극대화', '수수료 2%'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1557844352-761f2565b576?w=600&q=80&fit=crop"
                alt="신선한 농산물 직거래"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                <div className="text-xs text-gray-500">플랫폼 수수료</div>
                <div className="text-xl font-bold text-accent-600">단 2%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${item.accent} mb-5`}>
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
