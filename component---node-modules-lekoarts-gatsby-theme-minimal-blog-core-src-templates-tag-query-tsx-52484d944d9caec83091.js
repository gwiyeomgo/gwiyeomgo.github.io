"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3825],{5414:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return h}});var a=n(7294),r=n(8733),i=n(795),l=n(1883),o=n(6628),s=n(3494),c=n(6985),m=n(9706),g=n(817);var p=e=>{let{posts:t,pageContext:n}=e;const{tagsPath:a,basePath:g}=(0,s.Z)();return(0,r.tZ)(o.Z,null,(0,r.tZ)(i.kC,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,r.tZ)(i.X6,{as:"h1",variant:"styles.h1",sx:{marginY:2}},n.name),(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,variant:"links.secondary",marginY:2}},to:(0,m.Z)("/"+g+"/"+a)},"View all tags")),(0,r.tZ)(c.Z,{posts:t,sx:{mt:[4,5]}}))};const u=e=>{let{pageContext:t}=e;return(0,r.tZ)(g.Z,{title:"Tag: "+t.name})};var h=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(p,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),i=n(1883),l=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,l.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},6985:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(8733),r=n(7294),i=n(795),l=n(1883),o=n(6799);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(i.xu,{mb:2},(0,a.tZ)(l.Link,{to:t.slug,sx:{fontWeight:"bold",color:"inherit",fontSize:[1,2,2],textDecoration:"none",":hover,:focus":{color:"#fd999a"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,1]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(s,{key:e.slug,post:e,showTags:r}))))}},817:function(e,t,n){var a=n(7294),r=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,i.Z)(),{siteTitle:g,siteTitleAlt:p,siteUrl:u,siteDescription:h,siteImage:Z,author:d}=m,f={title:t?t+" | "+g:p,description:n||h,url:""+u+(l||""),image:""+u+(o||Z)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:d}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-52484d944d9caec83091.js.map