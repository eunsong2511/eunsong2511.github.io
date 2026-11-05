/*
 * ✏️ 사이트에 보이는 모든 글은 이 파일 하나에 들어 있어요.
 *
 * - 따옴표('...') 안의 글자만 바꾸면 사이트에 바로 반영돼요.
 * - **이렇게** 별표 두 개로 감싸면 굵은 글씨로 보여요.
 * - 쓰지 않는 링크는 빈 따옴표('')로 두면 화면에서 사라져요.
 * - 항목을 늘리려면 { ... } 덩어리를 통째로 복사해서 붙여넣고, 끝에 쉼표(,)를 잊지 마세요.
 */

// ─── 보여줄 섹션 ─────────────────────────────────────────────
// false로 바꾸면 화면과 상단 메뉴에서 숨겨져요. 내용은 아래에 그대로 보관돼요.
// 줄 순서를 바꾸면 화면에 나오는 순서도 바뀌어요.
export const sections = {
	about: false, // 소개
	skills: false, // 기술
	projects: true, // 프로젝트
	history: true, // 이력
	contact: false, // 연락
};

// ─── 기본 정보 (맨 위 첫 화면) ───────────────────────────────
export const site = {
	name: '김은송',
	role: 'Backend Developer · Service Planner',
	// 이름 위에 작은 해시태그로 보여요
	tags: ['백엔드', '서비스기획', 'AI서비스'],
	// 이름 아래 세 줄 소개
	intro: [
		'사용자의 문제를 **기획으로 정의하고**, **백엔드로 구현하는** 개발자입니다.',
		'다양한 **팀 프로젝트**에 참여하며 **서비스를 직접 개발**하고 있습니다.',
		'**중앙대학교 INC Lab 학부연구생**으로 연구 경험을 쌓고 있습니다.',
	],
	email: 'eunsong2511@gmail.com',
	phone: '', // 공개하고 싶을 때만 입력 (예: '010-0000-0000')
	github: 'https://github.com/eunsong2511',
	blog: '', // 블로그가 있다면 주소 입력 (예: 'https://velog.io/@아이디')
	// 이력서 PDF를 public 폴더에 resume.pdf로 넣고 '/resume.pdf'로 바꾸면 버튼이 생겨요
	resume: '',
	// 검색 결과·링크 공유 시 보이는 한 줄 설명
	description: '기획하는 백엔드 개발자 김은송의 포트폴리오입니다. 직접 만든 서비스의 기획과 개발 과정을 기록합니다.',
};

// ─── 소개 ───────────────────────────────────────────────────
export const about = {
	paragraphs: [
		'백엔드 개발을 기반으로 서비스 기획까지 함께 하는 컴퓨터공학과 학생입니다. 멋쟁이사자처럼 해커톤에서 러닝 앱 「달리」의 서버를 맡아 API 설계부터 배포까지 담당했고, 지금은 중앙대학교 INC Lab에서 학부연구생으로 활동하고 있습니다.',
	],
	// 일하는 방식 카드 3개
	principles: [
		{
			title: '문제부터 정의합니다',
			description: '기능을 만들기 전에 누가, 왜 불편한지부터 정리합니다. 문제가 명확하면 만들 것과 만들지 않을 것이 분명해집니다.',
		},
		{
			title: '계약을 먼저 정합니다',
			description: 'API 명세를 팀의 단일 기준으로 두고, 실서버보다 Mock 서버를 먼저 열어 프론트엔드가 기다리지 않고 개발하게 합니다.',
		},
		{
			title: '실패를 전제로 설계합니다',
			description: 'AI 같은 외부 호출이 늦거나 실패해도 대체 응답을 돌려줘, 사용자의 흐름이 끊기지 않는 서버를 만듭니다.',
		},
	],
};

// ─── 기술 ───────────────────────────────────────────────────
export const skills = [
	{ group: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Java'] },
	{ group: 'Database · Infra', items: ['PostgreSQL', 'Docker Compose', 'Nginx', 'AWS EC2'] },
	{ group: 'AI · Test', items: ['OpenAI API', 'Structured Outputs', 'pytest'] },
	{ group: '기획 · 협업', items: ['API 명세 설계', 'ERD 설계', '페르소나·사용자 흐름 정의', 'Git · GitHub'] },
];

// ─── 프로젝트 ────────────────────────────────────────────────
// 위에 있는 프로젝트가 먼저 보여요. details 안의 항목은 필요 없으면 지워도 돼요.
export const projects = [
	{
		title: '달리',
		period: '2026.08',
		type: '멋쟁이사자처럼 해커톤 · 팀 5명',
		roles: ['백엔드 전담', '기획 참여'],
		summary: '초보 러너의 개인 케이던스를 기준으로 무리 없는 완주를 돕고, 기록·계획을 일상 루틴으로 연결하는 러닝 앱',
		highlight: 'API 설계 · DB · AI 리포트 · 배포까지 서버 전체 담당',
		stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'OpenAI API', 'Docker', 'Nginx', 'AWS EC2'],
		links: [{ label: 'GitHub', url: 'https://github.com/Gonu19/Dalli' }],
		// 사진: public/projects 폴더에 파일을 넣고 [ ] 안에 아래처럼 한 줄씩 적어 주세요. 적은 순서대로 보여요.
		// { src: '/projects/dalli-home.png', alt: '달리 홈 화면' },
		// alt는 사진이 안 보일 때 대신 나오는 설명이에요.
		images: [
			{ src: '/projects/dalli-cover.webp', alt: '달리 소개 이미지: 내 속도로 만드는 러닝 습관' },
			{ src: '/projects/dalli-screens.webp', alt: '달리 앱 화면 4개: 맞춤 리듬 추천, 러닝 가이드, AI 리포트, 루틴 캘린더' },
		] as { src: string; alt: string }[],
		details: {
			problem: '러닝 초보자는 자신에게 맞는 페이스를 몰라 초반에 너무 빨리 달리다 금방 지쳐 포기하곤 합니다. 기존 러닝 앱은 거리·속도·순위 중심이라, "끝까지 달려 본 경험"이 필요한 초보자에게는 맞지 않았습니다.',
			development: [
				'API 계약 문서와 ERD를 직접 작성해 앱과 서버가 같은 기준으로 개발하도록 정리',
				'실서버보다 Mock API를 먼저 배포하고, 같은 HTTPS 주소에서 실서버로 전환해 프론트엔드가 기다리지 않고 개발하도록 지원',
				'FastAPI · SQLAlchemy 2.0 · PostgreSQL로 인증, 러닝 기록, 리포트, 계획·캘린더 API 구현',
				'OpenAI Structured Outputs로 AI 러닝 리포트를 만들고, 응답이 늦거나 실패하면 미리 정한 대체 리포트를 돌려줘 앱이 멈추지 않도록 설계',
				'AI 응답을 저장 전에 자동 검증해 근거 없는 수치나 의료 진단처럼 보이는 표현을 걸러내는 규칙 구현',
				'AWS EC2에 Docker Compose · Nginx · HTTPS로 배포하고, DB는 외부에 노출하지 않도록 구성',
				'pytest 테스트 파일 29개(실제 PostgreSQL 연동 테스트 포함)로 API와 리포트 동작 검증',
			],
			result: [],
		},
	},
];

// ─── 이력 (경력·교육) ─────────────────────────────────────────
export const history = [
	{
		period: '2026.09 – 현재',
		title: '중앙대학교 INC Lab',
		subtitle: '학부연구생',
		items: [],
	},
	{
		period: '2026 – 재학 중',
		title: '성결대학교',
		subtitle: '컴퓨터공학과',
		items: [],
	},
];

// ─── 마지막 연락 영역 ──────────────────────────────────────────
export const contact = {
	title: '함께 이야기 나눠요',
	message: '새로운 프로젝트, 협업 제안, 가벼운 커피챗 모두 환영합니다.',
};
