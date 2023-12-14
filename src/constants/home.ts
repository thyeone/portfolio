export const SKILL_LIST = [
  {
    id: 1,
    content: 'React.js, Next.js, TypeScript,',
  },
  {
    id: 2,
    content: 'TanStack Query, Recoil, Context API',
  },
  {
    id: 3,
    content: 'styled-components, TailwindCSS',
  },
  {
    id: 4,
    content: 'Jest, React Testing Library, Cypress, MSW',
  },
  {
    id: 5,
    content: 'GitHub Actions, Vercel, PWA',
  },
] as const;

export const EDUCATION = Object.freeze({
  content: '인덕대학교 컴퓨터소프트웨어학과',
  year: '2018.03. ~ 2023.02. | 졸업',
});

export const ABOUT =
  `약 1년 3개월의 기간동안 프론트엔드 개발을 독학으로 학습하며 \n수단을 가리지 않고 개발 역량을 쌓아왔습니다.\n 
저는 스스로 끊임없이 질문하며 문제를 개선합니다.
"어떻게 하면 더 좋은 방향으로 개선시킬 수 있을까?", "어떤 방법이 Best Practice일까?" 와 같은 기술적인 고민을 통해 저의 가정을 실험하며 주도적으로 프로젝트를 개선해왔고 이러한 과정을 통해 어제보다 더 나은 개발자로 성장할 수 있었습니다.` as const;

export const CHANNEL = [
  {
    id: 1,
    title: 'GitHub',
    link: 'https://github.com/thyeone',
  },
  {
    id: 2,
    title: 'Blog',
    link: 'https://velog.io/@thkim',
  },
  {
    id: 3,
    title: 'Resume',
    link: 'https://drive.google.com/file/d/17no1Ptmqsqdf_dMmXTTdhhKSLAmmaj40/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Email',
    link: 'thyeonee@gmail.com',
  },
] as const;

export const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
