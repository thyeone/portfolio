import first from '@assets/portfolio/1.gif';
import second from '@assets/portfolio/2.png';
import third from '@assets/portfolio/3.png';
import Inline from '@components/common/Inline';

export const PORTFOLIO_LIST = [
  {
    id: 1,
    title: '사용자 이탈률 감소를 위한 Suspense, Skeleton UI 적용',
    image: first,
    problem: (
      <p>
        이미지가 포함된 게시물을 불러오기 때문에 비교적 로딩 속도가 지연되고 사용자는 로딩이 될 때까지 빈 화면만 보고
        있어야 하는 문제가 발생했어요. <br />
        또한, 로딩이 된 직후 <strong>Layout Shift</strong>가 발생해 CLS가 저하되는 현상이 발생하였어요.
      </p>
    ),
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>
          TanStack Query의 옵션을 <Inline text="suspense:true" /> 로 설정하고 React 18 Suspense 기능을 사용하여 비동기
          컴포넌트의 로딩 상태를 선언적으로 관리하였어요.
        </li>
        <li>로딩 상태를 더이상 명령적으로 관리하지 않게 되어 DX가 크게 향상되었어요.</li>
        <li>실제 데이터가 렌더링 되기 전 Skeleton UI를 렌더링하여 CLS를 개선하였어요.</li>
        <li>컨텐츠가 로딩되고 있다는 사실을 인지할 수 있게 되면서 사용자 경험도 개선할 수 있었어요.</li>
        <li>CLS 지표 0.073 ➡ 0</li>
        <li>
          아쉬운 점 : page dir를 사용하여 서버 컴포넌트 + Streaming 조합을 사용하지 못한 기술적인 한계가 아쉬워요.
        </li>
      </ul>
    ),
    url: 'https://velog.io/@thkim/%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%B4-Suspense-Skeleton-UI-Code-Splitting-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0',
  },
  {
    id: 2,
    title: 'ErrorBoundary를 사용해 선언적으로 에러 핸들링',
    image: second,
    problem: (
      <p>
        스터디 멤버가 아닌 경우 403 에러 응답을 받기 때문에 스크립트 전체가 깨지는 현상이 발생하였어요. 예외 처리는
        가능하나 명령적으로 작성하는 방법이 좋지 않다 판단되었어요. 이 외에도 예기치 못한 에러가 발생했을 때 그러한
        상황을 방지하고 싶었어요.
      </p>
    ),
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>
          <Inline text="ErrorBoundary" /> 컴포넌트를 작성하여 비동기 작업을 수행하는 컴포넌트를 감쌌어요. 에러가
          발생되면 fallback 컴포넌트를 렌더링하여 스크립트 전체가 깨지는 현상을 방지했어요.
        </li>
        <li>사용자에게도 에러가 발생했다는 상황을 인지할 수 있게 되었어요.</li>
        <li>에러 상태 코드별로 분기 처리하여 상황에 적절한 페이지를 렌더링하였어요.</li>
        <li>
          404, 50X 과 같은 에러 코드들은 사용자가 에러를 리셋할 수 있는 트리거 장치로 <strong>재시도</strong> 버튼을
          두었어요.
        </li>
      </ul>
    ),
    url: 'https://velog.io/@thkim/Error-Boundary%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0',
  },
  {
    id: 3,
    title: 'API Mocking으로 개발 초기 단계에서 생산적으로 개발하기',
    image: third,
    problem: <p>개발 초기 단계에서 백엔드 API 개발이 지연되면서 프론트엔드 개발 또한 지연이 발생했어요.</p>,
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>API를 모킹하여 사전에 설정해둔 데이터로 응답을 보내주는 도구인 MSW를 도입하였어요.</li>
        <li>백엔드와 API 스펙을 사전에 협의하고 해당 스펙을 토대로 API를 모킹하였어요.</li>
        <li>따라서, API 구현 상태에 의존하지 않고 인터페이스를 구축할 수 있었어요.</li>
      </ul>
    ),
    url: 'https://velog.io/@thkim/MSW%EB%A5%BC-%ED%86%B5%ED%95%9C-API-%EB%AA%A8%ED%82%B9%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%82%B0%EC%A0%81%EC%9D%B8-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0',
  },
  {
    id: 4,
    title: 'SSR 환경에서의 Suspense 문제 해결',
    problem: (
      <p>
        서버에서 HTML을 생성할 때 Suspense가 작동하는 문제가 발생하였어요. <br />
        클라이언트에서 요청되어야 할 <Inline text="useQuery" /> 가 서버사이드에서 실행되어 전역에{' '}
        <Inline text="useIsMounted" /> 훅을 적용하여 임시로 해결하였어요.
        <br />그 결과, SSG, SSR 모두 적용이 안 되는 사이드 이펙트가 발생하여 Next.js의 장점을 살리지 못했어요.
      </p>
    ),
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>
          SSG 시점에는 fallback을 렌더링하도록 하는 <Inline text="SSRSafeSuspense" /> 라는 Suspense를 커스텀한
          컴포넌트를 구현하여 해결하였어요.
        </li>
        <li>
          자연스럽게 빌드 타임에 정적 생성된 SSG가 적용되고 일부 페이지에 SSR를 적용하여 초기 렌더링 속도를 약{' '}
          <strong>0.5~1초</strong> 단축시킬 수 있었어요.
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    title: '코드 스플리팅을 통한 번들 사이즈 최적화',
    problem: (
      <p>
        메인 페이지의 번들 사이즈는 약 <strong>13MB</strong>정도로 매우 큰 편이에요. 따라서 초기 로딩 속도가 비교적 느린
        편이에요.
      </p>
    ),
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>로그인 모달과 관련된 리소스(구글 Script)는 즉시 번들에 포함될 필요가 없다고 판단했어요.</li>
        <li>
          해당 이유를 근거로 <Inline text="React.lazy()" /> 를 적용하여 코드 스플리팅을 적용하였어요.
        </li>
        <li>
          미미하지만 <strong>13.5MB ➡ 12.3MB</strong> 약 <strong>1MB</strong>정도를 감소시킬 수 있었어요.
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    title: 'TanStack Query의 suspense 옵션을 사용했을 때 useQuery 타입 불일치 현상 해결',
    problem: (
      <p>
        Suspense를 사용한다는 것은 항상 성공할 것이라는 것을 가정합니다.
        <br /> 하지만, <Inline text="suspense:true" />로 설정했음에도 불구하고 useQuery가 리턴하는 데이터가{' '}
        <Inline text="TData | undefined" />로 평가됩니다.
        <br />
        data가 undefined일 상황을 고려한 코드(옵셔널 체이닝, 타입 좁히기 등)를 작성해야 하기 때문에 코드 가독성이
        저해되었어요.
      </p>
    ),
    solution: (
      <ul className="ml-4 text-base list-disc">
        <li>
          TanStack Query의 v5에는 해당 문제점을 해결할 수 있는 <Inline text="useSuspenseQuery" /> hook을 제공해요.
        </li>
        <li>
          v5로 마이그레이션 하여 <Inline text="useSuspenseQuery" />를 사용하여 해결하였어요.
        </li>
      </ul>
    ),
    url: 'https://velog.io/@thkim/React-Query-suspense-%EC%98%B5%EC%85%98%EC%9D%84-%ED%99%9C%EC%84%B1%ED%99%94-%ED%96%88%EC%9D%84-%EB%95%8C-useQuery%EC%9D%98-%ED%83%80%EC%9E%85-%EB%B6%88%EC%9D%BC%EC%B9%98-%ED%98%84%EC%83%81-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0',
  },
];
