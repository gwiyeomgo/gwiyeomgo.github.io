```
title: golang error를 return 할 때
startDate: 2022-03-24
```
---

go에서 여러 패키지의 메서드나 함수를 사용할때
많은 함수에서 error를 return 한다

이때 패키지의 함수를 호출했던 곳에서 error를 어떻게 처리할때

1. `err != nil` 처리
2. 사용하는 패키지의 error 처리하는 함수가 있는지 찾아보기
   ex) os.IsNotExist 는 err 가 있거나 파일이 없을때 true 반환


* Tip

 ```
 err := fun() 
 err := fun() 
```
이렇게 쓰면 에러 발생

 ```
 err := fun() 
err = fun() 
```
`:=` 생성의 의미이기 때문에 `=`를 써서 기존 err 업데이트

 ```
 val1, err := fun() 
 val2, err := fun() 
```
하지만 이 경우는 에디터에서 에러 발생하지 않음
go 규칙인데
이 경우에는
만약 val2가 있다면 err는 업데이트 된다는 의미
즉 val2가 없다면
```
 val1, err := fun() 
 _, err := fun() 
```
에러 발생한다 `_, err = fun()` 써줘야 업데이트 한다는 의미