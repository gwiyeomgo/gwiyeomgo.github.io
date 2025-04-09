"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9087],{2647:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.p},default:function(){return o}});var l=t(6540),r=t(8453);function a(e){const n=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",ul:"ul",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"관리자는 어드민 사용자의 역할 매칭 요청건수를 확인하고 승인/반려 합니다.\n그런데 매번 확인하러 목록을 보는 것은 불편합니다.\n관리자가 바로 요청건이 추가됨을 알 수 있도록\n어드민 상단에 아바타에 배찌를 추가하기로 했습니다."),"\n",l.createElement(n.h1,null,"작업내용"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"제출상태인 요청건수를 조회하는 API"),"\n",l.createElement(n.li,null,"배찌","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"새로고침하면 데이터 조회해서 화면에 반영"),"\n",l.createElement(n.li,null,"30분마다 주기적으로 데이터 조회해서 화면에 반영"),"\n"),"\n"),"\n"),"\n",l.createElement(n.h1,null,"사용"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://rapidapi.com/guides/api-requests-intervals"},"How to send API requests with intervals using setInterval")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/71172632/react-setinterval-and-usestate"},"react-setinterval-and-usestate")),"\n"),"\n",l.createElement(n.h1,null,l.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/API/setInterval"},"setinterval")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"intervalId :타이머를 식별하는 0이 아닌 숫자 값"),"\n",l.createElement(n.li,null,"setinterval(() => ",", HALF_AN_HOUR) : HALF_AN_HOUR 마다 () => "," 실행"),"\n",l.createElement(n.li,null,"clearInterval : intervalId 로 interval을 취소"),"\n"),"\n",l.createElement(n.h1,null,"사용"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"카운트다운에서 1초마다 실행"),"\n",l.createElement(n.li,null,"배찌 숫자 30분마다 조회"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'import React, {useEffect, useState} from "react";\nimport {Badge, Avatar} from \'antd\';\nimport {MatchingService} from "./matching.service";\nimport {UserOutlined} from "@ant-design/icons";\nimport {MemberContext} from "../../../auth/member.context";\nimport {SUBMITTED_STATUS} from "./function";\n\nlet intervalId = null;\nconst HALF_AN_HOUR = 1800000;\n\nconst RequestCount = () => {\n    const [count, setCount] = useState(0);\n    useEffect(() => {\n        if (intervalId) {\n            clearInterval(intervalId);\n            intervalId = null;\n        }\n        let params = {status: SUBMITTED_STATUS}\n        MatchingService.getRequestCount(params).then(response => {\n            setCount(response.data.totalCount);\n        });\n\n        intervalId = setInterval(() => {\n            MatchingService.getRequestCount(params).then(response => {\n                setCount(response.data.totalCount);\n            });\n        }, HALF_AN_HOUR);\n        return function cleanup() {\n            if (intervalId) {\n                clearInterval(intervalId);\n                intervalId = null;\n            }\n        };\n    }, []);\n\n    return (\n        <Badge count={count}>\n            <Avatar icon={<UserOutlined/>} src={MemberContext.memberInformation.picture}/>\n        </Badge>\n    )\n};\n\n\nexport default RequestCount;\n\n')),"\n",l.createElement(n.h2,null,"20250409"),"\n",l.createElement(n.p,null,"(2025. 4. 9. 오후 2:47:57)\n(2025. 4. 9. 오후 3:08:53) 20분 지나도 발생 안함 + 새로고침"),"\n",l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"브라우저에서 다른 탭으로 이동한 상태로 15분을 기다려도\nAppVersion 컴포넌트가 버전 체크를 하지 않아 알림이 뜨지 않음."),"\n",l.createElement(n.h1,null,"분석"),"\n",l.createElement(n.p,null,"AppVersion 코드는 setInterval 을 사용하는데 탭이 백그라운드일 땐 setInterval 자체가 지연되거나 완전히 멈춘다고 합니다\n즉 다른 탭을 갔다가 나눔 어드민 화면으로  다시 돌아온 시점부터 15분 후에야 버전 확인 API호출되어"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"브라우저 탭의 백그라운드 = 사용자가 다른 탭을 보고 있음"),"\n",l.createElement(n.li,null,"브라우저 탭 포그라운드 = 즉 사용자가 보고 있는 탭"),"\n"),"\n",l.createElement(n.h1,null,"개선"),"\n",l.createElement(n.p,null,"브라우저를 다시 클릭하거나 탭을 전환했을 때\n탭이 15분 이상 열려 있었다면 즉시 버전 체크 API를 호출하도록 개선한다"),"\n",l.createElement(n.h1,null,"완료 기준"),"\n",l.createElement(n.p,null,"브라우저를 다시 클릭하거나 탭을 전환했을 때 탭이 15분이상 열려 있다면 버전 확인 API호출 한다"))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=t(7292);function o(e){return l.createElement(c.A,e,l.createElement(u,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2023-01-20-javascript-set-interval-mdx-837aa8302cc09f9eb728.js.map