import UserInfo from "@/components/mypage/userInfo";

const Mypage = () => {
  let titleClass = "before:h-[30rem] before:w-full before:content-[''] before:bg-slate-800 before:absolute before:top-0 before:left-0 before:opacity-50 w-full h-[30rem] bg-[url('./activity4.jpg')] bg-cover bg-center flex flex-col items-center justify-center";

  return (
    <div className="min-h-dvh w-full">
      <div className={titleClass}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white z-10 font-bold mt-24 mb-4">마이페이지</h1>
        <p className="text-white text-md sm:text-lg md:text-lg z-10">개인정보 관리는 여기서 해주세요!</p>
      </div>
      <div className="w-full">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl space-y-5 font-bold mt-20 mb-16">계정 관리</h2>
        <div className="w-full md:w-[34rem] m-auto mb-32">
          <UserInfo />
        </div>
      </div>
    </div>  
  );
}

export default Mypage;