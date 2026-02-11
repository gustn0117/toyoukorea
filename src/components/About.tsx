import Image from 'next/image';
import { ShieldCheck, Zap, Target, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: '중간 유통 제거',
    description:
      '경매장에서 소비자까지 직접 연결하여 시장가 대비 10~40%의 가격 절감을 실현합니다.',
    color: 'from-primary-500 to-primary-600',
    lightColor: 'bg-primary-50',
  },
  {
    icon: Zap,
    title: '최상의 신선도',
    description:
      '새벽 4시 경매 직후 당일 배송으로 최고 품질의 농수산물을 신선하게 공급합니다.',
    color: 'from-accent-500 to-accent-600',
    lightColor: 'bg-accent-50',
  },
  {
    icon: Target,
    title: '효율적 운영',
    description:
      '재고와 물류센터 없이 운영하여 낮은 고정비로 높은 가격 경쟁력을 확보합니다.',
    color: 'from-emerald-500 to-emerald-600',
    lightColor: 'bg-emerald-50',
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm tracking-wide mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            회사 개요
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            경매장과 최종 소비자를 직접 연결하는
            <br className="hidden sm:block" />
            대한민국 No.1 농수산물 직거래 플랫폼
          </p>
        </div>

        {/* Mission statement */}
        <div className="mb-20 rounded-3xl bg-gradient-to-br from-primary-50 via-white to-emerald-50 border border-primary-100/80 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                농수산물 직거래
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  유통 플랫폼
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                투유코리아는 중간 유통 단계 제거를 통한 가격 혁신과 신선도
                극대화를 핵심 가치로, 경매장과 최종 소비자를 직접 연결하는 혁신적인
                플랫폼을 운영합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                {['가격 혁신', '신선도 극대화', '수수료 2%'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1705928629040-c701a1e70531?w=600&q=80&fit=crop"
                alt="신선한 농산물 직거래"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50/80 via-transparent to-transparent md:from-white/40" />
              <div className="absolute bottom-4 right-4 px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-white/50">
                <div className="text-xs text-gray-500">플랫폼 수수료</div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                  단 2%
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
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-primary-500/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-5 shadow-sm`}
              >
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 <ArrowRight size={14} />
              </div>
              {/* Hover glow */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
