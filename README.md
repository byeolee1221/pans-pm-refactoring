# Pan's PM 동아리 웹사이트 리팩토링

## 프로젝트 소개
* 제작 계기: 동아리의 오프라인 홍보활동의 한계점을 극복하고, 좀 더 편리한 신입생 모집을 위해 만들게 되었습니다. 또한, 코드개선의 필요성을 절실히 느껴 firebase 및 리액트의 전반적인 부분을 더 공부하여 리팩토링하게 되었습니다.
* 웹사이트가 기여할 수 있는 점
  + 동아리에 관심있었던 사람이 동아리에 대해 신중히 판단할 수 있도록 해주고, 그 이후에 가입원서를 제출할 수 있어서 동아리의 홍보 및 문서업무면에서 효율성을 높여줍니다.
  + 장기적으로 동아리의 활동영역이 폐쇄적인 네이버카페에서 개방된 독립 웹사이트로 확대되는 기대를 할 수 있습니다.
  + 동아리 멤버뿐 아니라 타 동아리나 소속이 없는 사람도 가입이 가능하여 동아리를 널리 전파하고 알아가는 데 기여할 수 있습니다.
* 제작 기간: 2024.01.23 ~ 2024.02.04
* 제작 인원: 1명 (프론트엔드 - 문창기)
* 웹사이트: https://pans-pm.web.app
* 사용 기술스택
  + 프론트엔드: 
  ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
  ![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) 
  ![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) 
  ![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white)
  + 백엔드 및 호스팅:
  ![](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)

## 시작 가이드
### 요구사항
* React 18.2.0
* React router dom 6.21.3
* vite 5.0.8
* Typescript 5.2.2
* Tailwind CSS 3.4.1
* Firebase 10.7.2

### 설치
```
$ git clone https://github.com/byeolee1221/pans-pm-refactoring.git
$ cd pans-pm-refactoring
$ npm install
$ npm run dev
```

## 화면 구성
|메인페이지|소개페이지|
|:---:|:---:|
|<img src="/public/mainpage.png" width="400" height="400">|<img src="/public/introducePage.png" width="400" height="400">|
|동아리 가입페이지|판스TALK 페이지|
|<img src="/public/registerPage.png" width="400" height="400">|<img src="/public/pansTalkPage.png" width="400" height="400">|
|회원가입 페이지|로그인 페이지|
|<img src="/public/signupPage.png" width="400" height="400">|<img src="/public/signinPage.png" width="400" height="400">|
|마이페이지|관리자 페이지|
|<img src="/public/mypage.png" width="400" height="400">|<img src="/public/managePage.png" width="400" height="400">|
|관리자 페이지 대시보드|
|<img src="/public/manageDashboard.png" width="400" height="400">|

## 주요기능
### 동아리 가입신청 기능
* 실제 오프라인 가입원서 양식의 기입요소를 모두 포함한 온라인 가입원서 제공
* 실시간으로 관리자 대시보드와 상호작용되므로 매 현역기수 관리자에게 편리한 관리환경 제공
### 판스TALK
* 동아리에 대해 알아보기 위해 방문한 유저에게 동아리의 분위기를 파악할 수 있도록 합니다.
* 웹사이트에 가입한 회원들에게 또다른 소식전달의 공간을 제공
### 계정 관리
* 웹사이트에서 활동할 때의 명칭인 닉네임의 변경기능, 비밀번호 변경기능, 계정 삭제기능 제공
### 관리자 페이지
* 매 현역기수의 관리자 권한을 받은 회장, 부회장에게 온라인으로 접수된 동아리 가입신청 내용을 편하게 확인할 수 있도록 합니다.
* 웹사이트에 가입된 회원 현황을 한눈에 확인할 수 있는 환경 제공 

## 주요기능별 시퀀스 다이어그램
* 동아리 가입신청
![Alt text](/public/registerSequence.png)
* 판스TALK
![Alt text](/public/panstalkSequence.png)
* 계정 관리
![Alt text](/public/mypageSequence.png)
* 관리자페이지
![Alt text](/public/manageSequence.png)

## 기존 웹사이트에서 달라진 점
* 기존 웹사이트 주소: https://byeolee1221.github.io/
* 기존 웹사이트 프로젝트 Github 주소: https://github.com/byeolee1221/panspm-project
* 달라진 점
  + css 모듈에서 tailwindCSS로 변경 적용하였습니다.
  + 일부 컴포넌트에서 tailwindCSS 기반의 shadcn-UI을 적용하였습니다.
  + 전반적인 레이아웃의 디자인을 깔끔하고 가독성 좋게 수정하였습니다.
  + 메인페이지의 영상을 없애고 사진 및 로고로 대체하여, 초기 로딩속도를 0.1초 단축하였습니다.
  + 동아리 가입신청 자료를 확인할 방법이 DB에서 직접 보는 것이었는데, 이를 관리자페이지를 추가하여 권한 확인 후 바로 확인할 수 있도록 수정하였습니다.
  + 로그인, 로그아웃 및 계정관리 로직이 엉성하여 보안에 허점이 굉장히 많았는데, 이를 Firebase Authentication, Firestore DB를 이용하여 우려했던 사항들을 상당부분 해소하였습니다.
  + Firebase 및 구글 클라우드 API의 보안규칙을 배포 전 모두 수정하여 외부에서 중요 데이터를 확보하지 못하도록 하였습니다.
  + 기존에는 동아리 가입신청 외 즐길거리가 전혀 없었는데, 판스TALK를 추가하여 웹사이트 내에서 회원끼리 소식을 주고받을 수 있도록 하였습니다.
  + 전반적으로 타입스크립트를 적용하였습니다.
  + 규모 대비 불필요했던 전역상태관리 라이브러리의 사용 대신 규모에 맞는 상태관리 방식으로 변경하였습니다.

## 프로젝트 진행과정에서 생긴 문제와 해결방법
* 문제 1: panstalk 게시글 수정 로직에서 기존 글을 덮어쓰는 setDoc 함수에 photo를 추가하면 게시글이 수정이 안되고 제거하면 수정이 잘 되는 문제가 발생했습니다.
  + 해결: 게시글에 사진이 없는 경우도 있기에 이 부분을 별도로 구현했습니다. photo가 있다면 파일의 url을 참조하여 새로운 내용의 게시글에 병합하여 해결했습니다.

* 문제 2: Firebase 요금제 제한에 의해 회원가입한 유저가 가입시 입력한 이메일, 비밀번호 외 정보를 참조하기가 쉽지 않아 유저정보를 참조해야 할 컴포넌트의 내용이 비어있는 문제가 발생했습니다.  
  + 해결: 유저가 가입시 입력한 닉네임, 성명, 생성일, 소속 정보를 db의 users 컬렉션에 추가하는 방식을 사용하여 유저정보를 참조하였습니다.

* 문제 3: 닉네임 변경시의 중복확인 로직을 만들 때, db 내의 닉네임을 getDoc 함수로 참조하고자 했으나, 경로설정이 불가능하여 DB 내에 존재하는 닉네임으로 정상 변경되는 문제가 발생했습니다.
  + 해결: 컬렉션의 모든 자료들을 조회할 수 있는 getDocs 함수를 사용하여 새로 입력한 닉네임이 DB 내에 존재하는지 여부를 확인하여 해결하였습니다.

* 문제 4: 계정 삭제시에 이메일과 비밀번호만 맞으면 삭제가 되어 보안적인 면이 약한 문제가 있었습니다.
  + 해결: 사용자가 계정 삭제시에 한번 더 입력하는 이메일과 비밀번호로 인증 정보를 생성하고 사용자를 재인증하는 과정을 거쳐 삭제되도록 수정하였습니다.

* 문제 5: 관리자계정에 role을 부여하여 admin인 사람만 관리자 페이지에 들어갈 수 있도록 하려했으나, 요금제 제한에 의해 부여된 role을 참조하지 못하는 문제가 있었습니다.
  + 해결: 로그인한 유저의 관리자페이지 접근은 가능하도록 하되, 내부 데이터로 입장하기 위해서는 오프라인으로 관리자계정 주인에게 제가 직접 알려준 코드를 입력하도록 하여 권한 확인을 거치도록 하였습니다.      
