"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2332],{341:function(e,t,n){n.r(t),n.d(t,{Head:function(){return a.p},default:function(){return i}});var l=n(6540),r=n(8453);function o(e){const t=Object.assign({h3:"h3",p:"p",code:"code",blockquote:"blockquote",ul:"ul",li:"li",a:"a",h1:"h1",pre:"pre",ol:"ol"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"git config"),"\n",l.createElement(t.p,null,"system"),"\n",l.createElement(t.p,null,"global"),"\n",l.createElement(t.p,null,"local"),"\n",l.createElement(t.h3,null,"배경 20221128"),"\n",l.createElement(t.p,null,"블로그 템플릿을 사용해서 블로그를 만들고 있다\n템플릿 업그레이드 후 ",l.createElement(t.code,null,"gh-page")," 로  배포하는 과정에서\n",l.createElement(t.code,null,"Filename too long")," 이라는 에러가 발생했다"),"\n",l.createElement(t.h3,null,"해결"),"\n",l.createElement(t.p,null,"아래 명령어를 goland terminal 에서 실행\n",l.createElement(t.code,null,"git config --system core.longpaths true"),"\n그런데..\n",l.createElement(t.code,null,"error:colud not lock config file ...permission denied")," 에러 발생\n어떤블로그에서 아래와 같이 설명했고"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"리포지토리의 파일과 디렉토리들에 대한 권한이 루트 디렉토리에 종속되어있을 때 발생할 수 있음\nsudo 명령어를 사용한다면\n",l.createElement(t.code,null,"sudo (username) -R .git")," 을 사용해 권한을 부여한다고 한다\nwindow 에서는\nconfig 파일에 직접 찾아가 관리자 권한으로 열고 ",l.createElement(t.code,null,"longpaths = true")," 을 core 명령에 추가했다\n추가후 ",l.createElement(t.code,null,"git config --list")," 추가된 것 확인"),"\n"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"도움받은 블로그\n1.",l.createElement(t.a,{href:"https://coding-groot.tistory.com/97"},"https://coding-groot.tistory.com/97"),"\n2.",l.createElement(t.a,{href:"https://yyyy-oniiii.github.io/posts/Git-03/"},"https://yyyy-oniiii.github.io/posts/Git-03/"),"\n3.",l.createElement(t.a,{href:"https://javacan.tistory.com/entry/window-git-filename-too-long-error"},"https://javacan.tistory.com/entry/window-git-filename-too-long-error")),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email/"},"https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email/"),"\n",l.createElement(t.a,{href:"https://velog.io/@keywookim/We.TIL-%EB%B2%88%EC%99%B8-Git-%EB%8B%A8%EC%B6%95%ED%82%A4-%EC%A0%95%EB%A6%AC"},"https://velog.io/@keywookim/We.TIL-%EB%B2%88%EC%99%B8-Git-%EB%8B%A8%EC%B6%95%ED%82%A4-%EC%A0%95%EB%A6%AC"),"\n",l.createElement(t.a,{href:"https://xtring-dev.tistory.com/entry/Git-Git-Github-Commad-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0"},"https://xtring-dev.tistory.com/entry/Git-Git-Github-Commad-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0")),"\n",l.createElement(t.h1,null,"2022-11-17"),"\n",l.createElement(t.p,null,"goland 버전을 2020 에서 2022로 변경했다\n변경 후 핫픽스가 발생되서\n로컬 master 에서 branch 를 생성해서\norigin/master 로  push 했다"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"PS C:\\react\\admin> `git push origin #123`\nfatal: The current branch #123 has no upstream branch.\nTo push the current branch and set the remote as upstream, use\n\n    git push --set-upstream origin #123\n\nTo have this happen automatically for branches without a tracking\nupstream, see 'push.autoSetupRemote' in 'git help config'.\n\n//upstream : 현재의 브랜치를 업스트림 브랜치에 푸쉬한다\n")),"\n",l.createElement(t.p,null,"위 메세지 처럼 push 실패했다\n찾아보니 처음으로 push를 할 때\ngit config 에 ",l.createElement(t.code,null,"push.autoSetupRemote")," 를 true 로 변경해야했다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"PS C:\\react\\admin> `git config --global --add push.autoSetupRemote true`\nPS C:\\react\\admin> `git push origin #123`\n")),"\n",l.createElement(t.p,null,"goversion 을 올리니\n기존의 동작하는 기능들에 문제가 생겼다"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"ctx.Bind(&verificationInformation);"),"\n"),"\n",l.createElement(t.p,null,"Bind 할 때 struct field에 query 를"),"\n",l.createElement(t.h1,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://blog.aaronroh.org/120"},"https://blog.aaronroh.org/120")),"\n",l.createElement(t.h1,null,"2023 03 17"),"\n",l.createElement(t.p,null,"GIT autocrlf (core.autocrlf = true)"),"\n",l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.p,null,"평소와 같이 기능을 수정하고 commit 을 하려고 시도 했다\n그런데\n",l.createElement(t.code,null,"warning: in the working copy of '', LF will be replaced by CRLF the next time Git touches it"),"\n에러가 발생했고\n찾아보니 줄바꿈 (line ending - 개행문자)로 발생한 문제라고 한다"),"\n",l.createElement(t.h1,null,"LF (line feed)"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Microsoft Windows 에서 줄바꿈"),"\n"),"\n",l.createElement(t.h1,null,"CR+LF (carriage return + line feed)"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"//모든 줄바꿈이 Microsoft Windows 스타일로 설정되어 있도록 보장\ngit config --global core.autocrlf true\n")),"\n",l.createElement(t.h1,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.lesstif.com/gitbook/git-crlf-20776404.html"},"https://www.lesstif.com/gitbook/git-crlf-20776404.html"),"\n",l.createElement(t.a,{href:"https://nochoco-lee.tistory.com/133"},"https://nochoco-lee.tistory.com/133"),"\n",l.createElement(t.a,{href:"https://velog.io/@cgw7976/giruboyGit-LF-will-be-replaced-by-CRLF-the-next-time-Git-touches-it"},"https://velog.io/@cgw7976/giruboyGit-LF-will-be-replaced-by-CRLF-the-next-time-Git-touches-it"),"\n",l.createElement(t.a,{href:"https://dabo-dev.tistory.com/13"},"https://dabo-dev.tistory.com/13")),"\n",l.createElement(t.h1,null,"2022-11-11"),"\n",l.createElement(t.h1,null,"GIT make new branch + contain 'hash'(#)"),"\n",l.createElement(t.h3,null,"배경"),"\n",l.createElement(t.p,null,"업무에서 개발할때\n프로젝트를 gitLab 에 올리고 clone 받아서 pc 에 설치한다\n그후 origin remote 와 fork 한 프로젝트 url 로 개인 remote 저장소를 만든다\n그리고 origin 의 특정 master,dev 등.. branch 에서 새 가지를 뻗어나간다"),"\n",l.createElement(t.p,null,"예) origin/ dev 에서 새 branch 를 생성하는 방법은\n",l.createElement(t.code,null," git checkout -b (새 이슈번호)")," 사용\n새 이슈번호 ex) #123 과 같이 쓴다"),"\n",l.createElement(t.h3,null,"왜..branch 번호에 ",l.createElement(t.code,null,"#")," 붙였지?"),"\n",l.createElement(t.p,null,"commit 메세지를 쓸때 '#1 ...오류 수정 '과 같이 쓸 경우\n#1 이슈번호와 연결해준다"),"\n",l.createElement(t.p,null,"이슈번호 # 을 사용한다면.."),"\n",l.createElement(t.h3,null,'질문  "error: switch "b\' requires a value" =>  에러 발생 왜?'),"\n",l.createElement(t.p,null,"이 경우 아래처럼 \\로 이스케이프하거나 이름을 작은따옴표/큰따옴표로 묶어서 해결"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"git checkout -b \\#1\ngit checkout -b \"#1\"\ngit checkout -b '#1'\n")),"\n",l.createElement(t.h3,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://stackoverflow.com/questions/49665976/why-cant-a-branch-name-contain-the-hash-char-at-the-begining9"},"error: switch \"b' requires a value")),"\n",l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"git remote update"),"\n",l.createElement(t.code,null,"git checkout -t origin/#2"),"\n",l.createElement(t.a,{href:"https://cjh5414.github.io/get-git-remote-branch/"},"https://cjh5414.github.io/get-git-remote-branch/")),"\n",l.createElement(t.h1,null,"커밋에 # 을 주석으로 처리해서 rebase 실패 => 평소 사용하지 않는 ; 를 주석 기호로 변경"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,'git config --global core.commentChar ";"')))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},a=n(7292);function i(e){return l.createElement(a.A,e,l.createElement(c,e))}a.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-04-03-git-config-mdx-cb00305fc9828f935f08.js.map