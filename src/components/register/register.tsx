import { SubmitBtn } from "../styleShare";

const Register = () => {
  let titleClass = "before:h-[30rem] before:w-full before:content-[''] before:bg-slate-800 before:absolute before:top-0 before:left-0 before:opacity-50 w-full h-[30rem] bg-[url('./activity6.jpg')] bg-cover bg-center flex flex-col items-center justify-center";
  let inputClass = "w-96 border border-solid rounded-md p-2 mt-4";

  return (
    <div className="w-full">
      <div className={titleClass}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white z-10 font-bold mt-24 mb-4">동아리 가입신청</h1>
        <p className="text-white text-md sm:text-lg md:text-lg z-10">제출하시면 현 회장 또는 부회장이 며칠 내 연락드리겠습니다.</p>
      </div>
      <div className="w-full">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl space-y-5 font-bold mt-20 mb-10">동아리 가입원서</h2>
        <form className="w-[32rem] h-auto m-auto flex flex-col gap-3 items-center border-2 border-solid border-slate-600 rounded-lg mb-16 pb-8">
          <div className="flex items-center gap-3 mt-4">
            <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
            <p className="text-4xl font-bold">PAN'S PM</p>
          </div>
          <input className={inputClass} type="text" name="name" placeholder="성명" required />
          <input className={inputClass} type="number" name="age" placeholder="나이" required />
          <div className={inputClass}> 
            <div className="flex items-center justify-around w-full">
              <div className="flex items-center gap-2">
                <input type="radio" id="남자" name="gender" value="남자" />
                <label htmlFor="남자">남자</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" id="여자" name="gender" value="여자" />
                <label htmlFor="여자">여자</label>
              </div>
            </div>
          </div>
          <input className={inputClass} type="tel" name="tel" placeholder="연락처" required />
          <input className={inputClass} type="text" name="part" placeholder="원하는 파트(ex. 드럼, 보컬, 기타, 베이스, 키보드)" required />
          <input className={inputClass} type="text" name="army" placeholder="군입대 희망시기" />
          <p className="text-center w-96">밴드동아리 특성상 신입-현역(2년)단계로 이뤄지기에 군입대 시기에 관한 정보가 필요합니다.</p>
          <input className={inputClass} type="genre" name="genre" placeholder="좋아하는 음악장르" />
          <input className={inputClass} type="musician" name="musician" placeholder="좋아하는 뮤지션" />
          <button type="submit" className={SubmitBtn}>제출하기</button>
        </form>
      </div>
    </div>  
  );
}

export default Register;