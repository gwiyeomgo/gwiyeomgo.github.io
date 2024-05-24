"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4634],{527:function(e,n,t){t.r(n),t.d(n,{Head:function(){return a.F},default:function(){return c}});var l=t(7294),r=t(1151);function m(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",h2:"h2"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"특정 매장의 행사 소식을 등록하는 기능을 개발했다\r\n작업하면서 moment 를 사용해서 낳짜를 지정하는 일을 많이 했고 헷갈렸다\r\n사용했던 경우를 정리해보려고 한다"),"\n",l.createElement(n.h1,null,l.createElement(n.a,{href:"https://www.npmjs.com/package/moment"},"moment")),"\n",l.createElement(n.p,null,"JS 날짜 관련 라이브러리로 ",l.createElement(n.code,null,"npm i moment")," 로 설치"),"\n",l.createElement(n.h3,null,"DATE_FORMAT"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'"YYYY-MM-DD"\r\n"YYYY-MM-DD HH:mm"\r\n"YYYYMMDD"\r\n"YYYYMMDD HH:mm"\n')),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"2일 뒤 날짜"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"moment().add(2, 'days').format(\"YYYY-MM-DD\")\r\nmoment().add(2, 'd').format(\"YYYY-MM-DD\")\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"1달 전 날짜"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'moment(toDate).subtract("1", "M").format("YYYY-MM-DD");\n')),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"현재시간과 예약일 오후 6시 사이의 시간차"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"const scheduledDateAndTime = moment(scheduledDate + '18:00', \"YYYYMMDD HH:mm\")\r\n   const nowDateAndTime = moment()\r\n   const duration = moment.duration(scheduledDateAndTime.diff(nowDateAndTime));\r\n   const hours = duration.asHours();\r\n      if (hours < 0 || hours < 2) {\r\n          // 2시간이내인 경우\r\n      } else if (hours > 2) {\r\n        // 2시간 보다 많이 차이남\r\n      }\n")),"\n",l.createElement(n.h1,null,"moment 에서 한국말 적용"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'import moment from "moment/moment";\r\nimport "moment/locale/ko";\r\n\r\nmoment.locale("ko"); //설정!\n')),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"moment의 locale 사이즈가 커서 webpack 설정에서 exclude 된다고 합니다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,'import "moment/locale/ko"')," 이런식으로 꼭 표기 해야 적용됩니다."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"antd 에서 DatePicker 를 사용하는데 한국만로 요일 표기 요청이 있었다"),"\n"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'import {ConfigProvider} from "antd";\r\nimport locale from "antd/lib/locale/ko_KR";\r\n\r\n<ConfigProvider locale={locale}>\r\n    ....\r\n</ConfigProvider>\n')),"\n",l.createElement(n.p,null,"moment 코드도 가장 상위 컴포넌트에 적용하고 해당 코드도 적용했더니 모든 DatePicker 의 요일이 한국말로 표기되었다."),"\n",l.createElement(n.h2,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/25150570/get-hours-difference-between-two-dates-in-moment-js"},"Get hours difference between two dates in Moment Js"),"\r\n",l.createElement(n.a,{href:"https://stackoverflow.com/questions/15411833/using-moment-js-to-convert-date-to-string-mm-dd-yyyy"},"https://stackoverflow.com/questions/15411833/using-moment-js-to-convert-date-to-string-mm-dd-yyyy"),"\r\n",l.createElement(n.a,{href:"https://stackoverflow.com/questions/24996490/how-to-find-the-day-month-and-year-with-moment-js"},"https://stackoverflow.com/questions/24996490/how-to-find-the-day-month-and-year-with-moment-js"),"\r\n",l.createElement(n.a,{href:"https://ljlm0402.netlify.app/nodejs/moment/"},"https://ljlm0402.netlify.app/nodejs/moment/")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(m,e)):m(e)},a=t(8804);function c(e){return l.createElement(a.Z,e,l.createElement(o,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2022-10-14-javascript-moment-mdx-b55280a8e00d23eb518e.js.map