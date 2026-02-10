import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-primary-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            함께 만들어갈 파트너를 찾습니다
          </h2>
          <p className="text-primary-400 text-lg max-w-xl mx-auto">
            투유코리아와 함께 농수산물 유통의 새로운 기준을 만들어보세요.
            파트너십 및 투자 문의를 환영합니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
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

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: Mail,
              label: '이메일',
              value: 'overwrap0@gmail.com',
            },
            { icon: Phone, label: '전화', value: '032-217-9500' },
            { icon: MapPin, label: '주소', value: '서울특별시 강남구' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-lg bg-primary-900 border border-primary-800">
              <item.icon size={16} className="text-primary-500 flex-shrink-0" />
              <div>
                <div className="text-xs text-primary-500">{item.label}</div>
                <div className="text-white text-sm">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
