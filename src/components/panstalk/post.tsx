import { auth, db, storage } from "@/firebase";
import { IPost } from "./timeline";
import { useState } from "react";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Post = ({userName, photo, post, userId, id}: IPost) => {
  const user = auth.currentUser;

  const [edit, setEdit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState("");

  const onDelete = async () => {
    const ok = confirm("정말 게시글을 삭제하시겠어요?");

    if (!ok || user?.uid !== userId) {
      return;
    };

    try {
      await deleteDoc(doc(db, "panstalk", id));

      if (photo) {
        const photoRef = ref(storage, `panstalk/${user.uid}/${id}`);
        await deleteObject(photoRef);
      };
    } catch (error) {
      console.error(error);
    };
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const onEdit = () => {
    if (user?.uid !== userId) {
      return;
    };

    setEdit(true);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || newPost === "" || newPost.length > 200) {
      return;
    };

    try {
      setLoading(true);
      await setDoc(doc(db, "panstalk", id), {
        post: newPost,
        createdAt: Date.now(),
        userName: user.displayName || "Anonymous",
        userId: user.uid,
        photo
      });
    } catch (error) {
      console.error(error);
    } finally {
      setEdit(false);
      setLoading(false);
    };
  };

  const onCancel = () => {
    setEdit(false);
  };

  let DeleteBtn = "px-7 py-2 rounded-md text-md bg-[#cbf3f0] hover:bg-[#2ec4b6] border-2 border-solid border-zinc-500";
  let EditBtn = "px-7 py-2 rounded-md text-md bg-[#ffbf69] hover:bg-[#ff9f1c] border-2 border-solid border-zinc-500";
  let PostEditTextArea = "resize-none border border-solid border-neutral-400 rounded-lg px-2 w-full md:w-[28rem] mt-2";
  let PostEditBtn = "px-7 py-2 rounded-md text-md bg-[#ffd5c2] hover:bg-[#f28f3b] duration-150 mt-2";

  return (
    <div className="flex flex-col p-5 border-2 border-solid border-zinc-500 rounded-lg w-full md:w-[32rem] m-auto">
      <h2 className="font-bold text-lg">{userName}</h2>
      <div className="text-lg flex flex-col gap-3 mb-4"> 
        {edit ? <form onSubmit={onSubmit} className="w-80">
          <textarea onChange={onChange} defaultValue={post} rows={3} maxLength={200} className={PostEditTextArea} />
          <div className="flex items-center gap-3">
            <button type="submit" className={PostEditBtn}>{isLoading ? "게시하는 중..." : "게시하기"}</button>
            <button onClick={onCancel} className={PostEditBtn}>취소</button>
          </div>
        </form> : post}
        {photo ? <img src={photo} className="w-[30rem] rounded-lg" /> : null}
      </div>
      <div className="flex items-center gap-3">
        {user?.uid === userId && !edit ? <button onClick={onDelete} className={DeleteBtn}>삭제</button> : null}
        {user?.uid === userId && !edit ? <button onClick={onEdit} className={EditBtn}>수정</button> : null}
      </div>
    </div>  
  );
}

export default Post;