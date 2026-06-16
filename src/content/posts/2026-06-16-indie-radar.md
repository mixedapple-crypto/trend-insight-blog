---
title: AI 진단 도구 4종, 가드레일 통과 후 한국 시장에 닿다
date: '2026-06-16'
topic: indie-radar
draft_id: 2026-06-16-indie-radar
---

오늘 수집된 20개 항목은 개발자 도구, 의료 현장 솔루션, 재무 대시보드, 학습 앱 등 다양한 범주에 걸쳐 있었습니다. 가드레일 3개(AWS 적합·모바일·로컬라이징) 기준을 적용한 결과, 잔디 진단·C++ 렌더러·광고 대기 래퍼·간호사 스케줄러 등 다수가 탈락하였습니다. 최종적으로 5개 항목이 세 가드레일을 모두 통과하였습니다. 한국 1인 창업 적합도를 기준으로 아래와 같이 정리하였습니다.

## 목차
1. [US-2] Fata
2. [US-1] Dent-Plans
3. [US-4] LinkedIn 콘텐츠 필라 분석 도구
4. [US-1] Subly Labs (aifinanceops)
5. [US-1] Dent-Plans 대비 참고: 치과 플랫폼 KR 현황은 KR 항목으로 제외 처리

---

위 목차를 수정합니다. 가드레일 전통과 KR 항목 제외 원칙에 따라 최종 후보는 아래 5개입니다.

## 목차
1. [US-2] Fata
2. [US-1] Dent-Plans
3. [US-4] LinkedIn 콘텐츠 필라 분석 도구
4. [US-1] Subly Labs
5. [US-3] Fonda

---

## 1. [US-2] Fata

**한 줄**: AI 코딩 시대에 개발자 기초 체력이 무너지는 문제를, 간격 반복 학습으로 막는 모바일 앱

**원본**: [fata.dev](https://fata.dev/) · maker 1인(Djoumé, 20년 경력 개발자) · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

**Fata**는 AI 자동완성 의존이 심화될수록 Rust·CSS·알고리즘 같은 기초 지식이 흐려진다는 역설에서 출발합니다.

매일 짧은 세션으로 스택별 문제를 반복 노출시키고, 컴파일·린팅·단위 테스트 파이프라인으로 콘텐츠 품질을 검증합니다.

- **Capacitor** 기반 iOS/Android 앱으로 오프라인 우선 동작하며, Firebase 백엔드는 AWS(DynamoDB·Lambda·S3)로 전환이 용이합니다. 1인 운영 구조에서 콘텐츠 업데이트만으로 서비스를 유지할 수 있습니다.

- 한국 개발자 커뮤니티(OKKY·개발바닥 등)에서 "AI 쓰면 코딩 실력이 줄어드는가" 논쟁이 꾸준히 등장합니다. 한국어 문제 세트와 국내 채용 코딩 테스트 유형(프로그래머스·백준 스타일)을 추가하면 뚜렷한 차별화 지점이 생깁니다.

- 리스크: 구글·메타의 공식 개발자 학습 플랫폼이 유사 기능을 무료로 흡수할 수 있습니다. 콘텐츠 수작업 검수 비용이 스케일 시 병목이 됩니다.

---

## 2. [US-1] Dent-Plans

**한 줄**: 치과 치료 계획을 시각화·스케줄링·환자 보고서로 일원화한 B2B 웹 플랫폼

**원본**: [dent-plans.vercel.app](https://dent-plans.vercel.app) · maker 1인(Emadhal) · MRR 미상(출시 2일 차)

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

치과 원장이 치료 계획을 환자에게 설명하는 과정은 대부분 구두·종이 기반입니다.

**Dent-Plans**는 3D 시각화와 일정 관리를 한 화면에서 처리해 이 간극을 좁힙니다.

Vercel(Next.js 추정) 기반으로 출시되었으며, AWS Lambda 또는 자체 Node.js 백엔드로 이전이 어렵지 않습니다. 서버리스 구조를 유지하면 1인도 운영 비용을 통제할 수 있습니다.

- 한국 치과 시장은 1만 8천 개 이상 개원 원 기준으로 세계 최고 밀도 중 하나입니다. 기존 치과 EMR(전자의무기록(Electronic Medical Record))은 치료 계획 시각화에 취약하며, 카카오 알림톡 연동 환자 안내를 추가하면 즉시 활용 가능한 차별점이 됩니다.

- 리스크: 의료 데이터 규제(개인정보보호법·의료법)로 인한 보안 인증 비용이 진입 장벽입니다. 덴탈 EMR 강자(덴티아·신도리코 계열)가 유사 기능을 번들링할 수 있습니다.

---

## 3. [US-4] LinkedIn 콘텐츠 필라 분석 도구

**한 줄**: 1년치 LinkedIn 게시물을 자동 분석해 어떤 주제가 반응을 끌었는지 시각화하는 웹 도구

**원본**: [Reddit microsaas 스레드](https://www.reddit.com/r/microsaas/comments/1u6xphf/after_a_year_of_guessing_my_linkedin_content) · maker 1인 · MRR 미상(월 3,000 방문자)

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

LinkedIn 인플루언서(영향력 있는 사용자)가 늘면서, 어떤 콘텐츠 유형이 실제로 팔로워를 늘리는지 파악하는 수요가 커졌습니다.

이 도구는 LinkedIn 데이터를 자동으로 읽어 핵심 주제와 반응 패턴을 시각화합니다.

- 콘텐츠 분석 에이피아이(API) 래퍼 구조로 서버리스 확장이 가능합니다. LinkedIn API 한도 내에서 운영하면 1인 유지 비용이 낮습니다.

- 한국은 LinkedIn 비즈니스 크리에이터 층이 빠르게 성장 중입니다. 한국어 UI와 국내 기업 직함·업종 분류를 반영한 분석 레포트를 추가하면 현지 수요를 직접 겨냥할 수 있습니다.

- 리스크: LinkedIn이 자체 분석 기능을 강화할 경우 도구의 존재 이유가 줄어듭니다. API 정책 변경·크롤링 제한이 서비스 가용성 자체를 흔들 수 있습니다.

---

## 4. [US-1] Subly Labs

**한 줄**: Stripe 월간 반복 매출(Monthly Recurring Revenue, MRR)의 왜곡 구간을 제거해 실제 재무 지표를 계산하는 대시보드

**원본**: [aifinanceops.app](https://www.aifinanceops.app) · maker 1인(PardhaSaradhi_) · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

Stripe가 표시하는 MRR에는 연간 플랜 선결제·미전환 트라이얼·결제 실패 건이 뒤섞입니다.

**Subly Labs**는 읽기 전용 Stripe API만 연결해 이 항목들을 분리한 뒤, 실질 MRR과 이탈율(Churn)을 재계산합니다.

- Stripe API 래퍼 구조로 AWS Lambda·DynamoDB 배포가 바로 가능합니다. 외부 결제 데이터에만 의존하므로 1인도 인프라 부담이 작습니다.

- 한국 스타트업 생태계에서는 **토스 페이먼츠**·아임포트 연동 SaaS가 Stripe와 병행 사용됩니다. 국내 결제 게이트웨이 데이터를 통합 집계하면 한국 버전 단독 시장을 형성할 수 있습니다.

- 리스크: Stripe가 자체 대시보드 정밀도를 높이면 도구의 차별점이 희미해집니다. 카피캣 진입 장벽이 낮아 기능 선점 속도가 중요합니다.

---

## 5. [US-3] Fonda

**한 줄**: 창업자의 의사결정 기록·액션 아이템을 자동 추적해 반복 논의를 줄이는 AI 코파운더 도구

**원본**: [producthunt.com/products/fonda](https://www.producthunt.com/products/fonda) · maker 미상 · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

스타트업 팀이 커질수록 "우리 왜 이렇게 결정했지?"를 묻는 횟수가 늘어납니다.

Fonda는 회의 중 나온 결정과 할 일을 자동으로 기록하고, 이후 맥락 참조를 가능하게 합니다.

- 대화 저장·요약 백엔드는 서버리스(Lambda·DynamoDB)로 구성이 용이합니다. 외부 LLM API를 활용하면 1인이 모델 유지 비용 없이 운영할 수 있습니다.

- 한국 초기 스타트업은 Notion·슬랙(Slack) 조합으로 의사결정을 추적하지만, 검색과 맥락 복원이 약합니다. 한국어 회의록 자동 요약과 국내 협업 도구(잔디·카카오워크) 연동을 추가하면 공백을 메울 수 있습니다.

- 리스크: Notion AI·Slack AI 등 기존 협업 플랫폼의 내장 기능 확장이 직접 경쟁 구도를 만듭니다. 팀 데이터 보안 우려로 기업 도입 주기가 길어질 수 있습니다.

---

## 📺 영상
- **How a TJ Maxx Cashier Built a $200K App With AI** — (YouTube): 19세 1인 개발자가 AI를 활용해 모바일 앱을 출시하고, 아이디어 검증부터 인플루언서 유통까지의 플레이북으로 누적 $200K 수익을 달성한 과정을 소개합니다. [영상](https://www.youtube.com/watch?v=LYomocq6Dpo)

---

## 출처

- [Show HN: Vet turned founder, AI lawn diagnosis](https://grassdx.com/) — show-hn-ai (P1)
- [Show HN: I wrote a C++ ray tracer from scratch without AI](https://github.com/themartiano/luz) — show-hn-ai (P1)
- [Kickbacks.ai](https://www.producthunt.com/products/kickbacks-ai) — ph-ai (P1)
- [AgentBrush](https://www.producthunt.com/products/agentbrush) — ph-ai (P1)
- [MiMo Code](https://www.producthunt.com/products/mimo-3) — ph-ai (P1)
- [Fonda](https://www.producthunt.com/products/fonda) — ph-ai (P1)
- [Show HN: Fata – Spaced repetition to fight skill rot from AI coding](https://fata.dev/) — show-hn-ai (P1)
- [AIエージェントはCloudflareに賭けろ](https://zenn.dev/yusukebe/articles/ccb1f953e48ee1) — zenn-trending (P2)
- [Question for anyone building a SaaS](https://www.reddit.com/r/SaaS/comments/1u6zg4c/question_for_anyone_building_a_saas) — r-saas (P3) (+1 other feed)
- [How i hosted my app from start to end](https://www.reddit.com/r/SaaS/comments/1u6zcsi/how_i_hosted_my_app_from_start_to_end) — r-saas (P3)
- [I’ve spent the last few months building a sandbox survival game for Apple Watch](https://www.reddit.com/r/SideProject/comments/1u6y7ky/ive_spent_the_last_few_months_building_a_sandbox) — r-sideproject (P3)
- [After a year of guessing my Linkedin content pillars, I built the tool that finally showed them to me](https://www.reddit.com/r/microsaas/comments/1u6xphf/after_a_year_of_guessing_my_linkedin_content) — r-microsaas (P3)
- [I’m a nurse who got fed up with scheduling app limitations, so I built my own](https://www.reddit.com/r/SideProject/comments/1u6wsd0/im_a_nurse_who_got_fed_up_with_scheduling_app) — r-sideproject (P3)
- [How do you track your real MRR as a solo founder? (not Stripe’s number)](https://www.reddit.com/r/SideProject/comments/1u6wr8b/how_do_you_track_your_real_mrr_as_a_solo_founder) — r-sideproject (P3) (+1 other feed)
- [Is anyone actually making money with ads? I'm spending £1,200 to make £3 and losing my mind.](https://www.reddit.com/r/SaaS/comments/1u6vylh/is_anyone_actually_making_money_with_ads_im) — r-saas (P3)
- [Pretty sure Bannerbear founder is not going to like this post](https://www.reddit.com/r/microsaas/comments/1u6usdq/pretty_sure_bannerbear_founder_is_not_going_to) — r-microsaas (P3)
- [I built an interactive speaking coach because i got laid off from my job :(](https://www.reddit.com/r/SideProject/comments/1u6t84t/i_built_an_interactive_speaking_coach_because_i) — r-sideproject (P3)
- [How do you currently track your MRR and churn? (built something to fix my own pain)](https://www.reddit.com/r/microsaas/comments/1u6t1je/how_do_you_currently_track_your_mrr_and_churn) — r-microsaas (P3)
- [I built a free SaaS finance dashboard that pulls live data from Stripe — would love brutal feedback](https://www.reddit.com/r/microsaas/comments/1u6swxz/i_built_a_free_saas_finance_dashboard_that_pulls) — r-microsaas (P3)
- [I’ve failed at every SaaS project I’ve tried and now just launched a new one for dental clinics and honestly don't know if I should keep pouring time into it or just stop](https://www.reddit.com/r/SaaS/comments/1u6o3um/ive_failed_at_every_saas_project_ive_tried_and) — r-saas (P3)
- [How a TJ Maxx Cashier Built a $200K App With AI](https://www.youtube.com/watch?v=LYomocq6Dpo) — yt-greg-isenberg (P2)
