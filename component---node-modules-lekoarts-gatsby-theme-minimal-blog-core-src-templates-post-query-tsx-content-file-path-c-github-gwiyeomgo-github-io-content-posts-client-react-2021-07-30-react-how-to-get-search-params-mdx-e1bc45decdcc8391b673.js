"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[72],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return E}});var r=n(7294),a=n(8733),l=n(795),c=n(4531),i=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function E(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,c.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8156:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",pre:"pre",code:"code",em:"em",a:"a",br:"br"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"관리자가 게시판에서 특정 날짜를 조회하고 (30개에 데이터 존재)2page로 이동했다.\r\n2page에서 게시글 번호 18번의 상세 보기를 클릭하고 화면 이동을 했다 (url이 변경됨)\r\n이때 상세페이지에서 뒤로가기 버튼을 클릭했을 때 이전 검색기록이 남아있었으면 좋겠다"),"\n"),"\n",r.createElement(t.p,null,"라는 요청을 받았다."),"\n",r.createElement(t.h3,null,"기존 코드 구현 내용"),"\n",r.createElement(t.p,null,"1.useeffect 실행시 load() (page:1,pageSize:10)\r\n2.페이지 네이션을 클릭했을 때 load(page,pageSize,searchData)\r\n3.검색조건을 입력하고 조회버튼을 클릭했을 때 load(page,pageSize,searchData)\r\n4.상세페이지로 이동 해을 때 새로운 url로 이동"),"\n",r.createElement(t.h3,null,"개선 방법"),"\n",r.createElement(t.p,null,"0.화면 load()"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"  useEffect(() => {\r\n    let urlSearchParams = new URLSearchParams(window.location.search);\r\n    if (urlSearchParams) {\r\n      let params = Object.fromEntries(\r\n        new URLSearchParams(window.location.search)\r\n      );\r\n      load(params.page, PAGE_SIZE, params);\r\n    } else {\r\n      load(PAGE, PAGE_SIZE);\r\n    }\r\n\r\n    if (!stores) {\r\n      loadStore();\r\n    }\r\n  }, []);\n")),"\n",r.createElement(t.p,null,"1.페이지 네이션 클릭시 url에 querystring으로 추가"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},' searchData &&\r\n          Object.keys(searchData).filter((key) => {\r\n            if (!searchData[key]) {\r\n              delete searchData[key];\r\n            }\r\n          });\r\n        history.push({\r\n          search:\r\n            "?" + new URLSearchParams({ ...searchData, page: page }).toString(),\r\n        });\r\n        //searchData = 검색조건을 key와 value로 이루어진 객체\n')),"\n",r.createElement(t.p,null,"2.상세페이지 이동 (새로운 url)"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null," <Link to={`/test/${id}/view`}>\r\n                  <Button icon={<ZoomInOutlined />} />\r\n                </Link>\n")),"\n",r.createElement(t.p,null,r.createElement(t.em,null,r.createElement(t.a,{href:"https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript"},"tip"))),"\n",r.createElement(t.p,null,"similarly for the Link component or the Redirect component"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"let path ={\r\n      pathname: '/test',\r\n      search: '?query=abc',\r\n    }\r\n    <Link to={path}> My Link </Link>\r\n\n")),"\n",r.createElement(t.p,null,"3.browser에 뒤로가기 버튼",r.createElement(t.br),"\n","4.",r.createElement(t.code,null,"목록으로이동"),"버튼"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"    <Button onClick={() => {history.go(-1); }}> 목록으로 </Button>\n")),"\n",r.createElement(t.h3,null,"javascript history"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://velog.io/@poburi/useHistory-useLocation%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%92%EC%A0%84%EB%8B%AC"},"https://velog.io/@poburi/useHistory-useLocation%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%92%EC%A0%84%EB%8B%AC")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(8804);function o(e){return r.createElement(i.Z,e,r.createElement(c,e))}i.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:E,siteDescription:g,siteImage:h,author:d}=s,y={title:t?t+" | "+p:u,description:n||g,url:""+E+(c||""),image:""+E+(i||h)};return r.createElement(r.Fragment,null,r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"image",content:y.image}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:url",content:y.url}),r.createElement("meta",{name:"twitter:description",content:y.description}),r.createElement("meta",{name:"twitter:image",content:y.image}),r.createElement("meta",{name:"twitter:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:creator",content:d}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-react-2021-07-30-react-how-to-get-search-params-mdx-e1bc45decdcc8391b673.js.map