import { useNavigate } from "react-router-dom";

// 동아리 가입신청자료 제출 시 이동하여 화면에 띄우는 컴포넌트
const RegisterSuccess = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="mt-40 w-full m-auto flex flex-col items-center justify-center min-h-dvh">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
        <p className="text-4xl font-bold">PAN'S PM</p>
      </div>
      <h1 className="font-bold text-3xl mb-4">가입원서 제출이 완료되었습니다.</h1>
      <p className="">확인 후 제공하신 연락처로 연락드리겠습니다. 감사합니다^^</p>
      <button onClick={onClick} className="font-bold px-12 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg mt-4">돌아가기</button>
    </div>  
  );
}

export default RegisterSuccess;