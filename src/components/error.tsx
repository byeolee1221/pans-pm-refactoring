import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center w-full h-screen items-center">
      <div className="flex items-center gap-x-3 justify-center">
        <img src="error.png" alt="404 에러 이미지" />
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl text-blue-400">404 ERROR</h1>
      </div>
      <div className="mt-4 flex justify-center">
        <ul className="flex flex-col gap-y-4 text-lg">
          <li>💡 페이지를 찾을 수 없습니다.</li>
          <li>💡 입력하신 URL을 확인해주세요.</li>
          <li>💡 필요시 문의메일을 통해 문의해주세요.</li>
        </ul>
      </div>
      <button onClick={onClick} className="px-5 py-2 bg-[#dee2e6] hover:bg-[#ced4da] rounded-md mt-5 font-bold w-72">메인으로 돌아가기</button>
    </div>
  )
}

export default Error;