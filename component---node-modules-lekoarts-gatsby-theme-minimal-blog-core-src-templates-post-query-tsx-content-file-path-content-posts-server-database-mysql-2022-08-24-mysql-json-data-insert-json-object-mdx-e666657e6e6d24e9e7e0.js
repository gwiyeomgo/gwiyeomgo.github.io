"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3288],{3993:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return m}});var r=t(7294),a=t(1151);function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,null,"json_object 로 json 형테 컬럼 값을 추가"),"\n",r.createElement(n.h2,null,"배경"),"\n",r.createElement(n.p,null,"기부자가 택배는 보냈는데 신청 상태를 취소한 경우 처리 불가한 문제가 발생\nex) 기부자가 택배를 신청했는데 기부자가 자신의 기부를 취소한다"),"\n",r.createElement(n.h2,null,"기획의 요청은.."),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"기부복원")," 버튼을 생성하고 클릭시 상태가 변경된다\n변경된 상태에서는 기부를 등록하고 취소할 수 있도록 변경요청"),"\n",r.createElement(n.h2,null,"statuses 에 테이블에 복구 상태(DonationRestore) 추가하면서 json data 를 추가"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"INSERT INTO statuses (`status`, `name`, `order_by`, `receipt_available`, `created`, `updated`)\nVALUES\n('DonationRestored', '기부복구','95', '0', json_object(\n'id', 1,\n'name', '',\n'role', '',\n'member', '',\n'datetime', DATE_FORMAT(NOW(),'%Y-%m-%d %h:%m:%s')\n), json_object(\n'id', 1,\n'name', '',\n'role', '',\n'member', '',\n'datetime', DATE_FORMAT(NOW(),'%Y-%m-%d %h:%m:%s')\n));\n\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(l,e)):l(e)},o=t(8804);function m(e){return r.createElement(o.Z,e,r.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2022-08-24-mysql-json-data-insert-json-object-mdx-e666657e6e6d24e9e7e0.js.map