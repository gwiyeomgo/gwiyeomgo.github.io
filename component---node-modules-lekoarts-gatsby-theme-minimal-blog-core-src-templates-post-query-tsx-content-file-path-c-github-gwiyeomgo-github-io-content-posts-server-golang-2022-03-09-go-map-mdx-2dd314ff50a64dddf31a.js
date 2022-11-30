"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1708],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),l=n(8733),a=n(795),i=n(4531),c=n(6799),m=n(817);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(o,{post:t}))};const p=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,i.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},7225:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return m}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h3:"h3",ol:"ol",li:"li",p:"p",code:"code",ul:"ul",a:"a",pre:"pre",h1:"h1",h2:"h2"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"신규 프로젝트를 시작하면서 join을 사용하지 않고 코드에서 join을 하기로 결정했다."),"\n",r.createElement(t.li,null,"A table 에서 정보를 조회하고"),"\n",r.createElement(t.li,null,"B table 에서 정보를 조회했을때"),"\n",r.createElement(t.li,null,"각각의 값을 service에서 합쳐서 반환한다."),"\n"),"\n",r.createElement(t.p,null,"이때 ",r.createElement(t.code,null,"map[string]interface{}")," ,",r.createElement(t.code,null,"[]interface{}")," 등 사용해서\r\n반환값의 타입을 지정한다."),"\n",r.createElement(t.h3,null,"필요한 코드는?"),"\n",r.createElement(t.p,null,"반환값 (합친 형태가)\r\n",r.createElement(t.code,null,'[{name:"test"},{name:"test2"}]')," 형태  필요할때"),"\n",r.createElement(t.h3,null,"상황 1"),"\n",r.createElement(t.p,null,"[]배열형태를 어떻게 표현하지?"),"\n",r.createElement(t.h3,null,"append로 배열에 객체","를 추가"),"\n",r.createElement(t.p,null,"구글에서 검색 해서 아래방법을 찾았다"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://stackoverflow.com/questions/34293572/golang-prepend-a-string-to-a-slice-interface"},"참고")),"\n",r.createElement(t.li,null,"append() can only append values of the type matching the element type of the slice:"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'s := "first"\r\nrest := []interface{}{"second", 3}\r\nall := append([]interface{}{s}, rest)\r\nfmt.Println(all)\r\n//Output (try it on the Go Playground):\n')),"\n",r.createElement(t.h1,null,"상황 2"),"\n",r.createElement(t.p,null,"그렇다면 []안에 객체는 어떻게 넣지?"),"\n",r.createElement(t.h3,null,"key value 형태 객체만드는 방법"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'type MyStruct struct {\r\n    Name string\r\n    Age  int64\r\n}\r\nfunc main() {\r\n    myData := make(map[string]interface{})\r\n    myData["Name"] = "Tony"\r\n    myData["Age"] = int64(23)\r\n\r\n    result := &MyStruct{}\r\n}\n')),"\n",r.createElement(t.h2,null,"실행 코드"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"A B 모두 아래 메소드 처럼 값을 조회함"),"\n",r.createElement(t.li,null,"(1) A 의 GetList 는 *[]A를 반환"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"type A struct {\r\n    Id   sring\r\n}\r\nfunc (A) GetList() *[]A {\r\n    var results []A\r\n    //builder.Find(&results) db에서 A조회\r\n\treturn &results\r\n}\n")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"(2) B 의 GetLst 는 *[]map[string]string 반환"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"func (B) GetList() *[]map[string]string {\r\n\tvar results []map[string]string\r\n    //builder.Find(&results) db에서 A조회\r\n\treturn &results\r\n}\n")),"\n",r.createElement(t.h2,null,"코드에서 조인"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'func Sum() {\r\n\ta := A{}.GetList()\r\n    b := B{}.GetLsit()\r\n    var results []interface{} //배열 []\r\n    for _,aVal := range *a {\r\n        result :=  map[string]interface{}{\r\n            "id":aVal.Id,\r\n        }\r\n        //map[string]interface{}에 값 추가됨\r\n        for _,bVal range b {\r\n            if bVal["id"] == aVal.Id {\r\n                rsult["name"] = bVal["name"]\r\n            }\r\n        }\r\n    }\r\n    \r\n}\n')))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(8804);function m(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:m=null,canonicalUrl:o=""}=e;const s=(0,a.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=s,f={title:t?t+" | "+u:p,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),o?r.createElement("link",{rel:"canonical",href:o}):null,m)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2022-03-09-go-map-mdx-2dd314ff50a64dddf31a.js.map