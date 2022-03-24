
# 배경
나는 intelij에서 goland를 사용하고 있다.
react 코드를 수정하다가 
현광펜으로 표시된 경고가 나타났다.

```javascript
editing ? true : false
```
*editing은 boolean 타입을 할당받은 변수

처음에 오류인가 해서 마우스를 가져가니메세지가 나타났다.

# 메세지
>'editing ? true : false' can be simplified to '!!editing' 
 Inspection info: Reports conditional expressions of the form condition?true:false or condition?false:true. These expressions may be safely simplified to condition or !condition, respectively


# 코드변경
 ```javascript
!!editing
 ```
 해당코드를 변경하니 노란 현광펜 표시가 없어졌다.
 
 #삼항연산자
 
 # 느낌표 2개의 뜻
 
 
 