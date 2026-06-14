---
title: 가드레일 3개 통과한 1인 빌더 신호, 오늘 살아남은 것들
date: '2026-06-14'
topic: indie-radar
draft_id: 2026-06-14-indie-radar
---

오늘 수집된 17개 항목 가운데 AWS 적합성·모바일·한국 로컬라이징 세 가드레일을 모두 통과한 후보는 2개에 그쳤습니다. 모바일 가드레일에서 탈락한 항목이 가장 많았고, macOS 전용·브라우저 확장·용역 게시물 등 구조적 제약이 뚜렷한 항목들이 대거 제외되었습니다. KR 항목(한국 현황 참고)은 별도 후보로 싣지 않고, 아래 두 후보의 한국 차별화 판단 근거로만 활용하였습니다. 빈약한 통과 수를 감안해 2개 후보로 발행합니다.

## 목차
1. [US-2 크리에이터 도구] CakewordAI
2. [US-3 개인 생산성] feelin.today

---

## 1. [US-2 크리에이터 도구] CakewordAI

**한 줄**: 카메라로 사물을 가리키면 AI가 즉시 다국어 이름과 학습 콘텐츠를 제공하는 모바일 학습 앱.

**원본**: [Product Hunt](https://www.producthunt.com/products/cakewordai-snap-learn) · maker 미상 · 월간 반복 매출(MRR, Monthly Recurring Revenue) 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

- 추론 에이피아이(API) 호출 구조이므로 **AWS SageMaker** 또는 서버리스 Lambda로 백엔드를 구성할 수 있습니다. 온디바이스 추론이 아니라 클라우드 호출 방식이어서 1인 운영 비용 예측이 용이합니다.

- 한국 시장에서는 아동 영어 교육과 성인 제2외국어 학습 수요가 동시에 존재합니다. 카메라 기반 사물 인식에 **한국어 초성 퀴즈**나 교과서 어휘 연동을 더하면 기존 단어 암기 앱과 뚜렷한 구조적 차이를 만들 수 있습니다.

- 리스크 첫째, 구글 렌즈·네이버 스마트렌즈 등 대형 플랫폼이 유사 인식 기능을 무료 제공합니다. 둘째, 멀티모달 모델 에이피아이 단가 변동이 수익 구조를 흔들 수 있으며, 기능 복제 카피캣 진입 속도도 빠른 편입니다.

---

## 2. [US-3 개인 생산성] feelin.today

**한 줄**: 매시간 리셋되는 익명 감정 기록 서비스로, 창작자들의 실시간 감정 분포를 시각화합니다.

**원본**: [Reddit SideProject](https://www.reddit.com/r/SideProject/comments/1u538jj/how_are_you_feelintoday) · maker 미상 · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

- 감정 점수 저장과 집계 쿼리는 **AWS DynamoDB + Lambda** 조합으로 트래픽 급증에도 서버리스 확장이 가능합니다. 데이터 구조가 단순해 1인 운영 유지 부담이 낮습니다.

- 한국 프리랜서·크리에이터 커뮤니티는 번아웃 담론에 민감합니다. '지금 같은 일을 하는 사람들의 감정 온도'라는 프레임을 **직군별 필터**(디자이너·개발자·작가)로 세분화하면 국내 커뮤니티 바이럴 경로가 생깁니다.

- 리스크 첫째, 매시간 리셋 구조는 데이터 축적이 없어 유료 전환 근거가 빈약합니다. 둘째, 진입 장벽이 낮아 유사 클론이 빠르게 등장할 수 있고, 네트워크 효과가 형성되기 전 이탈이 집중될 위험이 있습니다.

---

## 출처

- [Show HN: Paca – Lightweight Jira alternative for human-AI collaboration](https://github.com/Paca-AI/paca) — show-hn-ai (P1)
- [CakewordAI](https://www.producthunt.com/products/cakewordai-snap-learn) — ph-ai (P1)
- [OwnClip](https://www.producthunt.com/products/ownclip) — ph-ai (P1)
- [Pond](https://www.producthunt.com/products/pond-5) — ph-ai (P1)
- [The two-speed problem.](https://justinwelsh.me/essays/two-speed) — justin-welsh (P2)
- [I've been building my own flight search engine for almost 10 years](https://www.reddit.com/r/SideProject/comments/1u555cj/ive_been_building_my_own_flight_search_engine_for) — r-sideproject (P3)
- [Workload Tab - The pretty nice if i say so Tab Extension for Productivity](https://www.reddit.com/r/SideProject/comments/1u5506r/workload_tab_the_pretty_nice_if_i_say_so_tab) — r-sideproject (P3)
- [What are the costs of a SaaS for a solo dev?](https://www.reddit.com/r/SaaS/comments/1u54nlr/what_are_the_costs_of_a_saas_for_a_solo_dev) — r-saas (P3)
- [[For Hire] Solo full-stack engineer — I build & ship entire production apps (AI/LLM, Next.js + Python). Remote, available now](https://www.reddit.com/r/SideProject/comments/1u53kqf/for_hire_solo_fullstack_engineer_i_build_ship) — r-sideproject (P3)
- [how are you feelin.today](https://www.reddit.com/r/SideProject/comments/1u538jj/how_are_you_feelintoday) — r-sideproject (P3)
- [Can anyone solve churn without adding more features?](https://www.reddit.com/r/microsaas/comments/1u51bmh/can_anyone_solve_churn_without_adding_more) — r-microsaas (P3)
- [I think building as a solo founder is incredibly lonely](https://www.reddit.com/r/SaaS/comments/1u510nc/i_think_building_as_a_solo_founder_is_incredibly) — r-saas (P3)
- [the share of a micro saas idea that actually needs a backend is smaller than it feels](https://www.reddit.com/r/microsaas/comments/1u50cbe/the_share_of_a_micro_saas_idea_that_actually) — r-microsaas (P3)
- [Thought Space: conversations before appearances](https://www.reddit.com/r/microsaas/comments/1u4zxyu/thought_space_conversations_before_appearances) — r-microsaas (P3)
- [Does that mean $18,500 ARR?? 🤔](https://www.reddit.com/r/SaaS/comments/1u4xs7j/does_that_mean_18500_arr) — r-saas (P3)
- [Solo-built a study SaaS in 2 months. The scary part isn't users, it's the AI costs.](https://www.reddit.com/r/microsaas/comments/1u4xh2y/solobuilt_a_study_saas_in_2_months_the_scary_part) — r-microsaas (P3)
- [Weee freaking did itt !!! I still can't believe it 🥹](https://www.reddit.com/r/SaaS/comments/1u3wj79/weee_freaking_did_itt_i_still_cant_believe_it) — r-saas (P3)
