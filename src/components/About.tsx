import Image from 'next/image';
import { ShieldCheck, Zap, Target } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: '중간 유통 제거',
    description:
      '경매장에서 소비자까지 직접 연결하여 시장가 대비 10~40%의 가격 절감을 실현합니다.',
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    icon: Zap,
    title: '최상의 신선도',
    description:
      '새벽 4시 경매 직후 당일 배송으로 최고 품질의 농수산물을 신선하게 공급합니다.',
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    icon: Target,
    title: '효율적 운영',
    description:
      '재고와 물류센터 없이 운영하여 낮은 고정비로 높은 가격 경쟁력을 확보합니다.',
    gradient: 'from-primary-600 to-accent-600',
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top: Image + Info */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          <div className="lg:col-span-2 relative h-[300px] lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/10 group">
            <Image
              src="https://images.unsplash.com/photo-1705928629040-c701a1e70531?w=700&q=80&fit=crop"
              alt="신선한 농산물"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-3">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-semibold text-sm tracking-wide mb-3">
              회사 소개
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              농수산물 유통을{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                더 단순하게
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              투유코리아는 경매장과 최종 소비자를 직접 연결하는 농수산물 직거래 플랫폼입니다.
              중간 유통 단계를 제거해 가격은 낮추고, 새벽 경매 직후 당일 배송으로
              신선도는 높입니다.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-primary-50/50 rounded-2xl p-6 border border-primary-100/50 shadow-sm">
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-700 font-bold">2% (업계 최저)</span>
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
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}>
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
