"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9674],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),l=n(8733),a=n(795),i=n(4531),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(o.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(s,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},9771:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h3:"h3",p:"p",ol:"ol",li:"li",blockquote:"blockquote",ul:"ul",pre:"pre",code:"code"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"github 블로그를 만들었다. 근데.. 거기에 있던 내용 (커밋)을 다른 repository로 옮기고 싶다\r\n또한 다른 github 계정이 있는데 거기 있는 (커밋) 들도 가져오고 싶고\r\ngithlab 에서 업무를 하는데 해당 계정의 commit 들도 가져오고 싶다..ㅠ\r\n암튼 시도를 조금씩 해봐야지... ㅎㅎㅎ"),"\n",r.createElement(t.h3,null,"시도"),"\n",r.createElement(t.p,null,"Gitlab에서 Github으로\r\nGithub에서 Github으로\r\n복사 가능한 git 명령어"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"A repository 내용을 B repository로 복사한다\r\n*commit 포함"),"\n"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"github의 경우 100MB 이상의 커밋은 위의 방법으로 옮길 수 없다"),"\n"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"git bash 열고 test 폴더로 이동해 복사할 repository A를 복사"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-git"},"$ cd test\r\n$ git clone --bare [A주소]\n")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"test안에 생성된[A 폴더]로 이동"),"\n",r.createElement(t.li,null,"A를 B repository로 push"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-git"},"$ cd [A 폴더]\r\n$ git push --mirror [B주소]\n")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"임시 로컬 저장소A를 지우기"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-git"},"$ cd ..\r\n$ rm -rf [A 폴더]\n")),"\n",r.createElement(t.h3,null,"bare"),"\n",r.createElement(t.h3,null,"mirror"),"\n",r.createElement(t.ol,{start:"2"},"\n",r.createElement(t.li,null,"A라는 사람의 repository01를\r\nB라는 사림의 repository02에 복제\r\n*commit 포함 ?(user email이 같아야 보이는거 같음)"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(8804);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:h}=u,b={title:t?t+" | "+s:p,description:n||E,url:""+g+(i||""),image:""+g+(c||d)};return r.createElement(r.Fragment,null,r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2021-08-22-git-repository-copy-mdx-7d531b8893c407667b85.js.map