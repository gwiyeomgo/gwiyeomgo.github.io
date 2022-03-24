
# Call by value
값 복사되어 값 보존된다
복사가 되기 때문에 메모리량이 늘어난다

# Call by reference
복사하지 않고 직접 참조
직접 참조를 해서 원래 값이 영향을 받음
 No newline at end of file


omitempty 가 뭐지?

## GetPlatformSites

플랫폼에 site 정보를 조회하는 API

```go
platformSties := []interface{}{
        map[string]interface{}{
            "id":   1,
            "name": "분당이매점",
        },
        map[string]interface{}{
            "id":   2,
            "name": "의정부 되살림터",
        },
        map[string]interface{}{
            "id":   3,
            "name": "서울 되살림터",
        },
        map[string]interface{}{
            "id":   4,
            "name": "양재점",
        },
    }
```
[{"id":1,"name":"분당이매점"},{"id":2,"name":"의정부 되살림터"}] 형태로 매장 db의 데이터를 조회한다


## ConnectPlatformSiteToOrganization

```go

func (o *OrganizationEntity) ConnectPlatformSiteToOrganization(site dtos.ConnectingPlatformSite) {
    o.ConnectedPlatformSite = &ConnectedPlatformSite{SiteId: site.SiteId}
}
```



### ctx.Bind(&connectingPlatformSite) 할때 왜 &를 쓰지?

```
type ConnectingPlatformSite struct {
    SiteId   uint   `json:"siteId" validate:"required"`
    SiteName string `json:"siteName"`
}

var connectingPlatformSite dtos.ConnectingPlatformSite
ctx.Bind(&connectingPlatformSite)
```

메모리 주소를 표현하는 포인터
`&` goes in front of a variable when you want to get that variable's memory address.

### call by value 값에 의한 호출

```go
package main
 
import "fmt"
 
func inc(i int) {
    i = i + 1
}
 
func main() {
    i := 10
    inc(i)
    fmt.Println(i)
}

```
실행하면 10
### call by reference

```go
package main
 
import "fmt"
 
func inc(i *int) {
    *i = *i + 1
}
 
func main() {
    i := 10
    inc(&i)
    fmt.Println(i)
}

```
실행하면 11


### ctx ? ctx echo.Context
    ```
     Context represents the context of the current HTTP request. It holds request and response objects, path, path parameters, data and registered handler.
     ```


# 포인터 리시버
func (w *Wallet) DepositWithValueReceiver(amount int) {
    w.balance += amount
}

// Production add: 0xc000016378, value: 0
// Test add: 0xc000016378, value: 10
struct 타입만! 포인터 리시버가 자동 역참조해준다.

#
```
func (o *OrganizationEntity) ConnectPlatformSiteToOrganization(site dtos.ConnectingPlatformSite) {
    o.ConnectedPlatformSite = &ConnectedPlatformSite{SiteId: site.SiteId}
}

type ConnectedPlatformSite struct {
    SiteId uint `json:"siteId"`
}
```

https://thebook.io/006806/ch02/04/02/
https://programmers.co.kr/learn/courses/13

https://ponyozzang.tistory.com/162
https://www.npmjs.com/package/react-router-ga

예시

```go
package example

type Person struct {
    Age  uint
    Name string
    BirthDay string
}

func (p *Person) ChangeAge (newAge uint) {
    p.Age = newAge
    /*if p.Age != nil {
    }*/
}

func (p *Person) SetBirthDay(birthday *BirthDay) {
    p.BirthDay = birthday.Day
    birthday.Year = "2002"
}

type BirthDay struct {
    Year string
    Month string
    Day string
}


```

```go
package example

import (
    "github.com/stretchr/testify/assert"
    "testing"
)

func TestPerson_ChangeAge(t *testing.T) {
    //given
    person := Person{
        Age:  29,
        Name: "이수",
    }

    //when
    person.ChangeAge(2)

    //then
    actual := person.Age
    expected := uint(2)

    assert.Equal(t, expected, actual)
}

func TestPerson_SetBirthDay(t *testing.T) {
    //given
    person := Person{
        Age:  29,
        Name: "이수",
    }
    /*
    person := Person{
        Age:  29,
        Name: "바보",
    }*/
    //2개의  인스턴스 생성=> 메모리2개
    //when
    birthDay := BirthDay{
        Year:  "1998",
        Month: "06",
        Day:   "04",
    }

    person.SetBirthDay(&birthDay)

    //then
    actual := person.BirthDay
    expected := "04"

    assert.Equal(t, expected, actual)
    assert.Equal(t, birthDay.Year, "2002")
}

```