import fourCutMaps from '@assets/project/4cutmaps.png';
import palette from '@assets/project/palette.png';
import crescendo from '@assets/project/crescendo.png';
import crescendoStack from '@assets/project/crescendo-stack.png';
import photoStack from '@assets/project/4-cut-stack.png';
import { Link } from 'react-router-dom';

export type ProjectType = (typeof PROJECT_LIST)[0];

export const PROJECT_LIST = [
  {
    id: 1,
    icon: crescendo,
    title: 'Crescendo',
    period: '2023.06. - 2023.11.',
    stack: crescendoStack,
    description: '개발자를 위한 소규모 스터디 플랫폼',
    github: 'https://github.com/crescenders/crescendo-frontend',
    service: 'https://crescendo-study.site',
    detail: (
      <ul className="mt-5 ml-4 leading-7 whitespace-pre-wrap list-disc">
        <li>
          프론트엔드 파트 기획 단계부터 출시 단계까지 전반적으로 <strong>참여</strong> 및 <strong>주도</strong>
        </li>
        <li>구글 소셜 로그인 로직 구현과 함께 인터셉터를 통한 토큰 에러 핸들링</li>
        <li>
          Intersection Observer, useInfiniteQuery를 사용한 무한 스크롤 구현을 통해 성능 최적화
          <br />
          <Link
            target="_blank"
            to="https://velog.io/@thkim/Intersection-Observer-useInfinieQuery%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84"
            className="text-xs text-black bg-white rounded p-1 hover:bg-[rgba(255,255,255,0.5)] transition"
          >
            Blog Post
          </Link>
        </li>
        <li>
          <strong>사용자 이탈률 감소</strong>
          {`를 위한 Suspense, Skeleton UI, 코드 스플리팅 적용\n`}
          <Link
            target="_blank"
            to="https://velog.io/@thkim/%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%B4-Suspense-Skeleton-UI-Code-Splitting-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0"
            className="text-xs text-black bg-white rounded p-1 hover:bg-[rgba(255,255,255,0.5)] transition"
          >
            Blog Post
          </Link>
        </li>
        <li>
          <span className="font-bold">ErrorBoundary</span>를 통한 효율적인 에러 핸들링{' '}
          <Link
            target="_blank"
            to="https://velog.io/@thkim/Error-Boundary%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0"
            className="text-xs text-black bg-white rounded p-1 hover:bg-[rgba(255,255,255,0.5)] transition"
          >
            Blog Post
          </Link>
        </li>
        <li>서버에서 HTML을 생성할 때 Suspense가 작동하는 문제를 Suspense 컴포넌트를 확장하여 해결</li>
        <li>
          Suspense의 타입 불일치 문제를 인지하고 React-Query v5 마이그레이션을 통해 해결{' '}
          <Link
            target="_blank"
            to="https://velog.io/@thkim/React-Query-suspense-%EC%98%B5%EC%85%98%EC%9D%84-%ED%99%9C%EC%84%B1%ED%99%94-%ED%96%88%EC%9D%84-%EB%95%8C-useQuery%EC%9D%98-%ED%83%80%EC%9E%85-%EB%B6%88%EC%9D%BC%EC%B9%98-%ED%98%84%EC%83%81-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
            "
            className="text-xs text-black bg-white rounded p-1 hover:bg-[rgba(255,255,255,0.5)] transition"
          >
            Blog Post
          </Link>
        </li>
        <li>
          개발 초기 단계의 <strong>생산적인 개발</strong>을 위해 API 모킹 라이브러리 MSW 도입
        </li>
        <li>
          리펙토링 과정에서 사이드 이펙트를 방지하기 위해 Jest, RTL 도입을 통한 <strong>유닛, 통합테스트 적용</strong>,
          Cypress 도입을 통한 <strong>E2E</strong> 테스트 진행
        </li>
        <li>
          GitHub Actions를 통한 <strong>빌드 및 테스팅 자동화</strong> 구축
        </li>
        <li>
          웹앱을 사용하기 위한 <strong>PWA</strong> 적용
        </li>
        <li>다양한 조건의 스터디 게시물을 조회하기 위해 복잡한 쿼리 파라미터가 적용된 필터링 구현</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: fourCutMaps,
    title: '네컷지도',
    period: '2023.02. - 2023.05.',
    stack: photoStack,
    description: '현재 내 위치 근처에 가까운 네컷사진 정보 서비스',
    github: 'https://github.com/4-frame-photos-map/frontend',
    service: 'https://photosmap.vercel.app',
    detail: (
      <ul className="mt-5 ml-4 leading-7 list-disc">
        <li>
          디바운싱을 적용해 <strong>성능</strong>을 개선한 검색 기능 구현
        </li>
        <li>
          토스트 메시지를 <strong>선언적</strong>으로 사용하기 위한 useToast 커스텀훅 작성
        </li>
        <li>찜 페이지, 내 칭호 페이지 개발</li>
        <li>
          위 페이지를 React-Query의 <strong>낙관적 업데이트</strong>를 적용함으로써 느린 네트워크 환경의 사용자 경험 및
          성능 개선
        </li>
        <li>Custom hook 및 유틸 함수를 검증하는 유닛테스트 코드 작성</li>
        <li>Recoil 도입과 함께 사용자의 위도 경도를 전역 상태로 관리</li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: palette,
    title: '나만의 전시회',
    period: '2022.10. - 2022.11.',
    stack: (
      <ul className="flex gap-x-2">
        <li className="items-center p-1 text-sm leading-4 no-underline border rounded cursor-pointer select-none w-fit border-neutral-700 bg-neutral-800 text-neutral-100">
          React.js
        </li>
        <li className="items-center p-1 text-sm leading-4 no-underline border rounded cursor-pointer select-none w-fit border-neutral-700 bg-neutral-800 text-neutral-100">
          styled-components
        </li>
      </ul>
    ),
    description: '접근성과 편리성을 가지고 있는 전시회 정보 제공 서비스',
    github: 'https://github.com/Induk-Capstone-Culture-island/own-exhibition-FE',
    detail: (
      <ul className="mt-5 ml-4 leading-7 list-disc">
        <li>프론트엔드 전담, 기획, 디자인</li>
        <li>기본적인 CRUD 기능 위주 작업</li>
        <li>회원 관련 기능(회원가입, 로그인, 마이페이지, 정보수정)</li>
        <li>전시회 목록 페이지</li>
        <li>전시회 상세 페이지</li>
        <li>찜 기능</li>
      </ul>
    ),
  },
];
