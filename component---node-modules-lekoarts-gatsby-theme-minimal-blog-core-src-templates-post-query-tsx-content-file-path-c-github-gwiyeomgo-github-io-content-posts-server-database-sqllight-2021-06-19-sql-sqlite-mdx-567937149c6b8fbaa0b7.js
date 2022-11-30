"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[894],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(4531),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(s,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},4099:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",h3:"h3",blockquote:"blockquote",em:"em",ul:"ul",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"1.서비스코드의 testcase 를 추가하고 싶다.\r\n2.테스트 케이스 환경을 구성해야 한다\r\n3.db 는 SQLITE 을 쓰기로 했다."),"\n",r.createElement(t.h3,null,"SQLITE 은 뭐지?"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"별도 관리가 필요 없는 메모리 데이터베이스 = sqlite\r\nSQLite는 MySQL나 PostgreSQL와 같은 데이터베이스 관리 시스템이지만,\r\n서버가 아니라 응용 프로그램에 넣어 사용하는 비교적 가벼운 데이터베이스\r\nWindows 환경에서 go-sqlite3 를 사용하기 위해 설치한다."),"\n"),"\n",r.createElement(t.h3,null,"YML 파일 ?"),"\n",r.createElement(t.p,null,"메모리 DB에 입력할 데이터를 YML파일을 통해 입력합니다."),"\n",r.createElement(t.h3,null,"YML 파일은 어디에 > (경로)"),"\n",r.createElement(t.p,null,"go 에서는 testdata 디렉토리와 _test 로 끝나는 파일은 빌드에서 제외됩니다.\r\ntestdata 디렉토리를 생성하고 yml 파일을 생성했다."),"\n",r.createElement(t.h3,null,"YML 데이터 입력 방법"),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"중요")),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"yml을 작성할 때 작성법을 따르지 않는다면 테스트를 제대로 진행 할 수 없습니다."),"\n"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"yml은 DB의 TABLE환경과 똑같이 설정한다.(필수값만 입력하기)"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-yml"},'- user_no: 1\r\n  id: "super@w.org"\r\n  company_id: 1\r\n  password: $2a$0d1S4JStXW\r\n  name: "수퍼담당자"\r\n  status: "Approval"\r\n  mobile: uvbANnupYDSrkys=\r\n  infomation_use_agree: 1\r\n  infomation_receiving_agree: 1\r\n  created_at: RAW=datetime(\'now\')\r\n  updated_by: "1"\r\n  updated_at: RAW=datetime(\'now\')\n')),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"JSON형태의 값은 한줄로 작성한다."),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-yml"},'business_areas: { "child": true, "youth": true, "senior": true, "disabled": true, "women": true, "family": true, "community": true, "internationalDevelopment": true, "environment": true, "notApplicable": true}\n')),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"암호화된 값은 암호화된 키를 작성한다."),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(8804);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const u=(0,l.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=u,y={title:t?t+" | "+s:p,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"image",content:y.image}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:url",content:y.url}),r.createElement("meta",{name:"twitter:description",content:y.description}),r.createElement("meta",{name:"twitter:image",content:y.image}),r.createElement("meta",{name:"twitter:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-sqllight-2021-06-19-sql-sqlite-mdx-567937149c6b8fbaa0b7.js.map