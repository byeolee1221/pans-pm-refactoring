import { auth, db, storage } from "@/firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const PanstalkForm = () => {
  const user = auth.currentUser;

  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      if (files[0].size < 1024 * 1024) {
        setFile(files[0]);
      } else {
        alert("파일은 1MB를 넘을 수 없습니다.");
      };
    };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user || isLoading || post === "" || post.length > 200) {
      return;
    };

    try {
      setLoading(true);
      const doc = await addDoc(collection(db, "panstalk"), {
        post,
        createdAt: Date.now(),
        userName: user.displayName || "Anonymous",
        userId: user.uid
      });

      if (file) {
        const locationRef = ref(storage, `panstalk/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url
        });
      };
      setFile(null);
      setPost("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    };
  };

  let Label = "p-3 rounded-md text-md text-center w-80 m-auto bg-[#cbf3f0] hover:bg-[#2ec4b6] duration-150 cursor-pointer border-2 border-solid border-zinc-500";
  let btnStyle = "p-3 rounded-md text-md text-center w-80 bg-[#ffbf69] hover:bg-[#ff9f1c] duration-150 m-auto border-2 border-solid border-zinc-500";

  return (
    <div className="mt-32 w-full flex flex-col items-center m-auto">
      {user ? <form onSubmit={onSubmit} className="w-[35rem] h-auto flex flex-col mt-7 pb-10 gap-4">
        <textarea onChange={onChange} className="resize-none p-4 border-2 border-solid rounded-lg" value={post} rows={5} maxLength={200} placeholder="오늘은 어떤 하루였나요?" required />
        <label className={Label} htmlFor="file">{file ? "사진 추가됨 ✔" : "사진 추가하기"}</label>
        <input onChange={onFileChange} className="hidden" type="file" id="file" accept="image/*" />
        <button className={btnStyle} type="submit">{isLoading ? "게시하는 중..." : "게시하기"}</button>
      </form> : null}
    </div>  
  );
}

export default PanstalkForm;