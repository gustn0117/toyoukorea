import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1549888722-bf34acd6a68c?w=1920&q=80&fit=crop"
        alt="농업 풍경"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/85" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">
          Partnership
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
          경매장과 소비자를 잇는
          <br />
          <span className="text-accent-400">새로운 유통 혁신</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          투유코리아와 함께 중간 유통 없는 합리적인 가격의 신선한 농수산물을
          경험해 보세요. 파트너십 및 투자 문의를 환영합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a
            href="mailto:tooyoukorea@gmail.com"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all"
          >
            파트너십 문의
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:tooyoukorea@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/15"
          >
            투자 문의
          </a>
        </div>

        <div className="inline-block p-4 rounded-xl bg-white/[0.06] border border-white/10">
          <Mail size={18} className="text-accent-400 mx-auto mb-2" />
          <div className="text-xs text-white/40 mb-0.5">이메일</div>
          <div className="text-white text-sm font-medium">tooyoukorea@gmail.com</div>
        </div>
      </div>
    </section>
  );
}
