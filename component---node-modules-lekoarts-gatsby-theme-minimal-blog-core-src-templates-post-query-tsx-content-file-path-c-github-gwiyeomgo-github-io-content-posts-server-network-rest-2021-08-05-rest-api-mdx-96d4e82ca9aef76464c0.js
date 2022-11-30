"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6869],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(4531),o=n(6799),c=n(817);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(s,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},3325:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",a:"a",h1:"h1",ul:"ul",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"배경"),"\n",a.createElement(t.p,null,"예전에 코드리뷰를 받았을 때\r\n",a.createElement(t.a,{href:"https://github.com/WhiteHouse/api-standards"},"REST 설계 원칙"),"\r\n에 관하여 문서를 참조하라는 피드백을 받았다\r\n그때 확인하지 못했던 내용들을 보고 정리하려고 한다."),"\n",a.createElement(t.h1,null,"API (Application Programing Interface)"),"\n",a.createElement(t.p,null,"어떠한 응용프로그램에서 데이터를 주고 받기 위한 방법을 의미합니다.\r\n어떤 특정 사이트에서 특정 데이터를 공유할 경우 어떠한 방식으로 정보를 요청해야 하는지,\r\n그리고 어떠한 데이터를 제공 받을 수 있을지에 대한 규격들을 API라고 하는것입니다! API라고 하는것이죠!"),"\n",a.createElement(t.h3,null,"REST 설계 원칙"),"\n",a.createElement(t.h3,null,"REST를 처음 말한 로이필딩의 논문 ?"),"\n",a.createElement(t.h3,null,"정보 (rest api 참고 자료)"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"미 백악관 API 표준 가이드 라인 - ",a.createElement(t.a,{href:"https://github.com/WhiteHouse/api-standards"},"https://github.com/WhiteHouse/api-standards")),"\n",a.createElement(t.li,null,"마이크로소프트 API 가이드 라인 - ",a.createElement(t.a,{href:"https://github.com/Microsoft/api-guidelines/blob/master/Guidelines/"},"https://github.com/Microsoft/api-guidelines/blob/master/Guidelines/")),"\n",a.createElement(t.li,null,"스택 오버플러우 API 가이드 라인 - ",a.createElement(t.a,{href:"https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/"},"https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://r.bluethl.net/how-to-design-better-apis"},"https://r.bluethl.net/how-to-design-better-apis")),"\n"),"\n",a.createElement(t.h3,null,"RESTFUL?"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://da-nyee.github.io/posts/network-rest-restful/"},"https://da-nyee.github.io/posts/network-rest-restful/")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(8804);function c(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:h,siteImage:d,author:E}=m,f={title:t?t+" | "+p:u,description:n||h,url:""+g+(i||""),image:""+g+(o||d)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-network-rest-2021-08-05-rest-api-mdx-96d4e82ca9aef76464c0.js.map