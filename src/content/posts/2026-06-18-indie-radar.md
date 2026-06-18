---
title: 브라우저만으로 184개 도구, 1인 빌더 신호 어디까지 왔나
date: '2026-06-18'
topic: indie-radar
draft_id: 2026-06-18-indie-radar
---

오늘 수집된 17개 항목은 1인 빌더 커뮤니티(Product Hunt·Reddit·Show HN)에서 고르게 포착되었습니다. 가드레일 3개(AWS·모바일·로컬라이징) 기준을 적용한 결과, 17개 중 AWS 단독 실패 2개, 모바일 실패 다수, 로컬라이징 실패 다수가 걸러졌습니다. 최종 통과 항목은 3개입니다. 커뮤니티 토론·제품 미출시·OS 플랫폼 항목은 선별 대상에서 제외하였습니다.

## 목차
1. [US-2 크리에이터 도구] Brevio
2. [US-1 단일기능 SaaS] InvoiceAnt
3. [JP-2 미니멀 도구] Kompari

---

## 1. [US-2 크리에이터 도구] Brevio

**한 줄**: 서버·업로드 없이 브라우저만으로 184개 도구를 제공하는 무료 유틸리티 모음

**원본**: [brevio.pro](https://brevio.pro/) · maker 1인 · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

클라이언트(Client) 사이드 전용 모델은 1인 운영의 구조적 강점입니다.

서버 비용이 거의 없고, **AWS S3+CloudFront** 정적 호스팅만으로 글로벌 배포가 완결됩니다.

PDF 병합·이미지 변환·개발자 유틸리티 같은 도구는 카테고리별로 묶어 광고 혹은 프리미엄 구독으로 수익화하기 쉽습니다.

한국 시장에서는 네이버·카카오 계정 기반 로그인과 한국어 UI를 붙이는 것이 최우선 진입 경로입니다.

"무료 + 업로드 없음"이라는 신뢰 메시지는 개인정보 민감도가 높은 한국 사용자에게 차별화 포인트로 작동합니다.

리스크는 두 가지입니다.

첫째, 184개 도구 중 상당수는 구글 검색 1페이지에서 이미 경쟁 도구와 맞닥뜨립니다.

둘째, 광고 수익 모델은 트래픽이 임계점(월 수십만 방문)에 도달하기 전까지 수익이 미미합니다.

---

## 2. [US-1 단일기능 SaaS] InvoiceAnt

**한 줄**: 로컬 저장 방식으로 데이터 유출 걱정 없이 쓰는 무료 브라우저 인보이싱 도구

**원본**: [invoiceant.com](https://invoiceant.com) · maker 1인 · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일\* · ✅ 한국

\*모바일 가드레일은 통과하나, 브라우저 기반이므로 네이티브 앱 수준의 UX는 아닙니다.

브라우저 로컬 스토리지(Local Storage) 방식은 백엔드 서버 부담이 없어 1인 운영 비용 구조에 적합합니다.

**AWS S3/CloudFront** 정적 배포로 충분하고, 유료 기능이 추가될 경우에만 람다(Lambda)를 얹으면 됩니다.

한국 시장에는 구체적인 공백이 있습니다.

프리랜서·1인 사업자용 국문 세금계산서 양식과 원화(KRW) 지원을 추가하면, 홈택스 연동 없이도 초기 고객을 유인할 수 있습니다.

"세금계산서 vs 일반 청구서" 분기 기능 하나만 붙여도 한국 경쟁 구도가 달라집니다.

리스크는 세 가지입니다.

첫째, 수익화 경로가 현재 비어 있습니다.

둘째, 국세청 전자세금계산서 연동을 구현하면 인증 비용과 법적 요건이 발생합니다.

셋째, 무료 모델 진입자(카카오 비즈폼 등)와의 경쟁이 예상됩니다.

---

## 3. [JP-2 미니멀 도구] Kompari

**한 줄**: 식료품 쇼핑 현장에서 단위 가격을 즉시 비교해 가성비를 계산하는 안드로이드 앱

**원본**: [Reddit 원문](https://www.reddit.com/r/SideProject/comments/1u8hx3s/i_built_kompari_a_unit_price_calculator_that_will) · maker 1인 · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

**오프라인 계산기** 구조는 서버 의존도가 없어 유지비가 사실상 0에 수렴합니다.

플레이스토어(Play Store) 배포 기반이므로 1인 빌더가 배포·업데이트 주기를 단독으로 통제할 수 있습니다.

16개 언어·다중 화폐를 이미 지원하므로, 한국어·원화 추가는 기술 부담이 낮습니다.

한국 마트(이마트·쿠팡)는 용량별 가격 표기가 불규칙해 단위 가격 계산 니즈가 실재합니다.

이 구조적 공백은 KR-2(한국 물가 민감도 신호)와 맞닿습니다.

리스크도 명확합니다.

첫째, 기능이 단순해 후발 카피캣(Copycat) 진입 장벽이 낮습니다.

둘째, 오프라인 도구는 광고 외 수익화 모델이 제한적이고, 유료 전환율이 미니멀 도구 카테고리에서 전통적으로 낮습니다.

---

## 출처

- [Show HN: I built 184 free browser tools – PDF, image, dev, AI tasks, no upload](https://brevio.pro/) — show-hn-ai (P1)
- [Wolfram Language 15](https://www.producthunt.com/products/wolfram-mathematica) — ph-ai (P1)
- [Android 17](https://www.producthunt.com/products/android) — ph-ai (P1)
- [Henji](https://www.producthunt.com/products/henji) — ph-ai (P1)
- [idmly](https://www.producthunt.com/products/idmly) — ph-ai (P1)
- [boring niche idea: rental businesses are still running on spreadsheets](https://www.reddit.com/r/microsaas/comments/1u8qsxu/boring_niche_idea_rental_businesses_are_still) — r-microsaas (P3)
- [I feel like I'm stuck in a loop and I honestly don't know how to get out of it.](https://www.reddit.com/r/SaaS/comments/1u8q8po/i_feel_like_im_stuck_in_a_loop_and_i_honestly) — r-saas (P3)
- [12 month old solo founder trying to hit $10k MRR before daycare. Need advice.](https://www.reddit.com/r/SaaS/comments/1u8nxzs/12_month_old_solo_founder_trying_to_hit_10k_mrr) — r-saas (P3)
- [how do you guys actually market a dev tool?](https://www.reddit.com/r/SaaS/comments/1u8noka/how_do_you_guys_actually_market_a_dev_tool) — r-saas (P3)
- [Someone finally paid for the thing I built. $19 and I'm losing it 😭](https://www.reddit.com/r/SaaS/comments/1u8mzdt/someone_finally_paid_for_the_thing_i_built_19_and) — r-saas (P3)
- [I launched my first app today: a calculator for candle makers](https://www.reddit.com/r/SideProject/comments/1u8kqh5/i_launched_my_first_app_today_a_calculator_for) — r-sideproject (P3)
- [Micro SaaS founders whats your back office setup look like](https://www.reddit.com/r/microsaas/comments/1u8jo7v/micro_saas_founders_whats_your_back_office_setup) — r-microsaas (P3)
- [Como validei meu MicroSaaS no 1º mês: R$ 89,00 de lucro, 300 usuários e custo zero de marketing](https://www.reddit.com/r/microsaas/comments/1u8i58w/como_validei_meu_microsaas_no_1º_mês_r_8900_de) — r-microsaas (P3)
- [I built Kompari: a unit price calculator that will save you money when shopping for groceries](https://www.reddit.com/r/SideProject/comments/1u8hx3s/i_built_kompari_a_unit_price_calculator_that_will) — r-sideproject (P3)
- [I Finally Launched My First Side Project](https://www.reddit.com/r/SideProject/comments/1u8gtzr/i_finally_launched_my_first_side_project) — r-sideproject (P3)
- [I created an app that helps you reduce screen time and stay active](https://www.reddit.com/r/microsaas/comments/1u8g7su/i_created_an_app_that_helps_you_reduce_screen) — r-microsaas (P3)
- [I built a free app so you can see your friends' bookshelves and borrow from them. I would love feedback from real readers](https://www.reddit.com/r/SideProject/comments/1u8du4p/i_built_a_free_app_so_you_can_see_your_friends) — r-sideproject (P3)
