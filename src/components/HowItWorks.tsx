import Image from 'next/image';
import { Gavel, ArrowRight, RefreshCw, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Gavel,
    title: '경매장 직구매',
    subtitle: '새벽 4시 경매',
    description: '전문 경매사가 새벽 경매에서 최고 품질의 농수산물을 직접 낙찰받습니다.',
    color: 'from-primary-500 to-primary-600',
    iconBg: 'bg-primary-100 text-primary-600',
    image: 'https://images.unsplash.com/photo-1495522256788-dc85b944b656?w=600&q=80&fit=crop',
    imageAlt: '채소 시장 진열대',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: '실시간 매칭',
    subtitle: '소비자 주문 즉시 수락',
    description: '소비자의 주문과 경매상을 실시간으로 매칭하여 즉시 처리합니다.',
    color: 'from-accent-500 to-accent-600',
    iconBg: 'bg-accent-100 text-accent-600',
    image: 'https://images.unsplash.com/photo-1728044849248-e90f3ec6a889?w=600&q=80&fit=crop',
    imageAlt: '스마트폰 음식 주문',
  },
  {
    number: '03',
    icon: Truck,
    title: '당일 직배송',
    subtitle: '중간 유통 없이 배송',
    description: '중간 유통 단계 없이 경매장에서 소비자의 식탁까지 신선하게 직배송합니다.',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
    image: 'https://images.unsplash.com/photo-1757627550652-30788bfce978?w=600&q=80&fit=crop',
    imageAlt: '나무 상자에 담긴 신선한 채소',
  },
];

export default function HowItWorks() {
  return (
    <section id="service" className="relative section-padding bg-gray-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-600 font-semibold text-sm tracking-wide mb-4 shadow-sm border border-gray-100">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            서비스 소개
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg">
            경매장에서 냉장고까지, 단 하나의 클릭
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-300 via-accent-300 to-emerald-300" />

          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-gray-900/10 mb-6 ring-4 ring-white`}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div className="group w-full rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                      Step {step.number}
                    </div>
                  </div>
                  <div className="p-8">
                    <div
                      className={`inline-flex p-3 rounded-xl ${step.iconBg} mb-4`}
                    >
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ArrowRight
                      size={16}
                      className="text-gray-400 rotate-90"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process summary */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary-900 to-primary-800 text-center shadow-lg shadow-primary-900/20">
          <p className="text-primary-100 text-lg md:text-xl">
            <span className="text-white font-semibold">새벽 경매</span>
            &nbsp;→&nbsp;
            <span className="text-white font-semibold">실시간 매칭</span>
            &nbsp;→&nbsp;
            <span className="text-white font-semibold">당일 배송</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            중간 과정 없이{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500 font-bold">최대 40% 절감</span>
          </p>
        </div>
      </div>
    </section>
  );
}
