
## Forwarding Refs (참조 전달)

HTML 에서 id를 사용해서 DOM 요소에 이름을 추가합니다. 
`<div id ="test">` 처럼 div 의 스타일을 지정하거나, 자바스크립트에서 DOM 요소에 접근하여 작업을 할 수 있다.

보통 react 는 state 를 사용하여 구성 요소를 다시 렌더링하는데 
 `DOM 을 직접 선택해 작업` 을 해야하는 상황이 있을때 ref 를 사용합니다.
 
 작업을 하면서 사용해본 경험은
 컴포넌트가 렌더링될 때 텍스트 상자에 자동 초점을 맞출때 사용
 
 그러나...
 과거 클래스 기반에 컴포넌트를 작업할때 주로 사용했고 Hooks 방식에는 사용할 필요가 없어졌다
 [react 공식 문서에는 ](https://ko.reactjs.org/docs/refs-and-the-dom.html) 
 Ref 를 사용해야 할 때와 Ref 를 남용하지 말라는 내용이 있다.
  
  * Ref 를 사용해야 할 때
    * 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
    * 애니메이션을 직접적으로 실행시킬 때.
    * 서드 파티 DOM 라이브러리를 React 와 같이 사용할 때.
  * Ref 를 남용하지 마세요


### 1. ref 는 DOM 에 직접 전달

class 컴포넌트는 `createRef` 를 통해 ref 생성
함수형 컴포넌트는  `useRef` 사용
> 만약 함수형 컴포넌트에서 `createRef`는 사용 할 수 있지만
컴포넌트가 `setState` 에 의해 리랜더링 된다면 컴포넌트가 초기화 되서
`createRef`에 의해 만들어진 값은 null (ref 값 초기화)  됩니다.
[출처](https://kyounghwan01.github.io/blog/React/useRef-createRef/#%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%E1%84%92%E1%85%A7%E1%86%BC-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3
)

* [부모 컴포넌트에게 DOM ref 공개](https://ko.reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)

### 2. [콜백 ref](https://ko.reactjs.org/docs/refs-and-the-dom.html#callback-refs)
공식 문서의 예시는 class 형으로 `createRef` 를 사용해 함수를 전달한다
DOM 노트에 ref 가 attach 되거나 detach 될 때 어떤 코드를 실행하고 싶을때
ex) [input 높이 사이즈 구하기 ](https://www.zerocho.com/category/React/post/5fa901f8c610950004a07e8d)
### 3. forwarding ref
* [함수 컴포넌트에 ref 를 사용 예시- 부모가 자식에게 ref 를 전달 단, 자식은 부모가 ref 를 줬는지 모름](https://codesandbox.io/s/bumoga-ref-reul-jungeonji-moreum-5srhwk?file=/src/App.js)

### 4. forwarding ref 와 함께 사용 hook (useImperativeHandle)

> useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef.
부모에게 자식의 메서드를 전달하는 상황에 useImperativeHandle 를 사용

자식 컴포넌트의 DOM 노드에 접근하는 것은 컴포넌트의 캡슐화를 파괴하기 떄문에 권장되지 않습니다.
부모는 자식의 DOM 직접 접근 아닌 useImperativeHandle 로 전달된 메서드만 접근
* [예시- 자식의 메서드 호출해 값을 알 수 있음 ](https://codesandbox.io/s/sweet-wind-nxxsgc?file=/src/App.js)

https://developer-alle.tistory.com/372
https://kelly-kh-woo.medium.com/react-hook-useimperativehandle-89fee716d80


# 5.기타...(useDebugValue )
 useDebugValue hook is handy for debugging with React DevTools 

https://codesandbox.io/s/infallible-drake-xfxk8z?file=/src/App.js
https://medium.com/swlh/built-in-react-hooks-uselayouteffect-and-usedebugvalue-d10efe24d8de

### 참고

https://chanhuiseok.github.io/posts/react-7/
https://blog.logrocket.com/complete-guide-react-refs/
https://tecoble.techcourse.co.kr/post/2021-05-15-react-ref/
