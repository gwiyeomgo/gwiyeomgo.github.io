```
title: Revet 와 Reset 을 사용했던 경험
startDate: 2022-03-09
```
---
# 배경

#### 상황1
가끔 command 명령어로 commit 을 할때 취소해야 하는 경우가 있다.
* 우리는 main branch 에서 새로 branch 를 생성한다
* checkout 해서 새 브랜치로 이동해서 보통은 작업하지만
* 갑작스런 이슈로 main에서 코드고치고
 git stash 명령어 쓰려다가... 
 그냥 main에서 commit 한 적이 있었다
  
* 우선 commit 한 상태에서 새 branch로 이동해서 push 했고
* 원래 main을 되돌려야 하는 상황

#### 상황2
* 여러명이 dev(default branch 개발계) Branch 를 clone 하고 협업중
* A라는 사람은 이번주에 배포하면 안돼는 코드를 작업 후
dev 로 머지했다
* dev 에 머지된 가장 최근의 commit 을 되돌려야 하는 상황
 

# 해결 방법

우선 나는 `상황1` 에서는 
그냥 프로젝트를 다시 clone 했다.

프로젝트를 그냥 써야하는 상황이라면
`git reset` 명령을 썼을 거 같다
(`git reset HEAD~1`=> 가장 최근 1개 커밋 reset => modify 상태로 변경)
예전에 시니어 개발자에게 해당 명령을 함부로 썼다고 
혼난 이후 잘 사용은 안하지만
커밋을 아예 취소하는 상황이기 때문에 
써야하는 상황인거 같다


`상황2`에서는 `git revert` 를 사용했다
gitLab을 주로 사용하는데
gitLab 에서 merge 이후
화면에 `[revert]` 버튼이 있다
이 버튼사용하면
새로운 머지 request 를 생성 => 머지하면
새로운 rever commit 이 자동 추가되며
이전 코드로 돌아온다
(자세한 내용은 참고3 클릭)


### 참고 글
[참고1](https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html)
[참고2](https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/)
[참고3-gitLab](https://docs.gitlab.com/ee/user/project/merge_requests/revert_changes.html)