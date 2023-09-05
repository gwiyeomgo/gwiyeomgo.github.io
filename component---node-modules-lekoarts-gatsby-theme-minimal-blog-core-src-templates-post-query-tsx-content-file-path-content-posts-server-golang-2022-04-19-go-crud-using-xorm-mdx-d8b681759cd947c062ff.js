"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1484],{7106:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return u}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({h3:"h3",pre:"pre",code:"code",blockquote:"blockquote",p:"p",ul:"ul",li:"li",ol:"ol",a:"a",strong:"strong",h1:"h1"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h3,null,"CRUD"),"\n",l.createElement(t.h3,null,"1. xorm 에서 CRUD 하기"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'type User struct {\r\n    Id int64 `xorm:"id pk autoincr" ` //pk\r\n    Name string\r\n\t\tAge int64\r\n    Created time.Time `xorm:"created"` //Created tag will automatically inserted current time when you insert one record\r\n    Updated time.Time `xorm:"updated"`\r\n\t\tDeletedAt time.Time `xorm:"deleted"` //Deleted will not really remove one record from table but only tag as deleted via current time.\r\n}\r\n\r\ntype Detail struct {\r\n    Id int64\r\n    UserId int64 `xorm:"index"` // index는 column name\r\n}\r\n\r\ntype UserDetail struct {\r\n    User   `xorm:"extends"`\r\n    Detail `xorm:"extends"` //Detail struct\r\n}\n')),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Create"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"var user User ")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"engine.Insert(&user)// INSERT user (created...) VALUES (?...)")),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Find ,Get"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Update"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"affected, err := engine.ID(1).Update(&user)// UPDATE user SET ... Where id = ?")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"AllCols , Cols"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Saved 상태,Registed 상태가 존재"),"\n",l.createElement(t.li,null,"Saved 상태의 수정 프로세스","\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"수정할 값만 body로 요청"),"\n",l.createElement(t.li,null,"값 bind 후 유효성 검사 => require 값을 피하기위해 상태가 Saved 일경우 Validate 안하도록 조건 추가"),"\n",l.createElement(t.li,null,"신청 id 로 내용을 조회  => db에 기록된 신청 상태가 Registered면 에러가 나도록 변경"),"\n",l.createElement(t.li,null,"Saved 면 update 하도록 씀\r\n=> xorm update"),"\n"),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'if cols == "*" {\r\n    builder = builder.AllCols()\r\n} else if len(cols) > 0 {\r\n    builder = builder.Cols(cols)\r\n}\r\n\n')),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Delete"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"engine.ID(1).Delete(&user)// UPDATE user SET ..., deleted_at = ? WHERE id = ?")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"engine.ID(1).Unscoped().Delete(&user)// Then this record will be really deleted")),"\n"),"\n",l.createElement(t.h3,null,"2. gorm 에서 CRUD 하기"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'type User struct {\r\n  ID   int64  `gorm:"primary_key"` //pk\r\n\tName  string `gorm:"not null"`\r\n  Age  int64  `gorm:"default:18"` //default tag로 기본값 지정\r\n\tActive bool\r\n\tDeletedAt soft_delete.DeletedAt //delete flag로 초까지 ,gorm.DeletedAt 분까지\r\n}\n')),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Create"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'user := User{Name: "test", Age: 18, }\r\nresult := db.Create(&user)\r\ndb.Select("Name", "Age", "CreatedAt").Create(&user)\n')),"\n",l.createElement(t.p,null,l.createElement(t.code,null,'db.Select("Name", "Age", "CreatedAt").Create(&user)// INSERT INTO '),"users",l.createElement(t.code,null," ("),"name",l.createElement(t.code,null,","),"age",l.createElement(t.code,null,","),"created_at",l.createElement(t.code,null,') VALUES ("jinzhu", 18, "2020-07-04 11:05:21.775")')),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"UPDATE"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"user.Age = 100\r\ndb.Save(&user)// UPDATE users SET name='test', age=100,  updated_at = '2013-11-17 21:34:10' WHERE id=111\n")),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"user.Id =1"),"\r\n",l.createElement(t.code,null,'db.Model(&user).Where("active = ?", true).Update("name", "hello")// UPDATE users SET name=\'hello\', updated_at=\'2013-11-17 21:34:10\' WHERE id=1 AND active=true')),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Delete"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"db.Delete(&User{}, 1)// DELETE FROM users WHERE id = 1;//Delete with primary key GORM allows to delete objects using primary key")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Delete Flag"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"UPDATE users SET deleted_at = /* current unix second */ WHERE ID = 1;")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"soft_delete는 뭐지?"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://gorm.io/ko_KR/docs/many_to_many.html"},l.createElement(t.strong,null,"Many To Many"))),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'//Member has and belong to many roles, `member_roles`는 join table 이다\r\ntype MemberEntity struct {\r\n\t...\r\n\tRoles          []rbac.RoleEntity `gorm:"many2many:member_roles;"` //두 모델 사이에 조인 테이블을 추가\r\n}\n')),"\n",l.createElement(t.h1,null,"How to insert multiple data at once"),"\n",l.createElement(t.p,null,"배경\r\n특정 구독자에게 한번에 메세지를 보내고\r\n보낸 기록을 남기기위해\r\n구독자 정보를 db 에 남기는 작업이 필요했다\r\n한번에 10명 이상의 사용자에게 전송이 예상되기때문에 한번에 insert 를 하는 방법을 찾아봤다"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'//xorm\r\nif rowsAffected, err := common.GetDB(ctx).InsertMulti(recipients); err != nil {\r\n    return errors.Wrap(err, "")\r\n} else if rowsAffected == 0 {\r\n    return errors.New(" "등록에 실패하였습니다.")\r\n}\n')),"\n",l.createElement(t.h3,null,"출처"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/chapter-07/1.deleted.html"},"delete 설명"),l.createElement(t.a,{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/chapter-02/4.columns.html"},"field tag"),"\r\n",l.createElement(t.a,{href:"https://www.popit.kr/golang-xorm-%ED%8E%B8%EB%A6%AC%ED%95%9C-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C/"},"Golang xORM 편리한 기능 소개 | Popit"),"\r\n",l.createElement(t.a,{href:"https://gorm.io/docs/update.html"},"gorm예시"),"\r\n",l.createElement(t.a,{href:"https://gorm.io/docs/delete.html#Delete-Flag"},"delete예시"),"\r\n",l.createElement(t.a,{href:"https://stackoverflow.com/questions/21108084/how-to-insert-multiple-data-at-once"},"How to insert multiple data at once")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(8804);function u(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-04-19-go-crud-using-xorm-mdx-d8b681759cd947c062ff.js.map