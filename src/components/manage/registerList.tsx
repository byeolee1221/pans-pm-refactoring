import { IRegister } from "./manage";

const RegisterList = ({name, age, department, gender, tel, army, genre, part, musician}: IRegister) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-y-1 px-2 py-5 border-2 border-solid border-neutral-300 rounded-md w-[32rem]">
      <p className="font-bold">성명: {name}</p>
      <p>나이: {age}세</p>
      <p>학과: {department}</p>
      <p>성별: {gender}</p>
      <p>연락처: {tel}</p>
      <p>원하는 파트: {part}</p>
      <p>군입대 희망시기: {army ? army : "해당없음"}</p>
      <p>좋아하는 장르: {genre}</p>
      <p>좋아하는 뮤지션: {musician}</p>
    </div>  
  );
}

export default RegisterList;