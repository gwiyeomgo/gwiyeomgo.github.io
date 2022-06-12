```
title: React Router
startDate: 2021-08-23
```
---

# Router가 뭐지?

배경 요즘 react로 블로그을 만들려고한다
업무하면서도 찾아서만 썼지
정확하게 공부해본적이 없다
그래서
"react-router-dom"
을 공부해 보려고 한다

# [SPA](https://react.vlpt.us/react-router/)
https://velog.io/@97godo/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A1%9C-SPA-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0


# react-router-dom 패키지

```
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams, //useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  useHistory,//The useHistory hook gives you access to the history instance that you may use to navigate.
  Link
} from "react-router-dom";
```

# react- router- dom  v6  업데이트
https://kyung-a.tistory.com/36

# [Hooks](https://reactrouter.com/web/api/Hooks) ? useParams? useHistory?
React Router ships with a few hooks that let you access the state of the router and perform navigation from inside your components.



# What is the difference between HashRouter and BrowserRouter in React
### [BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.                                                                
### [hashRouter](https://reactrouter.com/web/api/HashRouter)  uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.
* hashRouter는 url에 #이 들어가는 형태 BrowserRouter는 그렇지 않다
* HashRouter는 # 때문에 웹 브라우저 검색엔진에서 url을 통한 검색이 안된다.
* HashRouter는 새로고침을 해도 계속해서 url 싱크를 유지 
* BrowserRouter은 계속해서 url싱크를 유지 시켜주지 못한다.새로고침을 하면 화면을 경로 못찾을 수도 있다

# [Link](https://reactrouter.com/web/api/Link)
https://reactrouter.com/web/api/Link