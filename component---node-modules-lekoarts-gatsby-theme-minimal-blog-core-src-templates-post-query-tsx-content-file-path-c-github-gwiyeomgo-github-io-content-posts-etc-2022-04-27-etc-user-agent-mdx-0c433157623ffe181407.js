"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3902],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(4531),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},921:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"배경"),"\n",a.createElement(t.p,null,"404 에러 등...프론트 화면에서 많은 에러가 발생하고 있다.\r\n막막한거 같다..\r\n이럴때는 뭐부터 시작해야 했던 걸까?"),"\n",a.createElement(t.p,null,"사실 나는  그냥 답답했다 (회피)\r\n그런데 시니어 개발자님은 우선 브라우저 부터 알자고 하셨다."),"\n",a.createElement(t.p,null,"이 의견을 듣고 내가 생각한점은..\r\n걱정은 내려 놓고 우선 무엇을 현재 알고있는지,무엇을 할 수 있는지 빠르게 판단하고 행동해야 한다"),"\n",a.createElement(t.h3,null,"목표"),"\n",a.createElement(t.p,null,"프론트 화면의 접속한 회원의 브라우저를 알고싶다."),"\n",a.createElement(t.h3,null,"user agent"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://yozm.wishket.com/magazine/detail/1307/"},"https://yozm.wishket.com/magazine/detail/1307/")),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://github.com/mssola/user_agent"},"https://github.com/mssola/user_agent")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(8804);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:h,author:E}=s,f={title:t?t+" | "+p:u,description:n||d,url:""+g+(i||""),image:""+g+(c||h)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-etc-2022-04-27-etc-user-agent-mdx-0c433157623ffe181407.js.map