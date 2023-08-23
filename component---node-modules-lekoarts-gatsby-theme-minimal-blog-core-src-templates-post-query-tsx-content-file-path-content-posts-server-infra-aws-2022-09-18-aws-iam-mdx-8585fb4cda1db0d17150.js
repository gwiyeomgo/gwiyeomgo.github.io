"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1427],{8461:function(e,n,l){l.r(n),l.d(n,{Head:function(){return s.F},default:function(){return m}});var t=l(7294),a=l(1151);function c(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",pre:"pre"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"배경"),"\n",t.createElement(n.p,null,"회사에서는 인프라 담당자가 aws 를 관리해서 IAM 계정을 요청드리면 되지만..\n회사 계정이고 비용이 발생할 수 있기 때문에\n계인계정을 만들어서 test 해보려고 한다"),"\n",t.createElement(n.p,null,"나는 인프라를 잘 모르니까 aws 를 함부로 써서 비용이 발생할까봐 무섭다\n그래서 가입,용어정리 하나씩 기록하면서 진행해보려고 한다"),"\n",t.createElement(n.h1,null,"aws 계정만들기"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"aws 프리티어"),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://aws.amazon.com/ko/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"},"https://aws.amazon.com/ko/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://www.appletong.com/entry/%EC%95%84%EB%A7%88%EC%A1%B4-AWS-%EB%AC%B4%EB%A3%8C-%EA%B3%84%EC%A0%95-%EB%A7%8C%EB%93%A4%EA%B8%B0"},"https://www.appletong.com/entry/%EC%95%84%EB%A7%88%EC%A1%B4-AWS-%EB%AC%B4%EB%A3%8C-%EA%B3%84%EC%A0%95-%EB%A7%8C%EB%93%A4%EA%B8%B0")),"\n",t.createElement(n.li,null,"연락처정보 => 개인_자체 프로젝트"),"\n",t.createElement(n.li,null,"결재정보,휴대번호 등 입력"),"\n",t.createElement(n.li,null,"100원결재후 취소됨"),"\n"),"\n",t.createElement(n.p,null,"*root 로 들어감 > 계정"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"계정ID"),"\n",t.createElement(n.li,null,"regin 을 서울 => ap-northeast-2"),"\n"),"\n",t.createElement(n.h1,null,"ima 계정 생성"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"iam 비용발생?"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"AWS Identity and Access Management(IAM)"),"\n",t.createElement(n.li,null,"AWS 리소스에 대한 액세스를 안전하게 제어할 수 있도록 지원하는 AWS 서비스"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"IAM은 추가 비용 없이 사용할 수 있는 AWS 서비스")),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/security-iam.html")),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"iam>액세스관리>사용자>사용자추가\n*",t.createElement(n.code,null," 이름 :{이름}")),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"aws 자격 증명 유형 선택 => 액세스 키 – 프로그래밍 방식 액세스"),"\nAWS API, CLI, SDK 및 기타 개발 도구에 대해 액세스 키 ID 및 비밀 액세스 키 을(를) 활성화합니다.\n*",t.createElement(n.code,null,"권한설정 > 권한 없는상태로 >다음:태그 클릭(선택사항으로 패스) >다음:검토 클릭 >사용자 세부정보 눈으로 보고 > 사용자만들기")),"\n",t.createElement(n.li,null,"중요!! 지금이 이 자격 증명을 다운로드할 수 있는 마지막 기회 !!!\ncsv 파일을 다운받고 잘 관리!!!"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"User name,Password,Access key ID,Secret access key,Console login link")),"\n"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,t.createElement(n.code,null,"arn:aws:iam::{계정ID}:user/{이름}")),"\n"),"\n"),"\n",t.createElement(n.h1,null,"ima 계정에 assume 인라인 정책 추가"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"ima>사용자>방금 생성한 사용자 이름 클릭"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"인라인 정책 추가"),"\n",t.createElement(n.li,null,"서비스: AWS Security Token Service(STS)","\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"STS 비용발생?"),"\n",t.createElement(n.li,null,"작업:쓰기\n*리소스:모든리소스\n*",t.createElement(n.code,null,"정책검토> 이름:allow-assume-role>정책생성"),"\n생성된 권한의 json 정보를 보면\n사용자 ARN : ",t.createElement(n.code,null,"arn:aws:iam::{계정ID}:user/{User name}")),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,'{\n"Version": "2012-10-17",\n"Statement": [\n    {\n        "Sid": "VisualEditor0",\n        "Effect": "Allow",\n        "Action": "sts:AssumeRole",\n        "Resource": "*"\n    }\n]\n}\n')),"\n",t.createElement(n.h1,null,"iam 역할 추가"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"액세스 관리 > 역할 > 역할 만들기","\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"AWS 계정 클릭,이 계정"),"\n",t.createElement(n.li,null,"권한 정책 ->  사용할 기능 선택 ex) sqs 검색 후 AmazonSQSFullAccess 선택"),"\n",t.createElement(n.li,null,"역할 이름,설명 을 추가하고 역할 생성"),"\n"),"\n"),"\n"),"\n",t.createElement(n.h1,null,"로컬에서 실행하기 aws cli 설정"),"\n",t.createElement(n.p,null,"*",t.createElement(n.code,null,"aws cli")," 를 설치\n",t.createElement(n.code,null,"> https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions")),"\n",t.createElement(n.p,null,"*aws cli"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"window 의 경우 git bash 에서 아래 명령어 실행","\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"aws configure")," 실핼하고 아래 값을 입력 (공백 입력되지 않도록 주의)"),"\n",t.createElement(n.li,null,"access key ID, secret access key,region,format 입력(region:ap-northeast-2,format:json)"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"aws configure list"),"  로 목록 확인"),"\n",t.createElement(n.li,null,"연결 test"),"\n"),"\n"),"\n"),"\n",t.createElement(n.p,null,"(참고)"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"profile 을 설정하여 여러 계정을 관리","\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"aws configure --profile gwiyeom")," 실행하고 위와 같이 설정"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"aws configure  list --profile gwiyeom")," 목록 확인"),"\n",t.createElement(n.li,null,"연결 ",t.createElement(n.code,null,"aws s3 ls --profile gwiyeom")),"\n"),"\n"),"\n"),"\n",t.createElement(n.h1,null,"aws cli 에 설정한 계정에 특정 역할을 부여 (임시 자격 증명서 발급)"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"aws sts assume-role \\ --role-arn {IAM 역할 중 할당할 역할의 ARN ex) arn:aws:iam::{7자리}:role/{역할이름}} --role-session-name {my session name }"),"\n명령어를 입력시 json 값을 반환\n=>임시 자격 증명서 발급"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,'{\n    "Credentials": {\n        "AccessKeyId": "",\n        "SecretAccessKey": "",\n        "SessionToken": "",\n        "Expiration": "2022-09-17T21:12:57+00:00"\n    },\n    "AssumedRoleUser": {\n        "AssumedRoleId": "{ }:{my session name}",\n        "Arn": "arn:aws:sts::{7자리}:assumed-role/{역할이름}/{my session name}"\n    }\n}\n\n\n')),"\n",t.createElement(n.h1,null,"임시 자격 증명서 발급 에 나와있는 값을 aws cli 에 다시 설정"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"aws configure set aws_access_key_id {AccessKeyId 문자열}\naws configure set aws_secret_access_key {SecretAccessKey 문자열}\naws configure set aws_session_token {SessionToken 문자열}\n")),"\n",t.createElement(n.h1,null,"sqs 에 접근되는지 확인"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"aws sqs list-queues")),"\n",t.createElement(n.h1,null,"참고"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://www.daleseo.com/aws-cli-configure/"},"https://www.daleseo.com/aws-cli-configure/"),"\n",t.createElement(n.a,{href:"https://aws.amazon.com/ko/blogs/korea/tips-aws-cli/"},"https://aws.amazon.com/ko/blogs/korea/tips-aws-cli/"),"\n",t.createElement(n.a,{href:"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85"},"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85"),"\n",t.createElement(n.a,{href:"https://us-east-1.console.aws.amazon.com/iamv2/home?region=ap-northeast-2#/home"},"https://us-east-1.console.aws.amazon.com/iamv2/home?region=ap-northeast-2#/home"),"\n",t.createElement(n.a,{href:"https://docs.aws.amazon.com/es_es/cli/latest/reference/sqs/list-queues.html"},"https://docs.aws.amazon.com/es_es/cli/latest/reference/sqs/list-queues.html")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},s=l(8804);function m(e){return t.createElement(s.Z,e,t.createElement(r,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-infra-aws-2022-09-18-aws-iam-mdx-8585fb4cda1db0d17150.js.map