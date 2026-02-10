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
    <section id="service" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary-600 font-medium text-sm tracking-wide mb-3">
          서비스 흐름
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          이렇게 동작합니다
        </h2>
        <p className="text-gray-500 mb-14 max-w-lg">
          경매장에서 냉장고까지. 복잡한 유통 과정 없이 세 단계면 충분합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden h-full">
                <div className="relative h-44">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 text-xs font-medium text-primary-600 px-2.5 py-1 rounded-md">
                    {step.time}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-gray-300">{step.number}</span>
                    <step.icon size={18} className="text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-gray-300" />
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-3">
                  <ArrowRight size={16} className="text-gray-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-gray-500 bg-white rounded-lg border border-gray-100 px-6 py-4">
          <span className="font-semibold text-gray-900">요약</span>
          <span className="text-gray-300">|</span>
          새벽 경매 → 실시간 매칭 → 당일 배송.
          중간 과정 없이 최대 <span className="font-semibold text-accent-600">40% 절감</span>
        </div>
      </div>
    </section>
  );
}
