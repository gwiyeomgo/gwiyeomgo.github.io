# 배경
코드를 main에 잘 머지시키고 젠킨스에서 배포버튼을 클릭했다.
그런데...
배포 실패했다.
그래서 consle 에 메세지를 확인했다.
에러는 2개이다.
> <에러1> =>해결방법 찾아보니  https://satisfactoryplace.tistory.com/251
```11:21:58 ERROR: Couldn't find any revision to build. Verify the repository and branch configuration for this job.
11:21:58 Publish artifacts to S3 Bucket Build is still running
11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy
11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed
```
> <에러2> => 해결방법 찾아보니 https://huskdoll.tistory.com/484
```11:21:58 ERROR: Couldn't find any revision to build. Verify the repository and branch configuration for this job.
11:21:58 Publish artifacts to S3 Bucket Build is still running
11:21:58 Publish artifacts to S3 Bucket Using S3 profile: S3 Deploy
11:21:58 Publish artifacts to S3 Bucket Skipping publishing on S3 because build failed
```
둘다 devops를 담당하는 동료분께 요청드렸고
젠킨스 설정을 변경하셨다고 한다.

개발은 끝냈는데 배포 못하니까 답답하더라..
이참에 젠킨스에 관해서 공부하고 기록하려고 한다.

# 젠킨스는 뭐지
