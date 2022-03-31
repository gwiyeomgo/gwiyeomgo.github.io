
# Singleton



Singleton을 사용한다면 우리가 특정 변수를 어떻게 초기화할 지 우리가 정할 수 있다

```
package data

type data struct {
	Id string
}

var d *data

func Data() *data {
	if d == nil {

	}
	return d
}
```