```
title: AWS Lambda  사용 경험 -Cron Expression ??
startDate: 2021-12-28
```
---


### Cron Expression
Cron, 크론은 본래 유닉스 계열의 운영체제에서 시간 기반으로 잡 스케쥴링을 하는 후면 프로세스의 명칭이다. 


### 규칙


### 실행 cron
```
cron(55 7 27 12 ? *)  2021-12-27 16:55:08 (UTC+09:00)
cron(40 0 28 12 ? *)  2021-12-28 09:40:00 (UTC+09:00)
cron(00 16 30 12 ? *) 2021-12-30 01:00:00 (UTC+09:00)
cron(00 16 1 1 ? *) 2021-1-1 01:00:00 (UTC+09:00) 매 번 1/1 새벽 1시
```


https://jisblee.me/board/view/0/2/169
https://www.leafcats.com/94