### 배경
err가 발생했을때 errorStackTrace  을 알아야 한다.

```

stack := make([]byte, 2048)
length := runtime.Stack(stack, true)
errorStackTrace := fmt.Sprintf("[ERROR] %v %s\n", err, stack[:length])

```
[package runtime](<a href="https://www.cs.ubc.ca/~bestchai/teaching/cs416_2015w2/go1.4.3-docs/pkg/runtime/index.html">https://www.cs.ubc.ca/\~bestchai/teaching/cs416\_2015w2/go1.4.3-docs/pkg/runtime/index.html</a>)
[runtime](<a href="https://go.dev/src/runtime/stack.go">https://go.dev/src/runtime/stack.go</a>)

Package runtime /contains/ operations that interact with Go's runtime system, such as functions /to control goroutines.
Package runtine 포함한다 기능 = go의 runtime system과 상호작용하는,기능과 같은/goroutine을 제어하는

It also includes the low-level type information used by the [reflect package](<a href="https://pkg.go.dev/reflect">https://pkg.go.dev/reflect</a>);
또한 reflect package 에서 사용하는 저수준 유형 정보도 포함합니다.
see reflect's documentation for the programmable interface to the run-time type system.

reflect 문서를 참조하십시오/run-time type system에 대한 프로그래밍 가능한 인터페이스에 대한
```

### 무슨말일까..
stack에 언제 err가 쌓이는 거지?
런타임 프로그래밍이 뭐지?

<br>
[참조1](<a href="https://stackoverflow.com/questions/3900549/what-is-runtime?rq=1">https://stackoverflow.com/questions/3900549/what-is-runtime?rq=1</a>)

<br>
runtime pacakge가 [runtime library](<a href="https://en.wikipedia.org/wiki/Runtime_library">https://en.wikipedia.org/wiki/Runtime\_library</a>)인가?

<br>
stack trace 가뭐길래 runtime package가 stack 함수를 갖고 있지?
\*스택 추적 은 프로그램 실행 중 특정한 시점에서의 스택 프레임에 대한 리포트이다.
\*익셉션이 발생하였을 때 프로그램이 실행중에 호출한 메소드의 리스트 [참조 2](<a href="https://hashcode.co.kr/questions/2162/stack-trace%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%97%90%EB%9F%AC%EB%A5%BC-%EB%94%94%EB%B2%84%EA%B9%85%ED%95%A0-%EB%95%8C-%EA%B7%B8%EA%B2%83%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94">https://hashcode.co.kr/questions/2162/stack-trace%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%97%90%EB%9F%AC%EB%A5%BC-%EB%94%94%EB%B2%84%EA%B9%85%ED%95%A0-%EB%95%8C-%EA%B7%B8%EA%B2%83%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94</a>)

[stack](<a href="https://pkg.go.dev/runtime#Stack">https://pkg.go.dev/runtime#Stack</a>)

### 아..
스택 이 빠른 메모리 인데
실행되는 프로세스가 쌓인다
ex)변수 선언되면 다 쌓임