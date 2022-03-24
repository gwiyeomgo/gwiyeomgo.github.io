
#### 배경
구글 워크스페이스 로그을 하기 위해서는 google cloud platform 에 프로잭트를 생성하고
생성된 프로젝트 정보가 필요합니다

### 0.프로젝트는 뭐지?

### 1.프로젝트 생성

 구글 계정인로 로그인하여 google cloud platform에 프로젝트를 생성합니다

### 2.프로젝트에 정보를 확인해서 어드민 조직도에 입력

* [API 및 서비스](https://console.cloud.google.com/apis/credentials?referrer=search&project=platformadmin)
  에 접속해서 사용자 인증 정보 설정을 클릭합니다
  새로추가된 어드민 url, 어드민 서비스 url을 추가합니다
  
```
구글 워크스페이스 도메인: beautifulstore.org
client_id: 클라이언트 ID
client_secret : 클라이언트 보안 비밀
redirect_uri: 새로 생성한 어드민 서비스 url`+ /api/auth/google-workspace
```

위에 정보를 `어드민 조직도>로그인 >구글 로그인 ` 에입력합니다

### 3.google cloud platform 에 사용자 인증 정보 설정

에서 어드민url과 어드민 서비스 url을 추가합니다

* 이후 새로운 환경이 구성되어 url이 추가된다면
  사용자 인증 정보 설정에 url을 추가해야 구글워크스페이스 로그인 사용이 가능합니다