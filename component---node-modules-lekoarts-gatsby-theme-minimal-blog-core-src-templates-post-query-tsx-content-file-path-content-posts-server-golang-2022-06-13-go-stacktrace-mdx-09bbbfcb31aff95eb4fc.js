"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4182],{442:function(e,r,n){n.r(r),n.d(r,{Head:function(){return o.F},default:function(){return m}});var t=n(7294),l=n(1151);function c(e){const r=Object.assign({h3:"h3",p:"p",a:"a",ul:"ul",li:"li",code:"code",pre:"pre",img:"img",ol:"ol"},(0,l.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(r.h3,null,"배경"),"\n",t.createElement(r.p,null,"고사이렌을 통해서 장애가 발생하면\r\n개발자들이 볼 수 있도록 업무가 생성된다\r\n이때 stacktrace 를 보여주려고 했지만 실패햇었다\r\n현재 err 를 쌓을 때 현재 코드에 문제가 있어서 못함"),"\n",t.createElement(r.h3,null,"작업내용"),"\n",t.createElement(r.p,null,"github 의 라이브러리를 받아서 사용\r\n=>api 의 에러 발생 시 stack 에 쌓이도록 수정"),"\n",t.createElement(r.p,null,"에러 발생시 stack 을 고사이렌에 보내도록 수정"),"\n",t.createElement(r.h3,null,"20220725"),"\n",t.createElement(r.p,null,"stacktrace 가 남겨지도록 log 를 사용했다.\r\n",t.createElement(r.a,{href:"https://www.popit.kr/golang-error-stack-trace%EC%99%80-%EB%A1%9C%EA%B9%85/"},"https://www.popit.kr/golang-error-stack-trace와-로깅/")," 글을 보고 새 방식 도입"),"\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"고사인렌 : Dooray API 를 통해 장애 알림 시스템\r\n작업에서 고사이렌 코드에사 stacktrace 를 같이 출력되도록 수정하고"),"\n",t.createElement(r.li,null,"API 에서 라이브러리를 사용해서 log 를 쌓도록 수정했다\r\n=>  전체 변경은 시간이 많이 걸리기 때문에 기부 관련 API 만 수정 =>  500 장애 발생시 stack trace"),"\n"),"\n",t.createElement(r.h3,null,"stacktrace 를 알 수 있도록 다른 errors 패키지를 사용하자"),"\n",t.createElement(r.h3,null,"배경"),"\n",t.createElement(r.p,null,t.createElement(r.a,{href:"https://www.popit.kr/golang-error-stack-trace%EC%99%80-%EB%A1%9C%EA%B9%85/"},"https://www.popit.kr/golang-error-stack-trace와-로깅/")," 글을 읽고\r\n",t.createElement(r.code,null,"DevOps/242 고사이렌에 에러 stack 을 출력한다"),"에서 고사이렌에 stacktrace 가 출력되도록 수정했습니다."),"\n",t.createElement(r.p,null,"위 글에서도 언급된것 처럼\r\n",t.createElement(r.code,null,"github.com/pkg/errors")," 를 사용해서 errors 처리를 해야\r\n자동으로 에러 발생지점을 알 수 있습니다."),"\n",t.createElement(r.h3,null,"문제"),"\n",t.createElement(r.p,null,"sharing service 는 HandleErrorResponse 를 통해서 에러 코드와 메세지를 생성합니다. (직접 커스텀 에러 헨들러를 만들어서 사용)\r\n해당 방식으로는 에러 발생지점을 추적할 수 없어서\r\n수동으로 ",t.createElement(r.code,null,' log.Traceln("")')," 를 모든 함수 코드에 넣어서 log 관리를 하고 있습니다."),"\n",t.createElement(r.pre,null,t.createElement(r.code,null,'func (CourierAdminController) GetCourier(ctx echo.Context) error {\r\n\tlog.Traceln("")\r\n        ...\r\n\treturn ctx.JSON(http.StatusOK, courierSummary)\r\n}\n')),"\n",t.createElement(r.h3,null,"변경내용"),"\n",t.createElement(r.p,null,"오류보고/753 기부 API 500번 에러의 stacktrace 기록되도록 코드 수정 에서"),"\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"DonationAdminController"),"\n",t.createElement(r.li,null,"DonationController 만 수정"),"\n"),"\n",t.createElement(r.p,null,"아래 이미치 처럼 500 에러 발생시 발생 함수를 알 수 있습니다.\r\n",t.createElement(r.img,{src:"../img/stacktrace.jpg",alt:"img_1.png"})),"\n",t.createElement(r.p,null,"모든 함수에",t.createElement(r.code,null,'log.Traceln("")')," 써준 코드를 지우고\r\n500 번 에러가 발생할 때만 ",t.createElement(r.code,null,' errors.Wrap(err, "")')," ",t.createElement(r.code,null,"errors.New(msg)")," 를 사용하고\r\n나머지 400 , 404 의 경우 기존 ",t.createElement(r.code,null,'customErrors.ValidationError("매장코드를 확인하여주세요")')," 처럼 그대로 사용"),"\n",t.createElement(r.h3,null,"사용법"),"\n",t.createElement(r.ol,null,"\n",t.createElement(r.li,null,"2개 errors 패키지를 import 해야합니다. 그래서\r\n기존 errors 는 customErrors 로 변경해서 import 합니다."),"\n"),"\n",t.createElement(r.pre,null,t.createElement(r.code,null,'import (\r\n\tcustomErrors "sharing-platform-service/common/errors"\r\n    "github.com/pkg/errors"\r\n)\n')),"\n",t.createElement(r.ol,{start:"2"},"\n",t.createElement(r.li,null,"Controller -> Service -> Repository 를 호출하는 구조에서는\r\n가장 마지막 발생하는 error 에 ",t.createElement(r.code,null,'errors.Wrap(err, "")')," 를 사용합니다.","\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"repository 이나 entity 파일에 적용"),"\n"),"\n"),"\n"))}var a=function(e){void 0===e&&(e={});const{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?t.createElement(r,e,t.createElement(c,e)):c(e)},o=n(8804);function m(e){return t.createElement(o.Z,e,t.createElement(a,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-06-13-go-stacktrace-mdx-09bbbfcb31aff95eb4fc.js.map