"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6247],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(4531),o=n(6799),c=n(817);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(s,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},1401:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",blockquote:"blockquote",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"코드를 main에 잘 머지시키고 젠킨스에서 배포버튼을 클릭했다.\r\n그런데...\r\n배포 실패했다.\r\n그래서 consle 에 메세지를 확인했다.\r\n에러는 2개이다.\r\n",r.createElement(t.code,null,"에러1 =>해결방법 찾아보니  https://satisfactoryplace.tistory.com/251")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-11:21:58",ERROR:!0,Couldn:!0,t:!0,find:!0,any:!0,revision:!0,to:!0,build:!0,Verify:!0,the:!0,repository:!0,and:!0,branch:!0,configuration:!0,htmlFor:!0,this:!0,job:!0},"11:21:58 Publish artifacts to S3 Bucket Build is still running\r\n11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy\r\n11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed\n")),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"에러2 => 해결방법 찾아보니 https://huskdoll.tistory.com/484")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-11:21:58",ERROR:!0,Couldn:!0,t:!0,find:!0,any:!0,revision:!0,to:!0,build:!0,Verify:!0,the:!0,repository:!0,and:!0,branch:!0,configuration:!0,htmlFor:!0,this:!0,job:!0},"11:21:58 Publish artifacts to S3 Bucket Build is still running\r\n11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy\r\n11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed\n")),"\n",r.createElement(t.p,null,"둘다 devops 를 담당하는 동료분께 요청드렸고\r\n젠킨스 설정을 변경하셨다고 한다."),"\n",r.createElement(t.p,null,"개발은 끝냈는데 배포 못하니까 답답하더라..\r\n이참에 젠킨스에 관해서 공부하고 기록하려고 한다."),"\n",r.createElement(t.h3,null,"젠킨스"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"Software distribution is the process of delivering software to the end user."),"\n"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"빌드(Build), 테스트, 그리고 배포(deployment) 도구 등 체인 전체를 통합할 수 있는 방법을 제공")),"\n",r.createElement(t.p,null,"cl?CI 지속적인 통합(Continuous Integration) 서버"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://jw910911.tistory.com/81"},"https://jw910911.tistory.com/81")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(i,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:s=""}=e;const m=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:h,author:E}=m,f={title:t?t+" | "+u:p,description:n||d,url:""+g+(i||""),image:""+g+(o||h)};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:E}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),s?r.createElement("link",{rel:"canonical",href:s}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-infra-2021-08-05-infra-jenkins-build-mdx-d52b572023b1685a3cfc.js.map