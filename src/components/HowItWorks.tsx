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
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80',
    imageAlt: '수산물 경매 시장',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: '실시간 매칭',
    subtitle: '소비자 주문 즉시 수락',
    description: '소비자의 주문과 경매상을 실시간으로 매칭하여 즉시 처리합니다.',
    color: 'from-accent-500 to-accent-600',
    iconBg: 'bg-accent-100 text-accent-600',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    imageAlt: '모바일 주문 매칭',
  },
  {
    number: '03',
    icon: Truck,
    title: '당일 직배송',
    subtitle: '중간 유통 없이 배송',
    description: '중간 유통 단계 없이 경매장에서 소비자의 식탁까지 신선하게 직배송합니다.',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
    imageAlt: '신선식품 배송',
  },
];

export default function HowItWorks() {
  return (
    <section id="service" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
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
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold shadow-lg mb-6`}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div className="w-full rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
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
                  <ArrowRight
                    size={24}
                    className="text-gray-300 rotate-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process summary */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-primary-900 text-center">
          <p className="text-primary-100 text-lg md:text-xl">
            <span className="text-white font-semibold">새벽 경매</span>
            &nbsp;→&nbsp;
            <span className="text-white font-semibold">실시간 매칭</span>
            &nbsp;→&nbsp;
            <span className="text-white font-semibold">당일 배송</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            중간 과정 없이{' '}
            <span className="text-accent-400 font-bold">최대 40% 절감</span>
          </p>
        </div>
      </div>
    </section>
  );
}
