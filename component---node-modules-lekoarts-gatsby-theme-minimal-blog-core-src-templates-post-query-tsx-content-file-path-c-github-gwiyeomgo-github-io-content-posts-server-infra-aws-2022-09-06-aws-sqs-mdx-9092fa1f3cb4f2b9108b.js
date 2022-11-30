"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8568],{8804:function(e,t,n){n.d(t,{F:function(){return E},Z:function(){return p}});var l=n(7294),a=n(8733),r=n(795),c=n(4531),o=n(6799),m=n(817);var i=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(i,{post:t}))};const E=e=>{var t,n,l;let{data:{post:r}}=e;return(0,a.tZ)(m.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function p(e){let{...t}=e;return l.createElement(u,t)}},6799:function(e,t,n){var l=n(8733),a=n(7294),r=n(1883),c=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.Z)();return(0,l.tZ)(a.Fragment,null,t.map(((e,t)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},5025:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return m}});var l=n(7294),a=n(1151);function r(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",a:"a",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"aws sqs"),"\n",l.createElement(t.h2,null,"배경"),"\n",l.createElement(t.p,null,"기부가 완료되었지만 카카오알림톡 메세지 전송실패로 전체가 rollback 되었다]()"),"\n",l.createElement(t.h2,null,"조치"),"\n",l.createElement(t.p,null,"카카오 알림톡 전송 없체와 강하게 결합되어 있으니 느슨하게 분리한다"),"\n",l.createElement(t.p,null,"1.알림톡에 발생시 queue 에 메세지를 쌓아은것을 ",l.createElement(t.code,null,"알림톡전송서비스")," 이 조회해온다\r\n2.",l.createElement(t.code,null,"알림톡전송서비스"),"에서 카카오알림톡과 통신이 실패했을 때 queue 에서 다시 호출해서 재발송\r\n3.",l.createElement(t.code,null,"알림톡전송서비스"),"에서 카카오알림톡과 통신해서 회원에게 알림톡 발송요청"),"\n",l.createElement(t.p,null,"적용기술\r\nsqs vs sns"),"\n",l.createElement(t.h1,null,"sqs"),"\n",l.createElement(t.p,null,"http 로 메세지 시스템 대기열에 추가\r\n",l.createElement(t.code,null,"https://sqs.us-east-2.amazonaws.com/{aws 계정번호}/{메세지 대기열 이름}")),"\n",l.createElement(t.h3,null,"sqs 관련 정보"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html\r\nhttps://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html#queue-name-url\r\nhttps://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html\r\n[SNS vs SQS](https://seohyun0120.tistory.com/entry/AWS-SNS-vs-SQS-%EC%B0%A8%EC%9D%B4%EC%A0%90)\r\nhttps://velog.io/@zionedoha/SES-SQS-SNS-%EC%B0%A8%EC%9D%B4\r\nhttps://madosa79.tistory.com/4\n")),"\n",l.createElement(t.h1,null,"aws 문서를 읽으면서 계속 등장하는 용어"),"\n",l.createElement(t.p,null,"EndPoint :  API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URL\r\n",l.createElement(t.a,{href:"https://blog.naver.com/PostView.naver?blogId=ghdalswl77&logNo=222401162545&parentCategoryNo=&categoryNo=90&viewDate=&isShowPopularPosts=true&from=search"},"출처"),"\r\n",l.createElement(t.code,null,"API Gateway : https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html")),"\n",l.createElement(t.h1,null,"REST API에 대한 IAM 인증"),"\n",l.createElement(t.p,null,"AWS에는 두 가지 유형의 사용자\r\n",l.createElement(t.code,null,"계정 소유자(루트 사용자)이거나"),"\r\nAWS Identity and Access Management(IAM) 사용자\r\n1-1 token 을 획득하기 위해서 IAM 계정을 만들고 임시 자격증명이 필요해 보임 (추측)\r\n",l.createElement(t.a,{href:"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85"},"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85")),"\n",l.createElement(t.p,null,"목표\r\nSQS 에 API 를 호출해서 데이터를 등록한다"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"post API 를 호출","\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"authorization 을 생성해서 HTTP Authorization헤더에 추가"),"\n",l.createElement(t.li,null,"http 로 API 호출 postman"),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"postman 에서 테스트를 진행했을 때"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"https://sqs.eu-west-2.amazonaws.com/123456789012\r\n?Action=SendMessage\r\n&MessageBody=Your+Message+Text\r\n&Expires=2020-10-15T12%3A00%3A00Z\r\n&Version=2012-11-05\r\n&AUTHPARAMS\n")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Content-Type 은 application/x-www-form-urlencoded"),"\n",l.createElement(t.li,null,"AUTHPARAMS ?"),"\n"),"\n",l.createElement(t.h1,null,"20220907"),"\n",l.createElement(t.p,null,"aws 의 sqs 를 사용해서 요청을 보내고 싶었다."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"sqs 생성 :메세지 대기열 서비스\r\n*",l.createElement(t.code,null," https://ap-northeast-2.console.aws.amazon.com/sqs/v2/home?region=ap-northeast-2#/")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"대기열 생성\r\n*FLFO\r\n메시지 그룹 ID가 동일한 메시지를 FIFO 대기열에 전송하는 경우, Amazon SQS 도착하는 순서대로 메시지를 저장한 후 처리합니다","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html")),"\n",l.createElement(t.li,null,"생성자는 고유한 메시지 그룹 ID를 사용하여 모든 메시지를 전송\r\n*이름 MessageQueue.fifo"),"\n",l.createElement(t.li,null,"메서드 기본","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"지정된 AWS 계정, IAM 사용자 및 역할만"),"\r\n*대기열생성"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"용어정리"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"regin :aws 는 지역별로 리소스를 제공,한국은 ap-northeast-2")),"\n",l.createElement(t.li,null,"assume-role"),"\n",l.createElement(t.li,null,"ARN"),"\n"),"\n"),"\n"),"\n",l.createElement(t.h3),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://devocean.sk.com/blog/techBoardDetail.do?ID=163290"},"https://devocean.sk.com/blog/techBoardDetail.do?ID=163290")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(8804);function m(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z},817:function(e,t,n){var l=n(7294),a=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:o="",children:m=null,canonicalUrl:i=""}=e;const s=(0,r.Z)(),{siteTitle:u,siteTitleAlt:E,siteUrl:p,siteDescription:d,siteImage:g,author:h}=s,A={title:t?t+" | "+u:E,description:n||d,url:""+p+(c||""),image:""+p+(o||g)};return l.createElement(l.Fragment,null,l.createElement("title",null,A.title),l.createElement("meta",{name:"description",content:A.description}),l.createElement("meta",{name:"image",content:A.image}),l.createElement("meta",{property:"og:title",content:A.title}),l.createElement("meta",{property:"og:url",content:A.url}),l.createElement("meta",{property:"og:description",content:A.description}),l.createElement("meta",{property:"og:image",content:A.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:A.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:A.title}),l.createElement("meta",{name:"twitter:url",content:A.url}),l.createElement("meta",{name:"twitter:description",content:A.description}),l.createElement("meta",{name:"twitter:image",content:A.image}),l.createElement("meta",{name:"twitter:image:alt",content:A.description}),l.createElement("meta",{name:"twitter:creator",content:h}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),i?l.createElement("link",{rel:"canonical",href:i}):null,m)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-infra-aws-2022-09-06-aws-sqs-mdx-9092fa1f3cb4f2b9108b.js.map