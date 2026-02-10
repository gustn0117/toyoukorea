import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '투유코리아 | 경매장에서 당신의 식탁까지',
  description:
    '중간 유통 없이 경매장에서 소비자까지 직배송. 시장가 대비 10~40% 저렴한 최상급 농수산물을 만나보세요.',
  keywords: '농수산물, 직거래, 경매, 신선식품, 당일배송, 투유코리아',
  openGraph: {
    title: '투유코리아 | To You Korea',
    description: '경매장에서 당신의 식탁까지, 신선함을 직배송합니다',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
