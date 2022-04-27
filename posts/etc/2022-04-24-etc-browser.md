

https://velog.io/@lucas/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A9%B4%EC%A0%91-%EC%A4%80%EB%B9%84
https://bbangson.tistory.com/87
https://im-designloper.tistory.com/97

https://velog.io/@1nthek/React-Virtual-DOM%EA%B3%BC-%EB%A0%8C%EB%8D%94%EB%A7%81

# 배경

1. 사용자의 브라우저를 확인하는 기능 추가를 위해 회의를 했었다.
2. client 와 server 의 관해 설명을 듣다가 web server 도 있고  application server 도 존재한다는 것을 알게되었다.
3. web server 랑 application server 랑 차이가 뭐냐고 질문했다.
3. 그날 알려주셨던 내용을 정리해보려고 한다.

어떤 개념을 알기 위해서 역사를 알아야 한다는 조언을 듣고 역사부터 차례로 정리해 보자

# 과거의 브라우저와 서버

       | - 요청--------->  | 
browser| <- html,js,css - |server 
       |                  | web server <=> application server --- > | DB
web server: 결과를 만듬
application server : DB와 접속 가능

* web 은?
* 서버사이드 렌더링 

*  AJAX = 비동기 자바스크립트와 XML 
    - 일부 데이터만 요청 => 받아와서 그 부분만 변경
    
# AJAX 사용이 점점 증가됨!

웹으로 뱅킹,전자상거래 등등 너무 많은거를 원하고
PC 성능 좋아짐
서버가 혼자서 html 만들기 버거움

서버 저항을 줄이기 위해 데이터만 주기로 함

html 을 동적으로 바꾸는 환경으로 바꾸게 되었다.

* SAP
* React,Vue...



