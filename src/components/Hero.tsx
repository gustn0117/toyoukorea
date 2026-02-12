import Image from 'next/image';
import { ArrowRight, TrendingDown, Truck, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1920&q=80&fit=crop"
        alt="신선한 농산물"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-8 border border-white/15">
              <span className="w-1.5 h-1.5 bg-accent-400 rounded-full" />
              대한민국 최초 농수산물 P2P 직거래 플랫폼
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
            경매장에서
            <br />
            당신의 식탁까지,
            <br />
            <span className="text-accent-400">신선함을 직배송</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
            중간 유통 없이 경매장에서 소비자까지 직접 연결합니다.
            시장가 대비 <strong className="text-white font-semibold">10~40% 저렴한</strong> 최상급 농수산물을 만나보세요.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="#service"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all"
            >
              서비스 알아보기
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/15"
            >
              회사 소개
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: TrendingDown,
              stat: '10~40%',
              label: '가격 절감',
              desc: '중간 마진 제거',
            },
            {
              icon: Truck,
              stat: '당일 배송',
              label: '새벽 경매 직후',
              desc: '최상 신선도 보장',
            },
            {
              icon: Leaf,
              stat: '2%',
              label: '업계 최저 수수료',
              desc: '합리적인 플랫폼 비용',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.07] backdrop-blur-sm border border-white/10"
            >
              <div className="p-2.5 rounded-lg bg-accent-500/15">
                <item.icon size={22} className="text-accent-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{item.stat}</div>
                <div className="text-white/70 text-sm font-medium">{item.label}</div>
                <div className="text-white/40 text-xs mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
