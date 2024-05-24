"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[898],{3642:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return u}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h1:"h1",pre:"pre",code:"code",p:"p",h3:"h3",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null," let from = location.state.from;\n")),"\n",l.createElement(n.p,null,"위코드 처럼\r\nlocation 값과 location.state 값이 없으면 에러가 발생한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null," let from =  location && location.state &&location.state.from;\n")),"\n",l.createElement(n.p,null,"그래서 react 코드를 작성할때 논리연산자 && 를 사용해서 값이 할당되도록 코드를 작성했었다.\r\n문제는 제대로 코드를 이야하지 않았다."),"\n",l.createElement(n.h3,null,"단축 평가 (short-circuit evaluation) 논리 계산법"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"true || anything // true\r\nfalse || anything // anything\r\ntrue && anything // anything\r\nfalse && anything // false\n")),"\n",l.createElement(n.p,null,"논리 연산자를 사용 할 때에는 무조건 우리가 true 혹은 false 값을 사용해야 되는 것은 아닙니다. 문자열이나 숫자, 객체를 사용 할 수도 있고, 해당 값이 Truthy 하냐 Falsy 하냐에 따라 결과가 달라집니다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://learnjs.vlpt.us/useful/03-short-circuiting.html"},"단축 평가 설명")),"\n"),"\n",l.createElement(n.h3,null,"코드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'let from =  location && location.state &&location.state.from;\r\n    if(!from){\r\n        console.log(from)   // from 값은 undefined\r\n    }else {\r\n        console.log(from)   // from 값은 "TEST"\r\n    }\n')),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,'form 값은 "TEST"'),"\n",l.createElement(n.li,null,"from 값이 존재 할 때 location.state 값이 존재하기 때문에 true 로 from 값이 할당된다."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=t(8804);function u(e){return l.createElement(c.Z,e,l.createElement(o,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2021-12-27-javascript-short-circuit-evaluation-mdx-333e9cd2159bd564f853.js.map