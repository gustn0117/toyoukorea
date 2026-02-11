export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-sm shadow-primary-500/20">
              <span className="text-white font-bold text-sm">TY</span>
            </div>
            <div>
              <span className="font-bold text-gray-200 block leading-tight">투유코리아</span>
              <span className="text-xs text-gray-600">To You Korea</span>
            </div>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary-400 transition-colors">
              회사소개
            </a>
            <a href="#service" className="hover:text-primary-400 transition-colors">
              서비스
            </a>
            <a href="#market" className="hover:text-primary-400 transition-colors">
              시장기회
            </a>
            <a href="#business" className="hover:text-primary-400 transition-colors">
              비즈니스 모델
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} 투유코리아. All rights reserved.
          </div>
          <div className="text-xs text-gray-700">
            tooyoukorea@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
