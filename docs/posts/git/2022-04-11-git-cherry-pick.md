# 배경
1. 우리는 dev(개발계),staging(계발계2),master(운영) 브런치가 있다
2. dev 에 이슈는 올렸지만 운영 배포에 올라가지 못하는 이슈가 있다
3. 그 이슈의 commit 만 master 로 바로 올릴 수있다


# 방법 1 (cherry-pick a button)
git 의 origin 의 dev 브렌치와 같은 환경을 로컬에 받음
`-t`명령어로...
그 후에 dev 에서 branch 를 새로 생성 (#1)
작업
작업 후 commit 
git push origin #1
origin 의 #1 을 origin 의 dev 로 merge request
merge 이후 gitLab의 경우 cherry-pick 버튼 클릭
해당 commit 만 staging이나 master로 cherry-pick 가능

[gitLab docs](https://docs.gitlab.com/ee/user/project/merge_requests/cherry_pick_changes.html)

 # git cherry-pick
커밋을 선택적으로 브랜치에 적용시킬 때 사용한다.

```
 (master) 1 - 2 - 3 
               \
 (dev)          a - b - c
```
b commit 만 master 로 머지하기
`git cherry-pick (b 커밋)`