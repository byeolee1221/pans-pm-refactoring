import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./post";

// 게시글의 DB 저장시 타입
export interface IPost {
  id: string;
  post: string;
  userId: string;
  userName: string;
  createdAt: number;
  photo?: string;
};

// 저장된 게시글을 화면에 띄우는 컴포넌트
const Timeline = () => {
  const [posts, setPost] = useState<IPost[]>([]);

  // 언마운트 됐을 때 계속 실행되지 않도록 useEffect 내에 기능구현
  useEffect(() => {
    // onSnapshot 함수가 반환하는 Unsubscribe의 타입과 기본값 지정
    let unsubscribe: Unsubscribe | null = null;

    // 게시글을 불러오는 컬렉션과 생성일을 기준으로 내림차순 정렬 설정, 최대로 보이는 게시글 갯수 지정
    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "panstalk"),
        orderBy("createdAt", "desc"),
        limit(25)
      );

      // 어떤 데이터를 불러올지 지정하는 onSnapshot 리스너 함수
      unsubscribe = await onSnapshot(postsQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { post, userId, userName, createdAt, photo } = doc.data();
          return {
            post,
            userId,
            userName,
            createdAt,
            photo,
            id: doc.id
          };
        });
        setPost(posts);
      })
    }
    // 지정된 데이터를 DB에서 불러오기 위해 fetchPosts 함수 실행
    fetchPosts();

    // 다 불러온 이후 unsubscribe 및 리스너 함수와 연결된 unsubscribe 함수 종료
    return () => {
      unsubscribe && unsubscribe();
    };
  }, [])

  return (
    <div className="flex gap-3 flex-col overflow-y-auto mb-7">
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </div>  
  );
}

export default Timeline;