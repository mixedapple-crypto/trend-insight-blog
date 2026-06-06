---
title: 가드레일 통과 생존자들, 오늘 1인 빌더 신호는 무엇인가
date: '2026-06-06'
topic: indie-radar
draft_id: 2026-06-06-indie-radar
---

오늘 수집된 20개 항목 가운데 AWS·모바일·로컬라이징 3중 가드레일을 모두 통과한 후보는 단 1개에 그쳤습니다. 기술 해설 글·인프라 튜토리얼·팀 갈등 토로는 제품이 아니거나 모바일 가드레일에서 탈락했고, 금융 분석·보안 스캐너·SEO 자동화는 로컬라이징 장벽에 막혔습니다. 살아남은 후보는 **무드 트래커(Mood Tracker)** 1건으로, 빈약하지만 규칙에 따라 단독 분석합니다.

---

그런데 검토를 진행하며 구조적 대비가 눈에 띄었습니다.

가드레일 3개 중 모바일만 통과한 항목이 다수였고, 로컬라이징까지 함께 통과한 경우는 극히 드물었습니다.

이는 오늘 수집된 신호 자체가 '웹 전용 B2B 도구'에 집중된 날이었음을 보여줍니다.

## 목차
1. [US-3] 무드 트래커 (Mood Tracker)

---

## 1. [US-3] 무드 트래커 (Mood Tracker)

**한 줄**: 119명이 먼저 쓰기 시작한 기분 기록 앱, 수익화 경로를 찾는 단계

**원본**: [Reddit r/microsaas](https://www.reddit.com/r/microsaas/comments/1ty0vuz/i_built_a_mood_tracker_i_know) · maker 1인 · 월간반복매출(MRR) $0

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

- **1인 운영 가능성**: Google Play 출시 완료된 Android 네이티브 앱입니다. 서버 측은 **AWS** Cognito(인증)와 RDS(데이터 저장)로 전환하면 운영 비용을 최소화할 수 있습니다. 푸시 알림·홈 위젯 등 모바일 고유 기능을 추가해도 1인 유지가 가능한 구조입니다.

- **한국 차별화 포인트**: 한국 레퍼런스 KR-1·KR-2 검토 결과, 삼성헬스·카카오헬스는 운동·수면 중심이고 순수 감정 기록 특화 앱의 공백이 남아 있습니다. '오늘의 감정 3단어 기록'처럼 짧은 한국어 UX로 차별화하면 직장인·학생 타깃의 진입 여지가 존재합니다. 감정 기록 데이터를 주간 리포트로 가공하는 구독 모델($2~4/월)도 검토할 만합니다.

- **리스크**:
  - 카피캣 위험이 높습니다. 기분 추적 앱은 구조가 단순해 진입 장벽이 낮고, 삼성헬스가 유사 기능을 업데이트 한 건으로 대체될 수 있습니다.
  - 119명 활성 사용자 중 실제 결제 전환 데이터가 없습니다. 무료 사용자 유지율·기록 지속일이 확인되지 않은 상태이므로, 수익화 전에 리텐션(Retention, 재방문율) 검증이 선행되어야 합니다.

---

## 출처

- [Microsoft MAI-Voice-2](https://www.producthunt.com/products/mai-image-2-3) — ph-ai (P1)
- [Agent Browser Shield](https://www.producthunt.com/products/agent-browser-shield) — ph-ai (P1)
- [Nemotron 3 Ultra by NVIDIA](https://www.producthunt.com/products/nvidia) — ph-ai (P1)
- [Leni](https://www.producthunt.com/products/leni) — ph-ai (P1)
- [PyTorchで理解する自動運転マルチカメラ統合の全体像](https://zenn.dev/riita10069/articles/auto-e2e-multi-view-fusion-explained) — zenn-trending (P2)
- [エージェントに「脆弱性を探して」はなぜ失敗するのか──Cloudflareが50+リポで示したharnessの正体](https://zenn.dev/aiwatch_jp/articles/agent-vuln-hunting-harness-glasswing) — zenn-trending (P2)
- [AWS Innovation Sandbox (ISB) を構築してみた！](https://zenn.dev/kairim/articles/35dd71c526b64f) — zenn-trending (P2)
- [Amazon S3 Filesがでました！](https://zenn.dev/kameoncloud/articles/784f5d85db531b) — zenn-trending (P2)
- [I got tired of calling my shop managers every day so I built my own dashboard](https://www.reddit.com/r/SideProject/comments/1ty1hzh/i_got_tired_of_calling_my_shop_managers_every_day) — r-sideproject (P3)
- [I built frisk: swap "github.com" for "friskit.dev" on any repo URL to security-scan it (no clone, no CLI, no login)](https://www.reddit.com/r/SideProject/comments/1ty1hpb/i_built_frisk_swap_githubcom_for_friskitdev_on) — r-sideproject (P3)
- [I built a mood tracker (I KNOW)](https://www.reddit.com/r/microsaas/comments/1ty0vuz/i_built_a_mood_tracker_i_know) — r-microsaas (P3)
- [at this point, idk if i should pull the plug or not](https://www.reddit.com/r/SaaS/comments/1ty0n0l/at_this_point_idk_if_i_should_pull_the_plug_or_not) — r-saas (P3)
- [co-founding is cute and fun but not when roles are no clear](https://www.reddit.com/r/SideProject/comments/1txzbji/cofounding_is_cute_and_fun_but_not_when_roles_are) — r-sideproject (P3)
- [100% Honest Breakdown of my SaaS Journey: $1.3K MRR and $6000 in ad spend (just launched 2 weeks ago)](https://www.reddit.com/r/SaaS/comments/1txy7jl/100_honest_breakdown_of_my_saas_journey_13k_mrr) — r-saas (P3)
- [After Hours Build Log #1: two apps live on iOS, now testing on Android](https://www.reddit.com/r/SideProject/comments/1txwysv/after_hours_build_log_1_two_apps_live_on_ios_now) — r-sideproject (P3)
- [First side project I pushed that far (story, long read)](https://www.reddit.com/r/SaaS/comments/1txvr3q/first_side_project_i_pushed_that_far_story_long) — r-saas (P3)
- [Used my own tool to get my first paying customer ($19 MRR)](https://www.reddit.com/r/SaaS/comments/1txtjm9/used_my_own_tool_to_get_my_first_paying_customer) — r-saas (P3)
- [Building in public — Week 1 of UniSave beta](https://www.reddit.com/r/microsaas/comments/1txsmuq/building_in_public_week_1_of_unisave_beta) — r-microsaas (P3)
- [I pulled Stripe-verified revenue on 600+ brand-new bootstrapped SaaS. Here's what the new-launch layer (sub-$50k MRR) actually looks like.](https://www.reddit.com/r/microsaas/comments/1txsenm/i_pulled_stripeverified_revenue_on_600_brandnew) — r-microsaas (P3)
- [How much CAC is ok? Commission per Signup or BUY?](https://www.reddit.com/r/microsaas/comments/1txm1el/how_much_cac_is_ok_commission_per_signup_or_buy) — r-microsaas (P3)
