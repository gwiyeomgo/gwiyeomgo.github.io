"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7229],{8324:function(e,n,l){l.r(n),l.d(n,{Head:function(){return a.F},default:function(){return o}});var r=l(7294),t=l(1151);function c(e){const n=Object.assign({h3:"h3",p:"p",ol:"ol",li:"li",code:"code",ul:"ul",pre:"pre"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h3,null,"배경"),"\n",r.createElement(n.p,null,"go에서 여러 패키지의 메서드나 함수를 사용할때\n많은 함수에서 error를 return 한다"),"\n",r.createElement(n.p,null,"이때 패키지의 함수를 호출했던 곳에서 error를 어떻게 처리할때"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,r.createElement(n.code,null,"err != nil")," 처리"),"\n",r.createElement(n.li,null,"사용하는 패키지의 error 처리하는 함수가 있는지 찾아보기\nex) os.IsNotExist 는 err 가 있거나 파일이 없을때 true 반환"),"\n"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Tip"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"err := fun() \nerr := fun() \n")),"\n",r.createElement(n.p,null,"이렇게 쓰면 에러 발생"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"err := fun() \nerr = fun() \n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,":=")," 생성의 의미이기 때문에 ",r.createElement(n.code,null,"="),"를 써서 기존 err 업데이트"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"val1, err := fun() \nval2, err := fun() \n")),"\n",r.createElement(n.p,null,"하지만 이 경우는 에디터에서 에러 발생하지 않음\ngo 규칙인데\n이 경우에는\n만약 val2가 있다면 err는 업데이트 된다는 의미\n즉 val2가 없다면"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null," val1, err := fun() \n _, err := fun() \n")),"\n",r.createElement(n.p,null,"에러 발생한다 ",r.createElement(n.code,null,"_, err = fun()")," 써줘야 업데이트 한다는 의미"),"\n",r.createElement(n.h3,null,"HandleFnc 을 만들어 반복되는 코드를 짧게 줄이고 테스트 커버를 올리자"))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(c,e)):c(e)},a=l(8804);function o(e){return r.createElement(a.Z,e,r.createElement(u,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-03-24-go-error-handle-mdx-9019bc6f81e5d85eca65.js.map