```
title: 유니크키 설정
startDate: 2022-02-06
```
---

# 배경
지금 개발하는 시스템을 100개 매장에서 사용한다
각 매장에서 한번이라도 시스템을 사용한 회원의 정보가 필요하다
그래서
매장에서 해당 시스템을 사용한 회원의
매장코드,회원id,일시를 기록하는 table을 생성하기로 했다

# 추가된 table


```
-- mysql 기준
CREATE TABLE IF NOT EXISTS `member_sites`
(
    `id`             INT          NOT NULL AUTO_INCREMENT,
    `member_id`      INT          NOT NULL COMMENT '회원 번호',
    `code`           VARCHAR(10)  NOT NULL,
    `created`        JSON         NOT NULL COMMENT '처음 사용 일자',
    `updated`        JSON         NOT NULL COMMENT '최근 사용 일자',
    `deleted_at`     DATETIME     NULL,
    PRIMARY KEY (`id`),
    INDEX idx_member_id_site_code (member_id DESC, site_code ASC)
);
```

# 기존에 방문했던 회원의 기록은 어떻하지?

### 신청 table

|id	|member_id	|...|	name	|code	|created	|updated
|---|---|---|---|---|---|---|
|1	|3|	...|	a	|100|{id":4,"name":manager,"role":"manager","datetime":"2022-02-05 09:05:03"}	|{id": 4 ,"name":manager,"role":"manager","datetime":"2022-02-06 09:05:03"}|
|2	|1|	...|	c	|200|{id":4,"name":manager,"role":"manager","datetime":"2022-02-05 10:05:03"}	|{id": 4 ,"name":manager,"role":"manager","datetime":"2022-02-05 10:05:03"}|
|3	|2|	...|	b	|300|{id":4,"name":manager,"role":"manager","datetime":"2022-02-05 13:05:03"}	|{id": 4 ,"name":manager,"role":"manager","datetime":"2022-02-06 09:05:03"}|
|4	|1|	...|	c	|200|{id":4,"name":manager,"role":"manager","datetime":"2022-02-05 12:05:03"}	|{id": 4 ,"name":manager,"role":"manager","datetime":"2022-02-05 12:05:03"}|
|5	|2|	...|	b	|300|{id":4,"name":manager,"role":"manager","datetime":"2022-02-05 09:05:03"}	|{id": 4 ,"name":manager,"role":"manager","datetime":"2022-02-06 09:05:03"}|

회원번호 3번은 code 가 100번인 매장에 방문하고 신청
회원은 여러 매장에서 신청 가능하다

# 마이그레이션
 
한 회원이 신청건중 최초로 신청한 신청건의 일자를 created에 추가

# If we were to group by two columns:
### test Table

| id | member_id | code |
|---|---|---|
| 1  |        3 |   100 |
| 2  |        1 |   200 |
| 3  |        2 |   200 |
| 4  |        1 |   200 |
| 5  |        2 |   300 |


```
select  min(id) minid,code, member_id,
      from test 
      group by member_id, code
```

### member_id,code 를 group by 결과 ,id 는 최소값 즉 
각 매장에 회원이 최초 방문한 경우

| id | member_id | code |
|---|---|---|
| 1  |        3 |   100 |
| 2  |        1 |   200 |
| 3  |        2 |   200 |
| 5  |        2 |   300 |

각 매장에 회원이 최초 방문한 경우 시간 = created,updated
각 매장에 회원이 최초 방문한 경우를 member_sites 에 넣어준다.
```
INSERT INTO member_sites(member_id, code, created, updated)
SELECT  d.id ,d.member_id, d.code,d.created, d.created as updated
FROM test d inner join
(select a.code, a.member_id, min(a.id) minid
from test a
group by a.member_id, a.code) a
on d.member_id =a.member_id
and d.code =a.code
and d.id = a.minid;

```

|id	|member_id	|code	|created	|updated|
|---|---|---|---|---|
1|3|100	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 09:05:03"}	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 09:05:03"}|
2|1|200	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 10:05:03"}	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 10:05:03"}|
3|2|200	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 11:05:03"}	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 11:05:03"}|
5|2|300	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 09:05:03"}	|{"id":4,"name":"manager","role":"manager","datetime":"2022-02-05 09:05:03"}|
 
[sqllite  실습링크](https://replit.com/@gwiyeomgo/migration20220206)




