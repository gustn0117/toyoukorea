# 투유코리아 (To You Korea) 홈페이지

경매장에서 당신의 식탁까지, 신선함을 직배송하는 농수산물 P2P 직거래 플랫폼

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
npm start
```

개발 서버: [http://localhost:3000](http://localhost:3000)

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css    # 글로벌 스타일, Tailwind
│   ├── layout.tsx     # 루트 레이아웃, 메타데이터
│   └── page.tsx       # 메인 페이지
└── components/
    ├── Header.tsx           # 네비게이션 (반응형)
    ├── Hero.tsx             # 히어로 섹션
    ├── About.tsx            # 회사 개요
    ├── HowItWorks.tsx       # 서비스 소개 (3단계)
    ├── MarketOpportunity.tsx # 시장 기회
    ├── BusinessModel.tsx    # 비즈니스 모델
    ├── Roadmap.tsx          # 실행 계획 타임라인
    ├── CTA.tsx              # 문의 섹션
    └── Footer.tsx           # 푸터
```

## 섹션 안내

1. **히어로**: 핵심 가치 (가격 절감, 당일 배송, 최저 수수료)
2. **회사 개요**: 미션, 핵심 가치 3가지
3. **서비스 소개**: 경매장 → 실시간 매칭 → 당일 배송 플로우
4. **시장 기회**: 현재 문제점 vs 솔루션 비교
5. **비즈니스 모델**: P2P + B2B 듀얼 모델, 경쟁 우위
6. **로드맵**: 3단계 성장 계획, 목표 지표
7. **문의**: 파트너십/투자 CTA
