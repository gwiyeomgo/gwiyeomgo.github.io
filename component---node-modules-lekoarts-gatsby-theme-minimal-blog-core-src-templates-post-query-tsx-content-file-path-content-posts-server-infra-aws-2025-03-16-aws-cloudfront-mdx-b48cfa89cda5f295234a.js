"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2219],{4824:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.p},default:function(){return a}});var t=l(6540),r=l(8453);function u(e){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li"},(0,r.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"프론트 CloudFront 사용한  모습"),"\n",t.createElement(n.p,null,"사용자가 ",t.createElement(n.code,null,"www. gwiyeom.org"),"를 입력하면 실제로는 CloudFront 도메인`(d123abc.cloudfront.net) 으로 접속"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"   [사용자 브라우저]\n        ↓\n   DNS 요청 (Route53) www.gwiyeom.org\n        ↓\n[CloudFront 배포 도메인] d123abc.cloudfront.net\n        ↓\n캐싱된 정적 파일 or ↓   CloudFront가 S3에서 콘텐츠(정적 리소스)를 가져와 보여주는 구조\n      [S3 버킷]\n\n")),"\n",t.createElement(n.h2,null,"빌드(Build) - 코드를 정적 파일로 컴파일"),"\n",t.createElement(n.p,null,"S3에 정적 리소스를 만드는 것 = 빌드(build)\n",t.createElement(n.code,null,"npm run build")," 등 명령으로 ",t.createElement(n.code,null,"/build")," 또는 ",t.createElement(n.code,null,"/dis"),"t 폴더에 HTML, CSS, JS 등 정적 파일 생성\n정적 파일-> ",t.createElement(n.code,null,"index.html, main.js, style.css")),"\n",t.createElement(n.h2,null,"배포(Deploy) - 정적 파일을 S3에 업로드"),"\n",t.createElement(n.p,null,"그걸 S3에 업로드 행위 = 배포(deploy)"),"\n",t.createElement(n.h1,null,"CloudFront는 AWS의 CDN 서비스"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"CloudFront는 S3업로드된(배포된) 정적파일을 가져와 보여주는 역할을 한다 = CDN 역할을 한다"),"\n"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"CDN = 콘텐츠 전송 네트워크 = 전 세계 서버들이 사용자의 위치와 가까운 서버에서 콘텐츠를 빠르게 전달해주는 시스템"),"\n"),"\n",t.createElement(n.p,null,"React/Vue 같은 SPA 정적 앱, 이미지, JS 등 모두 CDN으로 서빙 가능"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"            사용자 (서울)\n                 ↓\nCloudFront (서울 엣지 로케이션)     (부산 엣지 로케이션)\n                 ↓ 캐시에 없으면\n[            S3 (정적 파일 원본 저장소)           ]\n")),"\n",t.createElement(n.p,null,"CDN = 전국에 있는 편의점"),"\n",t.createElement(n.p,null,"본사(S3)에서 물건을 보내두면 서울 사람은 서울 편의점(엣지)에서 바로 사고\n부산 사람은 부산 편의점(엣지)에서 바로 삼 없으면 본사(S3)에 재고 확인해서 가져옴"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?t.createElement(n,e,t.createElement(u,e)):u(e)},o=l(7292);function a(e){return t.createElement(o.A,e,t.createElement(c,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-infra-aws-2025-03-16-aws-cloudfront-mdx-b48cfa89cda5f295234a.js.map