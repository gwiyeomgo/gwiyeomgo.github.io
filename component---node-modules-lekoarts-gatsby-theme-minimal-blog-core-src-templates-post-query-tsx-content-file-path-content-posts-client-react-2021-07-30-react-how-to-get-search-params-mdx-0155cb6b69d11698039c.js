"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6705],{7536:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return s}});var r=t(7294),a=t(1151);function l(e){const n=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",pre:"pre",code:"code",em:"em",a:"a",br:"br",h1:"h1"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h3,null,"배경"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"관리자가 게시판에서 특정 날짜를 조회하고 (30개에 데이터 존재)2page로 이동했다.\r\n2page에서 게시글 번호 18번의 상세 보기를 클릭하고 화면 이동을 했다 (url이 변경됨)\r\n이때 상세페이지에서 뒤로가기 버튼을 클릭했을 때 이전 검색기록이 남아있었으면 좋겠다"),"\n"),"\n",r.createElement(n.p,null,"라는 요청을 받았다."),"\n",r.createElement(n.h3,null,"기존 코드 구현 내용"),"\n",r.createElement(n.p,null,"1.useeffect 실행시 load() (page:1,pageSize:10)\r\n2.페이지 네이션을 클릭했을 때 load(page,pageSize,searchData)\r\n3.검색조건을 입력하고 조회버튼을 클릭했을 때 load(page,pageSize,searchData)\r\n4.상세페이지로 이동 해을 때 새로운 url로 이동"),"\n",r.createElement(n.h3,null,"개선 방법"),"\n",r.createElement(n.p,null,"0.화면 load()"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-javascript"},"  useEffect(() => {\r\n    let urlSearchParams = new URLSearchParams(window.location.search);\r\n    if (urlSearchParams) {\r\n      let params = Object.fromEntries(\r\n        new URLSearchParams(window.location.search)\r\n      );\r\n      load(params.page, PAGE_SIZE, params);\r\n    } else {\r\n      load(PAGE, PAGE_SIZE);\r\n    }\r\n\r\n    if (!stores) {\r\n      loadStore();\r\n    }\r\n  }, []);\n")),"\n",r.createElement(n.p,null,"1.페이지 네이션 클릭시 url에 querystring으로 추가"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-javascript"},' searchData &&\r\n          Object.keys(searchData).filter((key) => {\r\n            if (!searchData[key]) {\r\n              delete searchData[key];\r\n            }\r\n          });\r\n        history.push({\r\n          search:\r\n            "?" + new URLSearchParams({ ...searchData, page: page }).toString(),\r\n        });\r\n        //searchData = 검색조건을 key와 value로 이루어진 객체\n')),"\n",r.createElement(n.p,null,"2.상세페이지 이동 (새로운 url)"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-javascript"}," <Link to={`/test/${id}/view`}>\r\n                  <Button icon={<ZoomInOutlined />} />\r\n                </Link>\n")),"\n",r.createElement(n.p,null,r.createElement(n.em,null,r.createElement(n.a,{href:"https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript"},"tip"))),"\n",r.createElement(n.p,null,"similarly for the Link component or the Redirect component"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-javascript"},"let path ={\r\n      pathname: '/test',\r\n      search: '?query=abc',\r\n    }\r\n    <Link to={path}> My Link </Link>\r\n\n")),"\n",r.createElement(n.p,null,"3.browser에 뒤로가기 버튼",r.createElement(n.br),"\n","4.",r.createElement(n.code,null,"목록으로이동"),"버튼"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"    <Button onClick={() => {history.go(-1); }}> 목록으로 </Button>\n")),"\n",r.createElement(n.h3,null,"javascript history"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://velog.io/@poburi/useHistory-useLocation%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%92%EC%A0%84%EB%8B%AC"},"https://velog.io/@poburi/useHistory-useLocation%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%92%EC%A0%84%EB%8B%AC")),"\n",r.createElement(n.h1,null,"20230327"),"\n",r.createElement(n.p,null,"검색컴포넌트를 만들어보자"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://codesandbox.io/s/searchbutton-e1heyo?file=/src/App.js"},"예제")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(l,e)):l(e)},o=t(8804);function s(e){return r.createElement(o.Z,e,r.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2021-07-30-react-how-to-get-search-params-mdx-0155cb6b69d11698039c.js.map