```
title: mysql workbench 테이블 import export
startDate: 2021-11-25
```
---

### 

# 배경

### 상황1
회사에서 mysql 을 사용하고 있다.
규모가 커지면서 테이블이 더 많아지고 구조가 복잡해 졌다.
로컬에서 테스트를 하기에 데이터가 필요했다.
하기 위해서 실제 운영 데이터(개인 정보 제외)를 복사해서 사용하기로 했다.

### 상황2
시스템 오픈 전날

조직도,로그인 등 어드민 화면에 계정 관리 기능이 추가됨
해당 기능은 스키마가 따로 존재함
사용자 정보를 모두 마이그레이션 했기때문에 운영에서 바로 사용할 수 있는 상태
개발계에 db를 운영계에 export,import 해야 했다.


어떻게 실제 사용 데이터를 로컬에 넣을 수 있을까?
또는
어떻게 실제 사용 데이터를 내보낼 수 있을까?

# Export
mysql workbench 상단 Server >

Data Export > 
 
table을 선택 >
 
Export Options 에 Export to Self-Contained File 을 선택하고 sql 저장 위치 선택 >
 
StartExport 한다면 저장한 위치에 sql 파일이 생성된다.

# Import
mysql workbench 상단 Server >

Data Import > 

Import from Self-Contained File > 

저장했던 sql 파일 선택>

Default Target Schema 에 스키마 지정 (New 로 새로 생성 가능) >

StartExport 클릭하면 지정한 Schema 에 Table 추가됨 

# 참고

[MySQL workbench 데이터베이스 Export , Import 하는법](https://qjadud22.tistory.com/6)