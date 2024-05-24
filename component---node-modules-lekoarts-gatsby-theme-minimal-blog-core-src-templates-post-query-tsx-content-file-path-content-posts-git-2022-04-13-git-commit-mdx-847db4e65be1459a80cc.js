"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9258],{3234:function(e,t,n){n.r(t),n.d(t,{Head:function(){return a.F},default:function(){return o}});var l=n(7294),c=n(1151);function r(e){const t=Object.assign({h3:"h3",p:"p",code:"code",ul:"ul",li:"li",blockquote:"blockquote",h1:"h1",a:"a"},(0,c.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"평소 사용 git"),"\n",l.createElement(t.p,null,"업무에서 개발할때\r\n프로젝트를 gitLab 에 올리고 clone 받아서 pc 에 설치한다\r\n그후 origin remote 와 fork 한 프로젝트 url 로 개인 remote 저장소를 만든다\r\n그리고 origin 의 특정 master,dev 등.. branch 에서 새 가지를 뻗어나간다"),"\n",l.createElement(t.p,null,"branch를 만들때 #을 붙였는데 이는 gitLab 에서 이슈와 commit 을 연결하기 위해서라고 생각한다"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"git checkout -b #1")),"\n",l.createElement(t.p,null,"branch : #1\r\ncommit- message : #1 오류 수정"),"\n",l.createElement(t.p,null,"쓴 경우"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"git push origin #1"),"하고 머지 리퀘스트를 생성하면\r\ngitLab,git 사이트에서 #1 이라는 이슈를 찾아서 #1 클릭시 이슈 내용을 확인할 수 있다"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"git branch 명을 변경하는 방법\r\n",l.createElement(t.code,null,"giit checkout #1")," //바꾸려는 브렌치로 바꾸고\r\n",l.createElement(t.code,null,"giit branch -m #2")," // 브렌치명 #1 => #2 로 변경됨"),"\n"),"\n",l.createElement(t.h3,null,l.createElement(t.code,null,"#"),"을 commit message 에 쓰기 위해서는..."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"(#)means a comment is starting (atleast in a linux shell)"),"\n"),"\n",l.createElement(t.p,null,"리눅스 쉘에서느 #은 주석이 시작되고 있음을 의미하기 떄문에\r\n주석 기능하는 문자를\r\n",l.createElement(t.code,null,"git config --global core.commentChar ';'")," 명령어로 변경해주면 commit message 에 # 을 쓸 수 있다\r\n",l.createElement(t.code,null,"git config --list")," 로 설정 내용 볼 수 있다"),"\n",l.createElement(t.h1,null,"왜 1 commit 을 해야하지?"),"\n",l.createElement(t.p,null,"그리고 업무할때\r\n하나의 이슈에 1개의 commit 을 만든다\r\n한번 작업할 때 여러번 commit 한 경우 1개로 만든다\r\n=> 이또한 하나의 이슈와 연결해서 깔끔하게 1개 커밋 내용으로 동료와 소통하기 위해서라고 생각한다."),"\n",l.createElement(t.h1,null,"좋은 commit message?"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://meetup.toast.com/posts/106"},"https://meetup.toast.com/posts/106")),"\n",l.createElement(t.h1,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.popit.kr/tip-git-commit-%EB%A9%94%EC%8B%9C%EC%A7%80%EC%97%90-%EC%9D%B4%EC%8A%88%EB%B2%88%ED%98%B8-%ED%98%95%ED%83%9C%EB%A1%9C-%EC%93%B0%EA%B8%B0/"},"git commit 메시지에 #이슈번호 형태로 쓰기")))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},a=n(8804);function o(e){return l.createElement(a.Z,e,l.createElement(m,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-04-13-git-commit-mdx-847db4e65be1459a80cc.js.map