import { auth, db, storage } from "@/firebase";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TabsContent } from "../ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EmailAuthProvider, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { Error } from "../styleShare";
import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

// 계정 삭제 컴포넌트
const DeleteAccount = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 이메일, 비밀번호 입력 값
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    };
  };

  // 삭제버튼을 눌렀을 때 실행되는 함수
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || email === "" || password === "") {
      return;
    };

    // 삭제 예정인 계정으로 올린 게시글 조회 (게시글이 여러 개일 수 있으므로 getDocs 사용)
    const userDocSnapshot = await getDocs(query(collection(db, "panstalk"), where("userName", "==", user.displayName)));
    const userDoc = userDocSnapshot.docs;

    // DB의 users 컬렉션에서 계정 조회
    const userSnapshot = await getDocs(query(collection(db, "users"), where("nickName", "==", user.displayName)));
    const userDataDoc = userSnapshot.docs[0];

    try {
      setLoading(true);
      // 이메일과 비밀번호로 인증 정보 생성
      const credential = EmailAuthProvider.credential(email, password);
      // 생성된 인증 정보로 사용자 재인증
      await reauthenticateWithCredential(user, credential);
      // 유저가 올린 게시물 삭제
      for (let doc of userDoc) {
        // 사진 삭제
        const data = doc.data();
        if (data.photo) {
          const photoRef = ref(storage, `panstalk/${user.uid}/${doc.id}`);
          await deleteObject(photoRef);
        };
        await deleteDoc(doc.ref);
      };
      // DB의 users 컬렉션에서 해당 유저 삭제
      await deleteDoc(userDataDoc.ref);
      // 계정 삭제
      await deleteUser(user);
      alert("계정이 삭제되었습니다. 이용해주셔서 감사합니다.");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError("입력하신 정보가 올바르지 않습니다.");
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <TabsContent value="계정 삭제">
        <Card>
          <CardHeader>
            <CardTitle>계정 삭제</CardTitle>
            <CardDescription>신중히 생각하시고 아래 정보입력 후 삭제버튼을 눌러주세요.</CardDescription>
          </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="email">이메일</Label>
              <Input onChange={onChange} type="email" id="email" name="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="Password">비밀번호</Label>
              <Input onChange={onChange} type="password" id="Password" name="Password" />
            </div>
            {error !== "" ? <p className={Error}>{error}</p> : null}
            <Button type="submit" variant="destructive">{isLoading ? "삭제중..." : "삭제하기"}</Button>
          </form>
          </CardContent>
        </Card>
      </TabsContent> 
  );
}

export default DeleteAccount;