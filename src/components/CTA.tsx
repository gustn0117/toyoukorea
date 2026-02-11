import Image from 'next/image';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1549888722-bf34acd6a68c?w=1920&q=80&fit=crop"
        alt="농업 풍경"
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85" />

      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-accent-300 font-semibold text-sm tracking-wide mb-6 border border-white/10">
          Partnership
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          경매장과 소비자를 잇는
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
            새로운 유통 혁신
          </span>
        </h2>
        <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
          투유코리아와 함께 중간 유통 없는 합리적인 가격의 신선한 농수산물을
          경험해 보세요. 파트너십 및 투자 문의를 환영합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:tooyoukorea@gmail.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-all hover:shadow-lg hover:shadow-accent-500/25 hover:scale-[1.02]"
          >
            파트너십 문의
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:tooyoukorea@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
          >
            투자 문의
          </a>
        </div>

        {/* Contact info */}
        <div className="grid sm:grid-cols-2 gap-6 text-center max-w-md mx-auto">
          {[
            {
              icon: Mail,
              label: '이메일',
              value: 'tooyoukorea@gmail.com',
            },
            { icon: MapPin, label: '주소', value: '서울특별시 강남구' },
          ].map((item, i) => (
            <div key={i} className="group p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="inline-flex p-2 rounded-lg bg-white/5 mb-2 group-hover:bg-white/10 transition-colors">
                <item.icon
                  size={18}
                  className="text-accent-400"
                />
              </div>
              <div className="text-xs text-primary-400 mb-1">
                {item.label}
              </div>
              <div className="text-white text-sm font-medium">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
