import Image from 'next/image';
import { ArrowRight, Truck, TrendingDown, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-primary-950 pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Text */}
          <div className="py-12 lg:py-20">
            <p className="text-primary-400 text-sm font-medium tracking-wide mb-5">
              농수산물 P2P 직거래 플랫폼
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              경매장에서
              <br />
              당신의 식탁까지,
              <br />
              <span className="text-accent-400">직배송</span>
            </h1>

            <p className="text-lg text-primary-300 mb-10 max-w-md leading-relaxed">
              중간 유통 없이 경매장에서 소비자까지 직접 연결합니다.
              시장가 대비 10~40% 저렴한 최상급 농수산물.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#service"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
              >
                서비스 알아보기
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-700 text-primary-300 font-medium rounded-lg hover:border-primary-500 hover:text-white transition-colors"
              >
                회사 소개
              </a>
            </div>

            {/* Compact stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { icon: TrendingDown, text: '10~40% 절감' },
                { icon: Truck, text: '당일 배송' },
                { icon: Leaf, text: '수수료 2%' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-primary-400">
                  <item.icon size={15} className="text-accent-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[560px] rounded-t-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1676069096057-b95d34cb27d8?w=800&q=80&fit=crop"
              alt="신선한 농산물 진열"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
