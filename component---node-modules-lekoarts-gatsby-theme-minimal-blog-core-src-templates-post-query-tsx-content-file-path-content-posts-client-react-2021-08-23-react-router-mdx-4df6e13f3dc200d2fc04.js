"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7258],{5315:function(e,t,r){r.r(t),r.d(t,{Head:function(){return u.F},default:function(){return c}});var n=r(7294),a=r(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",img:"img"},(0,a.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"Router가 뭐지?"),"\n",n.createElement(t.p,null,'배경 요즘 react로 블로그을 만들려고한다\r\n업무하면서도 찾아서만 썼지\r\n정확하게 공부해본적이 없다\r\n그래서\r\n"react-router-dom"\r\n을 공부해 보려고 한다'),"\n",n.createElement(t.h1,null,n.createElement(t.a,{href:"https://react.vlpt.us/react-router/"},"SPA")),"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://velog.io/@97godo/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A1%9C-SPA-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0"},"https://velog.io/@97godo/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A1%9C-SPA-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0")),"\n",n.createElement(t.h1,null,"react-router-dom 패키지"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,'import {\r\n  BrowserRouter as Router,\r\n  Switch,\r\n  Route,\r\n  useParams, //useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.\r\n  useHistory,//The useHistory hook gives you access to the history instance that you may use to navigate.\r\n  Link\r\n} from "react-router-dom";\n')),"\n",n.createElement(t.h1,null,"react- router- dom  v6  업데이트"),"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://kyung-a.tistory.com/36"},"https://kyung-a.tistory.com/36")),"\n",n.createElement(t.h1,null,n.createElement(t.a,{href:"https://reactrouter.com/web/api/Hooks"},"Hooks")," ? useParams? useHistory?"),"\n",n.createElement(t.p,null,"React Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components."),"\n",n.createElement(t.h1,null,"What is the difference between HashRouter and BrowserRouter in React"),"\n",n.createElement(t.h3,null,n.createElement(t.a,{href:"https://reactrouter.com/web/api/BrowserRouter"},"BrowserRouter")," uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL."),"\n",n.createElement(t.h3,null,n.createElement(t.a,{href:"https://reactrouter.com/web/api/HashRouter"},"hashRouter"),"  uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL."),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"hashRouter는 url에 #이 들어가는 형태 BrowserRouter는 그렇지 않다"),"\n",n.createElement(t.li,null,"HashRouter는 # 때문에 웹 브라우저 검색엔진에서 url을 통한 검색이 안된다."),"\n",n.createElement(t.li,null,"HashRouter는 새로고침을 해도 계속해서 url 싱크를 유지"),"\n",n.createElement(t.li,null,"BrowserRouter은 계속해서 url싱크를 유지 시켜주지 못한다.새로고침을 하면 화면을 경로 못찾을 수도 있다"),"\n"),"\n",n.createElement(t.h1,null,n.createElement(t.a,{href:"https://reactrouter.com/web/api/Link"},"Link")),"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://reactrouter.com/web/api/Link"},"https://reactrouter.com/web/api/Link")),"\n",n.createElement(t.h1,null,"2022 router version up date"),"\n",n.createElement(t.p,null,"#20220812\r\n현재 110개의 매장에서 기부 물품을 등록하는 시스템을 운영중이다\r\n매장에서 기부자가 왔을때 기부를 등록하는데 서비스에서 에러를 반환하면 개발자가 참조되어 장애 알림을 받고있다\r\n최근 1건의 장애 내용이 황당하면서도 router 에 대해서 내가 잘 모른다는 사실을 알았다"),"\n",n.createElement(t.p,null,n.createElement(t.code,null,'[ERROR] strconv.ParseInt: parsing "new145210": invalid syntax '),"라는 제목의 메세지인데\r\nstatus code 가 500 으로 왔다\r\n",n.createElement(t.img,{src:"./chat.JPG",alt:"대화내용"})),"\n",n.createElement(t.p,null,"브라우저의 주소 검색창에 회원번호를 입력해서 발생한 에러로 추정됩니다.\r\n원인은\r\n/donation/new 에 해당하는 컴포넌트가 존재하며\r\n해당 컴포넌트에서 ",n.createElement(t.code,null," /api/...")," 로 기부 단건조회를 합니다.\r\n주소창에서 url 을 입력하고 엔터키를 눌러서 api 호출 되어 발생한 문제로 보입니다."),"\n",n.createElement(t.p,null,"컴포턴트를 url 로 호출했을 때 막을 수 있는 방법이 있는지 찾아봐야겠다"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(l,e)):l(e)},u=r(8804);function c(e){return n.createElement(u.Z,e,n.createElement(o,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2021-08-23-react-router-mdx-4df6e13f3dc200d2fc04.js.map