import { auth, db, storage } from "@/firebase";
import { IPost } from "./timeline";
import { useState } from "react";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

// 게시글을 추가했을 때 리스트로 나타날 모양, 게시글 삭제 및 수정기능
const Post = ({userName, photo, post, userId, id}: IPost) => {
  const user = auth.currentUser;

  const [edit, setEdit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState("");

  // 게시글 삭제버튼을 눌렀을 때 실행되는 함수
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

  // 수정 시 나타나는 TextArea 요소의 입력된 값
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  // 수정버튼을 눌렀을 때 실행되는 함수
  const onEdit = () => {
    if (user?.uid !== userId) {
      return;
    };

    setEdit(true);
  };

  // 게시글을 수정입력하여 최종적으로 수정할 때 실행되는 함수
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
      });

      // 수정할 때 기존 문서에 사진파일이 있다면 url을 참조하여 새 내용으로 덮어쓴 문서에 병합
      if (photo) {
        const photoRef = doc(db, "panstalk", photo);
        await setDoc(photoRef, { capital: true }, { merge: true });
      };
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

  // 컴포넌트 내 요소들의 디자인
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