"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4238],{624:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.p},default:function(){return o}});var l=t(6540),r=t(8453);function a(e){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"go를 통해 api 를 작성하면\n상태값,유형 등 상수를 써야하는 상황이 발생한다."),"\n",l.createElement(n.h3,null,"enum 은 뭐지?"),"\n",l.createElement(n.p,null,"서로 연관된 상수들의 집합을 의미"),"\n",l.createElement(n.h3,null,"go 에서 enum 을 어떻게 사용할까?"),"\n",l.createElement(n.p,null,"현재 우리 프로젝트에서는\nconstants.go 라는 파일에 동료들이 공통으로 사용하는 값들을 const 로 지정했다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'var  TargetMap = map[string]string{\n\t"Individual":   "개인",\n\t"Organization": "단체",\n}\n\ntype YN string\nconst (\n\tY = YN("Y")\n\tN = YN("N")\n)\n')),"\n",l.createElement(n.p,null,"이렇게 작성된 값들은 코드에서"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'obj := make(map[string]interface{})\nobj["target"] = enum.TargetMap["Individual"] //개인\n')),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"if b.ClosedYN == string(enum.Y) {\n   //\n} else if b.ClosedYN == string(enum.N) {\n   //\n}\n")),"\n",l.createElement(n.h3,null,"참고"),"\n",l.createElement(n.p,null,"https:/.advenoh.pe.kr/go/Go%EC%97%90%EC%84%9C%EC%9D%98-%EC%97%B4%EA%B1%B0%ED%98%95-%EC%83%81%EC%88%98-Enums-in-Go/"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},u=t(7292);function o(e){return l.createElement(u.A,e,l.createElement(c,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-05-10-go-enum-mdx-5f15443b8162490c1a09.js.map