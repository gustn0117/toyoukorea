'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';

const EMAIL = 'tooyoukorea@gmail.com';

export default function CTA() {
  const formRef = useRef<HTMLFormElement>(null);
  const [subject, setSubject] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `연락처: ${contact}\n\n${message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1668755930355-3d89aa8b4c8b?w=1920&q=80&fit=crop"
        alt="농업 풍경"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/85" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent-400 font-semibold text-sm tracking-wide uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            문의하기
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            궁금한 점이 있으시면 아래 양식을 작성해 주세요.
            <br />
            문의하기 버튼을 누르면 메일 앱이 열립니다.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/10 p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1.5">
              제목
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="문의 제목을 입력해 주세요"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500/60 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-white/70 mb-1.5">
              연락처
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="이메일 또는 전화번호를 입력해 주세요"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500/60 focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
              문의내용
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="문의 내용을 자세히 입력해 주세요"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-500/60 focus:border-transparent transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 active:scale-[0.98] transition-all"
          >
            문의하기
            <Send size={18} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-white/40 text-sm">
            <Mail size={16} className="text-accent-400" />
            <span>{EMAIL}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
