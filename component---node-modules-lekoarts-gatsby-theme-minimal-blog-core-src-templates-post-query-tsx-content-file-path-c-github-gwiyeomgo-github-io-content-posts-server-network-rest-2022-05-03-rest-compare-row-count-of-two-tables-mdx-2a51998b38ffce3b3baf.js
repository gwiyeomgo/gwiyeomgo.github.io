"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9409],{8804:function(e,t,r){r.d(t,{F:function(){return m},Z:function(){return p}});var n=r(7294),l=r(8733),a=r(795),i=r(4531),o=r(6799),s=r(817);var c=e=>{let{post:t}=e;return null};const d=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:r}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(n.Fragment,null," — ",(0,l.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:d.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},r),(0,l.tZ)(c,{post:t}))};const m=e=>{var t,r,n;let{data:{post:a}}=e;return(0,l.tZ)(s.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(n=r.resize)||void 0===n?void 0:n.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function p(e){let{...t}=e;return n.createElement(u,t)}},6799:function(e,t,r){var n=r(8733),l=r(7294),a=r(1883),i=r(3494),o=r(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:r,basePath:s}=(0,i.Z)();return(0,n.tZ)(l.Fragment,null,t.map(((e,t)=>(0,n.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,n.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+r+"/"+e.slug)},e.name)))))}},6927:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o.F},default:function(){return s}});var n=r(7294),l=r(1151);function a(e){const t=Object.assign({h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h3,null,"배경"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"applications table"),"\n"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"contents"),n.createElement(t.th,null,"상태"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"테스트1"),n.createElement(t.td,null,"Saved")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"테스트2"),n.createElement(t.td,null,"Registered")),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"테스트3"),n.createElement(t.td,null,"Approved")))),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"reports table"),"\n"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"contents"),n.createElement(t.th,null,"상태"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"테스트1"),n.createElement(t.td,null,"Saved")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"테스트2"),n.createElement(t.td,null,"Registered")),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"테스트3"),n.createElement(t.td,null,"Rejected")))),"\n",n.createElement(t.p,null,"모든 상태 값"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"상태"),n.createElement(t.th,null,"한글"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"Saved"),n.createElement(t.td,null,"임시저장")),n.createElement(t.tr,null,n.createElement(t.td,null,"Registered"),n.createElement(t.td,null,"신청")),n.createElement(t.tr,null,n.createElement(t.td,null,"Reworked"),n.createElement(t.td,null,"재작업")),n.createElement(t.tr,null,n.createElement(t.td,null,"Approved"),n.createElement(t.td,null,"승인")),n.createElement(t.tr,null,n.createElement(t.td,null,"Rejected"),n.createElement(t.td,null,"반려")),n.createElement(t.tr,null,n.createElement(t.td,null,"Rejected"),n.createElement(t.td,null,"반려")))),"\n",n.createElement(t.p,null,"기관에는 여러명의 소속 직웝이 있다.\r\n기관은 물품을 선택할 수 있다."),"\n",n.createElement(t.p,null,"신청의 상태가 Registered,reworked,approved 이고\r\n보고서의 상태가 Registered,Approved 이면\r\n해당 기관의 담당자는 물품을 신청할 수 있다."),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"POST"),n.createElement(t.th,null,"PUT"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"입력값이 승인된 기관인지 확인"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"입력값이 승인된 물품인지 확인"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"입력값이 사업분야가 물품의 사업분야와 일치하는지 확인"),n.createElement(t.td,null,"신청이 존재하는지 확인")),n.createElement(t.tr,null,n.createElement(t.td,null,"기관,물품으로 신청된 내용 있는지 확인,없다"),n.createElement(t.td,null,"신청된 데이터의 기관과 신청서의 기관이 일치하는지 확인")),n.createElement(t.tr,null,n.createElement(t.td,null,"입력값이 등록을 원하면,신청 가능한지 확인"),n.createElement(t.td,null,"입력값이 등록을 원하면,신청 가능한지 확인")))),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,'\r\nfunc (s *ApplicationCUD) validateForCreation(c echo.Context) error {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\torg := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}\r\n\tif b, err := org.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tgoods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}\r\n\tif b, err := goods.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))\r\n\t} else if goods.Expired || goods.Closed {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))\r\n\t} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))\r\n\t}\r\n\r\n\tapplications := internal.Application{OrgId: s.OrgId, GoodsId: s.GoodsId}\r\n\tif results, err := applications.GetList(c); err != nil {\r\n\t\treturn err\r\n\t} else if len(*results) > 0 {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist + "(신청)"))\r\n\t}\r\n\r\n\tif s.Status == enum.Registered.String() {\r\n\t\tavailable, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, 0)\r\n\t\tif err != nil {\r\n\t\t\treturn err\r\n\t\t} else if !available {\r\n\t\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))\r\n\t\t}\r\n\t}\r\n\r\n\treturn nil\r\n}\r\n\r\nfunc (s *ApplicationCUD) validateForUpdating(c echo.Context) error {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\torg := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}\r\n\tif b, err := org.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tgoods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}\r\n\tif b, err := goods.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))\r\n\t} else if goods.Expired || goods.Closed {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))\r\n\t} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))\r\n\t}\r\n\r\n\tapplication := internal.Application{Id: s.Id}\r\n\tif b, err := application.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tif application.OrgId != s.OrgId {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(단체:%d)", s.OrgId))\r\n\t} else if application.GoodsId != s.GoodsId {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif s.Status == enum.Registered.String() {\r\n\t\tavailable, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, s.Id)\r\n\t\tif err != nil {\r\n\t\t\treturn err\r\n\t\t} else if !available {\r\n\t\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))\r\n\t\t}\r\n\t}\r\n\r\n\treturn nil\r\n}\n')),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,'func (ApplicationRepository) IsApplicationAvailable(c echo.Context, orgID int64, id int64) (bool, error) {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\tapplicationStatus := []string{enum.Registered.String(), enum.Reworked.String(), enum.Approved.String()}\r\n\tbuilder := context.DB(c).Table("applications").Where("del is null or del = 0").In("status", applicationStatus)\r\n\tif orgID != 0 {\r\n\t\tbuilder = builder.And("org_id = ?", orgID)\r\n\t}\r\n\tif id != 0 {\r\n\t\tbuilder = builder.And("id !=?", id)\r\n\t}\r\n\r\n\tvar applications []map[string]string\r\n\tif err := builder.Find(&applications); err != nil {\r\n\t\tcontext.Log(c).Errorln(err.Error())\r\n\t\treturn false, errors.ApiInternalServerError(err.Error())\r\n\t}\r\n\r\n\treportStatus := []string{enum.Registered.String() enum.Reworked.String(), enum.Approved.String()}\r\n\treport := context.DB(c).Table("reports").Where("del is null or del = 0").And("org_id = ?", orgID).In("status", reportStatus)\r\n\tif id != 0 {\r\n\t\treport.And("application_id !=?", id)\r\n\t}\r\n\tvar reports []map[string]string\r\n\tif err := report.Find(&reports); err != nil {\r\n\t\tcontext.Log(c).Errorln(err.Error())\r\n\t\treturn false, errors.ApiInternalServerError(err.Error())\r\n\t}\r\n\r\n\tif len(applications) == len(reports) {\r\n\t\treturn true, nil\r\n\t}\r\n\r\n\treturn false, nil\r\n}\n')))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?n.createElement(t,e,n.createElement(a,e)):a(e)},o=r(8804);function s(e){return n.createElement(o.Z,e,n.createElement(i,e))}o.Z},817:function(e,t,r){var n=r(7294),l=r(1883),a=r(4232);t.Z=e=>{let{title:t="",description:r="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const d=(0,a.Z)(),{siteTitle:u,siteTitleAlt:m,siteUrl:p,siteDescription:g,siteImage:E,author:f}=d,S={title:t?t+" | "+u:m,description:r||g,url:""+p+(i||""),image:""+p+(o||E)};return n.createElement(n.Fragment,null,n.createElement("title",null,S.title),n.createElement("meta",{name:"description",content:S.description}),n.createElement("meta",{name:"image",content:S.image}),n.createElement("meta",{property:"og:title",content:S.title}),n.createElement("meta",{property:"og:url",content:S.url}),n.createElement("meta",{property:"og:description",content:S.description}),n.createElement("meta",{property:"og:image",content:S.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:S.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:S.title}),n.createElement("meta",{name:"twitter:url",content:S.url}),n.createElement("meta",{name:"twitter:description",content:S.description}),n.createElement("meta",{name:"twitter:image",content:S.image}),n.createElement("meta",{name:"twitter:image:alt",content:S.description}),n.createElement("meta",{name:"twitter:creator",content:f}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),c?n.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-network-rest-2022-05-03-rest-compare-row-count-of-two-tables-mdx-2a51998b38ffce3b3baf.js.map