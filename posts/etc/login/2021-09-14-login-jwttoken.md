
jwt
https://opentutorials.org/course/3405


* 인코딩/디코딩?

jwt.io 사이트에서도 jwt 토큰을 디코딩한 결과를 알수 잇다.
이처럼 지금 사이트는 서베에서 디코딩해서 토큰안에 정보를 얻음

cookie의 사용을 제거
토큰 등의 정보를 cookie로 저장하면,
domain 기반으로 불필요한 cookie가 전달되어 예상치 못한 오류를 야기할 수 있다.
이런 경우 cookie 대신 HTML5 spec에 있는 Web Storage(Session/Local storage)를 사용하는 것이 더 일반적