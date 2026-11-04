import { sections } from './data/content';

export type SectionKey = keyof typeof sections;

// content.ts의 sections에서 true인 섹션만, 적힌 순서대로
export const visibleSections = (Object.keys(sections) as SectionKey[]).filter((key) => sections[key]);

// 화면에 보이는 순서대로 01, 02 … 번호를 매겨요
export function sectionNumber(key: SectionKey): string {
	return String(visibleSections.indexOf(key) + 1).padStart(2, '0');
}

// content.ts의 **굵게** 표시를 <strong>으로 바꿔요. 다른 HTML은 그대로 글자로 보여요.
export function emphasize(text: string): string {
	const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// '/resume.pdf'처럼 사이트 안의 파일 경로를 배포 주소(base)에 맞게 바꿔요.
export function withBase(url: string): string {
	if (!url.startsWith('/')) return url;
	return import.meta.env.BASE_URL.replace(/\/$/, '') + url;
}
