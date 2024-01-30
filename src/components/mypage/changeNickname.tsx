import { auth, db } from "@/firebase";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TabsContent } from "../ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { Error } from "../styleShare";

// 닉네임 변경 컴포넌트
const ChangeNickName = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [newNickName, setNewNickName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 변경할 닉네임 입력 값
  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickName(e.target.value);
  };

  // 닉네임 변경버튼 누르면 실행되는 함수
  const onSubmitNickName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!user || newNickName === "") {
      return;
    };

    // 닉네임 중복확인을 위해 DB 내의 저장된 자료 검사
    const userSnapshot = await getDocs(query(collection(db, "users"), where("nickName", "==", newNickName)));
    
    // 중복확인 시 중복되면 함수 종료
    if (!userSnapshot.empty) {
      alert("이미 존재하는 닉네임입니다.");
      return;
    };
    // 새로 바뀐 닉네임이 있는 문서를 찾아서 새 닉네임 반영
    const currentSnapshot = await getDocs(query(collection(db, "users"), where("nickName", "==", user.displayName)));
    const userDoc = currentSnapshot.docs[0];
    console.log(userDoc);

    if (userDoc) {
      await updateDoc(userDoc.ref, {
        nickName: newNickName
      });
    } else {
      setError("오류가 발생하여 변경되지 않았습니다. 다시 시도해주세요.");
      return;
    };
    
    try {
      setLoading(true);
      await updateProfile(user, {
        displayName: newNickName
      });
    } catch (error) {
      setError("오류가 발생하여 변경되지 않았습니다. 계속되면 문의주세요!");
      console.log(error);
    } finally {
      alert("닉네임이 변경되었습니다.");
      setLoading(false);
      setNewNickName("");
      navigate("/");
    };
  };

  return (
    <TabsContent value="닉네임 변경">
        <Card>
          <CardHeader>
            <CardTitle>닉네임 변경</CardTitle>
            <CardDescription>
              닉네임이 마음에 안들면 변경해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={onSubmitNickName} className="space-y-3">
              <Label htmlFor="idChange">새 닉네임 (현재 닉네임: {user?.displayName})</Label>
              <Input onChange={onChangeNickName} value={newNickName} id="idChange" type="text" name="id" />
              {error !== "" ? <p className={Error}>{error}</p> : null}
              <Button type="submit" variant="outline">{isLoading ? "변경중..." : "변경하기"}</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
  );
}

export default ChangeNickName;