"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1483],{7128:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.p},default:function(){return E}});var l=t(6540),a=t(8453);function r(e){const n=Object.assign({h3:"h3",p:"p",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code",a:"a",img:"img"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"실제 기부데이터는 1개이고, 기부목록에는 2개로 보이는 문제가 발생했다.\n기부 테이블과 기부 영수증은 left 조인을 해서 데이터를 조회합니다.\n문제는 기부영수증 데이터가 2개여서 목록에도 2개로 보입니다."),"\n",l.createElement(n.p,null,"기부영수증 데이터를 삭제하고 , 테이블에 1개만 들어가도록 제약을 설정하기로 했고\n수정작업을 위해 데이터를 조회했습니다."),"\n",l.createElement(n.h3,null,"donation_receipts table 을 보니"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"id 4,6번은 같은 donation_id가 존재한다"),"\n"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"id"),l.createElement(n.th,null,"nationality_type"),l.createElement(n.th,null,"name"),l.createElement(n.th,null,"..."),l.createElement(n.th,null,"donation_id"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"1"),l.createElement(n.td,null,"NATIVE"),l.createElement(n.td,null,"A"),l.createElement(n.td,null,"..."),l.createElement(n.td,null,"17")),l.createElement(n.tr,null,l.createElement(n.td,null,"2"),l.createElement(n.td,null,"NATIVE"),l.createElement(n.td,null,"B"),l.createElement(n.td,null,"..."),l.createElement(n.td,null,"16")),l.createElement(n.tr,null,l.createElement(n.td,null,"3"),l.createElement(n.td,null,"NATIVE"),l.createElement(n.td,null,"C"),l.createElement(n.td,null,"..."),l.createElement(n.td,null,"14")),l.createElement(n.tr,null,l.createElement(n.td,null,"4"),l.createElement(n.td,null,"NATIVE"),l.createElement(n.td,null,"D"),l.createElement(n.td,null,"..."),l.createElement(n.td,null,"22")),l.createElement(n.tr,null,l.createElement(n.td,null,"5"),l.createElement(n.td,null,"NATIVE"),l.createElement(n.td,null,"D"),l.createElement(n.td,null,"..."),l.createElement(n.td,null,"22")))),"\n",l.createElement(n.h3,null,"(1) 중복된 데이터 찾기"),"\n",l.createElement(n.h3,null,"중복된 데이터가 존재하는 기부건 수 확인 쿼리"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sql"},"SELECT * FROM donation_receipts  GROUP BY donation_id HAVING count(*) > 1;\n")),"\n",l.createElement(n.p,null,"*GROUP BY 절 사용하기, HAVING절 안에 COUNT 함수 사용하기\n",l.createElement(n.a,{href:"https://stackoverflow.com/questions/16697215/count-number-of-unique-values"},"참조")),"\n",l.createElement(n.h3,null,"중복된 기부번호를 갖은 기부영수증 조회 쿼리"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sql"},"select * from donation_receipts\nwhere donation_id in (\n    SELECT donation_id FROM donation_receipts  GROUP BY donation_id HAVING count(*) > 1 -- 중복된 기부번호 22\n)\n\n")),"\n",l.createElement(n.h3,null,"(2) 기부영수증 데이터를 삭제 - 데이터 정제 작업"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sql"},"START TRANSACTION;\n-- 아래 쿼리로 기부영수증 목록의 donation_id 가 중복인 경우 id 값이 작은 경우를 삭제하기로함\nDELETE\n-- select *\nfrom donation_receipts\n    -- 또 서브쿼라를 사용하는 이유는\n    -- Error Code: 1093. You can't specify target table 'donation_receipts' for update in FROM clause\t0.000 sec 발생했었음\n    -- MySQL에서 UPDATE & DELETE 를 할 때 자기 테이블의 데이터를 바로 사용하지 못하기 때문에 서브쿼리를 하나 더 사용한다.\nwhere id in (\n    select k.id from (\n        select x.id\n        from(select * from donation_receipts where donation_id in ( SELECT donation_id FROM donation_receipts  GROUP BY donation_id HAVING count(*) > 1 )) x\n        --중복된 기부번호를 갖은 기부영수증 id 목록에서\n        where x.id != (select max(id) from donation_receipts y where y.donation_id=x.donation_id)) k\n        -- id 값이 max 가 아닌 경우의 기부영수증 id\n);\n\n-- 제대로 삭제되었느지 확인\nselect *\nfrom donation_receipts\nwhere donation_id in (SELECT donation_id FROM donation_receipts GROUP BY donation_id HAVING count(*) > 1);\n\ncommit;\n-- rollback;\n")),"\n",l.createElement(n.h3,null,"(3) 기부영수증 테이블의 donation_id 컬럼에 unique 설정"),"\n",l.createElement(n.img,{src:"/content/img/unique.JPG",alt:"image.png"}),"\n",l.createElement(n.h3,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://velog.io/@khnn/TIL-DELETE%EC%97%90%EC%84%9C%EC%9D%98-%EC%84%9C%EB%B8%8C%EC%BF%BC%EB%A6%AC-%ED%99%9C%EC%9A%A9"},"UPDATE & DELETE 를 할 때 자기 테이블의 데이터를 바로 사용하지 못하기 때문에 서브쿼리를 하나 더 사용")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},o=t(7292);function E(e){return l.createElement(o.A,e,l.createElement(c,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2021-08-30-mysql-duplicate-data-mdx-e1263f21ab2b9297ce2a.js.map