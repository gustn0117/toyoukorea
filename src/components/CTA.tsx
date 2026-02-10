import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1549888722-bf34acd6a68c?w=1920&q=80&fit=crop"
        alt="푸른 들판"
        fill
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85" />

      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-8 lg:px-16 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500 font-semibold text-sm tracking-wide mb-3">
            파트너십
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            함께 만들어갈
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              파트너를 찾습니다
            </span>
          </h2>
          <p className="text-primary-300 mb-10 max-w-md leading-relaxed">
            투유코리아와 함께 농수산물 유통의 새로운 기준을 만들어보세요.
            파트너십 및 투자 문의를 환영합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="mailto:overwrap0@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:from-accent-600 hover:to-accent-700 transition-all hover:shadow-lg hover:shadow-accent-500/25 hover:scale-105"
            >
              파트너십 문의
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:overwrap0@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/10"
            >
              투자 문의
            </a>
          </div>

          <div className="space-y-3">
            {[
              { icon: Mail, label: '이메일', value: 'overwrap0@gmail.com' },
              { icon: Phone, label: '전화', value: '032-217-9500' },
              { icon: MapPin, label: '주소', value: '서울특별시 강남구' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm group"
              >
                <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <item.icon size={14} className="text-accent-400" />
                </div>
                <span className="text-primary-400">{item.label}</span>
                <span className="text-primary-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
