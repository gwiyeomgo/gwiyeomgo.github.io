# 배경
현재 업무에서 나도모르는 사이에 promise를 쓰고 있었다.
API를 통해 데이터를 받은 후에 대한 결과를 받기 위해서 사용했다.

# [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
> Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다

# Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달
```javascript
const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});
```

### Promise 상태 

|상태|의미|구현|
|---|---|---|
|pending|비동기 처리가 아직 수행되지 않은 상태|resolve 또는 reject 함수가 아직 호출되지 않은 상태|
|fulfilled|비동기 처리가 수행된 상태 (성공)|resolve 함수가 호출된 상태|
|rejected|비동기 처리가 수행된 상태 (실패)|reject 함수가 호출된 상태|
|settled|비동기 처리가 수행된 상태 (성공 또는 실패)|resolve 또는 reject 함수가 호출된 상태|


# Promise 4가지 정적 메소드
1. 성공: new Promise((resolve,reject) => { resolve('Success') })

` Promise.resolve(123).then((value)=>{console.lgo(value}) //123`
2. 실패: new Promise((resolve,reject) => { reject(new Error()) })

`Promise.reject()`


프라미스를 사용하면 비교적 안전하고 관리하기 쉬운 코드를 작성할 수 있습니다.
프라미스는 콜백을 예측 가능한 패턴으로 사용할 수 있게 하며,프라미스 없이 콜백만 사용했을 때 나타날 수 있는 엉뚱한 현상이나 찾기 힘든 버그를 상당수 해결합니다.

프라미스는 성공 또는 실패 둘 중 하나만 발생
프라미스는 객체=> 전달 가능
프라미스는 비동기 코드를 단순화하고 콜백이 두 번 이상 실행되는 문제를 방지
단 resolve,reject를 꼭 호출해야됨
프로미스가 결정되지 않은 문제를 자동으로 해결하지는 못함

new Promise(); // 대기 상태

new Promise((resoleve,reject)=>{
	resolve(); 
	//성공 상태
	reject(); 
	//실패 상태
})



### 참고
[Promise.resolve()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
https://learnjs.vlpt.us/async/02-async-await.html
https://han41858.tistory.com/11
