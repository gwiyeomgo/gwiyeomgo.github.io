"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5552],{3158:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.F},default:function(){return o}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h3:"h3",p:"p",a:"a",blockquote:"blockquote"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"3/3일 운영배포때 코드 수정해서 배포했습니다.\r\n운영계 테스트 계정으로는 더이상 발생하지 않습니다."),"\n",l.createElement(n.p,null,"그런데 같은 에러가 발생했고\r\n사용자 브라우저 캐시가 남아있어서 발생하는 것으로 예상됩니다."),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://gwiyeomgo.github.io/etc/2022-03-04-etc-browser-cache"},"브라우저 캐쉬를 관리해 보려고 여러가지 찾아봤는데..."),"\r\n너무 삽질하고 있었다"),"\n",l.createElement(n.p,null,"문제는 결국\r\n사용자가 어드민 화면에 오랜시간 켜둔채 접속했을 때\r\n최신 버전을 알고싶다는 욕구이다"),"\n",l.createElement(n.p,null,"그래서 사용자가 최신버전을 알기 위해서\r\nversion 을 table로 관리하고 어드민 화면에서 버전을 비교하고 새로고침하도록 진행하기로 했다"),"\n",l.createElement(n.h3,null,"업무하면서 적었던 기록 (진행과정)"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"2022-08-11"),"\n"),"\n",l.createElement(n.p,null,"어드민 어카운트에서 api 는 생성\r\n실제로 어드민 화면을 배포 완료했을 때 api 를 call 하는 방법이 궁금\r\n어드민 코드에서 배포 버전 조회 api 를 가져와서 저장=> 로그인 시점? 언제 호출?"),"\n",l.createElement(n.p,null,"..아,,버전은 배포하면 내가 수동으로 create 하자\r\n화면에서 버전확인하고 새로고침하는 기능을 만들자"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"2022 -07-26"),"\n"),"\n",l.createElement(n.p,null,"현재 운영 배포시에만 tag 를 생성\r\nbranch 별 상황을 고려해서 코드 수정 필요\r\n=> 피드백 :  gitLab 을 호출하지 않고\r\n그냥 version table 에 임의로 작성한 version 을 추가하면 될 거 같다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"2022 - 07-25"),"\n"),"\n",l.createElement(n.p,null,"오늘 진행\r\ngitLab api 로 release 버전을 받고 저장\r\nrefreash token 발급 후 api 호출 version 확인\r\n질문& 현재 상황\r\ncreate 함수를 만들었는데\r\n배포했을 때 어떻게 호출하지?"),"\n",l.createElement(n.p,null,"특정 프로젝트의 tags 를 호출했는데 ... 특정 프로젝트의 branch 의 tag 도 호출 가능한가?"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"2022 - 07 - 18"),"\n"),"\n",l.createElement(n.p,null,"version table을 생성하고 API 를 통해서 버전을 확인하고 프론트에서 버전이 다를 때 새로고침하도록 변경하려고 합니다."),"\n",l.createElement(n.p,null,"완료기준 : 어드민 화면을 켜 놓고 staging 에서 배포 후\r\n화면이 자동 새로고침 된다면 완료"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},u=t(8804);function o(e){return l.createElement(u.Z,e,l.createElement(c,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2022-03-04-etc-latest-release-version-control-mdx-c0dab15ec8a0cd97053a.js.map