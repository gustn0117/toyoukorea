import { Gavel, ArrowRight, RefreshCw, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Gavel,
    title: '경매장 직구매',
    time: '새벽 4시',
    description: '전문 경매사가 새벽 경매에서 최고 품질의 농수산물을 직접 낙찰받습니다.',
  },
  {
    number: '02',
    icon: RefreshCw,
    title: '실시간 매칭',
    time: '주문 즉시',
    description: '소비자의 주문과 경매상을 실시간으로 매칭하여 즉시 처리합니다.',
  },
  {
    number: '03',
    icon: Truck,
    title: '당일 직배송',
    time: '당일 도착',
    description: '중간 유통 단계 없이 경매장에서 소비자의 식탁까지 직배송합니다.',
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
              <div className="bg-white rounded-xl border border-gray-100 p-7 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-gray-100">
                    {step.number}
                  </span>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
                <step.icon size={22} className="text-gray-900 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
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
