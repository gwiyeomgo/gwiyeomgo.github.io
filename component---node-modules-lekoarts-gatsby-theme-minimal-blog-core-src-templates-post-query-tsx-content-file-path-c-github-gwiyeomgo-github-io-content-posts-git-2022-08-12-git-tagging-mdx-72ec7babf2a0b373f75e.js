"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7701],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var a=n(7294),l=n(8733),r=n(795),c=n(4531),i=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(c.Z,null,(0,l.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,l.tZ)(o.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(u,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),r=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,c.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8392:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return o}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({h1:"h1",p:"p",code:"code",ol:"ol",li:"li",pre:"pre",ul:"ul",a:"a",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Tagging 뭔가요?"),"\n",a.createElement(t.p,null,"*",a.createElement(t.code,null," https://git-scm.com/book/en/v2/Git-Basics-Tagging 을 사용하여 릴리스 지점을 표시합니다.")),"\n",a.createElement(t.h1,null,"gitLab 에서 Tagging 은.."),"\n",a.createElement(t.p,null,"배포 전에 프로젝트에서\r\ngitLab 의 왼쪽 사이드 메뉴에\r\n",a.createElement(t.code,null,"Repository > Tags > New tag")," 에서 tag 를 생성합니다.release\r\ntag name,메세지를 입력하고 Tagging 할 branch 를 선택하고 tag 를 생성합니다.\r\n그리고 release\r\n",a.createElement(t.code,null,"Deployments > Releases > New release")," 에서 release 를 생성하고 tag 를 선택한다.\r\n이때 사용했던 tag 는 Selected tag is already in use. Choose another option. 문구처럼 사용 못함함"),"\n",a.createElement(t.h1,null,"gitLab API 를 어떻게 사용하지 ?"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"gitLab 문서를 찾아보니 Access Tokens 을 생성"),"\n",a.createElement(t.li,null,"gitLab 에 ",a.createElement(t.code,null,"User Settings > Access Tokens")," 에서 토큰 생성"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null," Personal Access Tokens\r\n You can generate a personal access token for each application you use that needs access to the GitLab API.\n")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Postman 에서 특정 프로젝트의 tag 목록을 호출"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.gitlab.com/ee/api/tags.html"},"gitlab API 링크")),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"url :",a.createElement(t.code,null,"https://gitlab.com/api/v4/projects/{project_id}/repository/tags")),"\n",a.createElement(t.li,null,"Authorization :",a.createElement(t.code,null," Bearer {gitLab-token}")),"\n",a.createElement(t.li,null,"Content-Type :",a.createElement(t.code,null," application/json;charset=UTF-8")),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"project_id 는 어떻게 알지? => gitLab 에서 특정 프로젝트를 선택하면 => 해당 프로젝트 제목 밑에 ",a.createElement(t.code,null,"Project ID: 1111111")," 써있다"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"결과값은 배열로 오며 나는 배열의 첫 요소만 반환하는 API 를 만들었다."),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,'[\r\n    {\r\n        "name": "R-725.v2",\r\n        "message": "7월 25일 운영배포 v2 - hotfix",\r\n        "target": "",\r\n        "commit": {\r\n          ...\r\n        },\r\n        "release": {\r\n            "tag_name": "R-725.v2",\r\n            "description": "#32 목록 페이지 오류 개선"\r\n        },\r\n\r\n    }\r\n ]\n')),"\n",a.createElement(t.h3,null,"20220726"),"\n",a.createElement(t.h1,null,"ㅎㅎ.. gitLab의 tag 알필요가 없다...."),"\n",a.createElement(t.p,null,"그냥 version table 에 임의로 작성한 version 을 추가하면 될 거 같다"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(8804);function o(e){return a.createElement(i.Z,e,a.createElement(c,e))}i.Z},817:function(e,t,n){var a=n(7294),l=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:o=null,canonicalUrl:m=""}=e;const s=(0,r.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:h}=s,b={title:t?t+" | "+u:p,description:n||E,url:""+g+(c||""),image:""+g+(i||d)};return a.createElement(a.Fragment,null,a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-08-12-git-tagging-mdx-72ec7babf2a0b373f75e.js.map