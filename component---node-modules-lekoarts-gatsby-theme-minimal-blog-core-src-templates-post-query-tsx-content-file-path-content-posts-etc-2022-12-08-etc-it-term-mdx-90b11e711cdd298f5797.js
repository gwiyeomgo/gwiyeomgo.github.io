"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4731],{8643:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.F},default:function(){return E}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"CodeFreezing 코드 프리징\r\n'코드를 더 이상 수정하지 않는 상황'"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://velog.io/@sangmin7648/Monolithic-vs-Microservice-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"},"모놀리식(monolithic) 서비스"),"\r\nmicroservices-monolithic"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://www.redhat.com/ko/topics/microservices/what-are-microservices"},"마이크로서비스")," 서비스"),"\n"),"\n",l.createElement(n.h4,null,"배경"),"\n",l.createElement(n.p,null,"사용자에게 택배를 통해 기부를 받는 플렛폼을 개발했다\r\n동시에 매장에서 기부를 받고 기록하는 시스템을 개발했다"),"\n",l.createElement(n.p,null,"둘다 같은 기부 데이터 이지만 다른 테이블에서 데이터를 관리한다\r\n회원정보 테이블은 둘이 같이 쓴다\r\n필요한 정보를 찾기 위해 두 스키마에서 각각 조회해야 한다\r\n택배 시스템에는 기존 택배사외에 다른 택배사와 연동 작업이 진행중이다.\r\n연동을 위해 기존 플렛폼코드를 변경했고\r\n변경 완료이후 팀원들이 시스템에 문제가 없는지 하나씩 확인하고 개발해야 하는 상황이 발생했다."),"\n",l.createElement(n.p,null,"db 1개를 갖고 시스템을 쓰면서 일부 수정하기 어렵다"),"\n",l.createElement(n.h4,null,"뜻"),"\n",l.createElement(n.p,null,"관계가 있는 것끼리 모아놓자"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"소프트웨어 버전 작성 (software versioning)"),"\n"),"\n",l.createElement(n.h4,null,"배경"),"\n",l.createElement(n.p,null,"운영 배포를 하면서 버전 관리에 대해 알게되었다\r\n각각 의미하는 것이 무엇인지 정리하려고 한다"),"\n",l.createElement(n.p,null,"ex) release 0.0.0"),"\n",l.createElement(n.p,null,"주어진 번호 체계는 주(major) 혹은 부(minor)로 나뉘며,\r\n새롭게 개발된 소프트웨어에 알맞게 ,\r\n이들 번호는 증가하여 결정된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"major.minor[.build[.revision]]\r\n혹은\r\nmajor.minor[.maintenance[.build]]\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"구글 애널리틱스\r\n=> 웹 로그분석 툴"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"SEO(검색엔진 최적화)\r\n웹 사이트나 웹 페이지가 검색 엔진에서 노출되고 높은 순위로 표시되도록 최적화하는 작업\r\nSEO를 통해 웹 사이트가 검색 결과 페이지에서 상위에 노출되면\r\n사용자들이 해당 사이트를 더 쉽게 발견"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"React로 생성한 SPA 는  SEO 적합하지 않음.."),"\n",l.createElement(n.li,null,"React 개발자가 SEO를 고려하여 개발하려면 ...","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"사이드 렌더링(SSR)하려면 서버 측에서 React 컴포넌트를 렌더링하는 기능을 지원하는 프레임워크를 선택\r\nex) Next.js나 Nuxt.js와 같은 프레임워크를 사용하면 SSR을 쉽게 구현"),"\n",l.createElement(n.li,null,"sitemap.xml 파일을 생성하여 검색 엔진이 웹 페이지를 쉽게 찾을 수 있도록 설정"),"\n"),"\n"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"http://www.ktword.co.kr/test/view/view.php?m_temp1=1024"},"주/종속 시스템 (Master/Slave)"),"\r\nMaster: 하나의 일을 수행하는데에 있어 동작의 주체\r\nSlave: 종속적인 역할을 하는 것"),"\n"),"\n",l.createElement(n.p,null,"변하면 안돼는 중요한 코드 master\r\n대부분에 정보에 많이 영향을 미치는 곳 -> 상품을 움직이고 생산하거나"),"\n",l.createElement(n.p,null,"멤버,등록처,관리자 => 마스터\r\n캠페인,기부 => 거래\r\n에러로그(),외부서비스와 주고받은 로그=>로그"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"맨먼스의 미신"),"\n"),"\n",l.createElement(n.p,null,"date: 2022-06-14\r\n추정\r\n계획을 하려고 모임\r\n기능을 개발하는데 만드는 시간을 추정한다\r\n프로젝트 지연\r\n프로젝트에 사람을 투입할수록 지연된다\r\n",l.createElement(n.a,{href:"http://www.yes24.com/Product/Goods/16928943"},"http://www.yes24.com/Product/Goods/16928943"),"\r\n팀이바뀐다는 의미는 관성대로 일하지 않는다???\r\n컴퍼런스의 목표와 목적은 무엇인가 => 이직을 위해 몀함을 챙긴다\r\n방향성을 본다 -> 저렇게 하는군나 ->  우리와 다르다\r\n방향과 이직을 위해 컨퍼런스 가야한다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"React Virtual DOM"),"\n"),"\n",l.createElement(n.p,null,"이전 UI 상태를 메모리에 유지해 변경되는 최소의 집합만 적용해 좋은 성능을 낸다"),"\n",l.createElement(n.p,null,"라이브러리 :프로그램 제작에 필요한기능\r\n프레임워트: 뼈"),"\n",l.createElement(n.p,null,"플랫폼 : 프로그램 실행 환경"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"SSO(Single Sign-On)"),"\n"),"\n",l.createElement(n.p,null,"SSO는 하나의 중앙 인증 시스템으로 여러 서비스의 인증 정보를 관리하는 기능\r\n여러 개의 사이트에서 한번의 로그인으로\r\n여러 다른 사이트들을 자동적으로 접속하여 이용하는 방법\r\nOAuth 2.0은 SSO(Single Sign-On) 기능을 지원하기 위해 사용되는 인증 및 권한 부여 프로토콜 중 하나"),"\n",l.createElement(n.p,null,"한 웹사이트에서는 프론트 화면과 각 서비스 간에 데이터 통신을 위해 보통 API를 통한 인증 정보를 전달하여 데이터를 가져옴\r\nSSO와는 별개의 개념"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"2FA 설정"),"\n"),"\n",l.createElement(n.p,null,"1단계 : 암호를 입력하는 일반적인 방식입니다.\r\n2단계 : 모바일 OTP에서 발급된 코드를 추가로 입력합니다.\r\n",l.createElement(n.a,{href:"https://docs.github.com/ko/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication"},"https://docs.github.com/ko/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"VPN"),"\n"),"\n",l.createElement(n.p,null,"가상의 사설망\r\n",l.createElement(n.a,{href:"https://aws.amazon.com/ko/what-is/vpn/"},"https://aws.amazon.com/ko/what-is/vpn/"),"\r\n",l.createElement(n.a,{href:"https://medium.com/harrythegreat/aws-%EA%B0%80%EC%9E%A5%EC%89%BD%EA%B2%8C-vpc-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0-71eef95a7098"},"https://medium.com/harrythegreat/aws-%EA%B0%80%EC%9E%A5%EC%89%BD%EA%B2%8C-vpc-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0-71eef95a7098")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"VPC"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://guide.ncloud-docs.com/docs/networking-vpc-vpcoverview"},"https://guide.ncloud-docs.com/docs/networking-vpc-vpcoverview"),"\r\n",l.createElement(n.a,{href:"https://medium.com/harrythegreat/aws-%EA%B0%80%EC%9E%A5%EC%89%BD%EA%B2%8C-vpc-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0-71eef95a7098"},"https://medium.com/harrythegreat/aws-%EA%B0%80%EC%9E%A5%EC%89%BD%EA%B2%8C-vpc-%EA%B0%9C%EB%85%90%EC%9E%A1%EA%B8%B0-71eef95a7098")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"API Gateway"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://guide.ncloud-docs.com/docs/apigw-apigw-1"},"https://guide.ncloud-docs.com/docs/apigw-apigw-1")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"클라우드 컴퓨팅 대중화 (클라우드 네이티브 기술)"),"\n"),"\n",l.createElement(n.p,null,"1950 - 메인프레임 컴퓨터,터미널 접근\r\n1980 - 네트워크에 연결된 저렴한pc\r\n1990 - 월드 와이드 웹,애플리케이션 개발\r\n2006 - 아마존 ec2 등.. 서비스 출시\r\n클라우드 컴퓨팅 대중화\r\n모든 자원을 사람이 직접 관리 불가능\r\n클라우드 네이티브 기술은 기업들이 퍼블릭,프라이빗,하이브리드 클라우드처럼\r\n현대적이고 동적인 환경에서 확장성 있는 애플리케이션을 빌드하고 실행할 수 있도록 해줍니다.\r\n이들을 확장 가능하고 , 느슨하게 결합되어 있고, 탄력적이며,관리 가능하고,관찰 가능"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"확장성"),"\n"),"\n",l.createElement(n.p,null,"시스템은 할당된 하드웨어 자원을 늘려 수직적 확장\r\ndb 서버의 메모리 늘리기,cpu 추가\r\n시스템은 서비스 인스턴스를 추가하여 수평적 확장\r\n로드벨런서에 연결된 노드 수를 늘린다\r\n쿠버네티스 혹은 다른 컨테이너 오케스트레이션 환경에서\r\n컨테이너를 늘림으로 수평적 확장\r\n수평적 확장이 가능한 서비스와\r\n그렇지 않은 서비스의 차이?\r\n상태"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"느슨한 결합?"),"\n"),"\n",l.createElement(n.p,null,"다른 시스템을 변경할 필요 없이 시스템 하나를 변경할 수 있을 때\r\n느슨한 결합은 마이크로서비스 아키텍처가 지향하는 것\r\n마이크로서비스 vs 분산 모놀리스\r\n시스템 공학 관점에서 보면 어떤 시스템이든 약점이나 결함이 있으며,\r\n소프트웨에 세계에서는 버그라고 부른다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"시스템 탄력성"),"\n"),"\n",l.createElement(n.p,null,"에러와 결함이 발생했을 때 얼마나 정상적으로 동작할 수 있는지\r\n시스템 신뢰성\r\n주어진 시간 범위 내에 시스템이 기대한 대로 동작할 수 있는 능력"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"관리용이성?"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"관찰가능성?"),"\n"),"\n",l.createElement(n.p,null,"지표,로깅으로 모은 데이터 != 정보\r\n모니터링 도구"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"라운드 로빈"),"\n"),"\n",l.createElement(n.p,null,"스케줄링의 한 방법\r\n여러 프로세스들이 중앙처리장치를 조금씩 돌아가며 할당받아 실행되는 방식\r\n",l.createElement(n.a,{href:"http://wiki.hash.kr/index.php/%EB%9D%BC%EC%9A%B4%EB%93%9C_%EB%A1%9C%EB%B9%88"},"http://wiki.hash.kr/index.php/%EB%9D%BC%EC%9A%B4%EB%93%9C_%EB%A1%9C%EB%B9%88")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"멱등성"),"\n"),"\n",l.createElement(n.p,null,"메서드나 서비스를 호출하는 것과 같은 연산을 한 번 했을 때의 결과와\r\n여러번 호출했을 때의 결과가 같을 때 해당 연산은 멱등성을 갖는다고 이야기 합니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"프로메테우스"),"\n"),"\n",l.createElement(n.p,null,"오픈 소스 모니터링,경고 도구\r\n프로메테우스는 http 를 통해 지표를 수집하고 이를 시계열 데이터베이스에 높은 차원의 값으로 저장"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"트랜젝션"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"컴퓨터로 처리하는 작업의 단위"),"\n",l.createElement(n.li,null,"트랜젝션에 속한 모든 작업이 성공해야 트랜잭션 실행 완료(하나라도 오류가 나면 트랜잭션 실패)"),"\n"),"\n",l.createElement(n.p,null,"컴퓨터의 모든 작업은 메모리에 실행-> 전원 연결 끊기면 메모리 삭제 (휘발성)-> 디스크에 기록 필요"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"커밋 -> db 커밋시 디스크에 저장"),"\n",l.createElement(n.li,null,"롤백"),"\n"))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},u=t(8804);function E(e){return l.createElement(u.Z,e,l.createElement(a,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2022-12-08-etc-it-term-mdx-90b11e711cdd298f5797.js.map