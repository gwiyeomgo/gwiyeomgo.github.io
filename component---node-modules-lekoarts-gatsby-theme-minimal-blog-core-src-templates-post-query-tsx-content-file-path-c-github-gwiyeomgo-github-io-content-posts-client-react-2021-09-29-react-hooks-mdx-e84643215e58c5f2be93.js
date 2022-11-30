"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8541],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return h}});var a=n(7294),r=n(8733),o=n(795),l=n(4531),c=n(6799),i=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(l.Z,null,(0,r.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:o}}=e;return(0,r.tZ)(i.Z,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function h(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),o=n(1883),l=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,l.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},3503:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return i}});var a=n(7294),r=n(1151);function o(e){const t=Object.assign({h2:"h2",p:"p",h3:"h3",a:"a",blockquote:"blockquote"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"Hooks"),"\n",a.createElement(t.p,null,"They let you use state and other React features without writing a class.\r\n그들은 시킨다 당신이 사용하도록 상태와 다른 React 특징들을 class 없이"),"\n",a.createElement(t.h3,null,"1. ",a.createElement(t.a,{href:"https://reactjs.org/docs/hooks-overview.html#state-hook"},"useState")),"\n",a.createElement(t.h3,null,"2. ",a.createElement(t.a,{href:"https://reactjs.org/docs/hooks-overview.html#effect-hook"},"Effect Hook")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"It serves the same purpose as ",a.createElement(t.a,{href:"https://reactjs.org/docs/react-component.html#componentdidmount"},"componentDidMount"),", ",a.createElement(t.a,{href:"https://reactjs.org/docs/react-component.html#componentdidupdate"},"componentDidUpdate"),", and ",a.createElement(t.a,{href:"https://reactjs.org/docs/react-component.html#componentdidupdate"},"componentWillUnmount")," in React classes, but unified into a single API."),"\n"),"\n",a.createElement(t.p,null,"그것은 제시한다 같은 목적을 componentDidMoount,componentDidUpdate,componentWillUnmount\r\nreact classes에 하지만 통합한다 단일 API로"),"\n",a.createElement(t.h3,null,"3. ",a.createElement(t.a,{href:"https://reactjs.org/docs/hooks-overview.html#rules-of-hooks"},"Rules of Hook")),"\n",a.createElement(t.h3,null,"4. ",a.createElement(t.a,{href:"https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks"},"Building Your own hooks")),"\n",a.createElement(t.h3,null,"5. other hooks"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(8804);function i(e){return a.createElement(c.Z,e,a.createElement(l,e))}c.Z},817:function(e,t,n){var a=n(7294),r=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:c="",children:i=null,canonicalUrl:m=""}=e;const s=(0,o.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:h,siteDescription:d,siteImage:g,author:E}=s,f={title:t?t+" | "+p:u,description:n||d,url:""+h+(l||""),image:""+h+(c||g)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,i)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-react-2021-09-29-react-hooks-mdx-e84643215e58c5f2be93.js.map