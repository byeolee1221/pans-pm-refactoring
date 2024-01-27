// 세션유지 시간 대기시간과 리액트 코드 실행 속도를 맞추기 위한 로딩화면 컴포넌트 
const LoadingScreen = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src="./logo.jpg" alt="동아리 로고" className="w-24 rounded-full" />
    </div>  
  );
}

export default LoadingScreen;