import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/92 via-primary-900/90 to-primary-800/88" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
            href="mailto:overwrap0@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600 transition-all hover:shadow-lg hover:shadow-accent-500/25"
          >
            파트너십 문의
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:overwrap0@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            투자 문의
          </a>
        </div>

        {/* Contact info */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: Mail,
              label: '이메일',
              value: 'overwrap0@gmail.com',
            },
            { icon: Phone, label: '전화', value: '032-217-9500' },
            { icon: MapPin, label: '주소', value: '서울특별시 강남구' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <item.icon
                size={20}
                className="mx-auto mb-2 text-primary-300"
              />
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
