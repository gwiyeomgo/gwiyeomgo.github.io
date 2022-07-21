```
title: 로그인을 공부해보자 - OAuth
startDate: 2022-03-21
```
---



OAuth2? 
  * 간편로그인등 사용자 인증에 사용되는 개방형 인증 프로토콜(통신 규약 및 약속) 
  * 사용자가 가입된 서비스의 API에 접근하기 위해서는 사용자로부터 권한을 위임 받아야 합니다.
    이 때 사용자의 패스워드 없이도 권한을 위임 받을 수 있는 방법이 필요합니다.
    이를 위해서 고안된 기술이 OAuth입니다.
  * 오늘날 많은 API들이 OAuth를 통해서 상호 연동을 지원하고 있습니다.
    ex ) 카카오 싱크,구글 워크스페이스 로그인 등등..
    
  * OAuth 의 목적은 Access token 발급
  
###  [생황코딩 OAuth](https://opentutorials.org/course/3405) 보고 내용 기록

### 1. OAuth - 등록
Resource Server 접속하기 위해 Resource Server 에 등록 과정 필요
이떄 `Client ID`(어플리케이션 식별자),`Client Secret`(Client ID 비밀번호로,노출 금지),`Authorized redirect URls`(리소스 서버가 권한을 부여한느 과정에서 Authorized Code 를 전달핳 주소) 세가지 요소를 공통적으로 받습니다.

구글 클라우드 플렛폼 
=> 프로젝트 => 이름추가 => CreateApp
API 서비스에서 자격 얻음 => OAuth Client ID,Client Secret 확인

### 2. OAuth - Resource Owner 의 승인
Resource Server 에게 Client 의 접근을 승인
 > 로그인 버튼 => `https://rescource.server`?`client_id`=1&scope={사용할 기능}&`redirect_url`={}

Resource Owner 가 위 주소로 접속을하면
  Resource Server 는 Resource Owner의 로그인 여부를 확인
  ( 로그인 X => ID 입력창, 로그인 O => url에 client_id ,redirect_url 와 Rescource Server 가 갖고 있는 Client ID,redirect_url를 확인)

### 3. OAuth - Resource Server 의 승인

  Resource Server 가 Resource Owner 에게 Authorization Code 포함한 url 전송
  Resource Owner 의 사용자는 모르게 url로 이동 Client 는 authorization Code 획득
  
  Client 가 http://resurce.server/token?grant_type=authorization_code&code={authorization Code}&redirect_uri={}&client_id={}&client_secret={} 를 Resource Server 에 전송

  Resource Server 는 authorization_code 일치하는지 확인


### 4.Access token 발급 (Resource Server 발급-> Client 저장)


API 는 Client 가 Resouce Server 를 호출하는 접점 
Client 가 Resouce 에 요청 헤더에 Authrization : Bearer <totken> 추가해 전달

Access token 수명이 다해을때 Refresh token 발급 ?


https://kimdohyeon.tistory.com/58

