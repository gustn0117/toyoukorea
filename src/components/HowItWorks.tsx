import Image from 'next/image';
import { Gavel, ArrowRight, RefreshCw, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Gavel,
    title: '경매장 직구매',
    time: '새벽 4시',
    description: '전문 경매사가 새벽 경매에서 최고 품질의 농수산물을 직접 낙찰받습니다.',
    image: 'https://images.unsplash.com/photo-1495522256788-dc85b944b656?w=500&q=80&fit=crop',
    imageAlt: '채소 시장 진열대',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: '실시간 매칭',
    time: '주문 즉시',
    description: '소비자의 주문과 경매상을 실시간으로 매칭하여 즉시 처리합니다.',
    image: 'https://images.unsplash.com/photo-1728044849248-e90f3ec6a889?w=500&q=80&fit=crop',
    imageAlt: '모바일 주문',
  },
  {
    number: '03',
    icon: Truck,
    title: '당일 직배송',
    time: '당일 도착',
    description: '중간 유통 단계 없이 경매장에서 소비자의 식탁까지 직배송합니다.',
    image: 'https://images.unsplash.com/photo-1757627550652-30788bfce978?w=500&q=80&fit=crop',
    imageAlt: '나무 상자에 담긴 신선한 채소',
  },
];

export default function HowItWorks() {
  return (
    <section id="service" className="relative section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-semibold text-sm tracking-wide mb-3">
          서비스 흐름
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          이렇게{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
            동작합니다
          </span>
        </h2>
        <p className="text-gray-500 mb-14 max-w-lg">
          경매장에서 냉장고까지. 복잡한 유통 과정 없이 세 단계면 충분합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden h-full shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-primary-900/10 to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-600 px-2.5 py-1 rounded-md">
                    {step.time}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/30">
                      <span className="text-xs font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100">
                      <step.icon size={16} className="text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md">
                    <ArrowRight size={12} className="text-white" />
                  </div>
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md">
                    <ArrowRight size={12} className="text-white rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-gray-500 bg-gradient-to-r from-white to-primary-50/50 rounded-xl border border-primary-100/50 px-6 py-4 shadow-sm">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-900">요약</span>
          <span className="text-gray-300">|</span>
          새벽 경매 → 실시간 매칭 → 당일 배송.
          중간 과정 없이 최대 <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-700">40% 절감</span>
        </div>
      </div>
    </section>
  );
}
