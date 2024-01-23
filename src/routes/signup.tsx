import { Link } from "react-router-dom";
import { AuthForm, FormItem, SubmitBtn } from "../components/styleShare";

const SignupPage = () => {
  let Input = "w-80 border border-solid rounded-md p-2";

  return (
    <div className="w-full mt-40 flex flex-col items-center">
      <form className={AuthForm}>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM</p>
        </div>
        <p className="text-center mt-4">
          동아리 가입원서를 내고 싶으신 분은 
          <Link to="/register" className="text-blue-600"> 여기를 누르세요!</Link>
        </p>
        <div className="flex items-center gap-14 mt-7 justify-center">
          <label htmlFor="소속" className="text-lg">소속</label>
          <select className={Input} name="소속" id="소속" required>
            <option value="" defaultChecked disabled>--소속을 골라주세요--</option>
            <option value="Pan's PM" >Pan's PM</option>
            <option value="타 동아리" >타 동아리</option>
            <option value="어느 동아리도 아님" >어느 동아리도 아님</option>
          </select>
        </div>
        <div className={FormItem}>
          <label htmlFor="기수" className="text-lg">기수</label>
          <input className={Input} type="text" name="기수" id="기수" placeholder="Pan's PM 멤버만 입력하세요." />
        </div>
        <div className={FormItem}>
          <label htmlFor="성명" className="text-lg">성명</label>
          <input className={Input} type="text" name="성명" id="성명" required />
        </div>
        <div className="flex items-center gap-10 justify-center mt-4">
          <label htmlFor="id" className="text-lg">아이디</label>
          <input className={Input} type="text" name="id" id="id" required />
        </div>
        <div className="flex items-center gap-6 justify-center mt-4">
          <label htmlFor="password" className="text-lg">비밀번호</label>
          <input className={Input} type="password" name="password" id="password" required />
        </div>
        <div className="flex items-center gap-10 justify-center mt-4">
          <label htmlFor="email" className="text-lg">이메일</label>
          <input className={Input} type="email" name="email" id="email" required />
        </div>
        <div className={FormItem}>
          <button className={SubmitBtn} type="submit">회원가입</button>
        </div>
      </form>
    </div>  
  );
}

export default SignupPage;