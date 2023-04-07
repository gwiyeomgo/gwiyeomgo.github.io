"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9409],{6927:function(e,r,t){t.r(r),t.d(r,{Head:function(){return s.F},default:function(){return i}});var n=t(7294),l=t(1151);function a(e){const r=Object.assign({h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(r.h3,null,"배경"),"\n",n.createElement(r.ul,null,"\n",n.createElement(r.li,null,"applications table"),"\n"),"\n",n.createElement(r.table,null,n.createElement(r.thead,null,n.createElement(r.tr,null,n.createElement(r.th,null,"id"),n.createElement(r.th,null,"contents"),n.createElement(r.th,null,"상태"))),n.createElement(r.tbody,null,n.createElement(r.tr,null,n.createElement(r.td,null,"1"),n.createElement(r.td,null,"테스트1"),n.createElement(r.td,null,"Saved")),n.createElement(r.tr,null,n.createElement(r.td,null,"2"),n.createElement(r.td,null,"테스트2"),n.createElement(r.td,null,"Registered")),n.createElement(r.tr,null,n.createElement(r.td,null,"3"),n.createElement(r.td,null,"테스트3"),n.createElement(r.td,null,"Approved")))),"\n",n.createElement(r.ul,null,"\n",n.createElement(r.li,null,"reports table"),"\n"),"\n",n.createElement(r.table,null,n.createElement(r.thead,null,n.createElement(r.tr,null,n.createElement(r.th,null,"id"),n.createElement(r.th,null,"contents"),n.createElement(r.th,null,"상태"))),n.createElement(r.tbody,null,n.createElement(r.tr,null,n.createElement(r.td,null,"1"),n.createElement(r.td,null,"테스트1"),n.createElement(r.td,null,"Saved")),n.createElement(r.tr,null,n.createElement(r.td,null,"2"),n.createElement(r.td,null,"테스트2"),n.createElement(r.td,null,"Registered")),n.createElement(r.tr,null,n.createElement(r.td,null,"3"),n.createElement(r.td,null,"테스트3"),n.createElement(r.td,null,"Rejected")))),"\n",n.createElement(r.p,null,"모든 상태 값"),"\n",n.createElement(r.table,null,n.createElement(r.thead,null,n.createElement(r.tr,null,n.createElement(r.th,null,"상태"),n.createElement(r.th,null,"한글"))),n.createElement(r.tbody,null,n.createElement(r.tr,null,n.createElement(r.td,null,"Saved"),n.createElement(r.td,null,"임시저장")),n.createElement(r.tr,null,n.createElement(r.td,null,"Registered"),n.createElement(r.td,null,"신청")),n.createElement(r.tr,null,n.createElement(r.td,null,"Reworked"),n.createElement(r.td,null,"재작업")),n.createElement(r.tr,null,n.createElement(r.td,null,"Approved"),n.createElement(r.td,null,"승인")),n.createElement(r.tr,null,n.createElement(r.td,null,"Rejected"),n.createElement(r.td,null,"반려")),n.createElement(r.tr,null,n.createElement(r.td,null,"Rejected"),n.createElement(r.td,null,"반려")))),"\n",n.createElement(r.p,null,"기관에는 여러명의 소속 직웝이 있다.\r\n기관은 물품을 선택할 수 있다."),"\n",n.createElement(r.p,null,"신청의 상태가 Registered,reworked,approved 이고\r\n보고서의 상태가 Registered,Approved 이면\r\n해당 기관의 담당자는 물품을 신청할 수 있다."),"\n",n.createElement(r.table,null,n.createElement(r.thead,null,n.createElement(r.tr,null,n.createElement(r.th,null,"POST"),n.createElement(r.th,null,"PUT"))),n.createElement(r.tbody,null,n.createElement(r.tr,null,n.createElement(r.td,null,"입력값이 승인된 기관인지 확인"),n.createElement(r.td)),n.createElement(r.tr,null,n.createElement(r.td,null,"입력값이 승인된 물품인지 확인"),n.createElement(r.td)),n.createElement(r.tr,null,n.createElement(r.td,null,"입력값이 사업분야가 물품의 사업분야와 일치하는지 확인"),n.createElement(r.td,null,"신청이 존재하는지 확인")),n.createElement(r.tr,null,n.createElement(r.td,null,"기관,물품으로 신청된 내용 있는지 확인,없다"),n.createElement(r.td,null,"신청된 데이터의 기관과 신청서의 기관이 일치하는지 확인")),n.createElement(r.tr,null,n.createElement(r.td,null,"입력값이 등록을 원하면,신청 가능한지 확인"),n.createElement(r.td,null,"입력값이 등록을 원하면,신청 가능한지 확인")))),"\n",n.createElement(r.pre,null,n.createElement(r.code,null,'\r\nfunc (s *ApplicationCUD) validateForCreation(c echo.Context) error {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\torg := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}\r\n\tif b, err := org.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tgoods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}\r\n\tif b, err := goods.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))\r\n\t} else if goods.Expired || goods.Closed {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))\r\n\t} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))\r\n\t}\r\n\r\n\tapplications := internal.Application{OrgId: s.OrgId, GoodsId: s.GoodsId}\r\n\tif results, err := applications.GetList(c); err != nil {\r\n\t\treturn err\r\n\t} else if len(*results) > 0 {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist + "(신청)"))\r\n\t}\r\n\r\n\tif s.Status == enum.Registered.String() {\r\n\t\tavailable, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, 0)\r\n\t\tif err != nil {\r\n\t\t\treturn err\r\n\t\t} else if !available {\r\n\t\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))\r\n\t\t}\r\n\t}\r\n\r\n\treturn nil\r\n}\r\n\r\nfunc (s *ApplicationCUD) validateForUpdating(c echo.Context) error {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\torg := internal.Org{Id: s.OrgId, Status: enum.Approved.String()}\r\n\tif b, err := org.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tgoods := internal.Goods{Id: s.GoodsId, Status: enum.Registered.String()}\r\n\tif b, err := goods.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(물품개설:%d)", s.GoodsId))\r\n\t} else if goods.Expired || goods.Closed {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNotAvailable+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif goods.BusinessField != "*" && org.BusinessField != goods.BusinessField {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(사업분야:%d)", org.BusinessField))\r\n\t} else if goods.BusinessRegion != "00" && org.BusinessRegion != goods.BusinessRegion {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(지역:%d)", org.BusinessRegion))\r\n\t}\r\n\r\n\tapplication := internal.Application{Id: s.Id}\r\n\tif b, err := application.GetOne(c); err != nil {\r\n\t\treturn err\r\n\t} else if !b {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageNoDataFound+"(단체:%d)", s.OrgId))\r\n\t}\r\n\r\n\tif application.OrgId != s.OrgId {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(단체:%d)", s.OrgId))\r\n\t} else if application.GoodsId != s.GoodsId {\r\n\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageParamsNotSame+"(물품개설:%d)", s.GoodsId))\r\n\t}\r\n\r\n\tif s.Status == enum.Registered.String() {\r\n\t\tavailable, err := ApplicationRepository{}.IsApplicationAvailable(c, s.OrgId, s.Id)\r\n\t\tif err != nil {\r\n\t\t\treturn err\r\n\t\t} else if !available {\r\n\t\t\treturn errors.ApiInternalServerError(fmt.Sprintf(errors.MessageExist+"(단체:%d)", s.OrgId))\r\n\t\t}\r\n\t}\r\n\r\n\treturn nil\r\n}\n')),"\n",n.createElement(r.pre,null,n.createElement(r.code,null,'func (ApplicationRepository) IsApplicationAvailable(c echo.Context, orgID int64, id int64) (bool, error) {\r\n\tcontext.Log(c).Traceln("")\r\n\r\n\tapplicationStatus := []string{enum.Registered.String(), enum.Reworked.String(), enum.Approved.String()}\r\n\tbuilder := context.DB(c).Table("applications").Where("del is null or del = 0").In("status", applicationStatus)\r\n\tif orgID != 0 {\r\n\t\tbuilder = builder.And("org_id = ?", orgID)\r\n\t}\r\n\tif id != 0 {\r\n\t\tbuilder = builder.And("id !=?", id)\r\n\t}\r\n\r\n\tvar applications []map[string]string\r\n\tif err := builder.Find(&applications); err != nil {\r\n\t\tcontext.Log(c).Errorln(err.Error())\r\n\t\treturn false, errors.ApiInternalServerError(err.Error())\r\n\t}\r\n\r\n\treportStatus := []string{enum.Registered.String() enum.Reworked.String(), enum.Approved.String()}\r\n\treport := context.DB(c).Table("reports").Where("del is null or del = 0").And("org_id = ?", orgID).In("status", reportStatus)\r\n\tif id != 0 {\r\n\t\treport.And("application_id !=?", id)\r\n\t}\r\n\tvar reports []map[string]string\r\n\tif err := report.Find(&reports); err != nil {\r\n\t\tcontext.Log(c).Errorln(err.Error())\r\n\t\treturn false, errors.ApiInternalServerError(err.Error())\r\n\t}\r\n\r\n\tif len(applications) == len(reports) {\r\n\t\treturn true, nil\r\n\t}\r\n\r\n\treturn false, nil\r\n}\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?n.createElement(r,e,n.createElement(a,e)):a(e)},s=t(8804);function i(e){return n.createElement(s.Z,e,n.createElement(o,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-network-rest-2022-05-03-rest-compare-row-count-of-two-tables-mdx-13ed214bac0f7a7af3de.js.map