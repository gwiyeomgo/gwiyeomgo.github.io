## 사용배경

1. 2021년 기부 데이터의 상태는 2022년 1월 1일 새벽 1시 기준 평가완료 상태로 변경해야 한다.(예약작업걸기 - '평가완료' 상태로 변경(2022.01.01 01:00:00)<span style="color:#333333"> )</span>
2. 1/1일 주말이고 새벽이어서 개발자가 직접 변경할 수 없는 상황이다.
3. 예약을 걸어서 자동으로 변경되도록 하자

## 어떻게 데이터의 상태를 자동으로 변경시키죠?

### [AWS Lambda 란 무엇입니까?](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)

Lambda는 필요 시에만 함수를 실행
사용한 컴퓨팅 시간만큼만 비용을 지불하고, 코드가 실행되지 않을 때는 요금이 부과되지 않습니다.

### Lambda 개념

[https://docs.aws.amazon.com/ko\_kr/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-function](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-function)



#### 작업내용

1. Lamda 에서 함수를 생성한다
    함수이름,런타임,권한

2. 코드 수정

3. 구성
    1. pdv 환경변수 설정

  #### 특정시간에 lamda 함수가 발동하도록 어떻게 설정하지?
4. event bridge 
  ### 실행 결과는 어디서 보지??
5.
  aws CloudWatch

