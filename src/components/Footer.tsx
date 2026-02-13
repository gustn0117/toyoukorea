export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/60">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">TY</span>
            </div>
            <div>
              <span className="font-bold text-gray-200 block text-sm leading-tight">투유코리아</span>
              <span className="text-xs text-gray-600">To You Korea</span>
            </div>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-gray-200 transition-colors">
              회사소개
            </a>
            <a href="#service" className="hover:text-gray-200 transition-colors">
              서비스
            </a>
            <a href="#market" className="hover:text-gray-200 transition-colors">
              시장기회
            </a>
            <a href="#business" className="hover:text-gray-200 transition-colors">
              비즈니스 모델
            </a>
          </nav>
        </div>

        <div className="pt-8 text-center">
          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} 투유코리아. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
