"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4330],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return p}});var r=n(7294),l=n(8733),a=n(795),m=n(4531),c=n(6799),i=n(817);var d=e=>{let{post:t}=e;return null};const o=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(m.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:o.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(d,{post:t}))};const u=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(i.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function p(e){let{...t}=e;return r.createElement(s,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),m=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,m.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8090:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return i}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h3:"h3",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"한 회원당 여러건의 주소를 갖을 수 있다"),"\n",r.createElement(t.li,null,"택배 기부는 사용자의 주소를 입력받고 저장"),"\n",r.createElement(t.li,null,"시도 및 시군구(",r.createElement(t.code,null,"sender_address"),"),상세주소(",r.createElement(t.code,null,"sender_address_detail"),")"),"\n"),"\n",r.createElement(t.p,null,"주소 검색 기능이 추가되었고\r\n기부자 정보에서 주소를 보기로 했음\r\n하지만 주소를 확인하기 어렵고\r\n기부자 정보에는 최근에 보냈던 주소가 보이기 때문에\r\n기부자 한명에  여러 주소가 존재하면 알 수 가 없다\r\n이후 주소를 목록 화면에서 보여주고\r\n화면 크기보다 길어지면 스크롤을 추가되도록 화면을 수정하기로 했다"),"\n",r.createElement(t.h3,null,"질문?"),"\n",r.createElement(t.p,null,"실제 기부자중 2개 이상의 주소를 입력한 회원은 몇명일까?\r\n주소 컬럼을 2개로 관리하는데 합처서 어떻게 볼 수 있지?"),"\n",r.createElement(t.h3,null,"기부자 회원id와 등록한 주소 정보 조회"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"SELECT d.member_id,sender_address,sender_address_detail FROM donations as d\r\nleft join deliveries  as c\r\non d.id = c.donation_id\r\ngroup by member_id,address\r\norder by d.member_id\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"member_id"),r.createElement(t.th,null,"sender_address"),r.createElement(t.th,null,"sender_address_details"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,"1"),r.createElement(t.td,null,"광주 광산구"),r.createElement(t.td,null,"2-21")),r.createElement(t.tr,null,r.createElement(t.td,null,"1"),r.createElement(t.td,null,"광주 광산구"),r.createElement(t.td,null,"2-21")),r.createElement(t.tr,null,r.createElement(t.td,null,"1"),r.createElement(t.td,null,"대전광역시 유성구"),r.createElement(t.td,null,"3층")),r.createElement(t.tr,null,r.createElement(t.td,null,"2"),r.createElement(t.td,null,"경기도 군포시"),r.createElement(t.td,null,"105호")),r.createElement(t.tr,null,r.createElement(t.td,null,"2"),r.createElement(t.td,null,"경기도 군포시"),r.createElement(t.td,null,"105호")))),"\n",r.createElement(t.h3,null,"주소를 합처서 보고 싶다면"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"concat(sender_address,sender_address_detail) as address")," 을 통해서 address 를 합쳐서 조회할 수 있다."),"\n",r.createElement(t.p,null,"|member_id|address|\r\n|---|---|---|\r\n|1|광주 광산구 2-21|\r\n|1|광주 광산구 2-21|\r\n|1|대전광역시 유성구 3층|\r\n|2|경기도 군포시 105호|\r\n|2|경기도 군포시 105호|"),"\n",r.createElement(t.h3,null,"2건이상 다른 주소를 등록한 회원 조회"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"select  member_id,count(member_id) from\r\n(\r\n    // 기부자 회원id와 등록한 주소 정보 조회\r\n) as result\r\ngroup by result.member_id\r\nhaving count(result.member_id) > 1\n")),"\n",r.createElement(t.p,null,"|member_id|count(member_id)|\r\n|---|---|---|\r\n|1|2|\r\n|2|2|"),"\n",r.createElement(t.h3,null,"데이터를 확인해 보니"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"select   member_id,count(member_id)  from\r\n(\r\n  SELECT d.member_id,concat(sender_address,sender_address_detail) as address , FROM donations as d\r\n  left join deliveries  as c\r\n  on d.id = c.donation_id\r\n  group by member_id,address\r\n  order by d.member_id\r\n) as result\r\n group by result.member_id\r\n having count(result.member_id) > 1\n")),"\n",r.createElement(t.p,null,"작성했던 쿼리 실행결과 row(s) 숫자를 통해 count 를 확인했다."),"\n",r.createElement(t.p,null,"취소된 기부를 제외하고\r\n17844 명의 회원( 테스트 기부자 포함)이 택배 기부를 사용했고 주소가 존재한다.\r\n이때 회원이 기부를 보냈던 주소가 2개 이상인 경우는 569 명(테스트 기부자 포함)이 존재했다."))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(8804);function i(e){return r.createElement(c.Z,e,r.createElement(m,e))}c.Z},817:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:m="",image:c="",children:i=null,canonicalUrl:d=""}=e;const o=(0,a.Z)(),{siteTitle:s,siteTitleAlt:u,siteUrl:p,siteDescription:E,siteImage:g,author:b}=o,h={title:t?t+" | "+s:u,description:n||E,url:""+p+(m||""),image:""+p+(c||g)};return r.createElement(r.Fragment,null,r.createElement("title",null,h.title),r.createElement("meta",{name:"description",content:h.description}),r.createElement("meta",{name:"image",content:h.image}),r.createElement("meta",{property:"og:title",content:h.title}),r.createElement("meta",{property:"og:url",content:h.url}),r.createElement("meta",{property:"og:description",content:h.description}),r.createElement("meta",{property:"og:image",content:h.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:h.title}),r.createElement("meta",{name:"twitter:url",content:h.url}),r.createElement("meta",{name:"twitter:description",content:h.description}),r.createElement("meta",{name:"twitter:image",content:h.image}),r.createElement("meta",{name:"twitter:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:creator",content:b}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),d?r.createElement("link",{rel:"canonical",href:d}):null,i)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2022-07-28-mysql-concat-mdx-ae735be7ead32a3f8c61.js.map