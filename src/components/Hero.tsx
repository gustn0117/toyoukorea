import Image from 'next/image';
import { ArrowRight, Truck, TrendingDown, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1676069096057-b95d34cb27d8?w=1920&q=80&fit=crop"
        alt="신선한 농산물"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/92 via-primary-900/85 to-primary-800/75" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-200 text-sm font-medium mb-8 border border-white/10">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              대한민국 최초 농수산물 P2P 직거래 플랫폼
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            경매장에서
            <br />
            당신의 식탁까지
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              신선함을 직배송
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-200/90 mb-10 max-w-xl leading-relaxed">
            중간 유통 없이 경매장에서 소비자까지 직접 연결합니다.
            <br className="hidden md:block" />
            시장가 대비 <strong className="text-white font-semibold">10~40% 저렴한</strong> 최상급 농수산물을 만나보세요.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#service"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-all hover:shadow-lg hover:shadow-accent-500/25 hover:scale-[1.02]"
            >
              서비스 알아보기
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
            >
              회사 소개
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-colors">
                <item.icon size={24} className="text-accent-400" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {item.stat}
                </div>
                <div className="text-primary-200 text-sm font-medium">
                  {item.label}
                </div>
                <div className="text-primary-400 text-xs mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
