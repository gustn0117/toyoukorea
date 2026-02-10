import { ArrowRight, Truck, TrendingDown, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary-950">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-400 text-sm font-medium tracking-wide mb-6">
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

            <div className="flex flex-col sm:flex-row gap-3">
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
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {[
              {
                icon: TrendingDown,
                stat: '10~40%',
                label: '가격 절감',
                desc: '중간 유통 마진을 제거해서 가능한 가격',
              },
              {
                icon: Truck,
                stat: '당일 배송',
                label: '새벽 경매 직후 출발',
                desc: '경매장에서 바로 배송, 최상의 신선도',
              },
              {
                icon: Leaf,
                stat: '수수료 2%',
                label: '업계 최저',
                desc: '재고·물류센터 없는 구조로 낮은 운영비',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-xl bg-primary-900/60 border border-primary-800"
              >
                <div className="p-2.5 rounded-lg bg-primary-800">
                  <item.icon size={20} className="text-accent-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">{item.stat}</span>
                    <span className="text-primary-400 text-sm">{item.label}</span>
                  </div>
                  <p className="text-primary-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
