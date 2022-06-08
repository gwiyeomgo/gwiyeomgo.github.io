# 배경

요청수량: DB 3,500개

실제 가용 DB는 3,000개이나 결번 및 기존 후원자 중복 검사를 위해 3,500개 DB 추출을 요청드립니다.
DB 추출 조건

아름다운가게 2022년 1월~2022년 5월 25일, 물품기증 1~4회 기증자(전국)
~연령대: 35세~65세~
~성별: 여성~


개인정보 필요 항목

이름(기부자명)
휴대폰번호(010-0000-0000 형식)
생년월일
기증횟수
기부금영수증 발행여부(발행/미발행)
이메일주소
주소(상세주소포함)
우편번호


# group by having
https://m.blog.naver.com/kim87838/110157966081
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=battledocho&logNo=220034040242
 GROUP BY p_date,substationcode,ta.minbenchmark,ta.maxbenchmark
  HAVING COUNT(vfp.UnitsPass) BETWEEN ta.minbenchmark AND ta.maxbenchmark