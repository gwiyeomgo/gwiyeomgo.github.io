"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1212],{1105:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.F},default:function(){return u}});var l=t(7294),r=t(1151);function o(e){const n=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",blockquote:"blockquote",a:"a",ol:"ol",li:"li"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"코드를 main에 잘 머지시키고 젠킨스에서 배포버튼을 클릭했다.\r\n그런데...\r\n배포 실패했다.\r\n그래서 consle 에 메세지를 확인했다.\r\n에러는 2개이다.\r\n",l.createElement(n.code,null,"에러1 =>해결방법 찾아보니  https://satisfactoryplace.tistory.com/251")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-11:21:58",ERROR:!0,Couldn:!0,t:!0,find:!0,any:!0,revision:!0,to:!0,build:!0,Verify:!0,the:!0,repository:!0,and:!0,branch:!0,configuration:!0,htmlFor:!0,this:!0,job:!0},"11:21:58 Publish artifacts to S3 Bucket Build is still running\r\n11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy\r\n11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"에러2 => 해결방법 찾아보니 https://huskdoll.tistory.com/484")),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-11:21:58",ERROR:!0,Couldn:!0,t:!0,find:!0,any:!0,revision:!0,to:!0,build:!0,Verify:!0,the:!0,repository:!0,and:!0,branch:!0,configuration:!0,htmlFor:!0,this:!0,job:!0},"11:21:58 Publish artifacts to S3 Bucket Build is still running\r\n11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy\r\n11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed\n")),"\n",l.createElement(n.p,null,"둘다 devops 를 담당하는 동료분께 요청드렸고\r\n젠킨스 설정을 변경하셨다고 한다."),"\n",l.createElement(n.p,null,"개발은 끝냈는데 배포 못하니까 답답하더라..\r\n이참에 젠킨스에 관해서 공부하고 기록하려고 한다."),"\n",l.createElement(n.h3,null,"젠킨스"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Software distribution is the process of delivering software to the end user."),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"빌드(Build), 테스트, 그리고 배포(deployment) 도구 등 체인 전체를 통합할 수 있는 방법을 제공")),"\n",l.createElement(n.p,null,"cl?CI 지속적인 통합(Continuous Integration) 서버"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://jw910911.tistory.com/81"},"https://jw910911.tistory.com/81")),"\n",l.createElement(n.h3,null,"20220411"),"\n",l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"개발자가 사용할 dev 서버에 배포한다."),"\n",l.createElement(n.p,null,"사용자 페이지\r\n어드민 페이지"),"\n",l.createElement(n.h3,null,"작업 목표"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"사용자 페이지\r\n(프론트_프로젝트) 레포지토리에 dev 브랜치 따기\r\njenkins와 dev 브랜치 연결\r\njenkins에서 새로운 job 생성하기\r\njob 이름 - (프론트_프로젝트)-dev\r\njenkins 셋팅하기\r\n(프론트_프로젝트)-test job 설정 참고\r\ns3 버킷 만들기\r\ncloudFront과 s3 버킷 연결하기\r\nRoute53과 cloudFront 연결하기\r\njenkins 빌드 후 조치 설정\r\ncloudFront ID 연결하기\r\n배포될 코드 설정 수정하기\r\nfront 배포- (프론트_프로젝트) 코드 수정하기\r\n젠킨스 빌드 버튼 누르기\r\nsuccess가 뜨는지 확인\r\ndev url로 들어가서 제대로 페이지가 나오는지 확인\r\n확인 필요\r\n이미 s3에 사용하려 했던 이름의 버킷이 존재한다.\r\n-> 비어 있으므로 그대로 사용해도 되는지 확인해볼 것\r\nimage.png"),"\n"),"\n",l.createElement(n.p,null,"위에 s3 버킷은 cloudFront 설정도 적용이 되어 있다.\r\nimage.png"),"\n",l.createElement(n.p,null,"Route53에 이미 사용하려 했던 레코드(url)이 존재한다.\r\nimage.png\r\nimage.png\r\n=> S3는 객체가 비어 있으므로 그대로 사용하는 것으로 결정됨, CloudFront와 Route53은 기존 것을 지우고 새로 만들어서 연결함"),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"어드민 페이지\r\n(어드민_프로젝트) 레포지토리에 dev 브랜치 따기\r\njenkins와 dev 브랜치 연결\r\njenkins에서 새로운 job 생성하기\r\njob 이름 - (어드민_프로젝트)-dev\r\njenkins 셋팅하기\r\n(어드민_프로젝트)-test job 설정 참고\r\ns3 버킷 만들기\r\ncloudFront과 s3 버킷 연결하기\r\nRoute53과 cloudFront 연결하기\r\n배포될 코드 config, package.json 파일 수정하기\r\njenkins 빌드 후 조치 설정\r\ncloudFront ID 연결하기\r\ns3에 소스 코드 붓기\r\nurl에 접속해서 확인하기"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},i=t(8804);function u(e){return l.createElement(i.Z,e,l.createElement(c,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-infra-2021-08-05-infra-jenkins-build-mdx-ab05ca7cf6f5522400c5.js.map