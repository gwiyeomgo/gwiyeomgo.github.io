


# 배경

```
type Book struct {
ID            int64      `xorm:"id pk autoincr" json:"ID,omitempty"  `
Title         string     `xorm:"title"          json:"title,omitempty"`
Content       string     `xorm:"content"        json:"content,omitempty" `
}
```
golnag 을 사용하면 위 코드와 같이 struct 를 만들어서
요청의 body 의 json 값을 받거나 
응답을 보내기전 dto 로 값을 채워 보낸다.

예를들어 content 가 없다면 json 에 content 라는 key 는 있어야 하는가?

# 




[참고](https://wookiist.dev/127)