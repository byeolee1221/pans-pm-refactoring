import { db } from "@/firebase";
import { Unsubscribe } from "firebase/auth";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./post";

export interface IPost {
  id: string;
  post: string;
  userId: string;
  userName: string;
  createdAt: number;
  photo?: string;
};

const Timeline = () => {
  const [posts, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchPosts = async () => {
      const postsQuery = query(
        collection(db, "panstalk"),
        orderBy("createdAt", "desc"),
        limit(25)
      );

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
    fetchPosts();

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