# 배경

1.협업을 하면서
신규 프로젝트를 git repository 에 올렸다.

2. 다른 동료가 프로젝트를 받고 작업 후 push 했을때
`.idea` 라는 change 내용에 보여졌다
   
3. 결국 인터넷 검색을 햇꼬 `.gitignore` 파일에 `.idea`파일을 추가했고 push 를 해도 changed 에 보이지 않았다

### `.idea` 는 뭐지?

인텔리제이에서 만든 IDE 를 사용하면 프로젝트의 설정값들이 `.idea`에 담기게 된다.
우리는 인텔리제이에서 만든 goland 를 사용했고
처음 프로젝트를 올린 동료는 vscode 를 사용했습니다.

## `.gitignore` 는 뭐지?


[자동으로 .gitignore 파일을 만들어 주는 link](
https://www.toptal.com/developers/gitignore
)도 있다.

# 어디에 추가?
프로젝트의 최상위 디렉터리
