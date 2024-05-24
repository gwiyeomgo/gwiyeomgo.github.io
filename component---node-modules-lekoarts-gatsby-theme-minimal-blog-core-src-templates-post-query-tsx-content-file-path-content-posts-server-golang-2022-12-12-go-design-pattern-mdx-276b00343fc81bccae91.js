"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1757],{3729:function(e,n,t){t.r(n),t.d(n,{Head:function(){return p.F},default:function(){return s}});var r=t(7294),l=t(1151);function a(e,n){return a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},a(e,n)}var c=function(e){var n,t;function l(){return e.apply(this,arguments)||this}t=e,(n=l).prototype=Object.create(t.prototype),n.prototype.constructor=n,a(n,t);var c=l.prototype;return c.componentDidMount=function(){this._updateIframeContent()},c.componentDidUpdate=function(e,n){this._updateIframeContent()},c._defineUrl=function(){var e=this.props,n=e.id,t=e.file;return"https://gist.github.com/"+n+".js"+(t?"?file="+t:"")},c._updateIframeContent=function(){var e=this.props,n=e.id,t=e.file,r=this.iframeNode,l=r.document;r.contentDocument?l=r.contentDocument:r.contentWindow&&(l=r.contentWindow.document);var a='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(t?"gist-"+n+"-"+t:"gist-"+n)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";l.open(),l.writeln(a),l.close()},c.render=function(){var e=this,n=this.props,t=n.id,l=n.file;return r.createElement("iframe",{ref:function(n){e.iframeNode=n},width:"100%",frameBorder:0,id:l?"gist-"+t+"-"+l:"gist-"+t})},l}(r.PureComponent),o=c;var i=function(e){let{id:n,file:t}=e;return r.createElement(o,{id:n,file:t})};function m(e){const n=Object.assign({hr:"hr",ul:"ul",li:"li",p:"p",h3:"h3",blockquote:"blockquote",a:"a",ol:"ol"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(i,{id:"8eedf70a6d3844788ee8bbc200f6a3b8",file:"GangofFourDesignPattern.md"}),"\n",r.createElement(n.hr),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"패턴\r\n많은 사람이 겪은 문제점과 해결 방법을 정리해둔 것\r\n지속적인 관찰을 통해 특정한 패턴을 발견\r\n문제를 해결하는 과정을 일반화 하여 비슷한 부분이 많음\r\n각각의 패턴이 어떤 관심사를 가지고 문제를 해결하려는가 하는 것\r\n패턴의 의도와 목적을 파악하는 것이 중요"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"소프트웨어 공학\r\n소프트웨어적인 문제를 코드로 구현할 때 적용했던 해결 방법을 패턴화하여 정리한 것"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"객체지향\r\n소프트웨어 개발 방법론\r\n재사용 가능한 형태로 코드를 작성\r\n큰 프로젝트 개발과 유지 보수를 보다 쉽게 하기 위해 도입된 개발 방법론\r\n객체 간 관계와 소통 처리 부분"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"설계 원칙 (SOLID)"),"\n"),"\n"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"단일 책임의 원칙 (Single Responsibility Principle, SRP):\r\n상황: 클래스나 모듈은 단일 책임만을 가져야 합니다.\r\n예시: 파일 입출력 클래스는 파일을 읽는 책임만 가지고 있어야 하고, 화면 출력 클래스는 화면에 출력하는 책임만을 가지고 있어야 합니다."),"\n",r.createElement(n.li,null,"개방 폐쇄 원칙 (Open/Closed Principle, OCP):\r\n상황: 기존의 코드를 수정하지 않고 새로운 기능을 추가할 수 있어야 합니다.\r\n예시: 새로운 기능을 추가할 때, 기존의 클래스를 수정하지 않고 상속이나 인터페이스를 통해 새로운 클래스를 만들어 추가하는 방식."),"\n",r.createElement(n.li,null,"리스코프 치환 원칙 (Liskov Substitution Principle, LSP):\r\n상황: 파생 클래스는 기본 클래스로 대체 가능해야 합니다.\r\n예시: 만약 사각형이 도형의 하위 클래스이면, 어디에서든 도형이 사용되는 곳에서도 사각형을 사용할 수 있어야 합니다."),"\n",r.createElement(n.li,null,"인터페이스 분리의 원칙 (Interface Segregation Principle, ISP):\r\n상황: 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 합니다.\r\n예시: 한 인터페이스에 많은 메서드가 정의되어 있을 때, 클라이언트는 자신이 필요로 하는 메서드만 사용할 수 있도록 인터페이스를 분리합니다."),"\n",r.createElement(n.li,null,"의존 관계 역적의 원칙 (Dependency Inversion Principle, DIP):\r\n상황: 고수준 모듈과 저수준 모듈은 추상화에 의존해야 하며, 세부 구현이 아니어야 합니다.\r\n예시: 고수준 모듈이 데이터베이스에 의존하지 않고, 데이터베이스 접근을 추상화한 인터페이스를 통해 저수준 모듈과 의존 관계를 형성하는 것."),"\n"),"\n",r.createElement(n.hr),"\n",r.createElement(n.h3,null,"Factory 메서드(팩토리 메스드 패턴)"),"\n",r.createElement(n.p,null,"개체에 채워야 할 속성이 많은 경우\r\n즉 개체 생성이 복잡해질 때 사용하는 곳에서 사용"),"\n",r.createElement(n.p,null,"확장에 열려있고 변경에 닫혀있는 객체 지향 원칙 =>\r\n기존 코드를 변경하지 않고 새기능을 얼마든지 확장 가능"),"\n",r.createElement(n.p,null,"기존 인스턴스 만드는 로직을 건드리지 않고 새 인스턴스를 다른 방법으로 확장 가능\r\n루즐리 커플드 (느슨한 결합) create 와 facotry 관계를 느슨하게\r\n코드는 간결해지고 기존 코드가 복잡해 지지 않는다\r\n하지만\r\n단점은 각자의 역할을 나눠서 클레스가 늘어난다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"How can we implement a Factory pattern?  ",r.createElement(n.a,{href:"https://devcharmander.medium.com/design-patterns-in-golang-factory-6164c4e0b43f"},"출처")),"\n"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Factory function"),"\n",r.createElement(n.li,null,"Interface Factory 추상화된 팩토리를 만든다"),"\n",r.createElement(n.li,null,"Factory Generator","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Factory methods"),"\n",r.createElement(n.li,null,"Factory functions"),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://devcharmander.medium.com/design-pattern-in-golang-prototype-e864522e4eeb"},"Prototype Factory")),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://www.sohamkamani.com/golang/2018-06-20-golang-factory-patterns/#multiple-implementations"},"https://www.sohamkamani.com/golang/2018-06-20-golang-factory-patterns/#multiple-implementations"),"\r\n",r.createElement(n.a,{href:"https://www.udemy.com/course/design-patterns-go/"},"https://www.udemy.com/course/design-patterns-go/"),"\r\n",r.createElement(n.a,{href:"https://haluan.medium.com/go-factory-design-pattern-e5301e0f3283"},"https://haluan.medium.com/go-factory-design-pattern-e5301e0f3283")),"\n",r.createElement(n.hr),"\n",r.createElement(n.h3,null,"Singleton 패턴"),"\n",r.createElement(n.p,null,"Singleton 을 사용한다면\r\n특정 변수를 어떻게 초기화 할 지 정할 수 있다"),"\n",r.createElement(n.p,null,"목적 : 어떠한 클레스의 인스턴스를 오직 한개만 만들어 글로벌하게 접근할 수 있도록 하는 방법\r\n특정 설정을 할 때 딱 하나의 인스턴스 에서만 할 수 있도록 해야 한다"),"\n",r.createElement(n.p,null,"new 를 사용해서 여러개의 인스턴스를 생성했을 때\r\n만든 인스턴스들은 같은 인스턴스가 아닙니다\r\nnew 를 사용하지 않고 클레스 내부에서 인스턴스를 1번만 생성하게 하고 그것을 클레스 외부에서 사용하도록 합니다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"프로세스(process):단순히 실행 중인 프로그램(program)"),"\n",r.createElement(n.li,null,"스레드(thread):프로세스(process) 내에서 실제로 작업을 수행하는 주체,모든 프로세스에는 한 개 이상의 스레드가 존재"),"\n",r.createElement(n.li,null,"멀티스레드 프로세스(multi-threaded process) :  두 개 이상의 스레드를 가지는 프로세스"),"\n"),"\n",r.createElement(n.h3,null,"추상 팩토리 메서드"),"\n",r.createElement(n.h3,null,"빌더패턴"),"\n",r.createElement(n.p,null,"인스턴스를 만들 때 그 다양한 인스턴스를 동일한 프로세스를 통해서 만들 수 있게 해주는 패턴"),"\n",r.createElement(n.h3,null,"트랜잭션 스크립트 패턴 (Transaction Script Pattern)"),"\n",r.createElement(n.p,null,"비즈니스로직울 서비스에넣는\r\n트랜젝션스크립트 패턴\r\n장점은 만들기 쉽다 직괸적\r\n단점은 업무에 복잡도가 많아지면 테스트하기 아렵거 유지보수 힘듬\r\n코드중복 발생 (서비스 복잡)\r\n즉 단순한업무에 적합\r\n비즈니스로직은 엔터테에 넣음"),"\n",r.createElement(n.h3,null,"domain model Pattern"),"\n",r.createElement(n.p,null,"인캡슐레이션 가능\r\n장점 중복이 사라지고\r\n서비스가 단순해 진다\r\n단점 엔터티 복잡"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://javacan.tistory.com/entry/94"},"참조"),"\r\n",r.createElement(n.a,{href:"https:/.naver.com/PostView.nhn?blogId=good_ray&logNo=222267722516"},"참조1")),"\n",r.createElement(n.h3,null,"서킷 브레이커 패턴(Circuit Breaker Pattern)"),"\n",r.createElement(n.p,null,"서킷: 서비스와 상호 교류하는 함수\r\n브레이커 : 서킷과 동일한 함수 시그니처를 갖고 있는 클로저"),"\n",r.createElement(n.p,null,"서킷을 브레이커가 감싼 특화된 어댑터 패턴?\r\n브레이커는 내부적으로 서킷이 반환한 에러를 추적\r\n서킷이 사전에 정의된 기준을 넘어서는 수준의 에러 응답을 하면 브레이커는 요청을 차단하고\r\n상태를 open 으로 전환"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"백오프로직 :"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://mangkyu.tistory.com/261"},"https://mangkyu.tistory.com/261")),"\n",r.createElement(n.h3,null,"디바운스 vs 쓰로틀링"),"\n",r.createElement(n.p,null,"가령 부하가 높을 때 일시적으로 요청을 거부해 스로틀링을 하거나"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://jake-seo-dev.tistory.com/651#Debounce%25---%EB%25--%25--%EB%25B-%25--%EC%25-A%25B-%EC%25-A%25A--%25--%EC%25--%25--%25--Throttling%25---%EC%25--%25B-%EB%25A-%25-C%ED%25-B%25--%EB%25A-%25---%25--%EC%25-D%25B-%EB%25-E%25--%25-F"},"https://jake-seo-dev.tistory.com/651#Debounce%---%EB%--%--%EB%B-%--%EC%-A%B-%EC%-A%A--%--%EC%--%--%--Throttling%---%EC%--%B-%EB%A-%-C%ED%-B%--%EB%A-%---%--%EC%-D%B-%EB%-E%--%-F")))}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(m,e)):m(e)},p=t(8804);function s(e){return r.createElement(p.Z,e,r.createElement(u,e))}p.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-12-12-go-design-pattern-mdx-276b00343fc81bccae91.js.map