"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4023],{6927:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return u}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"테스트 데이터를 만들어서 소식 등록,발송예약 기능등 테스트 했다\r\n테스트 과정에서 현재 날짜가 계속 바뀌어도 테스트 할 수 있도록\r\ndate_format 을 사용했고\r\n한달전 예약일인 경우를 테스트 해야 해서 아래 처럼 테스트 스크립트를 수정했다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"insert into test.news (id, scheduled_date)\r\nvalues\r\n(1,  date_format(now(), '%Y%m07') ),\r\n(2,  date_format(date_add(now(),Interval -1 MONTH) , '%Y%m17'));\n")),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"date_add(now(),Interval -1 MONTH)")," 로 한달 전 날짜를 받아올 수 있다"),"\n",r.createElement(t.h1,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://extbrain.tistory.com/58"},"https://extbrain.tistory.com/58")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(8804);function u(e){return r.createElement(o.Z,e,r.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-07-18-mysql-date-add-mdx-77ead427351033f808ec.js.map