

Gitlab에서 Github으로
Github에서 Github으로
복사 가능한 git 명령어

1. A repository 내용을 B repository로 복사한다
   *commit 포함
> github의 경우 100MB 이상의 커밋은 위의 방법으로 옮길 수 없다

- git bash 열고 test 폴더로 이동해 복사할 repository A를 복사
```git
$ cd test
$ git clone --bare [A주소]
```
- test안에 생성된[A 폴더]로 이동
- A를 B repository로 push
```git
$ cd [A 폴더]
$ git push --mirror [B주소]
```
- 임시 로컬 저장소A를 지우기
```git
$ cd ..
$ rm -rf [A 폴더]
```

### bare
### mirror


2. A라는 사람의 repository01를
   B라는 사림의 repository02에 복제
   *commit 포함 ?(user email이 같아야 보이는거 같음)



