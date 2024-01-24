import { auth, db } from "@/firebase";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TabsContent } from "../ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const ChangeNickName = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [nickName, setNickName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const onSubmitNickName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userNameRef = doc(db, "users", nickName);
    const docRef = await getDoc(userNameRef);

    if (!user || nickName === "") {
      return;
    };

    if (docRef.id) {
      alert("이미 존재하는 닉네임입니다.");
      return;
    };

    try {
      setLoading(true);
      await updateProfile(user, {
        displayName: nickName
      });
    } catch (error) {
      console.log(error);
    } finally {
      alert("닉네임이 변경되었습니다.");
      setLoading(false);
      setNickName("");
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
              <Input onChange={onChangeNickName} value={nickName} id="idChange" type="text" name="id" />
              <Button type="submit" variant="outline">{isLoading ? "변경중..." : "변경하기"}</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
  );
}

export default ChangeNickName;