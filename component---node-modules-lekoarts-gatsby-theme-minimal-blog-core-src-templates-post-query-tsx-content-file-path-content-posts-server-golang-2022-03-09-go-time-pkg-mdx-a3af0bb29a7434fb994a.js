"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6977],{8364:function(e,n,t){t.r(n),t.d(n,{Head:function(){return a.F},default:function(){return u}});var r=t(7294),l=t(1151);function o(e){const n=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",pre:"pre",code:"code",h1:"h1",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h3,null,"time package"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"현재 시간"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"time.Now()\n")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"형태를 yyyyMMddHHmmss 로 변경하고 싶다면"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'time.Now().Format("20060102150405")\n')),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"년도"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"time.Now().Year()\n")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"현재 년,월"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"currentYear, currentMonth, _ := time.Now().Date()\r\nresult.ThisYear = int64(currentYear)\r\nresult.ThisMonth = int64(currentMonth)\r\nif currentMonth == 12 {\r\n    result.NextMonth = int64(1)\r\n}else {\r\n    result.NextMonth = int64(currentMonth + 1)\r\n}\n")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"이전달"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"currentMonth := mayEndDate.Month()\r\npreviousMonth := currentMonth - 1\r\nif currentMonth == time.January {\r\n    previousMonth = time.December\r\n}\r\n\n")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"밤 20:01과 아침 08:01 사이"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'now := time.Now()\r\n\r\n// 밤 20:01 이후인지 확인합니다.\r\neveningStartTime := time.Date(now.Year(), now.Month(), now.Day(), 20, 1, 0, 0, now.Location())\r\nmorningEndTime := time.Date(now.Year(), now.Month(), now.Day(), 8, 1, 0, 0, now.Location())\r\n\r\n// 현재 시간의 시간 부분만 추출합니다.\r\nnowTime := now.Hour()*60 + now.Minute()\r\n\r\nf nowTime >= 1201 || nowTime < 481 {\r\n\tfmt.Println("불가")\r\n} else {\r\n\tfmt.Println("가능")\r\n}\n')),"\n",r.createElement(n.h1,null,"참고"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://jeonghwan-kim.github.io/dev/2019/01/14/go-time.html"},"https://jeonghwan-kim.github.io/dev/2019/01/14/go-time.html"),"\r\n",r.createElement(n.a,{href:"https://stackoverflow.com/questions/74645681/how-to-find-previous-month-and-year-in-golang"},"https://stackoverflow.com/questions/74645681/how-to-find-previous-month-and-year-in-golang")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(o,e)):o(e)},a=t(8804);function u(e){return r.createElement(a.Z,e,r.createElement(c,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-03-09-go-time-pkg-mdx-a3af0bb29a7434fb994a.js.map