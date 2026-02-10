export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <span className="text-white font-bold text-xs">TY</span>
          </div>
          <span className="font-semibold text-gray-300">투유코리아</span>
          <span className="text-sm text-gray-600 ml-1">To You Korea</span>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition-colors">
            회사소개
          </a>
          <a href="#service" className="hover:text-white transition-colors">
            서비스
          </a>
          <a href="#market" className="hover:text-white transition-colors">
            시장기회
          </a>
          <a href="#business" className="hover:text-white transition-colors">
            비즈니스 모델
          </a>
        </nav>

        <div className="text-xs text-gray-600">
          © {new Date().getFullYear()} 투유코리아. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
