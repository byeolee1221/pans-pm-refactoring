# Pan's PM 동아리 웹사이트 리팩토링

## 프로젝트 소개
* 제작 계기: 동아리의 오프라인 홍보활동의 한계점을 극복하고, 좀 더 편리한 신입생 모집을 위해 만들게 되었습니다. 또한, 코드개선의 필요성을 절실히 느껴 firebase 및 리액트의 전반적인 부분을 더 공부하여 리팩토링하게 되었습니다.
* 제작 기간: 2024.01.23 ~ 
* 제작 인원: 1명 (프론트엔드 - 문창기)
* 웹사이트: https://pans-pm.web.app
* 사용 기술스택
 + 프론트엔드: 
  ![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white) 
  ![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white) 
  ![](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white)
 + 백엔드 및 DB, 호스팅:
  ![](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)

## 주요기능별 시퀀스 다이어그램
* 동아리 가입신청
![Alt text](/public/registerSequence.png)
* 판스TALK

* 계정 관리

## 기존 웹사이트에서 달라진 점
* 기존 웹사이트 주소: https://byeolee1221.github.io/
* 기존 웹사이트 프로젝트 Github 주소: https://github.com/byeolee1221/panspm-project
* 달라진 점
  + css 모듈에서 tailwindCSS로 변경 적용하였습니다.
  + 일부 컴포넌트에서 tailwindCSS 기반의 shadcn-UI을 적용하였습니다.
  + 전반적인 레이아웃의 디자인을 깔끔하고 가독성 좋게 수정하였습니다.
  + 메인페이지의 영상을 없애고 사진 및 로고로 대체하여, 초기 로딩속도를 0.1초 단축하였습니다.
  + 동아리 가입신청 자료를 확인할 방법이 DB에서 직접 보는 것이었는데, 이를 관리자페이지를 추가하여 권한 확인 후 바로 확인할 수 있도록 수정하였습니다.
  + 로그인, 로그아웃 및 계정관리 로직이 엉성하여 보안에 헛점이 굉장히 많았는데, 이를 Firebase Authentication, Firestore DB를 이용하여 헛점을 모두 보완하였습니다.
  + Firebase 및 구글 클라우드 API의 보안규칙을 배포 전 모두 수정하여 외부에서 중요 데이터를 확보하지 못하도록 하였습니다.
  + 기존에는 동아리 가입신청 외 즐길거리가 전혀 없었는데, 판스TALK를 추가하여 웹사이트 내에서 회원끼리 소식을 주고받을 수 있도록 하였습니다.
  + 전반적으로 타입스크립트를 적용하였습니다.
  + 규모 대비 불필요했던 전역상태관리 라이브러리의 사용 대신 규모에 맞는 상태관리 방식으로 변경하였습니다.

## Pan's PM 동아리 웹사이트가 기여할 수 있는 점
* 동아리에 관심있었던 사람이 동아리에 대해 신중히 판단할 수 있도록 해주고, 그 이후에 가입원서를 제출할 수 있어서 동아리의 홍보 및 문서업무면에서 효율성을 높여줍니다.
* 장기적으로 동아리의 활동영역이 폐쇄적인 네이버카페에서 개방된 독립 웹사이트로 확대되는 기대를 할 수 있습니다.
* 동아리 멤버뿐 아니라 타 동아리나 소속이 없는 사람도 가입이 가능하여 동아리를 널리 전파하고 알아가는 데 기여할 수 있습니다.

## 프로젝트 진행과정에서 생긴 문제와 해결방법
