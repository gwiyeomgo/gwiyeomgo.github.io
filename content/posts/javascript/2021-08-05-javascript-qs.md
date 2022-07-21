```
title:  qs 를 통해 쿼리파람값 받아오자 
startDate: 2021-08-05
```
---

키워드 : querystring,qs,null
<br>
# 문제

데이터를 조회할때 조건 데이터를 querystring 을 통해 서버로 전달합니다.
만약 전달할 객체가 의 속성값이 ""일 경우
ex)`{status:''}`
아래 형태로 서버쪽에 전달되면서 status 가 ''인 경우를 조회했기 때문에 문제가 발생했습니다.

```
http://localhost:7000/api/admin/donations?page=1&pageSize=10&donationId=&status=
```

# 해결방법

1. [npm의 모듈qs](https://www.npmjs.com/package/qs)의 `skipNull:true` 옵션을 사용했습니다.

모듈qs는 querystring 을 [parse](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)하거나 [stringfy](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 합니다.
stringfy하는 과정에서 null을 skip하도록 옵션을 준다면 문제는 해결됩니다.

```
const queryString = qs.stringify( param,{
    arrayFormat:"repeat",
    skipNulls:true,
});
```

store-donation-admin 의 FetchContext 코드에서 확인하실 수 있습니다.

<br>
2. 위 옵션을 사용하기 위해 status의 기본값을 null로 처리 해줍니다
![img.png](img.png)


# 기관쪽 코드에서 적용했던 예시??!