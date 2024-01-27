import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import UsersList from "./usersList";

// 회원가입 시 DB에 저장된 회원정보 타입
export interface IUsers {
  name: string;
  nickName: string;
  affiliation: string;
  createdAt: number;
  userId: string;
  id: string;
};

// 관리자페이지 내 회원정보를 DB에서 가져오는 컴포넌트
const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  // 언마운트 됐을 때 실행되지 않도록 useEffect 내에 기능구현
  useEffect(() => {
    // onSnapshot 함수가 반환하는 Unsubscribe의 타입과 기본값 지정
    let unsubscribe: Unsubscribe | null = null;

    // 회원정보를 불러오는 컬렉션과 생성일을 기준으로 내림차순 정렬 설정, 최대로 보이는 게시글 갯수 지정
    const fetchUsers = async () => {
      const usersQuery = query(
        collection(db, "users"),
        orderBy("createdAt", "desc"),
        limit(20)
      );

      // 어떤 데이터를 불러올지 지정하는 onSnapshot 리스너 함수
      unsubscribe = await onSnapshot(usersQuery, (snapshot) => {
        const usersDoc = snapshot.docs.map((doc) => {
          const { name, nickName, affiliation, createdAt, userId } = doc.data();
          return {
            name,
            nickName,
            affiliation,
            createdAt,
            userId,
            id: doc.id
          };
        })
        setUsers(usersDoc);
      })
    }
    // 지정된 데이터를 DB에서 불러오기 위해 fetchUsers 함수 실행
    fetchUsers();

    // 다 불러온 이후 unsubscribe 및 리스너 함수와 연결된 unsubscribe 함수 종료
    return () => {
      unsubscribe && unsubscribe();
    };
  }, [])

  return (
    <div className="flex flex-col gap-y-2 overflow-y-auto">
      {users.map((doc) => <UsersList key={doc.id} {...doc} />)}
    </div>
  );
}

export default Users;