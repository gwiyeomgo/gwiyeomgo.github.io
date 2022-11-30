"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4679],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return E}});var a=n(7294),r=n(8733),l=n(795),i=n(4531),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function E(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},5341:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"배경"),"\n",a.createElement(t.p,null,"카카오 싱크를 사용하면서...\r\n카카오톡 사용자 닉네임에는 생각보다 이모티콘이 많았다.\r\n이모지(Emoji)를 DB에 저장해야 했다."),"\n",a.createElement(t.h3,null,"해결법"),"\n",a.createElement(t.p,null,"mysql의 Charset 중 utf8과 utf8mb4 있다\r\nmysql table 의 ",a.createElement(t.code,null,"Columns")," 속성중 ",a.createElement(t.code,null,"Charset")," 에\r\n",a.createElement(t.code,null,"utf8mb4")," 을 설정하면 이모티콘을 추가할 수 있다."),"\n",a.createElement(t.h3,null,"참고"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://bstar36.tistory.com/307"},"Charset 설정 방법")),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://codingdog.tistory.com/entry/utf8mb4-%EC%9D%B4%EB%AA%A8%EC%A7%80%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90-%EB%84%A3%EC%96%B4%EC%95%BC-%ED%95%A0%EA%B9%8C"},"이모티콘 저장 이슈")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(8804);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:E,siteDescription:g,siteImage:d,author:h}=s,f={title:t?t+" | "+p:u,description:n||g,url:""+E+(i||""),image:""+E+(c||d)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2021-08-05-mysql-save-emojis-mdx-f77c97b24f1156e5b7e8.js.map