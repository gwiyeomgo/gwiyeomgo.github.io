"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8506],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return u}});var r=n(7294),a=n(8733),i=n(795),l=n(4531),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var g=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(l.Z,null,(0,a.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:i}}=e;return(0,a.tZ)(c.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function u(e){let{...t}=e;return r.createElement(g,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),i=n(1883),l=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,l.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},3311:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function i(e){const t=Object.assign({h3:"h3",p:"p",h1:"h1",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"jekell을 사용해서 gitblog를 만들었다.\r\n그런데 디자인도 마음에 안들고 변경하고 싶다는 생각이 들었지만\r\nruby 언어도 모르고 어떻게 구성된건지 알 수 없었다.\r\n그래서 react와 material ui를 사용해서 쉽게 블로그 형태를 만들었다.\r\n몇일동안 만들면서 배포해보고 싶다는 욕구가 느껴졌고\r\n여러 블로그의 글을 보면서 명령어를 입력했다\r\n그리고 다양한 오류를 거쳐서 배포를 완료했다."),"\n",r.createElement(t.h1,null,"문제"),"\n",r.createElement(t.p,null,"문제는 배포를 하고나니 git repository에 파일이\r\n더이상 수정할 수 없는 형태로 변경되어 있었다.\r\n자세하게 공부안하고 올린 내가 바보다 ㅎㅎㅎ\r\n다행인건 압축파일을 갖고 있다"),"\n",r.createElement(t.h1,null,"앞으로 계획"),"\n",r.createElement(t.p,null,"1.프라이빗 레파지토리에 계속 포스트는 쓴다\r\n2.압축된 파일을 새로운 레파지토리에 업로드한다.\r\n3.새 레파지토리를 fork나 복제해서 새로운 repository를 만들고 복제된 파일을 배포해보려고 한다"),"\n",r.createElement(t.h1,null,"gh-pages에 관해서 공부하기"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'$ git config --global user.name "Your Name"\r\n$ git config --global user.email you@example.com\r\n\r\n npx create-react-app gwiyeom-github-pages\r\n\r\n cd gwiyeom-github-pages\r\n\r\necho "# gwiyeom-github-pages" >> README/\r\ngit init\r\ngit add README/\r\ngit commit -m "first commit"\r\ngit branch -M main\r\ngit remote add origin https://github.com/gwiyeomgo/gwiyeom-github-pages.git\r\ngit push -u origin main\n')))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(l,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,i.Z)(),{siteTitle:g,siteTitleAlt:p,siteUrl:u,siteDescription:d,siteImage:h,author:E}=s,y={title:t?t+" | "+g:p,description:n||d,url:""+u+(l||""),image:""+u+(o||h)};return r.createElement(r.Fragment,null,r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"image",content:y.image}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:url",content:y.url}),r.createElement("meta",{name:"twitter:description",content:y.description}),r.createElement("meta",{name:"twitter:image",content:y.image}),r.createElement("meta",{name:"twitter:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:creator",content:E}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2021-09-10-git-gitpages-mdx-16513c98118041057084.js.map