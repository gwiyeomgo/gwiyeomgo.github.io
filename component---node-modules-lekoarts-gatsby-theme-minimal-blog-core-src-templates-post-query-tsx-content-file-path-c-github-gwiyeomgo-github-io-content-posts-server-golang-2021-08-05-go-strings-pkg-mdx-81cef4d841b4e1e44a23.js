"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7908],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var l=n(7294),r=n(8733),a=n(795),c=n(4531),i=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(o.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return l.createElement(u,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,c.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},3391:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return o}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",ul:"ul",li:"li",code:"code",h5:"h5",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"strings package"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"strings.Replace"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,'strings.Replace("2022-06-17"","-", "")'),'를 통해 "-" 를 제거함'),"\n",l.createElement(t.li,null,"어드민 화면에서 서비스로 조회 데이터를 요청합니다.이떄 프론트에서 ",l.createElement(t.code,null,"Query Parameter"),' 으로 기간 데이터 "2022-06-17" 를 보냅니다.\r\n',l.createElement(t.code,null,'/users?queryFrom="2022-06-01"&&queryTo="2022-06-17"'),"이렇게 보내진 내용은 서비스코드에서 ",l.createElement(t.code,null,"ctx.Bind"),'를 통해 값을 받고\r\nmysql 로 조회할 때 "-" 때문에 조회되지 않는 문제가 있어서 ',l.createElement(t.code,null,"strings.Replace "),"를 통해 변경했다."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"strings.Trim"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,'strings.Trim("test test", " ")')),"\n",l.createElement(t.li,null,"공백을 제거할 떄 사용"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"strings.Fields()"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,'s := strings.Fields("a b")')," ",l.createElement(t.code,null,"s[1]")," 은 a"),"\n",l.createElement(t.li,null,"공백을 기준으로 문자열을 문자열 슬라이스로 저장"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,'strings.Join(roles, ",")'),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"roles 은 []string 인데 ,를 통해 배열을 , 로 구분하는 string 으로 만들어 준다"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"func Join(element []string, sep string) string ")),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"strings.NewReader(requestBody)"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"테스트케이스에서 requestBody := ",l.createElement(t.code,null,'{"code": "1"}')," 를 NewRequest 의 매개변수 로 쓸  수 있도록  *Reader 로  변경해준다."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,'req := httptest.NewRequest(echo.POST, "/api/test", strings.NewReader(requestBody))')),"\n"),"\n",l.createElement(t.h5,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.socketloop.com/tutorials/golang-remove-dashes-or-any-character-from-string"},"https://www.socketloop.com/tutorials/golang-remove-dashes-or-any-character-from-string"),"\r\n",l.createElement(t.a,{href:"http://pyrasis.com/book/GoForTheReallyImpatient/Unit46/02"},"http://pyrasis.com/book/GoForTheReallyImpatient/Unit46/02")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(8804);function o(e){return l.createElement(i.Z,e,l.createElement(c,e))}i.Z},817:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:o=null,canonicalUrl:m=""}=e;const s=(0,a.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:h}=s,y={title:t?t+" | "+u:p,description:n||E,url:""+g+(c||""),image:""+g+(i||d)};return l.createElement(l.Fragment,null,l.createElement("title",null,y.title),l.createElement("meta",{name:"description",content:y.description}),l.createElement("meta",{name:"image",content:y.image}),l.createElement("meta",{property:"og:title",content:y.title}),l.createElement("meta",{property:"og:url",content:y.url}),l.createElement("meta",{property:"og:description",content:y.description}),l.createElement("meta",{property:"og:image",content:y.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:y.title}),l.createElement("meta",{name:"twitter:url",content:y.url}),l.createElement("meta",{name:"twitter:description",content:y.description}),l.createElement("meta",{name:"twitter:image",content:y.image}),l.createElement("meta",{name:"twitter:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2021-08-05-go-strings-pkg-mdx-81cef4d841b4e1e44a23.js.map