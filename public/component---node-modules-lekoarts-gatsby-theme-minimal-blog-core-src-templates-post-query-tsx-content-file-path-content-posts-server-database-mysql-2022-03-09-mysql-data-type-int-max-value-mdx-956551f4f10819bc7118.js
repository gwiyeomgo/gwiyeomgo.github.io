"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5931],{2606:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.F},default:function(){return m}});var t=l(7294),a=l(1151);function r(e){const n=Object.assign({h3:"h3",ol:"ol",li:"li",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h3,null,"배경"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"3/5일 토요일 새벽부터 등록된 신규 회원의\r\nkakao_id 가 모두 동일한 값으로 db에 등록되었다."),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"3/7 월요일 문의전화가 오전부터 발생\r\n1.kako_id 로 로그인 불가\r\n2.회원들의 kakao_id 가 동일함 확인"),"\n"),"\n"),"\n",t.createElement(n.p,null,"당시 문제가 발생했을때\r\nkakao에서 넘겨주는 값이 문제라고 생각했다."),"\n",t.createElement(n.p,null,"회원쪽 담당자가 디버깅을 해봤고\r\n(신규 회원을 찾을 수 없어서.. 다른 팀 사람에게 도움 요청)\r\n처음 디버깅시 값이 똑같이 온다고 생각했고\r\n개발자가 kakao develop에 문의 글을 남겨서 답변을 기다렸다."),"\n",t.createElement(n.p,null,"회원쪽 담당자가 여러번 디버깅을 해보면서 알게된 사실은\r\nkakao_id는 제대로 왔고\r\ndb에 등록시 값이\r\n",t.createElement(n.code,null,"mysql max int value")," =2147483647\r\n이었다."),"\n",t.createElement(n.h3,null,"원인"),"\n",t.createElement(n.p,null,"우리 회원 db 의 kakao_id 컬럼의 데이터 타입이 int 였다.\r\n허용범위가 초가되어서 ",t.createElement(n.code,null,"2147483647"),"로 동일한 값이 등록되었다."),"\n",t.createElement(n.p,null,"최초 개발했을때\r\nkakao_id가 어떤 값으로 오고\r\n폭을 고려해서 개선해야 겠다고 아무도 생각못했었다."),"\n",t.createElement(n.p,null,"운영을 하면서 생각지도 못한 에러가 많이 나오는거 같다."),"\n",t.createElement(n.h3,null,"방법"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-sql"},"-- kakao_id 컬럼의 데이터 타입을 수정\r\n-- (1)\r\nALTER TABLE [tablename] CHANGE [columnName] [columnName] BIGINT not null default '0'\r\n-- (2)\r\nalter table [table_name] modify [column_name] BIGInt\r\n\n")),"\n",t.createElement(n.h3,null,"참고"),"\n",t.createElement(n.p,null,"//How do I change the data type for a column in MySQL?\r\n",t.createElement(n.a,{href:"https://stackoverflow.com/questions/1356866/how-do-i-change-the-data-type-for-a-column-in-mysql"},"참고1")),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://dogleg.co.kr/?p=163#zerofill"},"참고2-BIGINT")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)},o=l(8804);function m(e){return t.createElement(o.Z,e,t.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2022-03-09-mysql-data-type-int-max-value-mdx-956551f4f10819bc7118.js.map