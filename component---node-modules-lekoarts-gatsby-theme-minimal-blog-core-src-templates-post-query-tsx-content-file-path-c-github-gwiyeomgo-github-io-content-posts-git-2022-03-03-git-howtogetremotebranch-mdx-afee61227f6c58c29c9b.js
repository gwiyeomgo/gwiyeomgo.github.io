"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2123],{8804:function(e,n,t){t.d(n,{F:function(){return p},Z:function(){return E}});var l=t(7294),r=t(8733),a=t(795),i=t(4531),c=t(6799),m=t(817);var o=e=>{let{post:n}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var g=e=>{let{data:{post:n},children:t}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},n.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,n.date),n.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,r.tZ)("span",null,n.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,r.tZ)(o,{post:n}))};const p=e=>{var n,t,l;let{data:{post:a}}=e;return(0,r.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(n=a.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(l=t.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function E(e){let{...n}=e;return l.createElement(g,n)}},6799:function(e,n,t){var l=t(8733),r=t(7294),a=t(1883),i=t(3494),c=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:m}=(0,i.Z)();return(0,l.tZ)(r.Fragment,null,n.map(((e,n)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!n&&", ",(0,l.tZ)(a.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,c.Z)("/"+m+"/"+t+"/"+e.slug)},e.name)))))}},1688:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return m}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",h1:"h1",ol:"ol",h2:"h2"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"remote\r\ntest\r\norigin"),"\n",l.createElement(n.p,null,"이 있다"),"\n",l.createElement(n.p,null,"origin 는 원본\r\ntest 는 원본을 fork 한 브랜치"),"\n",l.createElement(n.p,null,"우리는 origin 에 dev barnch 에서 org 라는 branch를 생성했다"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git remote update")),"\n",l.createElement(n.p,null,"===\r\nC:\\new-platform\\admin>git remote update\r\nFetching origin\r\nremote: Enumerating objects: 84, done.\r\nremote: Counting objects: 100% (41/41), done.\r\nremote: Compressing objects: 100% (16/16), done.\r\nremote: Total 84 (delta 27), reused 37 (delta 25), pack-reused 43\r\nUnpacking objects: 100% (84/84), 19.80 KiB | 101.00 KiB/s, done.\r\nFrom gitlab.com:platform/admin"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"[new branch]      #370                 -> origin/#370"),"\n",l.createElement(n.li,null,"[new branch]      #372                 -> origin/#372"),"\n",l.createElement(n.li,null,"[new branch]      361                  -> origin/361"),"\n",l.createElement(n.li,null,"[new branch]      362                  -> origin/362"),"\n",l.createElement(n.li,null,"[new branch]      365                  -> origin/365"),"\n",l.createElement(n.li,null,"[new branch]      373                  -> origin/373"),"\n",l.createElement(n.li,null,"[new branch]      376-qr-query-param-site-type -> origin/376-qr-query-param-site-type"),"\n",l.createElement(n.li,null,"[new branch]      378                  -> origin/378"),"\n",l.createElement(n.li,null,"[new branch]      379                  -> origin/379"),"\n",l.createElement(n.li,null,"[new branch]      382                  -> origin/382"),"\n",l.createElement(n.li,null,"[new branch]      385                  -> origin/385"),"\n",l.createElement(n.li,null,"[new branch]      387                  -> origin/387"),"\n",l.createElement(n.li,null,"[new branch]      391                  -> origin/391"),"\n",l.createElement(n.li,null,"[new branch]      392                  -> origin/392"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-2c5387aa -> origin/cherry-pick-2c5387aa"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-2d5348d4 -> origin/cherry-pick-2d5348d4"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-2e34e538 -> origin/cherry-pick-2e34e538"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-69daa442 -> origin/cherry-pick-69daa442"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-6b24c810 -> origin/cherry-pick-6b24c810"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-96d3a4f5 -> origin/cherry-pick-96d3a4f5"),"\n",l.createElement(n.li,null,"[new branch]      cherry-pick-9ac4b1ef -> origin/cherry-pick-9ac4b1ef\r\nf969ef2..5da4a0b  master               -> origin/master"),"\n",l.createElement(n.li,null,"[new branch]      org                  -> origin/org\r\n380d52c..2d5348d  staging              -> origin/staging"),"\n",l.createElement(n.li,null,"[new tag]         R-220112.v1          -> R-220112.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220119.v1          -> R-220119.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220120.v1          -> R-220120.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220126.v1          -> R-220126.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220203.v1          -> R-220203.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220217.v2          -> R-220217.v2"),"\n",l.createElement(n.li,null,"[new tag]         R-220203.v2          -> R-220203.v2"),"\n",l.createElement(n.li,null,"[new tag]         R-220203.v3          -> R-220203.v3"),"\n",l.createElement(n.li,null,"[new tag]         R-220210.v1          -> R-220210.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220214.v1          -> R-220214.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220217.v1          -> R-220217.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220224.v1          -> R-220224.v1"),"\n",l.createElement(n.li,null,"[new tag]         R-220303.v1          -> R-220303.v1\r\nFetching my\r\nremote: Enumerating objects: 52, done.\r\nremote: Counting objects: 100% (45/45), done.\r\nremote: Total 52 (delta 45), reused 45 (delta 45), pack-reused 7\r\nUnpacking objects: 100% (52/52), 20.14 KiB | 164.00 KiB/s, done.\r\nFrom gitlab.com:gwiyeomGo/admin"),"\n",l.createElement(n.li,null,"[new branch]      #140       -> gwiyeom/#140"),"\n",l.createElement(n.li,null,"[new branch]      #154       -> gwiyeom/#154"),"\n",l.createElement(n.li,null,"[new branch]      #17        -> gwiyeom/#17"),"\n",l.createElement(n.li,null,"[new branch]      #232       -> gwiyeom/#232"),"\n",l.createElement(n.li,null,"[new branch]      #295       -> gwiyeom/#295"),"\n",l.createElement(n.li,null,"[new branch]      #296       -> gwiyeom/#296"),"\n",l.createElement(n.li,null,"[new branch]      #80        -> gwiyeom/#80"),"\n",l.createElement(n.li,null,"[new branch]      main       -> gwiyeom/main"),"\n"),"\n",l.createElement(n.p,null,"==="),"\n",l.createElement(n.h1,null,"git 명령어!"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"자신의 로컬 branch 목록 보기\r\n",l.createElement(n.code,null,"git branch -list")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"remote branch 보기\r\n",l.createElement(n.code,null,"git branch -r")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"remote + 로컬 branch\r\n",l.createElement(n.code,null,"git branch -a")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"원격 저장소(remote) 의 브랜치 가져오기"),"\n"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git checkout -t"),"를 사용한다"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"ex) origin 에 test branch 를 가져오고 싶다면"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git checkout -t origin/test")),"\n",l.createElement(n.h1,null,"실제 사용 경험 (20220612)"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"dev branch 에서 feature 를 gitLab 에서 생성"),"\n",l.createElement(n.li,null,"dev 는 이번주에 배포할 commit 들이 있다."),"\n",l.createElement(n.li,null,"나는 feature 에서 작업하고 싶다"),"\n"),"\n",l.createElement(n.h2,null,"실제 사용 경험 ->"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git remote update")," 해서 feature 가 있는 현재 상태 origin remote 를 업데이트 하고\r\n",l.createElement(n.code,null,"git checkout -t origin/feature")," origin 에 있는 feature branch 로 checkout"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=t(8804);function m(e){return l.createElement(c.Z,e,l.createElement(i,e))}c.Z},817:function(e,n,t){var l=t(7294),r=t(1883),a=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:i="",image:c="",children:m=null,canonicalUrl:o=""}=e;const u=(0,a.Z)(),{siteTitle:g,siteTitleAlt:p,siteUrl:E,siteDescription:s,siteImage:h,author:d}=u,b={title:n?n+" | "+g:p,description:t||s,url:""+E+(i||""),image:""+E+(c||h)};return l.createElement(l.Fragment,null,l.createElement("title",null,b.title),l.createElement("meta",{name:"description",content:b.description}),l.createElement("meta",{name:"image",content:b.image}),l.createElement("meta",{property:"og:title",content:b.title}),l.createElement("meta",{property:"og:url",content:b.url}),l.createElement("meta",{property:"og:description",content:b.description}),l.createElement("meta",{property:"og:image",content:b.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:b.title}),l.createElement("meta",{name:"twitter:url",content:b.url}),l.createElement("meta",{name:"twitter:description",content:b.description}),l.createElement("meta",{name:"twitter:image",content:b.image}),l.createElement("meta",{name:"twitter:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:creator",content:d}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?l.createElement("link",{rel:"canonical",href:o}):null,m)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-03-03-git-howtogetremotebranch-mdx-afee61227f6c58c29c9b.js.map