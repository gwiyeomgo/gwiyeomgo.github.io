"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8246],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(4531),c=n(6799),m=n(817);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(o,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(m.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8958:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return m}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",code:"code",blockquote:"blockquote",h1:"h1",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"평소 사용 git"),"\n",a.createElement(t.p,null,"업무에서 개발할때\r\n프로젝트를 gitLab 에 올리고 clone 받아서 pc 에 설치한다\r\n그후 origin remote 와 fork 한 프로젝트 url 로 개인 remote 저장소를 만든다\r\n그리고 origin 의 특정 master,dev 등.. branch 에서 새 가지를 뻗어나간다"),"\n",a.createElement(t.p,null,"branch를 만들때 #을 붙였는데 이는 gitLab 에서 이슈와 commit 을 연결하기 위해서라고 생각한다"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"git checkout -b #1")),"\n",a.createElement(t.p,null,"branch : #1\r\ncommit- message : #1 오류 수정"),"\n",a.createElement(t.p,null,"쓴 경우"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"git push origin #1"),"하고 머지 리퀘스트를 생성하면\r\ngitLab,git 사이트에서 #1 이라는 이슈를 찾아서 #1 클릭시 이슈 내용을 확인할 수 있다"),"\n",a.createElement(t.h3,null,a.createElement(t.code,null,"#"),"을 commit message 에 쓰기 위해서는..."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"(#)means a comment is starting (atleast in a linux shell)"),"\n"),"\n",a.createElement(t.p,null,"리눅스 쉘에서느 #은 주석이 시작되고 있음을 의미하기 떄문에\r\n주석 기능하는 문자를\r\n",a.createElement(t.code,null,"git config --global core.commentChar ';'")," 명령어로 변경해주면 commit message 에 # 을 쓸 수 있다\r\n",a.createElement(t.code,null,"git config --list")," 로 설정 내용 볼 수 있다"),"\n",a.createElement(t.h1,null,"왜 1 commit 을 해야하지?"),"\n",a.createElement(t.p,null,"그리고 업무할때\r\n하나의 이슈에 1개의 commit 을 만든다\r\n한번 작업할 때 여러번 commit 한 경우 1개로 만든다\r\n=> 이또한 하나의 이슈와 연결해서 깔끔하게 1개 커밋 내용으로 동료와 소통하기 위해서라고 생각한다."),"\n",a.createElement(t.h1,null,"좋은 commit message?"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://meetup.toast.com/posts/106"},"https://meetup.toast.com/posts/106")),"\n",a.createElement(t.h1,null,"참고"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.popit.kr/tip-git-commit-%EB%A9%94%EC%8B%9C%EC%A7%80%EC%97%90-%EC%9D%B4%EC%8A%88%EB%B2%88%ED%98%B8-%ED%98%95%ED%83%9C%EB%A1%9C-%EC%93%B0%EA%B8%B0/"},"git commit 메시지에 #이슈번호 형태로 쓰기")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(8804);function m(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:m=null,canonicalUrl:o=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:E,siteImage:d,author:h}=s,b={title:t?t+" | "+p:u,description:n||E,url:""+g+(i||""),image:""+g+(c||d)};return a.createElement(a.Fragment,null,a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,m)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-04-13-git-commit-mdx-60255a3cd307f92b97b4.js.map