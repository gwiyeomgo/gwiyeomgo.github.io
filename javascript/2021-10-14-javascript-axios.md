 
# 배경
현재 회사에서 2개의 시스템을 하나로 합치는 작업을 하고있다.
단순하게 화면,api를 합치는 작업이다.
그 작업에서 주로 어드민 화면을 옮기고 바뀐 API로 연동하는 작업을 진행하고 있다.
이번 작업 하면서 `api` 호출할 때 `axios`를 사용하게 되었다.  
 
# 문제
수정 `API`를 연동하려고 할때 400번 에러를 반환했다.

* 내 코드

```javascript
 axios.get(apiPath, { params: params })
 axios.put(apiPath, { params: params })
```

#400번은 어떤 에러?                                                 
                                                   

#넘긴 데이터의 타입을 확인해봤다.

    * 숫자 vs 문자
문제 없었다


# 내가 지금 코드에서 모르는거는 뭐지?
입사 이후에 api를 호출하는 코드를 계속 사용해왔고 익숙해 졌다고 생각했다.
기존 코드와 달라진 점은 axios를 사용한다는 것 뿐이다.
아.. 나는 `axios`에 대해 공부하지 않았다는 사실을 알게되었다.
                                    
# `axios`가 뭐지


# `axios`에서 `put`은 어떻게 사용하지?

 ```javascript
 axios.put(apiPath, params);
 ```