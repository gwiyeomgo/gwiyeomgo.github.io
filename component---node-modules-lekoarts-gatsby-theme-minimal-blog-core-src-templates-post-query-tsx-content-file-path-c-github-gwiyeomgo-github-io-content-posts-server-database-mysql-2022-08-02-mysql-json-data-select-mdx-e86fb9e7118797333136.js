"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7755],{1220:function(e,t,l){l.r(t),l.d(t,{Head:function(){return m.F},default:function(){return E}});var n=l(7294),a=l(1151);function r(e){const t=Object.assign({h3:"h3",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",ol:"ol",li:"li",pre:"pre",h1:"h1",a:"a"},(0,a.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h3,null,"배경"),"\n",n.createElement(t.p,null,"매장에서 기부를 했던 기부자가 자신의 기부 내역을 찾을 수 없다는 문의가 왔다\r\n기부자는 2022년 **매장에서 기부를 총 2번 했다\r\n1번은 물품등록부터 기부영수증 신청까지 완료했지만 다른 기부내역은 없었다\r\n기부날짜,방문매장코드,등록자를 바탕으로 검색을 해봤다\r\n해당 날짜에 방문 매장에 데이터를 봤지만 없었다\r\n최근에 매장에서 자신의 매장이 아닌 다른 매장이 보인다는 오류가 있었다\r\n등록자는 같지만 매장이 다른 기부건을 찾아보고 싶었다"),"\n",n.createElement(t.h3,null,"JSON 데이터를 어떻게 조회하지?"),"\n",n.createElement(t.p,null,"현재 db 에는 등록자 컬럼(created)을 json 으로 관리한다"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"date"),n.createElement(t.th,null,"created"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20220706"),n.createElement(t.td,null,n.createElement(t.code,null,'{"id": 9, "name": "A", "role": "매니저", "datetime": "2022-07-06 17:40:05"}'))),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"20220727"),n.createElement(t.td,null,n.createElement(t.code,null,'{"id": 20, "name": "B", "role": "매니저", "datetime": "2022-07-27 13:27:29"}'))),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"20220727"),n.createElement(t.td,null,n.createElement(t.code,null,'{"id": 5, "name": "C", "role": "매니저", "datetime": "2022-07-27 11:45:32"}'))))),"\n",n.createElement(t.ol,null,"\n",n.createElement(t.li,null,"json 의 특정 key 값을 출력하기"),"\n"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"SELECT id, date ,JSON_EXTRACT(created, '$.id') as created\r\nFROM donation\r\nWHERE JSON_EXTRACT(created, '$.id') = 9\n")),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"date"),n.createElement(t.th,null,"created"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20220706"),n.createElement(t.td,null,"9")))),"\n",n.createElement(t.ol,{start:"2"},"\n",n.createElement(t.li,null,"json 전체를 출력하기"),"\n"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"SELECT id, date ,created\r\nFROM donation\r\nWHERE JSON_EXTRACT(created, '$.id') = 9\n")),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"date"),n.createElement(t.th,null,"created"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20220706"),n.createElement(t.td,null,"9")))),"\n",n.createElement(t.h1,null,"20230109"),"\n",n.createElement(t.p,null,"mysql 에서 json data 안의 key 쉽게 찾기 위해 json path 표현식을 사용하는 것을 알게되었다."),"\n",n.createElement(t.h3,null,"Json Path"),"\n",n.createElement(t.p,null,n.createElement(t.code,null,"SELECT * FROM donation WHERE created->'$.id' = 1;"),"\r\n",n.createElement(t.code,null,"created->'$.id'")," 와 ",n.createElement(t.code,null,"json_extract(created, '$.id')")," 는 동일하다"),"\n",n.createElement(t.h3,null,"참고 자료"),"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://www.joinc.co.kr/w/man/12/mysql/json"},"https://www.joinc.co.kr/w/man/12/mysql/json"),"\r\n",n.createElement(t.a,{href:"https://stackoverflow.com/questions/30411210/how-to-search-json-data-in-mysql"},"https://stackoverflow.com/questions/30411210/how-to-search-json-data-in-mysql")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)},m=l(8804);function E(e){return n.createElement(m.Z,e,n.createElement(c,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2022-08-02-mysql-json-data-select-mdx-e86fb9e7118797333136.js.map