```
title: javascript 화살표함수
startDate: 2021-10-01
```
--- 


 # 배경
 react코드를 짜다가 터미널을 보니 경고가 발생했다.
 
 ```
test.map(users => {
   console.log(users);
});

```
 Arrow function expected a return value
 arrow function안에  return value 를 지정하니 해결되었다.
 
 # 화살표 함수에 retrun이 필요한걸까?
 ```
() => {
    return 
}
```
 # map함수에 return이 필요한걸까?
 The map() method creates a new array with the results of calling a provided function on every element in the calling array.
  or use forEach() instead of map()
  
 ```



```
# 화살표함수 사용
```
(page, pageSize) => {
            load(page, pageSize);
          }

          
(page, pageSize) => load(page, pageSize)
```
 
