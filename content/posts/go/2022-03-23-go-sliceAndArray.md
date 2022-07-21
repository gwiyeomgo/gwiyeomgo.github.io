```
title: golang slicde and array
startDate: 2022-03-23
```
---

# 배경

golang 에 배열을 어떻게 나타낼까?

golang 은  array 가 존재한다
또한 slice 라는 개념이 존재한다.

## slice

## array

### slice 와 array 둘의차이?

##  배열의 요소 가져오기
노마드 코더의 강의에서
slice 를 2개의 슬라이스로 만드는 코드가 존재한다

```
rBytes := sigBytes[:len(sigBytes)/2]
sBytes := sigBytes[len(sigBytes)/2:]
```
이렇게 실전에서 사용할 수 있다.
간단한 예제를 통해 정리해 보면
아래와 같다.


> 하나의 요소 가져오기

```
package main

import "fmt"

func main() {
	test := []int{1, 2, 3, 4}
	first := test[0]
	fmt.Printf("첫번째 요소는%x",first)
}

```

> 특정 범위 요소 가져오기

```

package main

import "fmt"

func main() {
	test := []int{1, 2, 3, 4}
	arr := test[:2]
	arr2 := test[2:4]
	arr3 := test[3:]
	fmt.Printf("첫번째 배열 %x",arr)
	fmt.Printf("첫번째 배열 %x",arr2)
	fmt.Printf("첫번째 배열 %x",arr3)
}
```





http://golang.site/go/article/13-Go-%EC%BB%AC%EB%A0%89%EC%85%98---Slice