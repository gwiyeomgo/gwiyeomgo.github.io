# 배경

어드민의 조직및 권한 관리 서비스 코드는 xorm 이 아닌 gorm 을 사용합니다.
xorm 에는 이 기능이 있는지 모르겠지만.
gorm 에는 entity 값으로 db 를 자동으로 테이블을 생성해주는 코드가 존재한다


### [Auto Migration](https://gorm.io/docs/migration.html) 코드

```
type User struct {
  ID     uint
  Name   string
  Age    int
  Gender string
}
```
```
db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
})
  
db.AutoMigrate(&User{}, &Product{}, &Order{})
```

# Auto Migration 은 table 에 컬럼도 자동으로 추가해 주는가?

현재 우리가 사용하는 권한 관리 서비스 코드에서는 update_by,created_by 가 존재하지 않는다.
삭제 이슈가 발생했고 (누군가 역할을 삭제했다)
마녀사냥이 아닌! 시스템적으로 기록을 남기기 위해서 삭제한 사람및 수정한 사람의 Id 를 남기기록 했다.

기존에는 없었기 때문에 처음에는 alter문으로 추가해야하나 고민했다.
그러다 코드를 모두 수정하고 실행시키니 table에 컬럼이 추가되었다.

```
AutoMigrate will create tables, missing foreign keys, constraints, columns and indexes. 
It will change existing column’s type if its size, precision, nullable changed.
It WON’T delete unused columns to protect your data.
```
automigrate는 컬럼도 추가해 준다고 한다...

