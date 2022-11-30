"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[85],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(4531),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},5348:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",pre:"pre",code:"code",p:"p",h3:"h3",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null," let from = location.state.from;\n")),"\n",r.createElement(t.p,null,"위코드 처럼\r\nlocation 값과 location.state 값이 없으면 에러가 발생한다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null," let from =  location && location.state &&location.state.from;\n")),"\n",r.createElement(t.p,null,"그래서 react 코드를 작성할때 논리연산자 && 를 사용해서 값이 할당되도록 코드를 작성했었다.\r\n문제는 제대로 코드를 이야하지 않았다."),"\n",r.createElement(t.h3,null,"단축 평가 (short-circuit evaluation) 논리 계산법"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"true || anything // true\r\nfalse || anything // anything\r\ntrue && anything // anything\r\nfalse && anything // false\n")),"\n",r.createElement(t.p,null,"논리 연산자를 사용 할 때에는 무조건 우리가 true 혹은 false 값을 사용해야 되는 것은 아닙니다. 문자열이나 숫자, 객체를 사용 할 수도 있고, 해당 값이 Truthy 하냐 Falsy 하냐에 따라 결과가 달라집니다."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://learnjs.vlpt.us/useful/03-short-circuiting.html"},"단축 평가 설명")),"\n"),"\n",r.createElement(t.h3,null,"코드"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'  let from =  location && location.state &&location.state.from;\r\n    if(!from){\r\n        console.log(from)   // from 값은 undefined\r\n    }else {\r\n        console.log(from)   // from 값은 "TEST"\r\n    }         \n')),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,'form 값은 "TEST"'),"\n",r.createElement(t.li,null,"from 값이 존재 할 때 location.state 값이 존재하기 때문에 true 로 from 값이 할당된다."),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(i,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:f}=s,h={title:t?t+" | "+u:p,description:n||d,url:""+g+(i||""),image:""+g+(o||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,h.title),r.createElement("meta",{name:"description",content:h.description}),r.createElement("meta",{name:"image",content:h.image}),r.createElement("meta",{property:"og:title",content:h.title}),r.createElement("meta",{property:"og:url",content:h.url}),r.createElement("meta",{property:"og:description",content:h.description}),r.createElement("meta",{property:"og:image",content:h.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:h.title}),r.createElement("meta",{name:"twitter:url",content:h.url}),r.createElement("meta",{name:"twitter:description",content:h.description}),r.createElement("meta",{name:"twitter:image",content:h.image}),r.createElement("meta",{name:"twitter:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2021-12-27-javascript-short-circuit-evaluation-mdx-f8421c545fd1c05ac3e5.js.map