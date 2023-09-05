"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6253],{6354:function(e,r,t){t.r(r),t.d(r,{Head:function(){return l.F},default:function(){return m}});var n=t(7294),c=t(1151);function i(e){const r=Object.assign({h1:"h1",p:"p",h4:"h4",pre:"pre",code:"code",a:"a"},(0,c.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(r.h1,null,"git cherry-pick"),"\n",n.createElement(r.p,null,"커밋을 선택적으로 브랜치에 적용시킬 때 사용한다."),"\n",n.createElement(r.h1,null,"배경"),"\n",n.createElement(r.p,null,"우리는 dev(개발계),staging(계발계2),master(운영) 브런치가 있다\r\n배포날 master 에 급하게 고쳐야할 이슈가 생김\r\nmaster 에서 a branch 생성하고 master 로 머지함\r\nmaster 에 머지했던 commit 을 dev 에 추가시켜야함"),"\n",n.createElement(r.h4,null,"해결 방법"),"\n",n.createElement(r.p,null,"로컬에서 command 로 직접 cheery pick 을 해야 한다고 함"),"\n",n.createElement(r.pre,null,n.createElement(r.code,null,"(master)    1 - 2  - hoxfix-2\r\n                 \\   /(merge)\r\n                hoxfix-2\r\n\r\nhoxfix-2 의 commit 해쉬 복사 ex) a123bced22\r\n\r\n(dev)  1 - 2 - 3  -  dev-cherry-3\r\n                 \\    /(merge)\r\n            dev-cherry-3\r\n            git cherry-pick a123bced22\n")),"\n",n.createElement(r.pre,null,n.createElement(r.code,null,"master 브랜치에서\r\ngit pull origin master\r\n\r\ngit checkout dev\r\ngit pull origin dev\r\ngit checkout -b dev-cherry-3\r\n\r\ngit checkout master\r\ngit log --pretty=oneline\r\n\r\n>> (체리픽 할 코드) 복사\r\n\r\ngit checkout dev-cherry-3\r\ngit cherry-pick (체리픽 할 코드)\r\n\r\ngit push origin dev-cherry-3\r\n\r\n이후 mr을 staging으로\n")),"\n",n.createElement(r.h1,null,"방법 2 (cherry-pick a button) gitLab 자체 cherry-pick a button 있음"),"\n",n.createElement(r.p,null,"git 의 origin 의 dev 브렌치와 같은 환경을 로컬에 받음\r\n",n.createElement(r.code,null,"git checkout -t origin/dev"),"\r\n",n.createElement(r.code,null,"git remote update")),"\n",n.createElement(r.p,null,"그 후에 dev 에서 branch 를 새로 생성 (#1)\r\n작업\r\n작업 후 commit\r\ngit push origin #1\r\norigin 의 #1 을 origin 의 dev 로 merge request\r\nmerge 이후 gitLab의 경우 cherry-pick 버튼 클릭\r\n해당 commit 만 staging이나 master로 cherry-pick 가능"),"\n",n.createElement(r.h1,null,"참고"),"\n",n.createElement(r.p,null,n.createElement(r.a,{href:"https://docs.gitlab.com/ee/user/project/merge_requests/cherry_pick_changes.html"},"gitLab docs"),"\r\n",n.createElement(r.a,{href:"https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/"},"https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/"),"\r\n",n.createElement(r.a,{href:"https://cjh5414.github.io/get-git-remote-branch/"},"https://cjh5414.github.io/get-git-remote-branch/")))}var a=function(e){void 0===e&&(e={});const{wrapper:r}=Object.assign({},(0,c.ah)(),e.components);return r?n.createElement(r,e,n.createElement(i,e)):i(e)},l=t(8804);function m(e){return n.createElement(l.Z,e,n.createElement(a,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-04-11-git-cherry-pick-mdx-f814fe9110bd30d2ace2.js.map