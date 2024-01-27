import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import RegisterList from "./registerList";
import Users from "./users";

// 동아리 가입신청 자료의 타입
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

// 관리자 권한 확인 후 뜨는 컴포넌트
const Manage = () => {
  const [register, setRegister] = useState<IRegister[]>([]);

  // 언마운트 됐을 때 실행되지 않도록 useEffect 내에 기능구현
  useEffect(() => {
    // onSnapshot 함수가 반환하는 Unsubscribe의 타입과 기본값 지정
    let unsubscribe: Unsubscribe | null = null;

    // 가입신청 자료를 불러오는 컬렉션과 생성일을 기준으로 내림차순 정렬 설정, 최대로 보이는 게시글 갯수 지정
    const fetchRegister = async () => {
      const registerQuery = query(
        collection(db, "register"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      // 어떤 데이터를 불러올지 지정하는 onSnapshot 리스너 함수
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
    // 지정된 데이터를 DB에서 불러오기 위해 fetchRegister 함수 실행
    fetchRegister();

    // 다 불러온 이후 unsubscribe 및 리스너 함수와 연결된 unsubscribe 함수 종료
    return () => {
      unsubscribe && unsubscribe();
    };
  }, [])

  return (
    <div className="w-full">
        <div className="flex items-center ml-2 md:ml-12 mt-10 gap-x-4">
          <img src="./logo.jpg" alt="메인페이지 로고" className="w-16 rounded-full" />
          <p className="text-4xl font-bold">PAN'S PM 관리자 페이지 대시보드</p>
        </div>
      <div className="flex flex-col md:flex-row gap-x-20">
        <div className="w-full md:w-[32rem] mt-4 mb-10 md:ml-12 flex flex-col gap-y-2 overflow-y-auto">
          <h2 className="font-bold text-xl mb-4">💡 동아리 가입신청 현황</h2>
          {register.map((doc) => <RegisterList key={doc.id} {...doc} />)}
        </div>
        <div className="mt-4 mb-10 xl:ml-12 overflow-y-auto">
          <h2 className="font-bold text-xl mb-6">💡 웹사이트 회원 현황</h2>
          <Users />
        </div>
      </div>
    </div>  
  );
}

export default Manage;