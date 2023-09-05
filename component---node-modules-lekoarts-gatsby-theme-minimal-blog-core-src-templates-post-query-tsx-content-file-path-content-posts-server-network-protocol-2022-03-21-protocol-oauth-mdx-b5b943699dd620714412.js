"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5276],{8869:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return a}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",ol:"ol",code:"code",blockquote:"blockquote",hr:"hr"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,l.createElement(n.a,{href:"https://opentutorials.org/course/3405"},"생황코딩 OAuth")," 보고 내용 기록"),"\n",l.createElement(n.p,null,"OAuth 2.0"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"간편로그인등 사용자 인증에 사용되는 개방형 인증 프로토콜(통신 규약 및 약속)"),"\n",l.createElement(n.li,null,"사용자가 가입된 서비스의 API에 접근하기 위해서는 사용자로부터 권한을 위임 받아야 합니다.\r\n이 때 사용자의 패스워드 없이도 권한을 위임 받을 수 있는 방법이 필요합니다.\r\n이를 위해서 고안된 기술이 OAuth입니다."),"\n",l.createElement(n.li,null,"OAuth는 클라이언트가 제3자 인증 서버와 통신하여 액세스 토큰을 발급받는 프로토콜"),"\n",l.createElement(n.li,null,"오늘날 많은 API들이 OAuth를 통해서 상호 연동을 지원하고 있습니다.\r\nex ) 카카오 싱크,구글 워크스페이스 로그인 등등.."),"\n",l.createElement(n.li,null,"OAuth 의 목적은 Access token 발급"),"\n"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"OAuth - 등록\r\nResource Server 접속하기 위해 Resource Server 에 등록 과정 필요\r\n이떄 ",l.createElement(n.code,null,"Client ID"),"(어플리케이션 식별자),",l.createElement(n.code,null,"Client Secret"),"(Client ID 비밀번호로,노출 금지),",l.createElement(n.code,null,"Authorized redirect URls"),"(리소스 서버가 권한을 부여한느 과정에서 Authorized Code 를 전달핳 주소) 세가지 요소를 공통적으로 받습니다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"OAuth - Resource Owner 의 승인\r\nResource Server 에게 Client 의 접근을 승인"),"\n"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.code,null,"로그인 버튼 => https://rescource.server?client_id=1&scope={사용할 기능}&redirect_url={}")),"\n"),"\n",l.createElement(n.p,null,"Resource Owner 가 위 주소로 접속을하면\r\nResource Server 는 Resource Owner의 로그인 여부를 확인\r\n",l.createElement(n.code,null," ( 로그인 X => ID 입력창, 로그인 O => url에 client_id ,redirect_url 와 Rescource Server 가 갖고 있는 Client ID,redirect_url를 확인)")),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"OAuth - Resource Server 의 승인"),"\n"),"\n",l.createElement(n.p,null,"Resource Server 가 Resource Owner 에게 Authorization Code 포함한 url 전송\r\nResource Owner 의 사용자는 모르게 url로 이동 Client 는 authorization Code 획득\r\n",l.createElement(n.code,null,"Client 가http://resurce.server/token?grant_type=authorization_code&code={authorizationCode}&redirect_uri={}&client_id={}&client_secret={} 를 Resource Server 에 전송"),"\r\nResource Server 는 authorization_code 일치하는지 확인"),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Access token 발급 (Resource Server 발급-> Client 저장)"),"\n"),"\n",l.createElement(n.p,null,"API 는 Client 가 Resouce Server 를 호출하는 접점\r\nClient 가 Resouce 에 요청 헤더에 Authrization : Bearer totken 추가해 전달"),"\n",l.createElement(n.p,null,"Access token 수명이 다해을때 Refresh token 발급 ?"),"\n",l.createElement(n.p,null,"OAuth 프로토콜은 사용자의 인증 후 인가된 접근을 위해\r\naccess token과 refresh token을 발급하고 사용합니다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"access token"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"수명이 존재한다"),"\n",l.createElement(n.li,null,"수명 끝나면 사용 할 수 없음"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"refresh token"),"\n"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"수명이 끝나서 api 호출을 할 수 없을때\r\n다시 새로은 토큰을 발급 받기 위해 refresh token 존재"),"\n",l.createElement(n.li,null,"access token 과 함께 발급 받음(아닌 경우도 있음)"),"\n",l.createElement(n.li,null,"invalid error 발생 시 refresh 토큰을 전달해 다시 access 토큰 발급 받음"),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"nhn forward 컨퍼런스에 참가하여 oauth 의 관련된 내용을 듣다가\r\ngnap protocol 을 알게되었다.\r\noauth 의 미래이며 아직 개발 진행 중 이라고 한다"),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://oauth.net/gnap/"},"https://oauth.net/gnap/"),"\r\n",l.createElement(n.a,{href:"https://k/ohyeon.tistory.com/58"},"https://k/ohyeon.tistory.com/58")),"\n",l.createElement(n.h1,null,"OAuth2 의 과거"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"OAuth 1"),"\n"),"\n",l.createElement(n.h1,null,"OAuth2 의 미래"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"OAuth 2.1"),"\n",l.createElement(n.li,null,"OAuth"),"\n"))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},o=t(8804);function a(e){return l.createElement(o.Z,e,l.createElement(u,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-network-protocol-2022-03-21-protocol-oauth-mdx-b5b943699dd620714412.js.map