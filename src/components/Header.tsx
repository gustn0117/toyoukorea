'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#service' },
  { label: '시장기회', href: '#market' },
  { label: '비즈니스 모델', href: '#business' },
  { label: '로드맵', href: '#roadmap' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TY</span>
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            투유코리아
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 text-sm font-semibold px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            문의하기
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center font-semibold px-5 py-2.5 bg-primary-600 text-white rounded-lg mt-2"
          >
            문의하기
          </a>
        </div>
      )}
    </header>
  );
}
