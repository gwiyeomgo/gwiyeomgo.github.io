"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1149],{7591:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return i}});var a=t(7294),l=t(1151);function r(e){const n=Object.assign({p:"p",code:"code",h1:"h1",pre:"pre",ol:"ol",li:"li",a:"a",span:"span"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"키워드 : ",a.createElement(n.code,null,"querystring,qs,null")),"\n",a.createElement(n.h1,null,"문제"),"\n",a.createElement(n.p,null,'데이터를 조회할때 조건 데이터를 querystring 을 통해 서버로 전달합니다.\r\n만약 전달할 객체가 의 속성값이 ""일 경우\r\nex)',a.createElement(n.code,null,"{status:''}"),"\r\n아래 형태로 서버쪽에 전달되면서 status 가 ''인 경우를 조회했기 때문에 문제가 발생했습니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"http://localhost:7000/api/admin/donations?page=1&pageSize=10&donationId=&status=\n")),"\n",a.createElement(n.h1,null,"해결방법"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://www.npmjs.com/package/qs"},"npm의 모듈qs"),"의 ",a.createElement(n.code,null,"skipNull:true")," 옵션을 사용했습니다."),"\n"),"\n",a.createElement(n.p,null,"모듈qs는 querystring 을 ",a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},"parse"),"하거나 ",a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},"stringfy")," 합니다.\r\nstringfy하는 과정에서 null을 skip하도록 옵션을 준다면 문제는 해결됩니다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'const queryString = qs.stringify( param,{\r\n    arrayFormat:"repeat",\r\n    skipNulls:true,\r\n});\n')),"\n",a.createElement(n.p,null,"store-donation-admin 의 FetchContext 코드에서 확인하실 수 있습니다."),"\n",a.createElement(n.ol,{start:"2"},"\n",a.createElement(n.li,null,"위 옵션을 사용하기 위해 status의 기본값을 null 로 처리 해줍니다"),"\n"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 31.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR42j3QW07EMAxA0e6GNrYTO0/n1aYMGiGx//0gRsD9Pl93C0LC1gCYV/CbIWtDKj5mzzZ4C4jmT/yrDRF776lkZhHx7hUiEFGIyYdoDKhqUWXnvLB9ASICYzbnU5tXnauMFdtysVifiYOLNd9f6fy0krXPNlYuU9sVdFhJJIk4buik1dh7z21qH1Erh0xOrE9pfoR+I4ecwxi19KnjKrVJLJYDOtnA+lrT+z31XO2q2lXnWqunonE+43ggxxDD4+79uus629Q6r2udqmnb3/aWSZP7GYEH4EFEwmAJHHtmOfYjCkxlRADcAQ9EFEcWj2+Jp0fWrpxmKwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img.png"\n        title=""\n        src="/static/e94fd0a8d7b82be6dc8d3c8dad309ba0/7abe2/qs.png"\n        srcset="/static/e94fd0a8d7b82be6dc8d3c8dad309ba0/5243c/qs.png 240w,\n/static/e94fd0a8d7b82be6dc8d3c8dad309ba0/ab158/qs.png 480w,\n/static/e94fd0a8d7b82be6dc8d3c8dad309ba0/7abe2/qs.png 900w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.h1,null,"기관쪽 코드에서 적용했던 예시??!"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},c=t(8804);function i(e){return a.createElement(c.Z,e,a.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2021-08-05-javascript-qs-mdx-e4e4109303a256981b97.js.map