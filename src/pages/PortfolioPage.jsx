import { useState } from "react";
import { Link } from "react-router-dom";
import useSEO from "../lib/useSEO";
import PageLayout from "./PageLayout";

const LANG = {
  ko: {
    nav: { about: "소개로 돌아가기" },
    hero: {
      name: "박민재",
      nameEn: "Minjae Park",
      tagline: "C++ 기반 게임플레이 시스템 구현에 관심을 가진 프로그래머",
      school: "인덕대학교 컴퓨터소프트웨어학과 졸업예정",
      goal: "C++ 개발자를 목표로 일본에서 커리어를 시작하고자 합니다. Linux 환경 기반의 서버 개발로 출발해, 장기적으로는 게임 프로그래머로 성장하는 것이 목표입니다.",
    },
    sections: {
      skills: "보유 기술",
      projects: "프로젝트",
      experience: "경험 및 활동",
      education: "교육",
      awards: "자격 및 수상",
      learning: "학습 현황",
      goal: "목표 및 포부",
    },
    skills: {
      lang: "언어",
      framework: "프레임워크 / 라이브러리",
      db: "데이터베이스",
      cloud: "클라우드 / 인프라",
      devops: "버전 관리 / 배포",
      tools: "개발 환경 / 도구",
      concepts: "개념 / 방법론",
    },
    projects: {
      team: "팀 프로젝트",
      solo: "개인 프로젝트",
      ongoing: "진행중",
      planned: "예정",
      role: "담당",
      stack: "기술 스택",
    },
    experience: {
      teamlead: "2026 INDEV Team 1 팀장 및 프론트/디자인 담당",
      teamleadDesc: "인덕대학교 프로젝트 팀 (8인, 백엔드 5 / 프론트엔드 3)",
      club: "창업동아리 INDEV 회장",
      clubDesc: "인덕대학교",
      kmove: "K-Move Japan IT 취업 훈련",
      kmoveDesc: "D&S KOREA㈜ · 968시간 · 2025.06 – 2026.02",
    },
    education: {
      univ: "인덕대학교",
      univDesc: "컴퓨터소프트웨어학과 · 전문학사 졸업예정",
      univPeriod: "2022.03 – 2026.02",
    },
    awards: {
      title: "자격 및 수상",
      certs: [
        { name: "컴퓨터활용능력 2급", date: "2025.05", org: "대한상공회의소" },
        { name: "3D프린터운용기능사", date: "2020.08", org: "한국산업인력공단" },
      ],
      awards: [
        { name: "Smart DBMS 경진대회 금상", date: "2024. 2학기", org: "인덕대학교" },
        { name: "C++ 사용 설명서 경진대회 장려상", date: "2024. 2학기", org: "인덕대학교" },
        { name: "온라인쇼핑몰 개발 경진대회 금상", date: "2025. 1학기", org: "인덕대학교" },
        { name: "성적최우수상", date: "2025. 1학기", org: "인덕대학교" },
        { name: "AWS 서비스 활용능력 경진대회 우수상", date: "2025. 2학기", org: "인덕대학교" },
        { name: "학과 프로젝트 경진대회 SW프로젝트 학술상", date: "2025. 2학기", org: "인덕대학교" },
        { name: "데이터분석 온라인 메타버스 경진대회 데이터마스터상", date: "2025. 2학기", org: "인덕대학교" },
        { name: "성적최우수상", date: "2025. 2학기", org: "인덕대학교" },
        { name: "웹 프론트엔드 경진대회 최우수상", date: "2026. 1학기", org: "인덕대학교" },
        { name: "빅데이터분석 경진대회 메타버스 오딧세이 최우수상", date: "2026. 1학기", org: "인덕대학교" },
        { name: "ACK 2025 논문 발표", date: "2025", org: "ACK" },
      ],
      baekjoon: "Baekjoon / solved.ac 실버 4",
    },
    learning: {
      items: [
        "Effective C++ (Scott Meyers)",
        "Effective Modern C++ (Scott Meyers)",
        "자료구조 및 알고리즘 분석 (Mark Allen Weiss)",
        "수학으로 시작하는 3D 게임 개발 (양영일)",
        "LeetCode",
      ],
    },
    goalText: `제 목표는 일본 게임사에서 게임플레이 프로그래머로 활동하는 것입니다. 플레이어가 직접 체감하는 전투 시스템, 캐릭터 동작, 입력 처리 등을 구현하며 게임의 재미를 만들어내는 역할에 깊은 매력을 느끼고 있습니다.\n\n이를 위해 현재 C++ 심화 학습과 언리얼 엔진 공부를 병행하고 있으며, 저수준부터 원리를 이해하고 구현하는 방식으로 실력을 쌓아가고 있습니다. 단순히 주어진 기능을 구현하는 것에 그치지 않고, 플레이어가 게임을 플레이하며 느끼는 감동과 재미에 직접 기여하는 개발자가 되는 것이 궁극적인 목표입니다.`,
  },
  ja: {
    nav: { about: "概要に戻る" },
    hero: {
      name: "朴珉宰",
      nameEn: "Minjae Park",
      tagline: "C++ベースのゲームプレイシステム実装に関心を持つプログラマー",
      school: "仁徳大学 コンピュータソフトウェア工学科 卒業予定",
      goal: "C++エンジニアとして日本でキャリアをスタートさせることを目指しています。\nLinux環境でのサーバー開発から始め、長期的にはゲームプログラマーとして成長していくことが目標です。",
    },
    sections: {
      skills: "保有技術",
      projects: "プロジェクト",
      experience: "経験・活動",
      education: "学歴・教育",
      awards: "資格・受賞",
      learning: "学習状況",
      goal: "目標と抱負",
    },
    skills: {
      lang: "言語",
      framework: "フレームワーク / ライブラリ",
      db: "データベース",
      cloud: "クラウド / インフラ",
      devops: "バージョン管理 / デプロイ",
      tools: "開発環境 / ツール",
      concepts: "概念 / 方法論",
    },
    projects: {
      team: "チームプロジェクト",
      solo: "個人プロジェクト",
      ongoing: "進行中",
      planned: "予定",
      role: "担当",
      stack: "技術スタック",
    },
    experience: {
      teamlead: "INDEV Team 1 チームリーダー",
      teamleadDesc: "仁徳大学プロジェクトチーム（9名、バックエンド6 / フロントエンド3）",
      club: "スタートアップ同好会 会長",
      clubDesc: "仁徳大学",
      kmove: "K-Move Japan IT就職訓練",
      kmoveDesc: "D&S KOREA㈜ · 968時間 · 2025.06 – 2026.02",
    },
    education: {
      univ: "仁徳大学",
      univDesc: "コンピュータソフトウェア工学科 · 短期大学士 卒業予定",
      univPeriod: "2022.03 – 2026.02",
    },
    awards: {
      title: "資格・受賞",
      certs: [
        { name: "コンピュータ活用能力2級", date: "2025.05", org: "大韓商工会議所" },
        { name: "3Dプリンター運用技能士", date: "2020.08", org: "韓国産業人力公団" },
      ],
      awards: [
        { name: "Smart DBMS競技大会 金賞", date: "2024年 2学期", org: "仁徳大学" },
        { name: "C++使用説明書競技大会 奨励賞", date: "2024年 2学期", org: "仁徳大学" },
        { name: "オンラインショッピングモール開発競技大会 金賞", date: "2025年 1学期", org: "仁徳大学" },
        { name: "成績最優秀賞", date: "2025年 1学期", org: "仁徳大学" },
        { name: "AWSサービス活用能力競技大会 優秀賞", date: "2025年 2学期", org: "仁徳大学" },
        { name: "学科プロジェクト競技大会 SWプロジェクト学術賞", date: "2025年 2学期", org: "仁徳大学" },
        { name: "データ分析オンラインメタバース競技大会 データマスター賞", date: "2025年 2学期", org: "仁徳大学" },
        { name: "成績最優秀賞", date: "2025年 2学期", org: "仁徳大学" },
        { name: "WebフロントエンドコンテストACK 2025 論文発表", date: "2026年 1学期", org: "仁徳大学" },
        { name: "ビッグデータ分析競技大会 メタバースオデッセイ 最優秀賞", date: "2026年 1学期", org: "仁徳大学" },
        { name: "ACK 2025 論文発表", date: "2025", org: "ACK" },
      ],
      baekjoon: "Baekjoon / solved.ac シルバー4",
    },
    learning: {
      items: [
        "Effective C++ (Scott Meyers) — 進行中",
        "Effective Modern C++ (Scott Meyers) — 予定",
        "数学から始める3Dゲーム開発 — 予定",
        "LeetCode — 進行中",
      ],
    },
    goalText: `私の目標は、日本のゲーム会社でゲームプレイプログラマーとして活躍することです。プレイヤーが直接体感する戦闘システム、キャラクターの動作、入力処理などを実装し、ゲームの楽しさを作り出す役割に深い魅力を感じています。\n\nそのため、現在C++の深化学習とUnreal Engineの勉強を並行して行っており、低レベルから原理を理解し実装する方式で実力を磨いています。単に与えられた機能を実装するだけでなく、プレイヤーがゲームをプレイする際に感じる感動と楽しさに直接貢献できる開発者になることが最終目標です。`,
  },
  en: {
    nav: { about: "Back to About" },
    hero: {
      name: "Minjae Park",
      nameEn: "박민재",
      tagline: "Programmer passionate about C++-based gameplay system implementation",
      school: "Induk University, Dept. of Computer Software Engineering (expected graduation)",
      goal: "My goal is to start my career in Japan as a C++ developer.\nBeginning with Linux-based server development, I aim to grow into a game programmer in the long run.",
    },
    sections: {
      skills: "Skills",
      projects: "Projects",
      experience: "Experience & Activities",
      education: "Education",
      awards: "Certifications & Awards",
      learning: "Currently Learning",
      goal: "Goals & Aspirations",
    },
    skills: {
      lang: "Languages",
      framework: "Frameworks / Libraries",
      db: "Databases",
      cloud: "Cloud / Infrastructure",
      devops: "Version Control / Deployment",
      tools: "Dev Environment / Tools",
      concepts: "Concepts / Methodology",
    },
    projects: {
      team: "Team Project",
      solo: "Personal Project",
      ongoing: "In Progress",
      planned: "Planned",
      role: "Role",
      stack: "Tech Stack",
    },
    experience: {
      teamlead: "INDEV Team 1 Lead",
      teamleadDesc: "Induk University Project Team (9 members, 6 Backend / 3 Frontend)",
      club: "Startup Club President",
      clubDesc: "Induk University",
      kmove: "K-Move Japan IT Employment Training",
      kmoveDesc: "D&S KOREA Co., Ltd. · 968 hours · Jun 2025 – Feb 2026",
    },
    education: {
      univ: "Induk University",
      univDesc: "Dept. of Computer Software Engineering · Associate Degree (expected)",
      univPeriod: "Mar 2022 – Feb 2026",
    },
    awards: {
      title: "Certifications & Awards",
      certs: [
        { name: "Computer Literacy Level 2", date: "May 2025", org: "Korea Chamber of Commerce" },
        { name: "3D Printer Operator Technician", date: "Aug 2020", org: "HRD Korea" },
      ],
      awards: [
        { name: "Smart DBMS Competition — Gold Award", date: "2024 Fall", org: "Induk University" },
        { name: "C++ Manual Competition — Encouragement Award", date: "2024 Fall", org: "Induk University" },
        { name: "Online Shopping Mall Dev Competition — Gold Award", date: "2025 Spring", org: "Induk University" },
        { name: "Academic Excellence Award", date: "2025 Spring", org: "Induk University" },
        { name: "AWS Service Proficiency Competition — Excellence Award", date: "2025 Fall", org: "Induk University" },
        { name: "Dept. Project Competition — SW Project Academic Award", date: "2025 Fall", org: "Induk University" },
        { name: "Data Analysis Online Metaverse Competition — Data Master Award", date: "2025 Fall", org: "Induk University" },
        { name: "Academic Excellence Award", date: "2025 Fall", org: "Induk University" },
        { name: "Web Frontend Competition — Excellence Award", date: "2026 Spring", org: "Induk University" },
        { name: "Big Data Analysis Competition Metaverse Odyssey — Excellence Award", date: "2026 Spring", org: "Induk University" },
        { name: "ACK 2025 Paper Presentation", date: "2025", org: "ACK" },
      ],
      baekjoon: "Baekjoon / solved.ac Silver 4",
    },
    learning: {
      items: [
        "Effective C++ (Scott Meyers) — In Progress",
        "Effective Modern C++ (Scott Meyers) — Planned",
        "3D Game Development Starting with Math — Planned",
        "LeetCode — In Progress",
      ],
    },
    goalText: `My goal is to work as a gameplay programmer at a Japanese game studio. I find deep appeal in the role of implementing systems that players directly feel — combat mechanics, character movement, input handling — and creating the fun that makes games memorable.\n\nTo that end, I am currently studying advanced C++ and Unreal Engine in parallel, building my skills by understanding and implementing concepts from the ground up. My ultimate goal is not just to implement assigned features, but to become a developer who directly contributes to the excitement and joy players feel when playing a game.`,
  },
};

const SKILLS_DATA = {
  lang: ["C++", "Java", "PHP", "JavaScript", "Python", "R", "HTML5", "CSS3", "JSP"],
  framework: ["Spring Framework", "React", "Ajax", "Unity"],
  db: ["MySQL", "MariaDB", "phpMyAdmin", "MySQL Workbench", "RStudio", "SQLite"],
  cloud: ["AWS", "Amazon EC2", "Amazon RDS", "Amazon S3", "Amazon API Gateway", "Linux"],
  devops: ["Git", "GitHub", "GitHub Actions", "GitHub Pages"],
  tools: ["Android Studio", "iOS / iOS Autolayout", "Figma", "MS ACCESS"],
  concepts: ["OOP", "DBMS", "REST API", "MVC", "Architecture", "Frontend", "Backend", "BigData"],
};

const PROJECTS = [
  {
    id: "medichat",
    ko: {
      title: "AI 활용 의약품 정보 챗봇 웹사이트",
      subtitle: "MediChat",
      desc: "사용자의 증상을 입력받고 AI가 적절한 의약품을 추천하는 챗봇 웹사이트. 주변 약국 위치를 공공 API 기반으로 출력. ACK 2025 논문 발표.",
      role: "디자인 / 백엔드 / 클라우드",
      type: "team",
    },
    ja: {
      title: "AI活用 医薬品情報チャットボットWebサイト",
      subtitle: "MediChat",
      desc: "ユーザーの症状を入力するとAIが適切な医薬品を推薦するチャットボットWebサイト。公共APIで近隣薬局を表示。ACK 2025論文発表。",
      role: "デザイン / バックエンド / クラウド",
      type: "team",
    },
    en: {
      title: "AI-Powered Medication Info Chatbot",
      subtitle: "MediChat",
      desc: "A chatbot website that recommends appropriate medications based on user-inputted symptoms using AI. Nearby pharmacies displayed via public API. Presented at ACK 2025.",
      role: "Design / Backend / Cloud",
      type: "team",
    },
    stack: ["React", "Java / Spring Boot", "Amazon EC2", "Amazon RDS", "Ollama 3", "Figma"],
    image: "/portfolio/medichat.jpg",
  },
  {
    id: "aerosphere",
    ko: {
      title: "AI를 활용한 학습 플랫폼",
      subtitle: "AeroSphere",
      desc: "학습 콘텐츠를 계층 구조로 관리하고 AI가 학습 설명과 문제를 자동 생성·제공하는 플랫폼. 3단계 구조(카테고리→세션→학습)로 확장성 고려 설계.",
      role: "풀스택",
      type: "solo",
    },
    ja: {
      title: "AIを活用した学習プラットフォーム",
      subtitle: "AeroSphere",
      desc: "学習コンテンツを階層構造で管理し、AIが学習説明と問題を自動生成するプラットフォーム。3段階構造（カテゴリ→セッション→学習）で拡張性を考慮して設計。",
      role: "フルスタック",
      type: "solo",
    },
    en: {
      title: "AI-Powered Learning Platform",
      subtitle: "AeroSphere",
      desc: "A platform that manages learning content in a hierarchical structure and automatically generates learning descriptions and questions using AI. Designed with a 3-tier structure for scalability.",
      role: "Full Stack",
      type: "solo",
    },
    stack: ["PHP / Laravel", "AWS Lambda", "AWS Bedrock", "MariaDB"],
    image: "/portfolio/aerosphere.jpg",
  },
  {
    id: "daba",
    ko: {
      title: "PHP 쇼핑몰",
      subtitle: "DaBa",
      desc: "실제 쇼핑몰 기능을 갖춘 웹사이트. 쿠키 기반 장바구니, 상품/주문/관리자 기능 포함. Bootstrap 반응형 UI 적용.",
      role: "풀스택",
      type: "solo",
    },
    ja: {
      title: "PHPショッピングモール",
      subtitle: "DaBa",
      desc: "実際のショッピングモール機能を持つWebサイト。クッキーベースのカート、商品/注文/管理者機能を含む。Bootstrapレスポンシブ対応。",
      role: "フルスタック",
      type: "solo",
    },
    en: {
      title: "PHP Shopping Mall",
      subtitle: "DaBa",
      desc: "A full-featured e-commerce website with cookie-based cart, product management, order processing, and admin panel. Responsive UI with Bootstrap.",
      role: "Full Stack",
      type: "solo",
    },
    stack: ["PHP", "phpMyAdmin", "Bootstrap"],
    image: "/portfolio/dabashop.jpg",
  },
  {
    id: "music",
    ko: {
      title: "음악 판매 관리 웹페이지",
      subtitle: "",
      desc: "PHP/Laravel MVC 아키텍처 기반 음악 판매 관리 시스템. Eloquent ORM CRUD, AJAX 비동기 처리로 UX 향상.",
      role: "풀스택",
      type: "solo",
    },
    ja: {
      title: "音楽販売管理Webページ",
      subtitle: "",
      desc: "PHP/Laravel MVCアーキテクチャベースの音楽販売管理システム。Eloquent ORM CRUD、AJAX非同期処理でUX向上。",
      role: "フルスタック",
      type: "solo",
    },
    en: {
      title: "Music Sales Management Website",
      subtitle: "",
      desc: "Music sales management system built on PHP/Laravel MVC architecture. Eloquent ORM for CRUD operations, AJAX for asynchronous UX improvements.",
      role: "Full Stack",
      type: "solo",
    },
    stack: ["PHP / Laravel", "MariaDB", "AJAX"],
    image: "/portfolio/music.jpg",
  },
  {
    id: "catviewer",
    ko: {
      title: "웹사이트 카테고리 뷰어",
      subtitle: "Chrome Extension",
      desc: "특정 웹사이트를 크롤링하여 카테고리 뷰 페이지로 생성하는 크롬 확장 프로그램. HTML 파싱 후 좌측 사이드바에 카테고리 계층 표시.",
      role: "개발",
      type: "solo",
    },
    ja: {
      title: "WebサイトカテゴリビューアーChrome拡張",
      subtitle: "Chrome Extension",
      desc: "特定のWebサイトをクロールしてカテゴリビューページを生成するChrome拡張機能。HTMLパース後、左サイドバーにカテゴリ階層を表示。",
      role: "開発",
      type: "solo",
    },
    en: {
      title: "Website Category Viewer",
      subtitle: "Chrome Extension",
      desc: "A Chrome extension that crawls a target website and renders it as a category view page. Parses HTML and displays the category hierarchy in a left sidebar.",
      role: "Developer",
      type: "solo",
    },
    stack: ["JavaScript", "Chrome Extension API"],
    image: "/portfolio/catviewer.jpg",
  },
  {
    id: "petition",
    ko: {
      title: "행정기관별 민원질의 유형 분포 추출",
      subtitle: "Data Analysis",
      desc: "민원질의를 길이 기반으로 유형 분류 후 행정기관별 분포 파악. R 클러스터링 분석.",
      role: "분석",
      type: "solo",
    },
    ja: {
      title: "行政機関別民願質疑類型分布抽出",
      subtitle: "Data Analysis",
      desc: "民願質疑を長さベースで類型分類後、行政機関別の分布把握。Rクラスタリング分析。",
      role: "分析",
      type: "solo",
    },
    en: {
      title: "Administrative Petition Type Distribution Analysis",
      subtitle: "Data Analysis",
      desc: "Classified civil petition queries by length and analyzed distribution by government agency using R clustering analysis.",
      role: "Analysis",
      type: "solo",
    },
    stack: ["R", "RStudio", "SQLite"],
    image: "/portfolio/petition.jpg",
  },
  {
    id: "library",
    ko: {
      title: "도서 관리 및 대출 프로그램",
      subtitle: "",
      desc: "MS ACCESS와 Basic 언어로 구현한 도서 관리 및 대출 시스템. 대출/반납/기록 조회 기능.",
      role: "개발",
      type: "solo",
    },
    ja: {
      title: "図書管理・貸出プログラム",
      subtitle: "",
      desc: "MS ACCESSとBasic言語で実装した図書管理・貸出システム。貸出/返却/記録照会機能。",
      role: "開発",
      type: "solo",
    },
    en: {
      title: "Library Management & Lending Program",
      subtitle: "",
      desc: "Library management and lending system built with MS ACCESS and Basic language. Includes lending, return, and record lookup features.",
      role: "Developer",
      type: "solo",
    },
    stack: ["MS ACCESS", "Basic"],
    image: "/portfolio/library.jpg",
  },
  {
    id: "indev",
    ko: {
      title: "AI 소상공인 채용·스케줄 관리 플랫폼",
      subtitle: "INDEV Team 1 · 진행중",
      desc: "AI로 최적 근무 스케줄을 자동 생성하고 구인 공고 작성을 지원하는 플랫폼. 논문 작성/공모전 제출 예정.",
      role: "팀장 / 프론트엔드 / 디자인",
      type: "team",
    },
    ja: {
      title: "AI小規模事業者採用・スケジュール管理プラットフォーム",
      subtitle: "INDEV Team 1 · 進行中",
      desc: "AIで最適な勤務スケジュールを自動生成し、求人公告作成を支援するプラットフォーム。論文執筆・コンペ提出予定。",
      role: "チームリーダー / フロントエンド / デザイン",
      type: "team",
    },
    en: {
      title: "AI Small Business Hiring & Schedule Management Platform",
      subtitle: "INDEV Team 1 · In Progress",
      desc: "Platform that automatically generates optimal work schedules using AI and assists in creating job postings. Paper and competition submission planned.",
      role: "Team Lead / Frontend / Design",
      type: "team",
    },
    stack: ["Java / Spring", "AWS", "React", "Figma"],
    image: null,
  },
];

export default function PortfolioPage() {
  const [lang, setLang] = useState("ko");
  const [selectedProject, setSelectedProject] = useState(null);
  const t = LANG[lang];

  useSEO({ title: "Portfolio — Minjae Park" });

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      {/* 언어 전환 + 네비 */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-stone-950/90 backdrop-blur border-b border-stone-100 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/about" className="text-sm text-stone-400 hover:text-brown-500 dark:hover:text-brown-300 transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t.nav.about}
          </Link>
          <div className="flex gap-1">
            {["ko", "ja", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors
                  ${lang === l
                    ? "bg-brown-100 dark:bg-brown-800 text-brown-700 dark:text-brown-200"
                    : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                  }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-20">

        {/* Hero */}
        <section className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-8 flex-wrap">
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="text-4xl font-semibold text-stone-900 dark:text-white">{t.hero.name}</h1>
                <p className="text-lg text-stone-400 dark:text-stone-500 mt-1">{t.hero.nameEn}</p>
              </div>
              <p className="text-base text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">{t.hero.tagline}</p>
              <p className="text-sm text-stone-400 dark:text-stone-500">{t.hero.school}</p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/216646609?v=4"
              alt="Minjae Park"
              className="w-24 h-24 rounded-full object-cover border-2 border-stone-100 dark:border-stone-800"
            />
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="mailto:minjae11662@gmail.com" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              minjae11662@gmail.com
            </a>
            <a href="https://github.com/Minjae0804" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              Minjae0804
            </a>
            <a href="https://minjae0804.github.io" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-stone-500 hover:text-brown-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
              Sally.log
            </a>
          </div>
          <p className="text-sm text-brown-600 dark:text-brown-300 bg-brown-50 dark:bg-brown-900/30 px-4 py-2.5 rounded-lg border border-brown-100 dark:border-brown-800">
            {t.hero.goal}
          </p>
        </section>

        <Divider />

        {/* 기술 스택 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.skills}</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS_DATA).map(([key, items]) => (
              <div key={key} className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">{t.skills[key]}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* 프로젝트 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.projects}</SectionTitle>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((proj) => {
              const p = proj[lang];
              const isOngoing = proj.id === "indev";
              return (
                <div key={proj.id} className="flex flex-col sm:flex-row gap-6 group">
                  {/* 이미지 */}
                  <div className="sm:w-64 sm:shrink-0 rounded-xl overflow-hidden bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
                    {proj.image ? (
                      <img src={proj.image} alt={p.title} className="w-full h-40 sm:h-48 object-cover object-top" />
                    ) : (
                      <div className="w-full h-40 sm:h-48 flex items-center justify-center text-stone-300 dark:text-stone-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
                      </div>
                    )}
                  </div>
                  {/* 내용 */}
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-stone-900 dark:text-white leading-snug">{p.title}</h3>
                      {isOngoing && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-brown-100 dark:bg-brown-900 text-brown-600 dark:text-brown-300 shrink-0 mt-0.5">
                          {t.projects.ongoing}
                        </span>
                      )}
                    </div>
                    {p.subtitle && <p className="text-xs text-stone-400 dark:text-stone-500 -mt-2">{p.subtitle}</p>}
                    <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded bg-brown-50 dark:bg-brown-900/50 text-brown-600 dark:text-brown-400 border border-brown-100 dark:border-brown-800">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      <span className="font-medium">{t.projects.role}:</span> {p.role} · <span className={p.type === "team" ? "text-brown-500 dark:text-brown-300" : ""}>{t.projects[p.type]}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* 경험 및 활동 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.experience}</SectionTitle>
          <div className="flex flex-col gap-6">
            <TimelineItem
              title={t.experience.teamlead}
              desc={t.experience.teamleadDesc}
              period="2026 –"
            />
            <TimelineItem
              title={t.experience.club}
              desc={t.experience.clubDesc}
              period="2025 –"
            />
            <TimelineItem
              title={t.experience.kmove}
              desc={t.experience.kmoveDesc}
              period="2025.06 – 2026.02"
            />
          </div>
        </section>

        <Divider />

        {/* 교육 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.education}</SectionTitle>
          <TimelineItem
            title={t.education.univ}
            desc={t.education.univDesc}
            period={t.education.univPeriod}
          />
        </section>

        <Divider />

        {/* 자격 및 수상 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.awards}</SectionTitle>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">자격증</h3>
              {t.awards.certs.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-stone-800 dark:text-stone-200">{c.name}</span>
                  <span className="text-stone-400 dark:text-stone-500 text-xs">{c.date} · {c.org}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-semibold tracking-widest text-stone-400 dark:text-stone-500 uppercase">수상</h3>
              {t.awards.awards.map((a, i) => (
                <div key={i} className="flex items-center justify-between text-sm gap-4">
                  <span className="font-medium text-stone-800 dark:text-stone-200">{a.name}</span>
                  <span className="text-stone-400 dark:text-stone-500 text-xs shrink-0">{a.date}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-stone-500 dark:text-stone-400">{t.awards.baekjoon}</div>
          </div>
        </section>

        <Divider />

        {/* 학습 현황 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.learning}</SectionTitle>
          <ul className="flex flex-col gap-2">
            {t.learning.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brown-300 dark:bg-brown-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* 목표 및 포부 */}
        <section className="flex flex-col gap-8">
          <SectionTitle>{t.sections.goal}</SectionTitle>
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-line max-w-2xl">
            {t.goalText}
          </p>
        </section>

      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-semibold text-stone-900 dark:text-white border-l-2 border-brown-400 pl-3">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-stone-100 dark:border-stone-800" />;
}

function TimelineItem({ title, desc, period }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center pt-1">
        <div className="w-2 h-2 rounded-full bg-brown-300 dark:bg-brown-600 shrink-0" />
        <div className="w-px flex-1 bg-stone-100 dark:bg-stone-800 mt-1" />
      </div>
      <div className="flex flex-col gap-0.5 pb-4">
        <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{title}</p>
        <p className="text-sm text-stone-500 dark:text-stone-400">{desc}</p>
        <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{period}</p>
      </div>
    </div>
  );
}
