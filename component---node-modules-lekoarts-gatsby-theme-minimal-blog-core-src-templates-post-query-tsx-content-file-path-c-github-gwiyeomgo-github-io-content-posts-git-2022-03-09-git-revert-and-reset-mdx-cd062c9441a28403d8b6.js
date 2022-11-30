"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9218],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var l=n(7294),r=n(8733),a=n(795),c=n(4531),i=n(6799),m=n(817);var o=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(o,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return l.createElement(s,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},9216:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return m}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.h4,null,"상황1"),"\n",l.createElement(t.p,null,"가끔 command 명령어로 commit 을 할때 취소해야 하는 경우가 있다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"우리는 main branch 에서 새로 branch 를 생성한다"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"checkout 해서 새 브랜치로 이동해서 보통은 작업하지만"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"갑작스런 이슈로 main에서 코드고치고\r\ngit stash 명령어 쓰려다가...\r\n그냥 main에서 commit 한 적이 있었다"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"우선 commit 한 상태에서 새 branch로 이동해서 push 했고"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"원래 main을 되돌려야 하는 상황"),"\n"),"\n"),"\n",l.createElement(t.h4,null,"상황2"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"여러명이 dev(default branch 개발계) Branch 를 clone 하고 협업중"),"\n",l.createElement(t.li,null,"A라는 사람은 이번주에 배포하면 안돼는 코드를 작업 후\r\ndev 로 머지했다"),"\n",l.createElement(t.li,null,"dev 에 머지된 가장 최근의 commit 을 되돌려야 하는 상황"),"\n"),"\n",l.createElement(t.h1,null,"해결 방법"),"\n",l.createElement(t.p,null,"우선 나는 ",l.createElement(t.code,null,"상황1")," 에서는\r\n그냥 프로젝트를 다시 clone 했다."),"\n",l.createElement(t.p,null,"프로젝트를 그냥 써야하는 상황이라면\r\n",l.createElement(t.code,null,"git reset")," 명령을 썼을 거 같다\r\n(",l.createElement(t.code,null,"git reset HEAD~1"),"=> 가장 최근 1개 커밋 reset => modify 상태로 변경)\r\n예전에 시니어 개발자에게 해당 명령을 함부로 썼다고\r\n혼난 이후 잘 사용은 안하지만\r\n커밋을 아예 취소하는 상황이기 때문에\r\n써야하는 상황인거 같다"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"상황2"),"에서는 ",l.createElement(t.code,null,"git revert")," 를 사용했다\r\ngitLab을 주로 사용하는데\r\ngitLab 에서 merge 이후\r\n화면에 ",l.createElement(t.code,null,"[revert]")," 버튼이 있다\r\n이 버튼사용하면\r\n새로운 머지 request 를 생성 => 머지하면\r\n새로운 rever commit 이 자동 추가되며\r\n이전 코드로 돌아온다\r\n(자세한 내용은 참고3 클릭)"),"\n",l.createElement(t.h3,null,"참고 글"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html"},"참고1"),"\r\n",l.createElement(t.a,{href:"https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/"},"참고2"),"\r\n",l.createElement(t.a,{href:"https://docs.gitlab.com/ee/user/project/merge_requests/revert_changes.html"},"참고3-gitLab")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(8804);function m(e){return l.createElement(i.Z,e,l.createElement(c,e))}i.Z},817:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:m=null,canonicalUrl:o=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=u,f={title:t?t+" | "+s:p,description:n||d,url:""+g+(c||""),image:""+g+(i||E)};return l.createElement(l.Fragment,null,l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?l.createElement("link",{rel:"canonical",href:o}):null,m)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-03-09-git-revert-and-reset-mdx-cd062c9441a28403d8b6.js.map