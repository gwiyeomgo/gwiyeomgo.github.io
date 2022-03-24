

# 배경

최근 관리자가 보는 admin을 개선하기 위해
오픈 소스로 만든 admin을 checkout 받아서 진행했다.
그 오픈 소스는 docker를 사용하는데 docker를 어떻게 쓰는건지 하나도 모르겠다.
docker에 관해서 조사하고 알게된 사실을 기록하려고 한다.

# docker란?
```
Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
```
도커는 플렛폼의 세트다
서비스로써 
가상화를 사용하는
소프트웨어를 제공하기 위해 
컨테이너라고 불리는 패키지로 

# Containers?
```
Instead of abstracting the hardware, containers abstract the OS. Each container technology features an explicit purpose, limiting the scope of the technology. Docker’s runs Linux, whereas Citrix’s XenApp runs Windows Server. Every container shares the exact same OS, reducing the overhead to the host system. Recall each VM runs its own copy of the OS, adding overhead for each instance.

Containers exist to run a single application.
```

# docker로 뭐하지?
```
Use containers to Build, Share and Run your applications
```
containers를 사용한다 
당신의 applications를 build,share,run 하기에 
* Software build 
```
In software development, a build is the process of converting source code files into standalone software artifact(s) that can be run on a computer, or the result of doing so.
```
* Share

* Run

필자는 도커에 대해 알지 못했고
우선 오픈소스를 체크아웃 받아서 실행(run)시키는 것이 목표였다.
데이터베이스에 연결하지 않은 상황에서도 실행되었다.
코드를 작성하지 않은 필자에게도 쉽게 공유가 가능하다고 느꼈다.

# docker에 db설정은 어떻게 하지?

# 왜 docker 써야해? Why use Docker
```
why use Docker rather than VMware or Oracle’s VirtualBox?
```
아 docker가 VMare나 Oracle에 VirualBox랑 비슷한가?

쿠버네티스는 도커를 관리하는

virtual os 까지 가상화 에 대안이 컨테이너 ,같은 os 위에서 여러 컨테이너에서 사용하고 이 서비스가 도커,쿠버네티스는 도커를 관리하는


프로젝트마다 언어 버전 달라도 배포 관리가 줄어든다.


도커배포방법
1.이미지 만듬
	이미지는 도커내에서 받음 ( mysql 등 리소스는 도커가 있음 docker pull 있는지 확인 docker search 이미지)
	도커에서 실행될 수 있는 형태로 이미지로 변경 

소스 => 이미지 만듬

이미지를 도커 run 한다

컨테이너를 띄움


AWS ElasticBeanstaclk  올린다 = 서버 1개 

virtual os 까지 가상화 에 대안이 컨테이너 ,같은 os 위에서 여러 컨테이너에서 사용하고 이 서비스가 도커


