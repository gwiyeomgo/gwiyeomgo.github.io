"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9171],{4437:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u.p},default:function(){return m}});var l=n(6540),r=n(8453);function a(e){const t=Object.assign({h1:"h1",pre:"pre",code:"code",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"where STR_TO_DATE(end_date, '%Y%m%d') >= curdate()\nand STR_TO_DATE(start_date, '%Y%m%d') <= curdate()\n")),"\n",l.createElement(t.p,null,"mysql DB 쿼리 작성 시  CURDATE() 로 현재 날짜를 반환한다\nCURDATE() 로 년,월,일 까지 현재 날짜를 반환한다\n그런데 문제가 되었던 부분은 시,분,초 까지는 지원하지 않아서 기능에 오류가 발생했다"),"\n",l.createElement(t.h1,null,"찾아보니"),"\n",l.createElement(t.p,null,'CURDATE()는 MySQL에서 "날짜만 (YYYY-MM-DD)" 반환하는 함수'),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"함수"),l.createElement(t.th,null,"반환"),l.createElement(t.th,null,"설명"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"CURDATE()"),l.createElement(t.td,null,"YYYY-MM-DD"),l.createElement(t.td,null,"시/분/초 없음")),l.createElement(t.tr,null,l.createElement(t.td,null,"NOW() / CURRENT_TIMESTAMP"),l.createElement(t.td,null,"YYYY-MM-DD HH:MM:SS"),l.createElement(t.td,null,"시/분/초 포함")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},u=n(7292);function m(e){return l.createElement(u.A,e,l.createElement(c,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2025-03-10-mysql-curdate-mdx-c9d84e4f10ae5eda356e.js.map