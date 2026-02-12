import Image from 'next/image';
import { Gavel, ArrowRight, ArrowDown, RefreshCw, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Gavel,
    title: '경매장 직구매',
    subtitle: '새벽 4시 경매',
    description: '전문 경매사가 새벽 경매에서 최고 품질의 농수산물을 직접 낙찰받습니다.',
    accent: 'bg-primary-600',
    iconBg: 'bg-primary-50 text-primary-600',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&q=80&fit=crop',
    imageAlt: '야외 농산물 시장',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: '실시간 매칭',
    subtitle: '소비자 주문 즉시 수락',
    description: '소비자의 주문과 경매상을 실시간으로 매칭하여 즉시 처리합니다.',
    accent: 'bg-accent-500',
    iconBg: 'bg-accent-50 text-accent-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
    imageAlt: '스마트폰 앱 주문',
  },
  {
    number: '03',
    icon: Truck,
    title: '당일 직배송',
    subtitle: '중간 유통 없이 배송',
    description: '중간 유통 단계 없이 경매장에서 소비자의 식탁까지 신선하게 직배송합니다.',
    accent: 'bg-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
    image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&q=80&fit=crop',
    imageAlt: '배달 오토바이',
  },
];

export default function HowItWorks() {
  return (
    <section id="service" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            서비스 소개
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            경매장에서 냉장고까지, 단 하나의 클릭
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Number badge */}
                <div className={`w-12 h-12 rounded-full ${step.accent} flex items-center justify-center text-white text-sm font-bold mb-6 shadow-sm`}>
                  {step.number}
                </div>

                {/* Card */}
                <div className="group w-full rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className={`inline-flex p-2.5 rounded-lg ${step.iconBg} mb-3`}>
                      <step.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 mb-2">
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
                  <ArrowDown size={20} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process summary */}
        <div className="mt-14 p-5 md:p-6 rounded-xl bg-primary-900 text-center">
          <p className="text-white/80 text-base md:text-lg">
            <span className="text-white font-semibold">새벽 경매</span>
            <span className="mx-2 text-white/40">&rarr;</span>
            <span className="text-white font-semibold">실시간 매칭</span>
            <span className="mx-2 text-white/40">&rarr;</span>
            <span className="text-white font-semibold">당일 배송</span>
            <span className="mx-4 text-white/30">|</span>
            중간 과정 없이{' '}
            <span className="text-accent-400 font-bold">최대 40% 절감</span>
          </p>
        </div>
      </div>
    </section>
  );
}
