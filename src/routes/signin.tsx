import { useNavigate } from "react-router-dom";
import { AuthForm, Error, SubmitBtn } from "../components/styleShare";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// 로그인 컴포넌트
const SigninPage = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 이메일, 비밀번호 입력 값
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    };
  };

  // 로그인 버튼을 누르면 실행되는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || email === "" || password === "") {
      return;
    };

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code === "auth/invalid-credential") {
          setError("이메일이나 비밀번호를 다시 확인해주세요.");
        };
      }
    } finally {
      setLoading(false);
    };
  };

  return (
    <div className="w-full min-h-dvh mt-40 mb-56 flex flex-col items-center">
      <form onSubmit={onSubmit} className={AuthForm}>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM</p>
        </div>
        <div className="flex items-center gap-2 md:gap-8 justify-center mt-8 px-1 md:px-0">
          <label htmlFor="email" className="text-sm md:text-lg w-20 md:w-auto">이메일</label>
          <input onChange={onChange} className="w-80 border border-solid rounded-md p-2" type="email" name="email" id="email" required />
        </div>
        <div className="flex items-center gap-2 md:gap-4 justify-center mt-4 px-1 md:px-0">
          <label htmlFor="password" className="text-sm md:text-lg w-20 md:w-auto">비밀번호</label>
          <input onChange={onChange} className="w-80 border border-solid rounded-md p-2" type="password" name="password" id="password" required />
        </div>
        {error !== "" ? <span className={Error}>{error}</span> : null}
        <div className="flex items-center gap-6 justify-center mt-4">
          <button className={SubmitBtn} type="submit">{isLoading ? "로그인중..." : "로그인"}</button>
        </div>
      </form>
    </div>  
  );
}

export default SigninPage;