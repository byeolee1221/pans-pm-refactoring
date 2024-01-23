import { AuthForm, SubmitBtn } from "../components/styleShare";

const SigninPage = () => {
  return (
    <div className="w-full mt-40 flex flex-col items-center">
      <form className={AuthForm}>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM</p>
        </div>
        <div className="flex items-center gap-10 justify-center mt-8">
          <label htmlFor="email" className="text-lg">이메일</label>
          <input className="w-80 border border-solid rounded-md p-2" type="email" name="email" id="email" required />
        </div>
        <div className="flex items-center gap-6 justify-center mt-4">
          <label htmlFor="password" className="text-lg">비밀번호</label>
          <input className="w-80 border border-solid rounded-md p-2" type="password" name="password" id="password" required />
        </div>
        <div className="flex items-center gap-6 justify-center mt-4">
          <button className={SubmitBtn} type="submit">로그인</button>
        </div>
      </form>
    </div>  
  );
}

export default SigninPage;