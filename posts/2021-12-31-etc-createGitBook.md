---
 gitbook 설치

1.버전 확인
	1. node.js 설치 
			
			1.gitbook init 하다가 아래와 같은 에러 발생하면
			```
			$ gitbook init
			warn: no summary file in this book
			info: create SUMMARY.md

			TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Promise

			```
			node 버전을 바꿔야 한다.	(이때 nvm을 사용해서 변환해주면 쉽게 변경할 수 있다)
			`Switch back from latest node version to 12.18.1 LTS.`


			[참조0](https://stackoom.com/en/question/4AD2n)
			[nvm설치방법](https://ahn3330.tistory.com/45)
	

	2. gitbook `npm install gitbook-cli -g` 설치
			
			1. `TypeError: Cannot read property 'pipesCount' of undefined`에러를 만나면
			`npm install gitbook-cli@2.1.2 --global`로 다시 설치
			[참조1](https://github.com/GitbookIO/gitbook-cli/issues/113)
			
			2.`TypeError: cb.apply is not a function`과 같은 에러 발생한다면
			`npm root -g`로 node_modules 위치를 찾고 이동( your global npm installation path)
			
			그후 다시 `cd gitbook-cli/node_modules/npm/node_modules/` 이동
			이동 후 graceful-fs 를 최신버전으로 설치
			
			`npm install graceful-fs@latest --save`설치해도 에러난다면 ` graceful-fs@4.2.0` 설치

			[참조2](https://stackoverflow.com/questions/64211386/gitbook-cli-install-error-typeerror-cb-apply-is-not-a-function-inside-graceful)
			[참조2-1](https://jojoldu.tistory.com/598)	

			
---

# 0.gitbook 파일 생성 후 github repository 생성하기

cd c:/gitBooks
gitbook init blog(=생성할 gitbook folder name )
cd blog

---

# 1.최소 설정
git init

# 2.master로 체크아웃해서 필요한 코드 추가
# master branch에 publish file 추가하기
# README.md , SUMMARY.md 


git add .
git commit -m "first commit"
git branch -M master


git remote add origin https://{github id}:{인증키}/{github id}/developmentRecords.git

git push -u origin master

git checkout -b gh-pages

git checkout master

# 3.gh-pages branch를 git repository에 추가한다.


---
# 4 publish 파일 실행 
	[publish 파일 출처](https://beomi.github.io/2017/11/20/Deploy-Gitbook-to-Github-Pages/)
	[위 출처에서 말하는 docs로 gitbook 만드는 방법](https://blog.psangwoo.com/coding/2018/01/31/gitbook-on-windows.html)

	아래 파일은 gh-pages로 gitbook 만드는 shell 명령이다.
	해당파일을 매번 master에서 실행시켜 변경된 내용이 gh-pages에 업데이트 할 수 있다

	```
	# gitbook 의존 파일을 설치하고 gitbook 빌드를 돌린다.
	gitbook install && gitbook build

	# github pages가 바라보는 gh-pages 브랜치를 만든다.
	git checkout gh-pages

	# 최신 gh-pages 브랜치 정보를 가져와 rebase를 진행한다.
	git pull origin gh-pages --rebase

	# gitbook build로 생긴 _book폴더 아래 모든 정보를 현재 위치로 가져온다.
	cp -R _book/* .

	# node_modules폴더와 _book폴더를 지워준다.
	git clean -fx node_modules
	git clean -fx _book

	# NOQA
	git add .

	# 커밋커밋!
	git commit -a -m "Update docs"

	# gh-pages 브랜치에 PUSH!
	git push origin gh-pages

	# 다시 master 브랜치로 돌아온다.
	git checkout master


	```


