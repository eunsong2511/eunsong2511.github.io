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
