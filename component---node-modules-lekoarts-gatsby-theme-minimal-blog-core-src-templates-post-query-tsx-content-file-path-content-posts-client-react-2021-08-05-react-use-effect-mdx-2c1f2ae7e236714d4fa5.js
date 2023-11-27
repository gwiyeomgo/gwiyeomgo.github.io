"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[805],{924:function(e,n,t){t.r(n),t.d(n,{Head:function(){return a.F},default:function(){return u}});var l=t(7294),c=t(1151);function o(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",img:"img",ol:"ol",h3:"h3"},(0,c.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.p,null,"react 를 사용해서 프로그래밍을 하면서 console에 나타나는 경고를 모두 제거하기로 계획했다.\n실제로 이전까지는 경고가 나타나는지 몰랐었는데 아래와 같은 경고를 만났다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"React Hook useEffect has a missing dependency: 'load'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"\n  useEffect(() => {\n    load();\n  },[]);\n\n")),"\n",l.createElement(n.p,null,"경고를 없애기 위해서  []를 제거했다.\n그런데 load()가 얼마나 호출되는지 모르겠다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null," useEffect(() => {\n    load();\n  });\n")),"\n",l.createElement(n.p,null,"문제는 해결됬지만 정확하게 useEffect이 어떤 역할을 하는지 어떻게 쓰는 건지 잘 모르겠다.\n지금부터는 useEffect 예제를 통해 사용법을 알아보려고 한다"),"\n",l.createElement(n.h1,null,"useEffect 는 뭐지?"),"\n",l.createElement(n.p,null,"hooks 중에 useEffect"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://ko.reactjs.org/docs/hooks-reference.html#useeffect"},"useEffect")," 에 전달된 함수는 화면에 렌더링이 완료된 후에 수행됩니다."),"\n",l.createElement(n.li,null,"기본적으로 동작은 모든 렌더링이 완료된 후에 수행됩니다만, 어떤 값이 변경되었을 때만 실행되게 할 수도 있습니다."),"\n"),"\n",l.createElement(n.h1,null,"useEffect에 두 번째 인자"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"두 번째 인자로써 []을 전달하는 것이 친숙한 componentDidMount와 componentWillUnmount에 의한 개념과 비슷"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"이 인자는 effect 가 종속되어 있는 값의 배열입니다."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"useEffect(\n  () => {\n    const subscription = props.source.subscribe();\n    return () => {\n      subscription.unsubscribe();\n    };\n  },\n  [props.source],\n);\n\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"props.source 가 변경될 때에만 구독이 재생성될 것입니다"),"\n"),"\n",l.createElement(n.h1,null,"useEffect 안에 빈배열[]은 뭐를 의미하지?"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"effect를 수행하고 (mount를 하거나 unmount 할 때) 그것을 한 번만 실행하고 싶다면 두 번째 인자로 빈 배열([])을 전달할 수 있습니다.\n이를 통해 effect는 React에게 props나 state에서 가져온 어떤 값에도 의존하지 않으므로, 다시 실행할 필요가 전혀 없다는 것을 알려주게 됩니다."),"\n"),"\n",l.createElement(n.h1,null,"Hooks 의 Lifecycle"),"\n",l.createElement(n.img,{src:"https://i.stack.imgur.com/7q1jC.jpg",alt:"이미지"}),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"componentDidMount 처럼 구현"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"useEffect(() => {\n  // Your code here\n}, []);\n")),"\n",l.createElement(n.h3,null,"empty array? ( [] )"),"\n",l.createElement(n.p,null,"Without the second parameter the useEffect hook will be called on every render of the component which can be dangerous."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"useEffect(() => {\n  // Your code here\n});\n")),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"componentWillUnmount"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"}," useEffect(() => {\n    return () => {\n        console.log('componentWillUnmount');\n    };\n   }, []);\n")),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://ko.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks"},"https://ko.reactjs.org/docs/hooks-faq.html#from-classes-to-hooks"),"\n",l.createElement(n.a,{href:"https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies"},"https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies"),"\n",l.createElement(n.a,{href:"https://react.vlpt.us/basic/16-useEffect.html"},"https://react.vlpt.us/basic/16-useEffect.html")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"useEffect 내부에서 정의된 함수는 렌더링과 무관하게 한 번만 생성"),"\n",l.createElement(n.li,null,"함수가 useEffect 내에서 정의되면 이러한 클로저 문제를 방지"),"\n",l.createElement(n.li,null,"콜백은 다른 함수 내에서 호출되는 함수"),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},a=t(8804);function u(e){return l.createElement(a.Z,e,l.createElement(r,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-react-2021-08-05-react-use-effect-mdx-2c1f2ae7e236714d4fa5.js.map