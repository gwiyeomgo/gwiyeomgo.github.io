"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4046],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return d}});var l=n(7294),r=n(8733),a=n(795),c=n(2848),i=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(o.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function d(e){let{...t}=e;return l.createElement(s,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,c.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},9949:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return o}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"정규 표현식"),"\n",l.createElement(t.p,null,"문자열에서 특정 문자 조합을 찾기 위한 패턴"),"\n",l.createElement(t.p,null,"JavaScript에서는 정규 표현식도 객체 중 ",l.createElement(t.code,null,"new RegExp('정규표현식')")," 를 사용해서 regExp 객체의 생성자를 호출합니다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"const regExp = new RegExp('정규표현식')\n")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"의미"),l.createElement(t.th,null,"패턴"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,"문자"),l.createElement(t.td,null,l.createElement(t.code,null,"/[a-zA-Z]/"))),l.createElement(t.tr,null,l.createElement(t.td,null,"숫자"),l.createElement(t.td,null,l.createElement(t.code,null,"/[0-9]/"))),l.createElement(t.tr,null,l.createElement(t.td,null,"공백"),l.createElement(t.td,null,l.createElement(t.code,null,"/\\s/g"))),l.createElement(t.tr,null,l.createElement(t.td,null,"숫자 외 문자,특수 문자,공백 불가"),l.createElement(t.td,null,l.createElement(t.code,null,"/^\\d*[1-9]\\d*$/"))),l.createElement(t.tr,null,l.createElement(t.td,null,"문자열에서 모든 패턴을 찾아라"),l.createElement(t.td,null,l.createElement(t.code,null,"g"))))),"\n",l.createElement(t.h1,null,"출처"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions"),"\r\n",l.createElement(t.a,{href:"https://hitomis.tistory.com/68"},"https://hitomis.tistory.com/68")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(8804);function o(e){return l.createElement(i.Z,e,l.createElement(c,e))}i.Z},817:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:o=null,canonicalUrl:m=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:d,siteDescription:E,siteImage:g,author:h}=u,y={title:t?t+" | "+s:p,description:n||E,url:""+d+(c||""),image:""+d+(i||g)};return l.createElement(l.Fragment,null,l.createElement("title",null,y.title),l.createElement("meta",{name:"description",content:y.description}),l.createElement("meta",{name:"image",content:y.image}),l.createElement("meta",{property:"og:title",content:y.title}),l.createElement("meta",{property:"og:url",content:y.url}),l.createElement("meta",{property:"og:description",content:y.description}),l.createElement("meta",{property:"og:image",content:y.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:y.title}),l.createElement("meta",{name:"twitter:url",content:y.url}),l.createElement("meta",{name:"twitter:description",content:y.description}),l.createElement("meta",{name:"twitter:image",content:y.image}),l.createElement("meta",{name:"twitter:image:alt",content:y.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2022-11-28-javascript-regex-mdx-55fb68a5278df7f04779.js.map