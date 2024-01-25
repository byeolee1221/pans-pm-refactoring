import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import UsersList from "./usersList";

export interface IUsers {
  name: string;
  nickName: string;
  affiliation: string;
  createdAt: number;
  userId: string;
  id: string;
};

const Users = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchUsers = async () => {
      const usersQuery = query(
        collection(db, "users"),
        orderBy("createdAt", "desc"),
        limit(20)
      );

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
    fetchUsers();

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