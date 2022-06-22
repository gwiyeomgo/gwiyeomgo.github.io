```
title: javascript 비동기
startDate: 2022-04-11
```
--- 


# async  await


# 비동기란?
특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하하는 자바스크립트의 특성
[비동기 작업의 원리](https://it-eldorado.tistory.com/86)

# 에러
UnhandledPromiseRejection
에러 메세지 확인
# 찾아보니
1.asnyc/await을 사용한 함수는 promise를 반환한다는 것을 알게되었다.
2.  async 키워드를 사용한 함수의 경우
    try {} catch{} 로 애러 핸들안해줘서 발생

```

 DonationService.getDonation(id).then((response) => {
      if (response.data && response.data.evalType !== ONLY_ACCEPT_DONATION){
        DonationService.getDonationClassification(id).then((classification) => {
          DonationService.getDonationClassificationItemsRevisions(id).then(
              (itemsRevisions) => {
                setData({
                  classification:classification.data,
                  donation:response.data,
                  itemsRevisions: itemsRevisions.data,
                });
              }
          );
        });
      }
    });

```

이 코드는 기부 상세 화면에서 처음에 기부 데이텉를 가져오는 코드입니다.
기부 데이터의 타입이 접수일경우 setData 를 해주지 않기 때문에 흰 화면이 나오는 문제가 발생했습니다.

어떻게 개선할 수 있을 까요?

3개의 API 를 Call 하는 경우 
우선 기부 데이터가 있다면 setData 를 써서 data 에 값을 저장해야 합니다. 따라서 
처음 호출하는 부분만 써보면

```
  const load = async () => {
let donationData =  await DonationService.getDonation(id).then((response) => response.data);
if(!donationData) {
 //
}
}
```
