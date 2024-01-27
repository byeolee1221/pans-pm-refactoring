import MainIntroduce from "./mainIntroduce";
import MainOtherLink from "./mainOtherLink";
import MainSubInfo from "./mainSubInfo";

// 메인페이지 구성 컴포넌트
const MainPage = () => {
  return (
    <>
      <MainIntroduce />
      <MainSubInfo />
      <MainOtherLink />
    </>  
  );
}

export default MainPage;