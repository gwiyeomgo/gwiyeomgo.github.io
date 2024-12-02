"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2432],{6776:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return i}});var a=t(7294),l=t(1151);function r(e){const n=Object.assign({ol:"ol",li:"li",a:"a",ul:"ul",p:"p",pre:"pre",code:"code",h1:"h1",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.ol,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://auth.ncloud.com/login"},"네이버 클라우드 플랫폼"),"에서 클라이언트 ID\n회원가입 + MY_NAVERMAPS_CLIENT_ID 발급"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"웹으로 선택하고 생성함 (무료)"),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"받은 MY_NAVERMAPS_CLIENT_ID 값을 index.html 에 script 부분에 추가시 적용"),"\n"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,'   <script\n      type="text/javascript"\n      src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId={MY_NAVERMAPS_CLIENT_ID}"\n    ><\/script>\n')),"\n",a.createElement(n.h1,null,"코드"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"import { Container as MapDiv, NaverMap, Marker, useNavermaps} from 'react-naver-maps';\nimport pinIcon from '../assets/location-pin.png';\n\nfunction Test() {\n  const navermaps = useNavermaps()\n\n    return  (<MapDiv\n                style={{\n                  width: '100%',\n                  height: '350px'\n                }}\n              >\n                <NaverMap\n                  defaultCenter={new navermaps.LatLng(위도,경도)}\n                  defaultZoom={16}>\n                  <Marker\n                  position={new navermaps.LatLng(위도,경도)}\n                  icon={\n                    {\n                      url : pinIcon,\n                      size : new navermaps.Size(64,64)\n                    }\n                  }/>\n                </NaverMap>\n              </MapDiv>)\n\n}\n\n")),"\n",a.createElement(n.p,null,"위도 경도 값은 구글에서 사이트를 찾아서 검색했다\n",a.createElement(n.a,{href:"https://www.findlatlng.org/#google_vignette"},"https://www.findlatlng.org/#google_vignette")),"\n",a.createElement(n.h3,null,"참고"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://zeakd.github.io/react-naver-maps/guides/quickstart/"},"https://zeakd.github.io/react-naver-maps/guides/quickstart/"),"\n",a.createElement(n.a,{href:"https://velog.io/@cogito/%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%A7%80%EB%8F%84-API-1%ED%8E%B8-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B8%B0"},"https://velog.io/@cogito/%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%A7%80%EB%8F%84-API-1%ED%8E%B8-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B8%B0")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},o=t(8804);function i(e){return a.createElement(o.Z,e,a.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2024-05-22-react-naver-maps-mdx-e3e2369f2614e5c51bfa.js.map