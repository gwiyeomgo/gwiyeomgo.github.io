"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4510],{8801:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return u}});var l=n(7294),a=n(1151);function r(e){const t=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.p,null,"어드민에서 특정 화면들을 보기 위해서 관리자가 직접 매칭해야 합니다.\n매장이 100개 이상이고 계속 사용자가 변경되니 관리자의 업무가 많아졌습니다.\n업무를 줄이고 사용자의 편의를 늘리기 위해서 역할을 신청하는 기능을 개발했습니다.\n실제로 배포 후 사용자가 많았고 2주간 몇명이 들어왔는지 궁금했습니다."),"\n",l.createElement(t.h1,null,"총 신청 건 수 (승인/반려/신청/취소 모든 건)"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"weekend"),l.createElement(t.th,null,"week_start"),l.createElement(t.th,null,"week_end"),l.createElement(t.th,null,"cnt"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"23-03"),l.createElement(t.td,null,"230305"),l.createElement(t.td,null,"230311"),l.createElement(t.td,null,"14")))),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"SELECT DATE_FORMAT(r.created_at,'%y-%m') as weekend,\ndate_format(date_sub(r.created_at,interval(dayofweek(r.created_at)-1) day),'%y%m%d') as week_start,\ndate_format(date_sub(r.created_at,interval(dayofweek(r.created_at)-7)day),'%y%m%d') as week_end\n,count(*) as cnt\nFROM requests  r\ngroup by weekend;\n")),"\n",l.createElement(t.h1,null,"일별 통계 (취소 제외)"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'SELECT\nCASE DAYOFWEEK(r.created_at)\nWHEN 1 THEN "월"\nWHEN 2 THEN "화"\nWHEN 3 THEN "수"\nWHEN 4 THEN "목"\nWHEN 5 THEN "금"\nEND AS DateRange\n,count(*) AS Total\nFROM requests  r\nWHERE date_format(r.created_at,"%Y%m%d") BETWEEN "20230313" AND "20230317"\nand r.status != \'Canceled\'\nGROUP BY DAYOFWEEK(r.created_at);\n')),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"DateRange"),l.createElement(t.th,null,"Total"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"화"),l.createElement(t.td,null,"1")),l.createElement(t.tr,null,l.createElement(t.td,null,"수"),l.createElement(t.td,null,"1")),l.createElement(t.tr,null,l.createElement(t.td,null,"목"),l.createElement(t.td,null,"3")),l.createElement(t.tr,null,l.createElement(t.td,null,"금"),l.createElement(t.td,null,"1")))),"\n",l.createElement(t.h1,null,"한주간 신청 후 승인/반려 된 건 수 (취소 제외)"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"SELECT\n  WEEK( date_format(r.created_at,\"%Y%m%d\") ,0) AS week,\n  CONCAT(\n    DATE_FORMAT(DATE_ADD(r.created_at, INTERVAL(1-DAYOFWEEK(r.created_at)) DAY),'%Y-%m-%e'),\n    ' / ',\n    DATE_FORMAT(DATE_ADD(r.created_at, INTERVAL(7-DAYOFWEEK(r.created_at)) DAY),'%Y-%m-%e')\n  ) AS DateRange,\n   Count(r.created_at) AS cnt\nFROM requests  r\n WHERE r.status != 'Canceled'\nGROUP BY YEARWEEK(r.created_at)\n")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"week"),l.createElement(t.th,null,"DateRange"),l.createElement(t.th,null,"cnt"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"10"),l.createElement(t.td,null,"2023-03-5 / 2023-03-11"),l.createElement(t.td,null,"6")),l.createElement(t.tr,null,l.createElement(t.td,null,"11"),l.createElement(t.td,null,"2023-03-12 / 2023-03-18"),l.createElement(t.td,null,"6")))),"\n",l.createElement(t.h1,null,"참조"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://velog.io/@syh0397/SQL-mysql-Week-%EC%A3%BC-%EA%B4%80%EB%A0%A8-%ED%95%A8%EC%88%98-date-%EC%A1%B0%EC%A0%88"},"https://velog.io/@syh0397/SQL-mysql-Week-%EC%A3%BC-%EA%B4%80%EB%A0%A8-%ED%95%A8%EC%88%98-date-%EC%A1%B0%EC%A0%88")))}var E=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(8804);function u(e){return l.createElement(c.Z,e,l.createElement(E,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-03-16-mysql-week-data-statistics-mdx-c88079562f5d5960c12b.js.map