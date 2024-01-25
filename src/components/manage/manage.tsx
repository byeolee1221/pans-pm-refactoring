import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import RegisterList from "./registerList";
import Users from "./users";

export interface IRegister {
  name: string;
  age: number;
  department: string;
  gender: string;
  tel: number;
  army: string;
  genre: string;
  part: string;
  musician: string;
  createdAt: number;
  id: string;
};

const Manage = () => {
  const [register, setRegister] = useState<IRegister[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchRegister = async () => {
      const registerQuery = query(
        collection(db, "register"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      unsubscribe = await onSnapshot(registerQuery, (snapshot) => {
        const registerDoc = snapshot.docs.map((doc) => {
          const { name, age, department, gender, tel, army, genre, part, musician, createdAt } = doc.data();
          return {
            name,
            age,
            department,
            gender,
            tel,
            army,
            genre,
            part,
            musician,
            createdAt,
            id: doc.id
          };
        })
        setRegister(registerDoc);
      })
    }
    fetchRegister();

    return () => {
      unsubscribe && unsubscribe();
    };
  }, [])

  return (
    <div className="w-full">
        <div className="flex items-center ml-12 mt-10 gap-x-4">
          <img src="./logo.jpg" alt="메인페이지 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM 관리자 페이지 대시보드</p>
        </div>
      <div className="flex gap-x-20">
        <div className="w-[32rem] mt-4 mb-10 ml-12 flex flex-col gap-y-2 overflow-y-auto">
          <h2 className="font-bold text-xl mb-4">💡 동아리 가입신청 현황</h2>
          {register.map((doc) => <RegisterList key={doc.id} {...doc} />)}
        </div>
        <div className=" mt-4 mb-10 ml-12 overflow-y-auto">
          <h2 className="font-bold text-xl mb-6">💡 웹사이트 회원 현황</h2>
          <Users />
        </div>
      </div>
    </div>  
  );
}

export default Manage;