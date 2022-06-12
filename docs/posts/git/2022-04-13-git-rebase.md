```
title: git rebase 
startDate: 2022-04-13
```
---

# 평소 사용 git

처음에는 시니어 개발자의 지시에 따라서
branch 를 만들때 #을 붙였다.
그리고
branch 에서 작업 후 commit 하고
또 그 branch 에서 작업하면 rebase 를 사용해서
하나의 commit 으로 합쳤다.
왜지...


# rebase 는 정확하게 어떻게 해주는 거지?
`git rebase -i HEAD~2`
직전 커밋 2개를 합쳐준다

# git conflict 이후에도 rebase --continue 를 해준다 왜?
[rebase 를 통한 conflict 해결 방법Permalink](https://baeji77.github.io/dev/git/etc/git-rebase-and-confilct-resolve/)

