import { useState } from "react";
import { SubmitBtn } from "../styleShare";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import RegisterSuccess from "@/routes/registerSuccess";

const Register = () => {

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [tel, setTel] = useState("");
  const [part, setPart] = useState("");
  const [army, setArmy] = useState("");
  const [genre, setGenre] = useState("");
  const [musician, setMusician] = useState("");
  const [isComplete, setComplete] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "department") {
      setDepartment(value);
    } else if (name === "tel") {
      setTel(value);
    } else if (name === "part") {
      setPart(value);
    } else if (name === "army") {
      setArmy(value);
    } else if (name === "genre") {
      setGenre(value);
    } else if (name === "musician") {
      setMusician(value);
    };
  };

  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "gender") {
      setGender(value);
    } else {
      setGender(value);
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || name === "" || age === "" || tel === "" || part === "") {
      return;
    };

    try {
      setLoading(true);
      await addDoc(collection(db, "register"), {
        name,
        age,
        department,
        gender,
        tel,
        part,
        army,
        genre,
        musician,
        createdAt: Date.now(),
      });
      setName("");
      setAge("");
      setDepartment("");
      setGender("");
      setTel("");
      setPart("");
      setArmy("");
      setGenre("");
      setMusician("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setComplete(true);
    };
  };
  
  let titleClass = "before:h-[30rem] before:w-full before:content-[''] before:bg-slate-800 before:absolute before:top-0 before:left-0 before:opacity-50 w-full h-[30rem] bg-[url('/activity6.jpg')] bg-cover bg-center flex flex-col items-center justify-center";
  let inputClass = "w-96 border border-solid rounded-md p-2 mt-4";

  return (
    <>
      {!isComplete ? <div className="w-full">
        <div className={titleClass}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white z-10 font-bold mt-24 mb-4">동아리 가입신청</h1>
          <p className="text-white text-center text-sm md:text-md lg:text-lg z-10">제출하시면 현 회장 또는 부회장이 며칠 내 연락드리겠습니다.</p>
        </div>
        <div className="w-full">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl space-y-5 font-bold mt-20 mb-10">동아리 가입원서</h2>
          <form onSubmit={onSubmit} className="w-full md:w-[32rem] h-auto m-auto flex flex-col gap-3 items-center border-2 border-solid rounded-lg mb-16 pb-8">
            <div className="flex items-center gap-3 mt-4">
              <img src="./logo.jpg" alt="동아리 로고" className="w-16 rounded-full" />
              <p className="text-4xl font-bold">PAN'S PM</p>
            </div>
            <input onChange={onChange} className={inputClass} type="text" value={name} name="name" placeholder="성명" required />
            <input onChange={onChange} className={inputClass} type="number" value={age} name="age" placeholder="나이" required />
            <input onChange={onChange} className={inputClass} type="text" value={department} name="department" placeholder="학과" required />
            <div className={inputClass}>
              <div className="flex items-center justify-around w-full">
                <div className="flex items-center gap-2">
                  <input onChange={onChangeGender} type="radio" id="남자" name="gender" value="남자" />
                  <label htmlFor="남자">남자</label>
                </div>
                <div className="flex items-center gap-2">
                  <input onChange={onChangeGender} type="radio" id="여자" name="gender" value="여자" />
                  <label htmlFor="여자">여자</label>
                </div>
              </div>
            </div>
            <input onChange={onChange} className={inputClass} type="tel" name="tel" placeholder="연락처" required />
            <input onChange={onChange} className={inputClass} type="text" name="part" placeholder="원하는 파트(ex. 드럼, 보컬, 기타, 베이스, 키보드)" required />
            <input onChange={onChange} className={inputClass} type="text" name="army" placeholder="군입대 희망시기" />
            <p className="text-center w-96">밴드동아리 특성상 신입-현역(2년)단계로 이뤄지기에 군입대 시기에 관한 정보가 필요합니다.</p>
            <input onChange={onChange} className={inputClass} type="genre" name="genre" placeholder="좋아하는 음악장르" />
            <input onChange={onChange} className={inputClass} type="musician" name="musician" placeholder="좋아하는 뮤지션" />
            <button type="submit" className={SubmitBtn}>{isLoading ? "제출중입니다..." : "제출하기"}</button>
          </form>
        </div>
      </div> : <RegisterSuccess />}  
    </>
  );
}

export default Register;