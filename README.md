# 포트폴리오 사이트

기획하는 백엔드 개발자의 원페이지 포트폴리오예요. [Astro](https://astro.build)로 만들었어요.

## 내 컴퓨터에서 보기

터미널에서 이 폴더로 이동한 뒤 아래 명령을 실행하고, 브라우저에서 http://localhost:4321 을 여세요.

```sh
npm install   # 처음 한 번만
npm run dev   # 미리보기 시작 (끄려면 Ctrl + C)
```

미리보기를 켜 둔 상태에서 파일을 저장하면 브라우저에 바로 반영돼요.

## 내용 바꾸기

| 바꾸고 싶은 것 | 고칠 파일 |
|---|---|
| 이름, 소개, 기술, 프로젝트, 이력, 연락처 등 **모든 글** | `src/data/content.ts` |
| 색상, 글꼴 | `src/styles/global.css` 맨 위 |
| 섹션 숨기기 / 순서 바꾸기 | `src/data/content.ts` 맨 위의 `sections` (`false`면 숨김, 내용은 보관) |
| 상단 메뉴 이름 | `src/components/Header.astro` |
| 브라우저 탭 아이콘 | `public/favicon.svg` |
| 이력서 PDF | `public/resume.pdf`로 넣고 `content.ts`의 `resume`를 `'/resume.pdf'`로 |
| 프로젝트 사진 | `public/projects/`에 넣고 `content.ts` 프로젝트의 `images`에 적기 |

## 배포 (GitHub Pages)

`main` 브랜치에 올리면(push) GitHub Actions가 자동으로 빌드해서 https://eunsong2511.github.io 에 배포해요. 1~2분 정도 걸리고, 진행 상황은 GitHub 저장소의 **Actions** 탭에서 볼 수 있어요.

```sh
git add -A
git commit -m "프로젝트 추가"
git push
```

## Claude에게 수정 부탁하기

이 폴더에서 Claude Code를 열고 원하는 걸 말로 설명하면 돼요. 예를 들면:

- "프로젝트 하나 추가해줘. 이름은 ○○이고, 내가 한 일은 …"
- "포인트 색을 초록색 계열로 바꿔줘"
- "기술 섹션을 아이콘 있는 카드 형태로 바꿔줘"
- "프로젝트마다 상세 페이지를 따로 만들어줘"

## 폴더 구조

```
src/
├─ data/content.ts      ← 사이트의 모든 글
├─ styles/global.css    ← 색상·글꼴·공통 스타일
├─ pages/index.astro    ← 페이지 뼈대
├─ layouts/Layout.astro ← <head> (제목, 공유 정보, 글꼴)
└─ components/          ← 섹션별 화면 (Header, Hero, About, Skills, Projects, History, Contact, Footer)
public/                 ← 이미지·PDF·파비콘처럼 그대로 올라가는 파일
```

## 명령어

| 명령 | 하는 일 |
|---|---|
| `npm run dev` | 내 컴퓨터에서 미리보기 |
| `npm run build` | 배포용 파일을 `dist/` 폴더에 생성 |
| `npm run preview` | 빌드된 결과 미리보기 |
