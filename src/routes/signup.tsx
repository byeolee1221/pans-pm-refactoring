import { Link, useNavigate } from "react-router-dom";
import { AuthForm, Error, FormItem, SubmitBtn } from "../components/styleShare";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

const SignupPage = () => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [affiliation, setAffiliation] = useState("");
  const [ordinal, setOrdinal] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAffiliation(e.target.value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;
    
    if (name === "ordinal") {
      setOrdinal(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLoading || affiliation === "" || name === "" || id === "" || password === "" || email === "") {
      return;
    };

    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(credentials.user);

      await updateProfile(credentials.user, {
        displayName: id
      });

      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code === "auth/email-already-in-use") {
          setError("이미 가입된 이메일입니다.");
        } else if (e.code === "auth/weak-password") {
          setError("비밀번호는 6자 이상이어야 합니다.");
        };
      }
    } finally {
      setLoading(false);
    }
  }

  let Input = "w-80 border border-solid rounded-md p-2";

  return (
    <div className="w-full mt-40 flex flex-col items-center">
      <form onSubmit={onSubmit} className={AuthForm}>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM</p>
        </div>
        <p className="text-center mt-4">
          동아리 가입원서를 내고 싶으신 분은 
          <Link to="/register" className="text-blue-600"> 여기를 누르세요!</Link>
        </p>
        <div className="flex items-center gap-14 mt-7 justify-center">
          <label htmlFor="affiliation" className="text-lg">소속</label>
          <select onChange={onChangeSelect} className={Input} name="affiliation" id="affiliation" value={affiliation} required>
            <option value="" defaultChecked disabled>--소속을 골라주세요--</option>
            <option value="Pan's PM" >Pan's PM</option>
            <option value="타 동아리" >타 동아리</option>
            <option value="어느 동아리도 아님" >어느 동아리도 아님</option>
          </select>
        </div>
        <div className={FormItem}>
          <label htmlFor="ordinal" className="text-lg">기수</label>
          <input onChange={onChange} className={Input} type="text" value={ordinal} name="ordinal" id="ordinal" placeholder="Pan's PM 멤버만 입력하세요." />
        </div>
        <div className={FormItem}>
          <label htmlFor="name" className="text-lg">성명</label>
          <input onChange={onChange} className={Input} type="text" value={name} name="name" id="name" required />
        </div>
        <div className="flex items-center gap-10 justify-center mt-4">
          <label htmlFor="id" className="text-lg">아이디</label>
          <input onChange={onChange} className={Input} type="text" value={id} name="id" id="id" required />
        </div>
        <div className="flex items-center gap-6 justify-center mt-4">
          <label htmlFor="password" className="text-lg">비밀번호</label>
          <input onChange={onChange} className={Input} type="password" value={password} name="password" id="password" required />
        </div>
        <div className="flex items-center gap-10 justify-center mt-4">
          <label htmlFor="email" className="text-lg">이메일</label>
          <input onChange={onChange} className={Input} type="email" value={email} name="email" id="email" required />
        </div>
        {error !== "" ? <span className={Error}>{error}</span> : null}
        <div className={FormItem}>
          <button className={SubmitBtn} type="submit">{isLoading ? "진행중입니다..." : "회원가입"}</button>
        </div>
      </form>
    </div>  
  );
}

export default SignupPage;