# dooray api 사용하기

1. dooray api를 호출하기 위한 토큰 생성
   dooray 설정> api 서비스 > 인증 토큰 생성
   
2. [서비스 api](https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419) 에서
   프로젝트에 새업무를 등록하는 api 찾기

```
Project > Projects > Posts
POST /project/v1/projects/{project-id}/posts
```

POST /project/v1/projects/{project-id}/posts
프로젝트 내에 업무를 생성
4\. project \- id ?
프로젝트를 생성하면 url에서 project-id를 알 수 있다.

5. 내용은 어떻게 만듬

```
Request
Body
{
    "parentPostId": "1",                            /* 하위업무로 만드는 경우 상위업무의 Id 를 지정 */
    "users": {
        "to": [{                                    /* 업무 담당자 목록 */
            "type": "member",
            "member": {
                "organizationMemberId": "1"
            }
        }, {
            "type": "emailUser",
            "emailUser": {
                "emailAddress": "",
                "name": ""
            }
        }],
        "cc": [{                                    /* 업무 참조자 목록 */
            "type": "member",
            "member": {
                "organizationMemberId": "2"
            }
        }]
    },
    "subject": "제목을 입력합니다.",
    "body": {
        "mimeType": "text/html",                    /* text/html text/x-markdown */
        "content": "본문을 입력합니다."             /* 업무 본문 */
    },
    "dueDate": "2019-10-08T18:00:00+09:00",         /* 만기일, null 일 수 있음 */
    "dueDateFlag": true,                            /* 제거 예정 필드. true 로만 사용하기를 권장 */
    "milestoneId" "1",
    "tagIds": ["1", "2"],
    "priority": "none"                              /* hightest, high, normal, low, lowest, none */
}
```