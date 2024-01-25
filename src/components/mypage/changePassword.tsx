import { auth } from "@/firebase";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { TabsContent } from "../ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { Error } from "../styleShare";


const ChangePassword = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    if (name === "currentPassword") {
      setCurrentPassword(value);
    } else {
      setNewPassword(value);
    };
  };

  const onSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || currentPassword === "" || newPassword === "") {
      return;
    };

    if (newPassword.length < 6 || currentPassword === newPassword) {
      setError("새 비밀번호를 다시 확인해주세요.");
      return;
    };
    
    try {
      setLoading(true);
      await updatePassword(user, newPassword);
      alert("비밀번호가 변경되었습니다. 다시 로그인해주세요.");
      setCurrentPassword("");
      setNewPassword("");

      await auth.signOut();
      navigate("/signin");
    } catch (error) {
      setError("비밀번호 변경이 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <TabsContent value="비밀번호 변경">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호 변경</CardTitle>
            <CardDescription>비밀번호는 6자 이상으로, 이전 비밀번호와 다르게 해주세요.</CardDescription>
          </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={onSubmitPassword} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="currentPassword">현재 비밀번호</Label>
              <Input onChange={onChange} type="password" id="currentPassword" name="currentPassword" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="newPassword">새 비밀번호</Label>
              <Input onChange={onChange} type="password" id="newPassword" name="newPassword" />
            </div>
            {error !== "" ? <p className={Error}>{error}</p> : null}
            <Button type="submit" variant="outline">{isLoading ? "변경중..." : "변경하기"}</Button>
          </form>
          </CardContent>
        </Card>
      </TabsContent>  
  );
}

export default ChangePassword;