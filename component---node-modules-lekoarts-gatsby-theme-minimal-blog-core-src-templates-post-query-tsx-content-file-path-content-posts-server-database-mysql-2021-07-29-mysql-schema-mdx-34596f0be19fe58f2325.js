"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1463],{6185:function(e,l,n){n.r(l),n.d(l,{Head:function(){return E.F},default:function(){return m}});var t=n(7294),c=n(1151);function r(e){const l=Object.assign({h3:"h3",p:"p",a:"a",blockquote:"blockquote",code:"code",ol:"ol",li:"li",pre:"pre"},(0,c.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(l.h3,null,"배경"),"\n",t.createElement(l.p,null,"최근 스키마가 무엇인지 질문을 받았다.\r\n당연히 ",t.createElement(l.a,{href:"https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%8A%A4%ED%82%A4%EB%A7%88"},"스키마"),"\r\n검색 했고 검색한 내용을 공유했다.\r\n그리고 내가 쓴 글을 비난받았다."),"\n",t.createElement(l.blockquote,null,"\n",t.createElement(l.p,null,"당장 쓸모가 없는 내용을 암기하는 것이 공부라고 생각할 수 있다.\r\n학교에서 그렇게 가르쳤으니\r\n하지만, 당장 쓸모가 없는 많은 내용을 검색해서 여기 옮기면 어떤 가치가 있을까?"),"\n"),"\n",t.createElement(l.p,null,"정말 이런 말을 듣게되다니 너무 운이 좋은거 같다."),"\n",t.createElement(l.p,null,"그렇다면 스키마를 검색했을때 ",t.createElement(l.code,null,"당장 실무에서 쓸 수 있는 정보"),"는 무엇일까?"),"\n",t.createElement(l.h3,null,"힌트속에 핵심어가 있었다"),"\n",t.createElement(l.p,null,"평소 개념으로만 학습했던 글쓴이는 부끄럽게도 아무거도 할 수 없었다."),"\n",t.createElement(l.p,null,"결국 계속적으로 시니어님 힌트를 듣고 힌트를 듣고\r\n",t.createElement(l.code,null,"내가 작성하는 코드"),"에서 ",t.createElement(l.code,null,"스키마"),"와 관련된 부분을 찾았다."),"\n",t.createElement(l.p,null,"[답에 근접하기 위한 힌트 목록]"),"\n",t.createElement(l.ol,null,"\n",t.createElement(l.li,null,t.createElement(l.code,null,"내가 작성하는 코드"),"에서",t.createElement(l.code,null,"DB와 연결하는 코드(config)"),"를 확인해라!"),"\n",t.createElement(l.li,null,"코드에서 ",t.createElement(l.code,null,"Connection"),"은 무엇인가요?"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"show databases;"),"와 그 결과와 ",t.createElement(l.code,null,"Schema"),"무슨 관계 ?"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"show tables;"),"와 ",t.createElement(l.code,null,"Schema"),"무슨 관계 ?"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"데이터베이스"),"라는 것을 하나의 큰 덩어리로만 보면 ",t.createElement(l.code,null,"Schema"),"나 ",t.createElement(l.code,null,"인스턴스")," 같은 말이 왜 필요할까요?"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"시스템"),"과 ",t.createElement(l.code,null,"데이터베이스")," 관계가 1:1 이면 ",t.createElement(l.code,null,"외부 스키마"),"라는 개념은 필요가 없는 것 아닐까요?"),"\n"),"\n",t.createElement(l.h3,null,"내가 작성하는 코드에서 DB와 연결"),"\n",t.createElement(l.h3,null,"DBMS(mysql)"),"\n",t.createElement(l.p,null,t.createElement(l.code,null,"mysql")," 우리가 사용하는 ",t.createElement(l.code,null,"DBMS")," 입니다."),"\n",t.createElement(l.h3,null,"DB인스턴스"),"\n",t.createElement(l.p,null,t.createElement(l.code,null,"DB인스턴스"),"는 ",t.createElement(l.code,null,"스키마의 집합")," 이다."),"\n",t.createElement(l.h3,null,"Database"),"\n",t.createElement(l.p,null,t.createElement(l.code,null,"mysql"),"의 ",t.createElement(l.code,null,"스키마"),"는 ",t.createElement(l.code,null,"데이터베이스"),"와 동의어이다."),"\n",t.createElement(l.h3,null,"schema"),"\n",t.createElement(l.p,null,"안에서 ",t.createElement(l.code,null,"schema"),"와 ",t.createElement(l.code,null,"table")," 이 어떻게 존재하는지 검색\r\n",t.createElement(l.code,null,"스키마"),"는 ",t.createElement(l.code,null,"테이블의 집합")," 이다."),"\n",t.createElement(l.h3,null,"A 스키마안의 B table 에 id 컬럼이 존재하는 지 궁금하다"),"\n",t.createElement(l.pre,null,t.createElement(l.code,null,"SELECT count(*)\r\nFROM information_schema.COLUMNS\r\nWHERE\r\n    TABLE_SCHEMA = 'A'\r\nAND TABLE_NAME = 'B'\r\nAND COLUMN_NAME = 'id';\n")))}var a=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,c.ah)(),e.components);return l?t.createElement(l,e,t.createElement(r,e)):r(e)},E=n(8804);function m(e){return t.createElement(E.Z,e,t.createElement(a,e))}E.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2021-07-29-mysql-schema-mdx-34596f0be19fe58f2325.js.map