---
title: LLM 교체로 92% 절감, 느린 성장의 현실
date: '2026-06-04'
topic: indie-radar
draft_id: 2026-06-04-indie-radar
---

오늘 수집된 32개 항목 중 AWS·모바일·한국 가드레일을 모두 통과한 후보는 2개입니다. 개발자 라이브러리, 데스크톱 전용 에이전트, 에세이·뉴스레터 콘텐츠 다수가 모바일·로컬라이징 판정에서 탈락했습니다.

살아남은 두 신호는 대규모 언어 모델(LLM) 교체로 비용 구조를 바꾼 언어 학습 앱과, 6개월 지표를 솔직하게 공개한 개인 생산성 앱입니다.

## 목차
1. [US-4] 일본어 학습 앱의 LLM 전환 구조
2. [US-3] Loggd

## 1. [US-4] 일본어 학습 앱의 LLM 전환 구조
**한 줄**: Gemini에서 DeepSeek V4로 교체해 월 API 비용을 2,400달러에서 180달러로 낮춘 언어 학습 앱 구조.

**원본**: [Reddit r/SideProject](https://www.reddit.com/r/SideProject/comments/1tw94jy/switching_my_apps_ai_features_from_gemini_to) · maker 1명(추정) · MRR 미상

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

- **DeepSeek V4** 전환 시 내장 웹 검색이 빠졌습니다. 빌더는 자체 검색 레이어를 직접 구축했습니다. 추론 호출은 외부 API, 검색 파이프라인(Pipeline)은 내부 서버리스(Serverless) 함수로 분리한 구조입니다. AWS Lambda에 그대로 올릴 수 있습니다.

- 실제 뉴스를 읽기 수준에 맞춰 제공하는 방식은 단어장·문법 앱과 다른 구조입니다. 동일 아키텍처(Architecture)를 한국어 학습 앱에 이식할 수 있습니다. K-콘텐츠 연계 외국인 대상 한국어 교육이 유력 타깃입니다.

- 리스크: 저비용 API는 공급사 정책 변경 시 비용 구조가 즉시 흔들립니다. 같은 구조를 복제하는 카피캣(Copycat) 진입 장벽도 낮습니다.

## 2. [US-3] Loggd
**한 줄**: 습관·목표·포커스 타이머를 GitHub 스타일 활동 그래프로 시각화하는 개인 성장 추적 앱.

**원본**: [loggd.life · Reddit r/SaaS](https://www.reddit.com/r/SaaS/comments/1tw0ys9/6_months_4400_users_2100_total_nobody_posts_about) · maker 1명 · MRR 약 244유로

**가드레일**: ✅ AWS · ✅ 모바일 · ✅ 한국

- 웹 기반 서비스형 소프트웨어(SaaS) 구조입니다. 데이터베이스·API 서버 모두 AWS에서 운영 가능합니다. 습관 추적·푸시 알림·홈 화면 위젯은 모바일 네이티브 전환 시 유지율 핵심입니다.

- 한국에서는 플래너·루틴 관리 수요가 이미 검증된 시장입니다. 결제를 카카오페이·토스로 교체하고 한국어 UI를 더하면 진입 구조가 완성됩니다.

- 리스크: 6개월 4,400명 중 유료 전환 60명(1.4%)으로, 전환율이 낮은 편입니다. 노션(Notion)·틱틱(TickTick) 등 기존 강자와의 포지셔닝 분리가 선행 과제입니다.

---

## 📺 영상
- **I Built A $30K/Month App: Here's My Exact Process** — Benjamin Chen: 45개 이상의 앱을 직접 빌드하며 반복 가능한 아이디어→개발→마케팅 시스템을 완성한 1인 개발자의 월 $30K 달성 프로세스를 공개합니다. [영상](https://www.youtube.com/watch?v=P4QodeA_lQ0)
- **I Built A $30K/Month in 35 Days** — Pep AI: 대학생 메이커가 AI 기반 모바일 앱을 35일 만에 출시해 1만 명의 사용자와 월 $30K 수익을 달성한 트렌디 니치 발굴과 빠른 실행 전략을 소개합니다. [영상](https://www.youtube.com/watch?v=vbEKEWtnndU)
- **Screensharing How to Start an AI Agent Business Today** — Greg Isenberg: Claude 기반 클라우드 에이전트(Genspark Claw)를 활용해 월 $200~$1,500 규모의 소형 B2B 자동화 비즈니스를 빠르게 시작하는 7가지 아이디어와 실행 프레임워크를 화면과 함께 시연합니다. [영상](https://www.youtube.com/watch?v=Ix43w_IssR8)
- **AI Agents run my business and life** — Andrew Wilkinson: 사업가 Andrew Wilkinson이 Claude API와 오픈소스 에이전트 하네스를 활용해 비즈니스·건강·자산 관리를 실제로 자동화한 워크플로우를 공개합니다. [영상](https://www.youtube.com/watch?v=65IAqRUxg3c)
- **My employees made a Facebook group to hate on me** — Gary Vee: 창업가 Gary Vee가 조직 관리·투자·장기 전략에 관한 경험담을 나누는 팟캐스트 형식의 교육 콘텐츠입니다. [영상](https://www.youtube.com/watch?v=byAExsTL4g0)
- **The Perfect 2026 (Linux) Desk Setup** — Travis: 1인 개발자·콘텐츠 크리에이터를 위한 Linux 기반 워크스테이션 구성 방법과 도구 조합을 단계별로 안내합니다. [영상](https://www.youtube.com/watch?v=U1HS6hZ5ZSQ)

---

## 출처

- [Show HN: Mnemo – local-first AI memory layer for any LLM (Rust, SQLite,petgraph)](https://github.com/zaydmulani09/mnemo) — show-hn-ai (P1)
- [Composer](https://www.producthunt.com/products/composer-3) — ph-ai (P1)
- [Dropstone 1.5](https://www.producthunt.com/products/dropstone-2) — ph-ai (P1)
- [Replicas](https://www.producthunt.com/products/replicas) — ph-ai (P1)
- [Hermes Desktop](https://www.producthunt.com/products/hermes-4) — ph-ai (P1)
- [Show HN: Open-Source AI Racing Harness](https://www.elodin.systems/post/elodin-ai-grand-prix-race-sim-harness) — show-hn-ai (P1)
- [Show HN: Id-agent – Token efficient UUID alternative for AI agents](https://github.com/vostride/id-agent) — show-hn-ai (P1)
- [Show HN: Beacon - The open-source layer for local AI agent visibility](https://github.com/Asymptote-Labs/agent-beacon) — show-hn-ai (P1)
- [Can I get my agents on the phone?](https://www.bensbites.com/p/can-i-get-my-agents-on-the-phone) — bens-bites (P2)
- [Agents feedback tip](https://www.bensbites.com/p/agents-feedback-tip) — bens-bites (P2)
- [Learn the system](https://www.bensbites.com/p/learn-the-system) — bens-bites (P2)
- [Ben's Builds #3 - an email app](https://www.bensbites.com/p/bens-builds-3-an-email-app) — bens-bites (P2)
- [Sweat the small stuff.](https://justinwelsh.me/essays/sweat) — justin-welsh (P2)
- [Selective editing.](https://justinwelsh.me/essays/editing) — justin-welsh (P2)
- [Synthetic purpose.](https://justinwelsh.me/essays/synthetic-purpose) — justin-welsh (P2)
- [The machine or the life.](https://justinwelsh.me/essays/machine-or-life) — justin-welsh (P2)
- [How I grew my SaaS to $5K MRR](https://newsletter.marclou.com/p/how-i-grew-my-saas-to-5k-mrr) — marc-lou (P2)
- [Scratch your own itch](https://newsletter.marclou.com/p/scratch-your-own-itch) — marc-lou (P2)
- [200k followers, $5K MRR, 5.6% body fat](https://newsletter.marclou.com/p/200k-followers-5k-mrr-5-6-body-fat) — marc-lou (P2)
- [Dreamers vs. Builders](https://newsletter.marclou.com/p/dreamers-vs-builders) — marc-lou (P2)
- [Switching my app's AI features from Gemini to DeepSeek V4 dropped my API bill from 2,400/mo to 180/mo, but I had to build my own web search to pull it off.](https://www.reddit.com/r/SideProject/comments/1tw94jy/switching_my_apps_ai_features_from_gemini_to) — r-sideproject (P3)
- [Most founders don’t need more startup ideas. They need to know why their idea might fail](https://www.reddit.com/r/SideProject/comments/1tw92wa/most_founders_dont_need_more_startup_ideas_they) — r-sideproject (P3)
- [I built a tool that scans GitHub repos for security issues -- here's what I found after 135 scans](https://www.reddit.com/r/SideProject/comments/1tw92bi/i_built_a_tool_that_scans_github_repos_for) — r-sideproject (P3)
- [After a year of late nights, my Stoic journaling app is about a week from launch. You can try the core of it for free, right now, no signup.](https://www.reddit.com/r/SideProject/comments/1tw8mdc/after_a_year_of_late_nights_my_stoic_journaling) — r-sideproject (P3)
- [Looking for a co-founder in Toronto. Any suggestions? (Already post-revenue)](https://www.reddit.com/r/microsaas/comments/1tw8g8i/looking_for_a_cofounder_in_toronto_any) — r-microsaas (P3)
- [how I built my saas roadmap using competitor reviews instead of customer interviews](https://www.reddit.com/r/SaaS/comments/1tw7jcn/how_i_built_my_saas_roadmap_using_competitor) — r-saas (P3)
- [I built a free coloring-pages site in 2 weeks the photo-to-coloring feature surprised me most](https://www.reddit.com/r/microsaas/comments/1tw7e1s/i_built_a_free_coloringpages_site_in_2_weeks_the) — r-microsaas (P3)
- [BingeLink - Find all the parts to TikTok Videos](https://www.reddit.com/r/microsaas/comments/1tw53i4/bingelink_find_all_the_parts_to_tiktok_videos) — r-microsaas (P3)
- [Build vs buy for usage-based billing infrastructure: a structured comparison of self-hosted vs hosted alternatives](https://www.reddit.com/r/SaaS/comments/1tw4q0h/build_vs_buy_for_usagebased_billing) — r-saas (P3)
- [Solved my own problem, and now other peoples too 😁](https://www.reddit.com/r/SaaS/comments/1tw1edu/solved_my_own_problem_and_now_other_peoples_too) — r-saas (P3)
- [6 months. 4,400 users. €2,100 total. Nobody posts about how slow this actually is.](https://www.reddit.com/r/SaaS/comments/1tw0ys9/6_months_4400_users_2100_total_nobody_posts_about) — r-saas (P3)
- [**GetWaitlist killed their free tier last year. Here's what I've been using instead (and what I'm building)**](https://www.reddit.com/r/microsaas/comments/1tw04jo/getwaitlist_killed_their_free_tier_last_year) — r-microsaas (P3)
- [I Built A $30K/Month App: Here's My Exact Process [Idea, Build, Marketing]](https://www.youtube.com/watch?v=P4QodeA_lQ0) — yt-starter-story (P2)
- [I Built A $30K/Month in 35 Days](https://www.youtube.com/watch?v=vbEKEWtnndU) — yt-starter-story (P2)
- [Screensharing How to Start an AI Agent Business Today](https://www.youtube.com/watch?v=Ix43w_IssR8) — yt-greg-isenberg (P2)
- [AI Agents run my business and life (Andrew Wilkinson)](https://www.youtube.com/watch?v=65IAqRUxg3c) — yt-greg-isenberg (P2)
- [My employees made a Facebook group to hate on me (Gary Vee)](https://www.youtube.com/watch?v=byAExsTL4g0) — yt-my-first-million (P3)
- [The Perfect 2026 (Linux) Desk Setup](https://www.youtube.com/watch?v=U1HS6hZ5ZSQ) — yt-travis-media (P3)
