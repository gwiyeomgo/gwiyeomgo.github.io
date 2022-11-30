"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1999],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return E}});var r=n(7294),l=n(8733),a=n(795),o=n(4531),c=n(6799),i=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(o.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(i.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function E(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),o=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,o.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},1442:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return i}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h3:"h3",p:"p",code:"code",a:"a",blockquote:"blockquote",pre:"pre",ol:"ol",li:"li"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"지금 회사에서는 오픈소스로 만든 어드민 코드를 사용한다.\r\n그 어드민을 사용한 이유는\r\n어려운 오픈소스가아닌 우리에게 도움을 주시는 개발자가 만든 코드여서\r\n수정및 기능 개선을 요청할 수 있기 때문에 해당 코드를 사용했다."),"\n",r.createElement(t.h3,null,"그런데.."),"\n",r.createElement(t.p,null,"우리 회사의 오프라인 매장,센타 등 기부를 등록하는 곳을 ",r.createElement(t.code,null,"등록처")," 라 부른다\r\n해당 어드민에 조직도 기능이 있고\r\n이 기능은 조직도당 하나의 등록처를 갖는다"),"\n",r.createElement(t.p,null,"한 역할이 여러 등록처를 관리해야하는 문제가 발생했다."),"\n",r.createElement(t.h3,null,"그래서.."),"\n",r.createElement(t.p,null,"복수의 등록처를 갖은 회원은 등록처를 선택할 수 있도록 수정하는 작업을 맡았다."),"\n",r.createElement(t.h3,null,"수정내용"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://gwiyeomgo.github.io/javascript/2022-06-17-javascript-getter-setter"},"getter setter 관련해서 쓴 글에서"),"\r\n에서 로그인 했으때 회원 정보를 가져온다.\r\n이때 이 회원은 어드민 관리자로 주로 role ,permmision 등 가져오는데 이떄 siteCode를 가져올 수 있다."),"\n",r.createElement(t.p,null,"문제는 기존 시스템에서는 복수의 siteCode 를 받아오기 떄문에\r\n이중 1개만 받아서 저장할 곳이 필요했다.\r\n또한 여러개 siteCode 목록중에서 1개만 선택시 저장할 곳이 필요했다."),"\n",r.createElement(t.p,null,"다시 해당정보를 서버로 보내 저장할지 아니면 브라우저에 저장할지 고민했고\r\n최소수정을 위해 브라우저에 저장하기로 했다."),"\n",r.createElement(t.h3,null,"이때 사용한 localstore 는 뭐지?"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"localStorage 에 값을 추가한다.\r\n",r.createElement(t.code,null,"window.localStorage.setItem(key값,value 값)")),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'const memberResponse = await axios.get(API_URL + "/members");\r\nlet site = Object.keys(memberResponse.data).includes("siteCodes")?memberResponse.data.siteCodes[0] :""\r\nwindow.localStorage.setItem("siteCode",site ?site.code:site)\r\nMemberContext.memberInformation = memberResponse.data;\n')),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"localStorage 에 값을 가져온다.\r\n",r.createElement(t.code,null," window.localStorage.setItem(key값,value값)"),"\r\n그리고 적용된 siteCode를 사용하기 위해서 ",r.createElement(t.code,null,"history.go(0)"),"를 써서 새로고침했다."),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'<Select\r\n    defaultValue={window.localStorage.getItem("siteCode")}\r\n    style={{width: 160 ,marginRight:10}}\r\n    onChange={(value)=>{\r\n        window.localStorage.setItem("siteCode",value)\r\n        history.go(0);\r\n}}>\r\n    {MemberContext.memberInformation.siteCodes.map((site) =>\r\n        <Select.Option key={site.code} value={site.code}>{site.name}</Select.Option>)\r\n    }\r\n</Select>\n')),"\n",r.createElement(t.p,null,"###20220815\r\n실제로 localStorage 를 적용해보니\r\n매장에서 새로그침을 해도 저장한 값이 지워지지 않아서\r\n문제를 격었다\r\n결국 다시 코드를 수정해 sessionStorage 를 사용했다"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"둘을 비교해 보면..."),"\n"),"\n",r.createElement(t.ol,{start:"0"},"\n",r.createElement(t.li,null,"두개 모두 브라우저에 저장"),"\n",r.createElement(t.li,null,"localStorage 는 브라우저가 종료되어도 남음"),"\n",r.createElement(t.li,null,"sessionStorage 는 브라우저가 종료되면 사라짐"),"\n"),"\n",r.createElement(t.p,null,"이후 알게된 것은 sessionStorage 에 저장하는 방법보다\r\nreact 를 사용하니\r\n더 나아가 react-cookies 를 사용해서 저장할 수 있다"),"\n",r.createElement(t.h3,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"http://daplus.net/javascript-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%B0%BD-%ED%83%AD%EC%9D%84-%EB%8B%AB%EC%9D%84-%EB%95%8C-localstorage-%ED%95%AD%EB%AA%A9%EC%9D%84-%EC%82%AD%EC%A0%9C%ED%95%98%EB%8A%94-%EB%B0%A9/"},"http://daplus.net/javascript-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%B0%BD-%ED%83%AD%EC%9D%84-%EB%8B%AB%EC%9D%84-%EB%95%8C-localstorage-%ED%95%AD%EB%AA%A9%EC%9D%84-%EC%82%AD%EC%A0%9C%ED%95%98%EB%8A%94-%EB%B0%A9/"),"\r\n",r.createElement(t.a,{href:"https://www.daleseo.com/js-web-storage/"},"https://www.daleseo.com/js-web-storage/"),"\r\n",r.createElement(t.a,{href:"https://coding-restaurant.tistory.com/264"},"https://coding-restaurant.tistory.com/264"),"\r\n",r.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage"},"https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(8804);function i(e){return r.createElement(c.Z,e,r.createElement(o,e))}c.Z},817:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:c="",children:i=null,canonicalUrl:m=""}=e;const s=(0,a.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:E,siteDescription:g,siteImage:d,author:h}=s,w={title:t?t+" | "+p:u,description:n||g,url:""+E+(o||""),image:""+E+(c||d)};return r.createElement(r.Fragment,null,r.createElement("title",null,w.title),r.createElement("meta",{name:"description",content:w.description}),r.createElement("meta",{name:"image",content:w.image}),r.createElement("meta",{property:"og:title",content:w.title}),r.createElement("meta",{property:"og:url",content:w.url}),r.createElement("meta",{property:"og:description",content:w.description}),r.createElement("meta",{property:"og:image",content:w.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:w.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:w.title}),r.createElement("meta",{name:"twitter:url",content:w.url}),r.createElement("meta",{name:"twitter:description",content:w.description}),r.createElement("meta",{name:"twitter:image",content:w.image}),r.createElement("meta",{name:"twitter:image:alt",content:w.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,i)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2022-06-09-javascript-localstorage-mdx-1c8e39b2a19a060ef742.js.map