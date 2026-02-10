import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="bg-primary-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Text */}
          <div className="px-6 py-20 md:px-8 lg:px-16 lg:py-28">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              함께 만들어갈
              <br />
              파트너를 찾습니다
            </h2>
            <p className="text-primary-400 mb-10 max-w-md">
              투유코리아와 함께 농수산물 유통의 새로운 기준을 만들어보세요.
              파트너십 및 투자 문의를 환영합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="mailto:overwrap0@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
              >
                파트너십 문의
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:overwrap0@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-700 text-primary-300 font-medium rounded-lg hover:border-primary-500 hover:text-white transition-colors"
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
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon size={15} className="text-primary-600" />
                  <span className="text-primary-500">{item.label}</span>
                  <span className="text-primary-300">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1549888722-bf34acd6a68c?w=800&q=80&fit=crop"
              alt="푸른 들판"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
